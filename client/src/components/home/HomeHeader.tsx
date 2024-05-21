import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Button } from "../ui/button";
import DarkModeToggle from "../admin/DarModeToggle";

export default function HomeHeader() {
  return (
    <header className="py-4 flex items-center justify-between px-4 md:px-8">
      <Link to="/">
        <Logo />
      </Link>
      
      <div className="flex items-center space-x-4">
        <DarkModeToggle />

        <Link to="/admin">
          <Button size="lg">Admin</Button>
        </Link>
      </div>
    </header>
  );
}
