"use client";

import { useEffect } from "react";
import { InputAdornment } from "@mui/material";
import * as Styled from "./styles";

import { Form, GroupsProps } from "../form";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import { MenuTab } from "@application/enums";
import { useLoadingStore } from "@application/store/loading";
import Image from "next/image";
import { useStore } from "zustand";

type AddressFormProps = {
  id: MenuTab;
};

export function AddressForm({ id }: AddressFormProps) {
  const setIsLoading = useStore(useLoadingStore, (state) => state.setIsLoading);

  const form = useFormContext();
  const zipCode = form.watch("zipCode")?.replace(/\D/g, "");

  const groups: GroupsProps[] = [
    {
      id: "1",
      inputs: [
        {
          id: "zipCode",
          label: "CEP",
          type: "string",
          regex: /[^0-9.-]/g,
        },
        {
          id: "address",
          label: "Endereço",
          type: "string",
        },
      ],
    },
    {
      id: "2",
      inputs: [
        {
          id: "number",
          label: "Número",
          type: "string",
        },
        {
          id: "complement",
          label: "Complemento",
          type: "string",
        },
      ],
    },
    {
      id: "3",
      inputs: [
        {
          id: "neighborhood",
          label: "Bairro",
          type: "string",
        },
        {
          id: "state",
          label: "Estado",
          type: "string",
        },
      ],
    },
    {
      id: "4",
      inputs: [
        {
          id: "city",
          label: "Cidade",
          type: "string",
        },
        {
          id: "bornCountry",
          label: "País de nascimento",
          type: "string",
        },
      ],
    },
    {
      id: "5",
      inputs: [
        {
          id: "livesCountry",
          label: "País de residência fiscal",
          type: "string",
        },
      ],
    },
  ];

  const handleSubmit = () => {
    console.log(form.getValues());
  };

  function formatZipCode(value: string): string {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{5})(\d)/, "$1-$2")
      .slice(0, 9);
  }

  const handleCompleteZipCode = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      form.setValue("zipCode", formatZipCode(zipCode));
      form.setValue("address", data.logradouro);
      form.setValue("neighborhood", data.bairro);
      form.setValue("state", data.uf);
      form.setValue("city", data.localidade);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (zipCode?.length >= 8) {
      handleCompleteZipCode();
    }
  }, [zipCode]);

  return (
    <Styled.FormContainer>
      <Form id={id} title='Endereço' groups={groups} onSubmit={handleSubmit} />
      <Image
        src='/images/address.svg'
        alt='address'
        className='background-image'
        width={400}
        height={400}
      />
    </Styled.FormContainer>
  );
}
