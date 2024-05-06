import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTokenStore = create<TokenStore,[["zustand/persist", TokenStore]]>(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
    }),
    {
      name: "token",
    }
  )
);
