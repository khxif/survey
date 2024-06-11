import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/modalStore";
import { Suspense, lazy } from "react";
import Loading from "../Loading";

const AddQuestionForm = lazy(() => import("../admin/survey/AddQuestionForm"));

export default function AddQuestionModal() {
  const [addQuestionModalOpen, setAddQuestionModalOpen] = useModalStore(
    (state) => [state.addQuestionModalOpen, state.setAddQuestionModalOpen]
  );
  return (
    <Dialog open={addQuestionModalOpen} onOpenChange={setAddQuestionModalOpen}>
      <DialogContent className="max-w-md md:max-w-lg rounded-lg">
        <DialogHeader>
          <DialogTitle>Create a question for your survey.</DialogTitle>
          <Suspense fallback={<Loading />}>
            <AddQuestionForm />
          </Suspense>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
