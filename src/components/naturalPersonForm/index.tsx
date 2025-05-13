"use client";

import * as Styled from "./styles";
import { Form, GroupsProps } from "../form";
import { useFormContext } from "react-hook-form";
import { MenuTab } from "@application/enums";

type NaturalPersonFormProps = {
  id: MenuTab;
};

export function NaturalPersonForm({ id }: NaturalPersonFormProps) {
  const form = useFormContext();

  const handleSubmit = () => {
    console.log(form.getValues());
  };
  const groups: GroupsProps[] = [
    {
      id: "1",
      inputs: [
        {
          id: "studyLevel",
          label: "Nível de Ensino",
          type: "string",
        },
        {
          id: "gender",
          label: "Sexo",
          type: "string",
        },
      ],
    },
    {
      id: "2",
      inputs: [
        {
          id: "birthdayDate",
          label: "Data de nascimento",
          type: "date",
        },
        {
          id: "country",
          label: "Nascionalidade",
          type: "string",
        },
      ],
    },
    {
      id: "3",
      inputs: [
        {
          id: "job",
          label: "Profissão",
          type: "string",
        },
        {
          id: "maritalStatus",
          label: "Estado civil",
          type: "string",
        },
      ],
    },
    {
      id: "4",
      inputs: [
        {
          id: "fatherName",
          label: "Pai",
          type: "string",
        },
        {
          id: "motherName",
          label: "Mãe",
          type: "string",
        },
      ],
    },
    {
      id: "5",
      inputs: [
        {
          id: "incomeAmount",
          label: "Valor da renda",
          type: "string",
        },
        {
          id: "observation",
          label: "Observação",
          type: "string",
        },
      ],
    },
  ];

  return (
    <Styled.FormContainer>
      <Form
        id={id}
        title='Dados específicos de pessoa física'
        groups={groups}
        onSubmit={handleSubmit}
      />
      <img
        src='/images/personal-goals.svg'
        alt='personal-goals'
        className='background-image'
        width={750}
        height={400}
      />
    </Styled.FormContainer>
  );
}
