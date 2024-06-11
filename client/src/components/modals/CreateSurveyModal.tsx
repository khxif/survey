import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/modalStore";
import { Suspense, lazy } from "react";
import Loading from "../Loading";

const CreateSurveyForm = lazy(() => import("../admin/survey/CreateSurveyForm"));

export default function CreateSurveyModal() {
  const [createSurveyModalOpen, setCreateSurveyModalOpen] = useModalStore(
    (state) => [state.createSurveyModalOpen, state.setCreateSurveyModalOpen]
  );
  return (
    <Dialog
      open={createSurveyModalOpen}
      onOpenChange={setCreateSurveyModalOpen}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create survey...</DialogTitle>
        </DialogHeader>
        <Suspense fallback={<Loading />}>
          <CreateSurveyForm />
        </Suspense>
      </DialogContent>
    </Dialog>
  );
}
