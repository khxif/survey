import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <Link to="/admin/login">Admin Login</Link>
    </main>
  );
}
