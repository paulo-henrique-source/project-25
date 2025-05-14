"use client";

import * as Styled from "./styles";
import { MenuComponent } from "@application/components/menu";
import { BasicPersonForm } from "@application/components/basicPersonForm";
import { NaturalPersonForm } from "@application/components/naturalPersonForm";
import { useEffect, useState } from "react";
import { MenuTab, PersonType } from "@application/enums";
import { AddressForm } from "@application/components/addressForm";
import { ContactForm } from "@application/components/contactForm";
import { BankForm } from "@application/components/bankForm";
import { FormProvider, useForm } from "react-hook-form";
import StepsComponent from "@application/components/steps";
import { useMenuStore } from "@application/store/menu";
import { useStore } from "zustand";
import { useSearchParams } from "next/navigation";
import { SelectPersonType } from "@application/components/selectPersonType";

function Sales() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const formMethods: any = useForm();
  const menuValue = useStore(useMenuStore, (state) => state.menuValue);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      {type && hydrated ? (
        <FormProvider {...formMethods}>
          <Styled.AppContainer>
            <div className='timeline'>
              <StepsComponent />
            </div>
            <div className='card'>
              {/* <div className='menu-container'>
                <MenuComponent
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  value={menuValue}
                  onChange={setMenuValue}
                />
              </div> */}
              <div className='form-container'>
                {menuValue === MenuTab.BASIC_PERSON && (
                  <BasicPersonForm id={MenuTab.BASIC_PERSON} />
                )}

                {menuValue === MenuTab.NATURAL_PERSON &&
                  type === PersonType.PF && (
                    <NaturalPersonForm id={MenuTab.NATURAL_PERSON} />
                  )}
                {menuValue === MenuTab.ADDRESS && (
                  <AddressForm id={MenuTab.ADDRESS} />
                )}
                {menuValue === MenuTab.CONTACT && (
                  <ContactForm id={MenuTab.CONTACT} />
                )}
                {menuValue === MenuTab.BANK_INFO && (
                  <BankForm id={MenuTab.BANK_INFO} />
                )}
              </div>
            </div>
          </Styled.AppContainer>
        </FormProvider>
      ) : (
        <>{hydrated ? <SelectPersonType /> : null}</>
      )}
    </>
  );
}

export default Sales;
