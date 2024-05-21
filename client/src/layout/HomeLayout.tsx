import HomeHeader from "@/components/home/HomeHeader";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
}
