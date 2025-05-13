"use client";

import * as Styled from "./styles";
import { Form, GroupsProps } from "../form";
import { useFormContext } from "react-hook-form";
import { MenuTab } from "@application/enums";
import { MoreContacts } from "./moreContacts";
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ContactFormProps = {
  id: MenuTab;
};

export function ContactForm({ id }: ContactFormProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const form = useFormContext();
  const [moreContactsGroup, setMoreContactsGroup] = useState<GroupsProps[][]>(
    []
  );

  const handleSubmit = () => {
    console.log(form.getValues());
  };

  const groups: GroupsProps[] = [
    {
      id: "1",
      inputs: [
        {
          id: "nameOfContact",
          label: "Nome do contato",
          type: "string",
        },
        {
          id: "email",
          label: "Email",
          type: "string",
        },
      ],
    },
    {
      id: "2",
      inputs: [
        {
          id: "ddd",
          label: "DDD",
          type: "string",
        },
        {
          id: "cellphone",
          label: "Telefone",
          type: "string",
        },
      ],
    },

    {
      id: "3",
      inputs: [
        {
          id: "typeOfCellphone",
          label: "Tipo do contato",
          type: "select",
          options: [
            {
              value: "home",
              label: "Residencial",
            },
            {
              value: "moved",
              label: "Movel",
            },
          ],
        },
      ],
    },
  ];

  const handleAddNewContact = () => {
    setMoreContactsGroup((prevState) => {
      const updated = [...prevState];

      if (updated.length) {
        const lastGroup = [...updated[updated.length - 1]];
        lastGroup[lastGroup.length - 1] = {
          ...lastGroup[lastGroup.length - 1],
          hasDivider: true,
        };
        updated[updated.length - 1] = lastGroup;
      }

      const newIndex = updated.length + 1;

      const newContact = groups.map((group) => ({
        ...group,
        inputs: group.inputs.map((input) => ({
          ...input,
          id: `${input.id}NewContact-${newIndex}`,
        })),
      }));

      updated.push(newContact);
      return updated;
    });
  };

  const handleRemoveContact = (indexToRemove: number) => {
    setMoreContactsGroup((prevState) => {
      const updated = [...prevState];

      const groupToRemove = updated[indexToRemove];
      groupToRemove.forEach((group) => {
        group.inputs.forEach((input) => {
          form.unregister(input.id, { keepValue: false });
        });
      });

      updated.splice(indexToRemove, 1);

      if (indexToRemove > 0 && updated.length > 0) {
        const previousGroup = [...updated[indexToRemove - 1]];
        previousGroup[previousGroup.length - 1] = {
          ...previousGroup[previousGroup.length - 1],
          hasDivider: false,
        };
        updated[indexToRemove - 1] = previousGroup;
      }

      return updated;
    });
  };

  useEffect(() => {
    const formValues = form.getValues();
    const contactBlocks: GroupsProps[][] = [];

    let index = 1;

    while (true) {
      const hasAnyValue = groups.some((group) =>
        group.inputs.some((input) => {
          const fieldId = `${input.id}NewContact-${index}`;
          return formValues[fieldId];
        })
      );

      if (!hasAnyValue) break;

      const contactGroup = groups.map((group) => ({
        ...group,
        inputs: group.inputs.map((input) => ({
          ...input,
          id: `${input.id}NewContact-${index}`,
        })),
      }));

      contactBlocks.push(contactGroup);
      index++;
    }

    if (contactBlocks.length) {
      const lastBlock = [...contactBlocks[contactBlocks.length - 1]];
      lastBlock[lastBlock.length - 1] = {
        ...lastBlock[lastBlock.length - 1],
        hasDivider: true,
      };
      contactBlocks[contactBlocks.length - 1] = lastBlock;

      setMoreContactsGroup(contactBlocks);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [moreContactsGroup.length]);

  return (
    <Styled.FormContainer ref={scrollRef}>
      <Form
        id={id}
        title='Contato'
        groups={groups}
        onSubmit={handleSubmit}
        children={
          moreContactsGroup.length ? (
            <MoreContacts
              groupsBlocks={moreContactsGroup}
              onAdd={handleAddNewContact}
              onRemove={handleRemoveContact}
            />
          ) : null
        }
        firstButton={
          moreContactsGroup.length === 0 && (
            <Button
              color='primary'
              variant='solid'
              htmlType='submit'
              onClick={handleAddNewContact}>
              Adicionar outro contato
            </Button>
          )
        }
      />
      <Image
        src='/images/contact.svg'
        alt='contact'
        className='background-image'
        width={400}
        height={400}
      />
    </Styled.FormContainer>
  );
}
