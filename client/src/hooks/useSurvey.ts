import { getSurvey } from "@/lib/fetchers";
import { useQuery } from "react-query";

export function useSurvey(id: string | undefined) {

  const {
    data: survey,
    isError,
    isLoading,
  } = useQuery(["survey", id], () => getSurvey(id));

  return { survey, isError, isLoading };
}
