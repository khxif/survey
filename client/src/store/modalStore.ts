import { create } from "zustand";

export const useModalStore = create<ModalStore>((set) => ({
  createSurveyModalOpen: false,
  setCreateSurveyModalOpen: (open) => set({ createSurveyModalOpen: open }),

  createUserModalOpen: false,
  setCreateUserModalOpen: (open) => set({ createUserModalOpen: open }),

  addQuestionModalOpen: false,
  setAddQuestionModalOpen: (open) => set({addQuestionModalOpen:open})
}));
