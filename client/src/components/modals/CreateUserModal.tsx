import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/store/modalStore";
import CreateUserForm from "../admin/users/CreateUserForm";

export default function CreateUserModal() {
  const [createUserModalOpen, setCreateUserModalOpen] = useModalStore(
    (state) => [state.createUserModalOpen, state.setCreateUserModalOpen]
  );

  return (
    <Dialog open={createUserModalOpen} onOpenChange={setCreateUserModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Admins</DialogTitle>
          <CreateUserForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
