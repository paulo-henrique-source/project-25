"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type LoadingStoreProps = {
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
};

export const useLoadingStore = create<LoadingStoreProps>()(
  persist(
    (set) => ({
      isLoading: false,
      setIsLoading: (value) => set({ isLoading: value }),
    }),
    {
      name: "loading-store",
      onRehydrateStorage: () => {
        console.log("hydration starts");

        return (state, error) => {
          if (error) {
            console.log("an error happened during hydration", error);
          } else {
            console.log("hydration finished");
          }
        };
      },
    }
  )
);
