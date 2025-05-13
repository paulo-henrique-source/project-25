"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MaterialTheme from "@application/themes/material";
import { ConfigProvider } from "antd";
import AntdTheme from "@application/themes/antd";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import GlobalLoading from "@application/components/loading";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
      <ConfigProvider theme={AntdTheme}>
        <ThemeProvider theme={MaterialTheme}>
          <CssBaseline />
          <GlobalLoading />
          {children}
        </ThemeProvider>
      </ConfigProvider>
    </LocalizationProvider>
  );
}
