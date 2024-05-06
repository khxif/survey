import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { CreateSurveyModal } from "./components/modals/CreateSurveyModal";
import AdminLayout from "./layout/AdminLayout";
import AuthLayout from "./layout/AuthLayout";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import Admin from "./pages/admin/Admin";
import Survey from "./pages/admin/Survey";
import Users from "./pages/admin/Users";
import CreateSurvey from "./pages/admin/CreateSurvey";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/survey" element={<Survey />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/survey/create" element={<CreateSurvey />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>
      </Routes>
      <Toaster />
      <CreateSurveyModal />
    </>
  );
}
