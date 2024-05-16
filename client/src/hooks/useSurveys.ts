import { getAllSurveys } from "@/lib/fetchers";
import { useQuery } from "react-query";

export function useSurveys() {
  const {
    data: surveys,
    isError,
    isLoading,
  } = useQuery("surveys", getAllSurveys);

  return { surveys, isError, isLoading };
}
