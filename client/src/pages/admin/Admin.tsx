import { useUserStore } from "@/store/userStore";
import dayjs from "dayjs";
import greetPlugin from "dayjs-greet";
import { useEffect, useState } from "react";

export default function Admin() {
  dayjs.extend(greetPlugin);

  const [greeting, setGreeting] = useState<string>("");
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    setGreeting(dayjs(Date.now()).greet(" " + user?.username));
  }, [user]);

  return (
    <section className="flex items-center justify-center w-full">
      <h1>{greeting}</h1>
    </section>
  );
}
