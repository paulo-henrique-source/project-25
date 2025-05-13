"use client";

import * as Styled from "./styles";

import { Form, GroupsProps } from "../form";
import { useFormContext } from "react-hook-form";
import { MenuTab } from "@application/enums";
import Image from "next/image";

type BankFormProps = {
  id: MenuTab;
};

export function BankForm({ id }: BankFormProps) {
  const form = useFormContext();

  const handleSubmit = () => {
    console.log(form.getValues());
  };
  const groups: GroupsProps[] = [
    {
      id: "1",
      inputs: [
        {
          id: "bank",
          label: "Banco",
          type: "string",
        },
        {
          id: "agency",
          label: "Agência",
          type: "string",
        },
      ],
    },
    {
      id: "2",
      inputs: [
        {
          id: "bankTaxIdentifier",
          label: "CPF/CNPJ",
          type: "string",
          defaultValue: form.watch("taxIdentifier"),
        },
        {
          id: "accountNumber",
          label: "Número da conta corrente",
          type: "string",
        },
      ],
    },
    {
      id: "3",
      inputs: [
        {
          id: "type",
          label: "Tipo da conta",
          type: "string",
        },
        {
          id: "Favored",
          label: "Favorecido",
          type: "string",
        },
      ],
    },
  ];

  return (
    <Styled.FormContainer>
      <Form
        id={id}
        title='Informações bancárias'
        groups={groups}
        onSubmit={handleSubmit}
      />
      <Image
        src='/images/bank.svg'
        alt='bank'
        className='background-image'
        width={750}
        height={400}
      />
    </Styled.FormContainer>
  );
}
