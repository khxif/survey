import DashBoardBreadCrumbs from "@/components/DashBoardBreadCrumbs";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/modalStore";
import { PlusCircle } from "lucide-react";
import { Suspense, lazy } from "react";

const UsersTable = lazy(() => import("@/components/admin/table/UsersTable"));

export default function Users() {
  const setCreateUserModalOpen = useModalStore(
    (state) => state.setCreateUserModalOpen
  );
  return (
    <div className="w-full h-full py-4 px-4 md:px-6">
      <nav className="items-center justify-between h-full w-full flex">
        <DashBoardBreadCrumbs page="Users" />
        <Button
          onClick={() => setCreateUserModalOpen(true)}
          className="flex items-center space-x-2"
        >
          <p>Create Users</p>
          <PlusCircle className="size-5" />
        </Button>
      </nav>
      <div className="items-center h-full justify-center py-4">
        <Suspense fallback={<Loading />}>
          <UsersTable />
        </Suspense>
      </div>
    </div>
  );
}
