"use client";

import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import * as Styled from "./styles";
import { Button } from "antd";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useFormContext } from "react-hook-form";
import { Dayjs } from "dayjs";
import { MenuTab } from "@application/enums";
import { useMenuStore } from "@application/store/menu";
import { ReactNode } from "react";
import React from "react";
import { useStore } from "zustand";

type SelectOptionsProps = {
  value: string | number;
  label: string;
};

type InputProps = {
  id: string;
  label: string;
  type?: "date" | "string" | "checkbox" | "select";
  value?: string | Dayjs | null;
  inputProps?: any;
  regex?: any;
  defaultValue?: string;
  options?: SelectOptionsProps[];
};

export type GroupsProps = {
  id: string;
  inputs: InputProps[];
  hasDivider?: boolean;
};

type FormProps = {
  id: MenuTab;
  title: string | ReactNode;
  groups: GroupsProps[];
  children?: ReactNode;
  withOutSubmitButtons?: boolean;
  firstButton?: ReactNode;
  secondButton?: ReactNode;
  onSubmit?: () => void;
};

export function Form({
  id,
  title,
  groups,
  children,
  withOutSubmitButtons,
  firstButton,
  secondButton,
  onSubmit,
}: FormProps) {
  const form = useFormContext();

  const handleBackMenuValue = useStore(
    useMenuStore,
    (state) => state.handleBackMenuValue
  );
  const handleNextMenuValue = useStore(
    useMenuStore,
    (state) => state.handleNextMenuValue
  );

  return (
    <Styled.FormContainer>
      <div className='title-wrapper'>
        <div className='title'>{title}</div>
        <div className='buttons'>
          <div>{firstButton}</div>
          <div>{secondButton}</div>
        </div>
      </div>
      <form onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}>
        <div className='inputs'>
          {groups.map((group) => (
            <div key={group.id}>
              <div className='inputs-item'>
                {group.inputs.map((input) => (
                  <FormControl key={input.id} fullWidth sx={{ m: 1 }}>
                    {input.type === "date" &&
                    typeof input.value !== "string" ? (
                      <DatePicker
                        label={input.label}
                        value={input?.value}
                        onChange={(event) =>
                          form.setValue(input.id, event?.toISOString())
                        }
                      />
                    ) : null}
                    {input.type === "checkbox" ? (
                      <FormControlLabel
                        id={input.id}
                        control={<Checkbox />}
                        label={input.label}
                        onChange={(_event, checked) =>
                          form.setValue(input.id, checked)
                        }
                      />
                    ) : null}
                    {input.type === "string" ? (
                      <TextField
                        id={input.id}
                        label={input.label}
                        variant='outlined'
                        InputLabelProps={{
                          shrink: input.defaultValue
                            ? undefined
                            : !!form.watch(input.id),
                        }}
                        onChange={(event) => {
                          const value = event.target.value;
                          if (input.regex) {
                            const numericValue = value.replace(input.regex, "");
                            return form.setValue(input.id, numericValue);
                          }
                          form.setValue(input.id, value);
                        }}
                        value={form.watch(input.id)}
                        defaultValue={input.defaultValue}
                      />
                    ) : null}
                    {input.type === "select" ? (
                      <>
                        <InputLabel id='demo-simple-select-label'>
                          {input.label}
                        </InputLabel>
                        <Select
                          labelId='demo-simple-select-label'
                          id='demo-simple-select'
                          value={form.watch(input.id)}
                          label={input.label}
                          onChange={(event) => {
                            const value = event.target.value;
                            if (input.regex) {
                              const numericValue = value.replace(
                                input.regex,
                                ""
                              );
                              return form.setValue(input.id, numericValue);
                            }
                            form.setValue(input.id, value);
                          }}>
                          {input.options?.map((option) => (
                            <MenuItem value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </>
                    ) : null}
                  </FormControl>
                ))}
              </div>
              {group.hasDivider ? <Divider /> : null}
            </div>
          ))}
        </div>
        {children}
        {withOutSubmitButtons ? null : (
          <div className='buttons'>
            <Button
              color='danger'
              variant='solid'
              onClick={handleBackMenuValue}>
              Voltar
            </Button>
            <Button
              color='primary'
              variant='solid'
              htmlType='submit'
              onClick={handleNextMenuValue}>
              {id === MenuTab.BANK_INFO ? "Enviar" : "Próximo"}
            </Button>
          </div>
        )}
      </form>
    </Styled.FormContainer>
  );
}
