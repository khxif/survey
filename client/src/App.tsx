import Loading from "@/components/Loading";
import AdminLayout from "@/layout/AdminLayout";
import HomeLayout from "@/layout/HomeLayout";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

const Admin = lazy(() => import("@/pages/admin/Admin"));
const AdminLogin = lazy(() => import("@/pages/AdminLogin"));
const EditSurvey = lazy(() => import("@/pages/admin/EditSurvey"));
const Home = lazy(() => import("@/pages/Home"));
const Survey = lazy(() => import("@/pages/admin/Survey"));
const SurveyForm = lazy(() => import("@/pages/SurveyForm"));
const Users = lazy(() => import("@/pages/admin/Users"));

const CreateSurveyModal = lazy(
  () => import("@/components/modals/CreateSurveyModal")
);
const CreateUserModal = lazy(
  () => import("@/components/modals/CreateUserModal")
);
const AddQuestionModal = lazy(
  () => import("@/components/modals/AddQuestionModal")
);

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/survey/:id"
            element={
              <Suspense fallback={<Loading />}>
                <SurveyForm />
              </Suspense>
            }
          />
        </Route>
        <Route element={<AdminLayout />}>
          <Route
            path="/admin"
            element={
              <Suspense fallback={<Loading />}>
                <Admin />
              </Suspense>
            }
          />
          <Route
            path="/admin/survey"
            element={
              <Suspense fallback={<Loading />}>
                <Survey />
              </Suspense>
            }
          />
          <Route
            path="/admin/users"
            element={
              <Suspense fallback={<Loading />}>
                <Users />
              </Suspense>
            }
          />
          <Route
            path="/admin/survey/:id"
            element={
              <Suspense fallback={<Loading />}>
                <EditSurvey />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/admin/login"
          element={
            <Suspense fallback={<Loading />}>
              <AdminLogin />
            </Suspense>
          }
        />
      </Routes>
      <Toaster richColors={true} position="top-center" />
      <Suspense fallback={null}>
        <CreateSurveyModal />
      </Suspense>
      <Suspense fallback={null}>
        <CreateUserModal />
      </Suspense>
      <Suspense fallback={null}>
        <AddQuestionModal />
      </Suspense>
    </>
  );
}
