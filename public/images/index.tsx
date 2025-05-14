"use client";

import { useEffect, useState } from "react";
import { PfIcon } from "../../src/components/svg/pf";
import { PjIcon } from "../../src/components/svg/pj";
import * as Styled from "../../src/components/selectPersonType/styles";

export function SelectPersonType() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Styled.Container>
      <Styled.Option className='pf'>
        <p>Vender para Pessoa Física</p>
        <PfIcon className='pfIcon' width={900} height={900} />
      </Styled.Option>

      <Styled.Option className='pj'>
        <p>Vender para Pessoa Jurídica</p>
        <PjIcon className='pjIcon' width={800} height={800} />
      </Styled.Option>
    </Styled.Container>
  );
}
