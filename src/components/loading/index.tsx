"use client";

import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useLoadingStore } from "@application/store/loading";
import { colors } from "@application/styles/colors";
import { useStore } from "zustand";

const GlobalLoading = () => {
  const isLoading = useStore(useLoadingStore, (state) => state.isLoading);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Backdrop
      sx={{ color: colors.green, zIndex: (theme) => theme.zIndex.modal + 1 }}
      open={isLoading}>
      <CircularProgress color='inherit' size={60} />
    </Backdrop>
  );
};

export default GlobalLoading;
