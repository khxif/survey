import CreateSurveyModal from "@/components/modals/CreateSurveyModal";
import CreateUserModal from "@/components/modals/CreateUserModal";
import AdminLayout from "@/layout/AdminLayout";
import AuthLayout from "@/layout/AuthLayout";
import HomeLayout from "@/layout/HomeLayout";
import AdminLogin from "@/pages/AdminLogin";
import Home from "@/pages/Home";
import SurveyForm from "@/pages/SurveyForm";
import Admin from "@/pages/admin/Admin";
import EditSurvey from "@/pages/admin/EditSurvey";
import Survey from "@/pages/admin/Survey";
import Users from "@/pages/admin/Users";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import AddQuestionModal from "./components/modals/AddQuestionModal";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:id" element={<SurveyForm />} />
        </Route>
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
      <Toaster richColors={true} position="top-center" />
      <CreateSurveyModal />
      <CreateUserModal />
      <AddQuestionModal />
    </>
  );
}
