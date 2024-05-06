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
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

interface ModalStore {
  createSurveyModalOpen: boolean;
  setCreateSurveyModalOpen: (open: boolean) => void;
}
