declare module "survey-core/themes/layered-dark";
declare module "survey-core/themes/plain-light";
declare module 'react-radio-buttons';

interface ChildrenProps {
  children: React.ReactNode;
}

interface TokenStore {
  token: null | string;
  setToken: (token: string | null) => void;
}

interface User {
  _id: string;
  username: string;
  email: string;
  role: "HR-Admin" | "Super-Admin";
  password?: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

interface ModalStore {
  createSurveyModalOpen: boolean;
  setCreateSurveyModalOpen: (open: boolean) => void;

  createUserModalOpen: boolean;
  setCreateUserModalOpen: (open: boolean) => void;

  addQuestionModalOpen: boolean;
  setAddQuestionModalOpen: (open: boolean) => void;
}

interface Question {
  _id: string;
  name: string;
  title: string;
  type: string;
  choices?: string[];
}

interface Survey {
  _id: string;
  name: string;
  pdfUrl: string;
  questions: QuestionSchema[];
}
