"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MenuTab } from "@application/enums";

const tabOrder: MenuTab[] = [
  MenuTab.BASIC_PERSON,
  MenuTab.NATURAL_PERSON,
  MenuTab.ADDRESS,
  MenuTab.CONTACT,
  MenuTab.BANK_INFO,
];

type MenuStoreProps = {
  menuValue: MenuTab;
  setMenuValue: (tab: MenuTab) => void;
  handleNextMenuValue: () => void;
  handleBackMenuValue: () => void;
};

export const useMenuStore = create<MenuStoreProps>()(
  persist(
    (set, get) => ({
      menuValue: MenuTab.BASIC_PERSON,

      setMenuValue: (tab) => set({ menuValue: tab }),

      handleNextMenuValue: () => {
        const current = get().menuValue;
        const currentIndex = tabOrder.indexOf(current);
        const nextTab = tabOrder[currentIndex + 1];
        if (nextTab) {
          set({ menuValue: nextTab });
        }
      },

      handleBackMenuValue: () => {
        const current = get().menuValue;
        const currentIndex = tabOrder.indexOf(current);
        const previousTab = tabOrder[currentIndex - 1];
        if (previousTab) {
          set({ menuValue: previousTab });
        }
      },
    }),
    {
      name: "menu-store",
      onRehydrateStorage: () => {
        console.log("hydration starts (menu store)");
        return (state, error) => {
          if (error) {
            console.log(
              "an error happened during hydration (menu store)",
              error
            );
          } else {
            console.log("hydration finished (menu store)");
          }
        };
      },
    }
  )
);
