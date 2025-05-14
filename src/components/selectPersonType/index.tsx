"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PfIcon } from "../svg/pf";
import { PjIcon } from "../svg/pj";
import { Container, Option } from "./styles";
import { PersonType } from "@application/enums";

export function SelectPersonType() {
  const [activeOption, setActiveOption] = useState<PersonType>(PersonType.PF);
  const router = useRouter();

  const handleOptionClick = (type: PersonType) => {
    router.push(`/sales?type=${type}`);
  };

  return (
    <Container>
      <Option
        $isactive={activeOption === PersonType.PF}
        onMouseEnter={() => setActiveOption(PersonType.PF)}
        onClick={() => handleOptionClick(PersonType.PF)}>
        <p>Vender para Pessoa Física</p>
        <PfIcon className='pfIcon' />
      </Option>

      <Option
        $isactive={activeOption === PersonType.PJ}
        onMouseEnter={() => setActiveOption(PersonType.PJ)}
        onClick={() => handleOptionClick(PersonType.PJ)}>
        <p>Vender para Pessoa Jurídica</p>
        <PjIcon className='pjIcon' />
      </Option>
    </Container>
  );
}
