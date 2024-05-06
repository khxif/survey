import { useTokenStore } from "@/store/tokenStore";
import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";

export default function ValidateToken({ children }: ChildrenProps) {
  const [token, setToken] = useTokenStore((state) => [
    state.token,
    state.setToken,
  ]);
  const setUser = useUserStore((state) => state.setUser);
  useEffect(() => {
    if (!token) return setUser(null);

    async function verifyToken() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/verify-token`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        if (!res.ok) setToken(null);

        setUser(data);
      } catch (error) {
        console.log(error);
        setToken(null);
      }
    }
    verifyToken();
  }, [token]);
  return <>{children}</>;
}
