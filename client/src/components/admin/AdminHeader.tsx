import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const MobileSidebar = lazy(() => import("./MobileSidebar"));
const UserNav = lazy(() => import("./UserNav"));

export default function AdminHeader() {
  return (
    <div
      className="sticky top-0 left-0 right-0 supports-backdrop-blur:bg-background/60
     border-b border-b-blue-800 bg-background/95 backdrop-blur z-20"
    >
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link to="/admin">
            <Logo />
          </Link>
        </div>
        <div className={cn("block lg:!hidden")}>
          <Suspense fallback={null}>
            <MobileSidebar />
          </Suspense>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/">
            <Home className="size-5" />
          </Link>
          <Suspense fallback={null}>
            <UserNav />
          </Suspense>
        </div>
      </nav>
    </div>
  );
}
