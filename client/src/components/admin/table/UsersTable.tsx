import Loading from "@/components/Loading";
import { useUsers } from "@/hooks/useUsers";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function UsersTable() {
  const { users, isLoading } = useUsers();
  console.log(users);
  
  return (
    <>
      {isLoading && <Loading />}
      {users && <DataTable columns={columns} data={users} />}
    </>
  );
}
