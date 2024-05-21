import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTokenStore } from "@/store/tokenStore";
import { useUserStore } from "@/store/userStore";
import { toast } from "sonner";

export default function UserNav() {
  const setToken = useTokenStore((state) => state.setToken);
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);

  const handleLogout = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/admin/logout`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) return toast.error("Something went wong.");
      console.log(data);

      setToken(null);
      setUser(null);
      toast.success("Logout Success");
    } catch (error) {
      console.log(error);
      toast.error((error as Error)?.message || "Something went wrong..");
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt={user?.username}
            />
            <AvatarFallback>{user?.username}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.username}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          Log out
          <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
