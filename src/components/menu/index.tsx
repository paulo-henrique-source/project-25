"use client";

import React, { ReactNode } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaPhoneAlt, FaTools } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { FaHouse } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import * as Styled from "./styles";
import { MenuTab } from "@application/enums";
import Tooltip from "@mui/material/Tooltip";

type MenuItem = {
  tab: MenuTab;
  icon: ReactNode;
  label: string;
};

type MenuProps = {
  isOpen: boolean;
  value: MenuTab;
  onChange: (value: MenuTab) => void;
  setIsOpen: (value: boolean) => void;
};

const menuItems: MenuItem[] = [
  {
    tab: MenuTab.BASIC_PERSON,
    icon: <IoPersonSharp />,
    label: "Dados comuns de pessoas",
  },
  {
    tab: MenuTab.NATURAL_PERSON,
    icon: <BsPersonLinesFill />,
    label: "Dados específicos de pessoa física",
  },
  {
    tab: MenuTab.ADDRESS,
    icon: <FaHouse />,
    label: "Endereço",
  },
  {
    tab: MenuTab.CONTACT,
    icon: <FaPhoneAlt />,
    label: "Contato",
  },
  {
    tab: MenuTab.BANK_INFO,
    icon: <AiFillBank />,
    label: "Informações bancárias",
  },
  // {
  //   tab: MenuTab.EMAIL,
  //   icon: <MdEmail />,
  //   label: "Email",
  // },
  // {
  //   tab: MenuTab.WORK_INFO,
  //   icon: <FaBuilding />,
  //   label: "Dados Laborais",
  // },
  // {
  //   tab: MenuTab.MOVABLE_ASSETS,
  //   icon: <FaCarRear />,
  //   label: "Bens Móveis",
  // },
  // {
  //   tab: MenuTab.IMMOVABLE_ASSETS,
  //   icon: <FaWarehouse />,
  //   label: "Bens Imóveis",
  // },
  // {
  //   tab: MenuTab.REFERENCES,
  //   icon: <VscReferences />,
  //   label: "Referências",
  // },
  // {
  //   tab: MenuTab.FATCA,
  //   icon: <FaTools />,
  //   label: "FATCA",
  // },
];

export function MenuComponent({
  isOpen,
  value,
  onChange,
  setIsOpen,
}: MenuProps) {
  return (
    <Styled.MenuContainer>
      <div className={`hamburguer-container ${isOpen ? "open" : "close"}`}>
        {isOpen ? (
          <div className='close-icon' onClick={() => setIsOpen(false)}>
            <MdClose size={30} />
          </div>
        ) : (
          <div className='hamburguer-container' onClick={() => setIsOpen(true)}>
            <GiHamburgerMenu size={30} />
          </div>
        )}
      </div>
      <div className={`menu-items-container ${isOpen ? "open" : "close"}`}>
        {isOpen && (
          <>
            <div className='title'>Venda</div>
            <div className='description'>Cadastre sua venda aqui</div>
          </>
        )}

        <div className={`items ${isOpen ? "items-open" : "items-close"}`}>
          {menuItems.map((item) => (
            <span
              key={item.tab}
              className='item'
              onClick={() => onChange(item.tab)}>
              <div
                className={`item-content-${isOpen ? "open" : ""} ${
                  value === item.tab
                    ? `selected-${isOpen ? "open" : "close"}`
                    : ""
                }`}>
                <div className={`icon-${isOpen ? "open" : ""}`}>
                  {isOpen ? (
                    item.icon
                  ) : (
                    <Tooltip
                      title={item.label}
                      placement='right'
                      children={<div>{item.icon}</div>}
                    />
                  )}
                </div>
                {isOpen && <div className='text'>{item.label}</div>}
              </div>
            </span>
          ))}
        </div>
      </div>
    </Styled.MenuContainer>
  );
}
