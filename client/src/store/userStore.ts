import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create<UserStore, [["zustand/persist", UserStore]]>(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user",
    }
  )
);
