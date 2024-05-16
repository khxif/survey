import UsersTable from "@/components/admin/table/UsersTable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/store/modalStore";
import { PlusCircle } from "lucide-react";

export default function Users() {
  const setCreateUserModalOpen = useModalStore(
    (state) => state.setCreateUserModalOpen
  );
  return (
    <div className="w-full py-4 px-6">
      <nav className="items-center justify-between w-full flex">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-base" href="/admin">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Users</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Button
          onClick={() => setCreateUserModalOpen(true)}
          className="flex items-center space-x-2"
        >
          <p>Create Users</p>
          <PlusCircle className="size-5" />
        </Button>
      </nav>
      <div className="items-center justify-center py-4">
        <UsersTable />
      </div>
    </div>
  );
}
