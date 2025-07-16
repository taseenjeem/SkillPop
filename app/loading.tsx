import { Loader2Icon } from "lucide-react";

export default function loading() {
  return (
    <div className="custom-h-screen flex flex-col items-center justify-center gap-3">
      <Loader2Icon className="animate-spin" size={40} />
      <p>Loading...</p>
    </div>
  );
}
