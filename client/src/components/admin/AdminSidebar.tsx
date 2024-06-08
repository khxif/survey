import { cn } from "@/lib/utils";
import DashboardNav from "../DashboardNav";

export default function AdminSidebar() {
  return (
    <aside
      className={cn(`relative hidden h-full text-white overflow-y-hidden border-r py-4 lg:block w-72 bg-blue-950`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardNav />
          </div>
        </div>
      </div>
    </aside>
  );
}
