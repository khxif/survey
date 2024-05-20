import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <MoonLoader color="#fff" size="23" />
    </div>
  );
}
