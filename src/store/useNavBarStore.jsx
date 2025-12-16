import { create } from "zustand";

export const useNavBarStore = create((set, get) => ({
  navBarOpen: false,
  toggleNavBarOpen: () => set((state) => ({ navBarOpen: !state.navBarOpen })),
}));
