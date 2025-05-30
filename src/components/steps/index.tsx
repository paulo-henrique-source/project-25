"use client";

import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { FaHouse } from "react-icons/fa6";
import { Steps, StepsProps } from "antd";
import { MenuTab, PersonType } from "@application/enums";
import { useMenuStore } from "@application/store/menu";
import { useStore } from "zustand";
import { useSearchParams } from "next/navigation";
import { StepContainer } from "./styles";

const StepsComponent: React.FC = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const menuValue = useStore(useMenuStore, (state) => state.menuValue);
  const setMenuValue = useStore(useMenuStore, (state) => state.setMenuValue);

  const stepItems = [
    {
      title: "Dados comuns de pessoas",
      icon: <IoPersonSharp />,
      menuValue: MenuTab.BASIC_PERSON,
    },
    {
      title: "Dados específicos de pessoa física",
      icon: <BsPersonLinesFill />,
      menuValue: MenuTab.NATURAL_PERSON,
      hidden: type === PersonType.PJ,
    },
    { title: "Endereço", icon: <FaHouse />, menuValue: MenuTab.ADDRESS },
    { title: "Contato", icon: <FaPhoneAlt />, menuValue: MenuTab.CONTACT },
    {
      title: "Informações bancárias",
      icon: <AiFillBank />,
      menuValue: MenuTab.BANK_INFO,
    },
  ];

  const current = stepItems.findIndex((item) => item.menuValue === menuValue);

  const onChange = (value: number) => {
    setMenuValue(stepItems[value].menuValue);
  };

  const items: StepsProps["items"] = stepItems.map((step, index) => ({
    title: step.title,
    icon: step.icon,
    status: index < current ? "finish" : index === current ? "process" : "wait",
    disabled: step.hidden,
  }));

  return (
    <StepContainer>
      <Steps current={current} onChange={onChange} items={items} />
    </StepContainer>
  );
};

export default StepsComponent;
