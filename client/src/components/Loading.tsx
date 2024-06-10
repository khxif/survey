import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center relative inset-0 z-50">
      <MoonLoader color="#000" size="25" />
    </div>
  );
}
