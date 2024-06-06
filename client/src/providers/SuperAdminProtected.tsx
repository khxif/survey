import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SuperAdminProtected({ children }: ChildrenProps) {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user?.role !== "Super-Admin") return navigate("/admin/login");
  }, [user]);
  return <>{children}</>;
}
