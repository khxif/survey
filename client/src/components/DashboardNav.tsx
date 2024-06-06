import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/userStore";
import { FolderKanban, LayoutDashboard, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function DashboardNav() {
  const location = useLocation();
  const user = useUserStore((state) => state.user);

  const items = [
    {
      id: 1,
      label: "Dashboard",
      to: "/admin",
      icon: LayoutDashboard,
      isActive: location.pathname === "/admin",
      isVisible: true,
    },
    {
      id: 2,
      label: "Manage Users",
      to: "/admin/users",
      icon: Users,
      isActive: location.pathname === "/admin/users",
      isVisible: user?.role === "Super-Admin",
    },
    {
      id: 3,
      label: "Manage Survey",
      to: "/admin/survey",
      icon: FolderKanban,
      isActive: location.pathname.startsWith("/admin/survey"),
      isVisible: true,
    },
  ] as const;

  return (
    <nav className="grid items-start gap-2">
      {items.map(
        (item, index) =>
          item.to && (
            <Link key={index} to={item.to}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  item.isVisible ? "flex" : "hidden",
                  item.isActive ? "bg-accent" : "transparent"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </span>
            </Link>
          )
      )}
    </nav>
  );
}
