import { create } from "zustand";

export const useModalStore = create<ModalStore>((set) => ({
  createSurveyModalOpen: false,
  setCreateSurveyModalOpen: (open) => set({ createSurveyModalOpen: open }),
}));
