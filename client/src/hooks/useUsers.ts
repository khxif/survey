import { getAllUsers } from "@/lib/fetchers";
import { useTokenStore } from "@/store/tokenStore";
import { useQuery } from "react-query";

export function useUsers() {
  const token = useTokenStore((state) => state.token);

  const {
    data: users,
    isError,
    isLoading,
  } = useQuery(["users", token], () => getAllUsers(token));
  return { users, isError, isLoading };
}
