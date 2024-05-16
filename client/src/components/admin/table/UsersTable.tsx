import { useUsers } from "@/hooks/useUsers";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { MoonLoader } from "react-spinners";

export default function UsersTable() {
  const { users, isLoading } = useUsers();
  return (
    <>
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <MoonLoader color="#fff" size='23' />
        </div>
      )}
      {users && <DataTable columns={columns} data={users} />}
    </>
  );
}
