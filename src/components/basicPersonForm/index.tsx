"use client";

import { InputAdornment } from "@mui/material";
import * as Styled from "./styles";

import { Form, GroupsProps } from "../form";
import { useFormContext } from "react-hook-form";
import { MenuTab } from "@application/enums";
import Image from "next/image";

type BasicPersonFormProps = {
  id: MenuTab;
};

export function BasicPersonForm({ id }: BasicPersonFormProps) {
  const form = useFormContext();

  const handleSubmit = () => {
    console.log(form.getValues());
  };

  const groups: GroupsProps[] = [
    {
      id: "1",
      inputs: [
        {
          id: "personName",
          label: "Nome da pessoa",
          type: "string",
          options: [
            { value: "Test 1", label: "Teste" },
            { value: "Test 2", label: "Test 2" },
          ],
        },
        {
          id: "taxIdentifier",
          label: "CPF/CNPJ",
          type: "string",
        },
      ],
    },
    {
      id: "2",
      inputs: [
        {
          id: "rgIe",
          label: "RG/IE",
          type: "string",
        },
        {
          id: "documentType",
          label: "Tipo de documento",
          type: "string",
        },
      ],
    },
    {
      id: "3",
      inputs: [
        {
          id: "issuingBody",
          label: "Orgão emissor",
          type: "string",
        },
        {
          id: "dateExpedition",
          label: "Data de expedição",
          type: "date",
        },
      ],
    },
    {
      id: "4",
      inputs: [
        {
          id: "exposedPolicy",
          label: "Politicamente exposto",
          type: "checkbox",
        },
        {
          id: "totalValue",
          label: "Patrimônio total",
          inputProps: {
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          },
          type: "string",
        },
      ],
    },
  ];

  return (
    <Styled.FormContainer>
      <Form
        id={id}
        title='Dados comuns de pessoas'
        groups={groups}
        onSubmit={handleSubmit}
      />

      <Image
        src='/images/personal-test.svg'
        alt='personal-info'
        className='background-image'
        width={750}
        height={400}
      />
    </Styled.FormContainer>
  );
}
