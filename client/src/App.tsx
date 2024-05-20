import { CreateSurveyModal } from "@/components/modals/CreateSurveyModal";
import CreateUserModal from "@/components/modals/CreateUserModal";
import AdminLayout from "@/layout/AdminLayout";
import AuthLayout from "@/layout/AuthLayout";
import AdminLogin from "@/pages/AdminLogin";
import Home from "@/pages/Home";
import Admin from "@/pages/admin/Admin";
import EditSurvey from "@/pages/admin/EditSurvey";
import Survey from "@/pages/admin/Survey";
import Users from "@/pages/admin/Users";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/survey" element={<Survey />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/survey/:id" element={<EditSurvey />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>
      </Routes>
      <Toaster />
      <CreateSurveyModal />
      <CreateUserModal />
    </>
  );
}
