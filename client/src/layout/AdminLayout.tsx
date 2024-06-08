import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminProtected from "@/providers/AdminProtected";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <AdminProtected>
      <AdminHeader />
      <main className="flex h-screen overflow-hidden">
        <AdminSidebar />
        <Outlet />
      </main>
    </AdminProtected>
  );
}
