import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Button } from "../ui/button";

export default function HomeHeader() {
  return (
    <header className="py-4 flex items-center justify-between px-4 md:px-8 sticky top-0 border-b border-b-blue-800">
      <Link to="/">
        <Logo />
      </Link>

      <div className="flex items-center space-x-4">
        {/* <DarkModeToggle /> */}

        <Link to="/admin">
          <Button
            size="lg"
            className="bg-blue-950 hover:bg-blue-950 hover:bg-blue-950/80"
          >
            Admin
          </Button>
        </Link>
      </div>
    </header>
  );
}
