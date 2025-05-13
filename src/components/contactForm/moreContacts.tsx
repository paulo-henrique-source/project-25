import { Divider, InputAdornment } from "@mui/material";
import * as Styled from "./styles";

import { Form, GroupsProps } from "../form";
import { useFormContext } from "react-hook-form";
import { MenuTab } from "@application/enums";
import { Button } from "antd";

type MoreContactsType = {
  groupsBlocks: GroupsProps[][];
  onAdd: () => void;
  onRemove: (index: number) => void;
};

export function MoreContacts({
  groupsBlocks,
  onAdd,
  onRemove,
}: MoreContactsType) {
  return (
    <Styled.FormContainer>
      <div className='moreContacts-wrapper'>
        {groupsBlocks.map((groups, index) => (
          <div key={index} className='contact-block'>
            <Form
              id={MenuTab.CONTACT}
              title={
                <div className='contact-block-actions'>
                  <div>Contato {index + 2}</div>
                  <div className='contact-block-actions'>
                    {index === groupsBlocks.length - 1 ? (
                      <Button type='primary' onClick={onAdd}>
                        Adicionar outro contato
                      </Button>
                    ) : null}
                    <Button
                      type='default'
                      color='danger'
                      variant='solid'
                      onClick={() => onRemove(index)}>
                      Remover contato
                    </Button>
                  </div>
                </div>
              }
              groups={groups}
              withOutSubmitButtons
            />
          </div>
        ))}
      </div>
    </Styled.FormContainer>
  );
}
