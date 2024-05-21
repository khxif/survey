import { cn } from "@/lib/utils";
import { FolderKanban, LayoutDashboard, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function DashboardNav() {
  const location = useLocation();

  const items = [
    {
      id: 1,
      label: "Dashboard",
      to: "/admin",
      icon: LayoutDashboard,
      isActive: location.pathname === "/admin",
    },
    {
      id: 2,
      label: "Manage Users",
      to: "/admin/users",
      icon: Users,
      isActive: location.pathname === "/admin/users",
    },
    {
      id: 2,
      label: "Manage Survey",
      to: "/admin/survey",
      icon: FolderKanban,
      isActive: location.pathname.startsWith("/admin/survey"),
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
