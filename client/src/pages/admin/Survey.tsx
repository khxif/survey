import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/modalStore";

export default function Survey() {
  const setCreateSurveyModalOpen = useModalStore(
    (state) => state.setCreateSurveyModalOpen
  );
  return (
    <section className="flex items-center justify-center w-full">
      <Button onClick={() => setCreateSurveyModalOpen(true)}>Add Survey</Button>
    </section>
  );
}
