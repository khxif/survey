import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import DarkModeToggle from "./DarModeToggle";
import MobileSidebar from "./MobileSidebar";
import UserNav from "./UserNav";

export default function AdminHeader() {
  return (
    <div className="sticky top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link to="/admin">
            <Logo />
          </Link>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <UserNav />
        </div>
      </nav>
    </div>
  );
}
