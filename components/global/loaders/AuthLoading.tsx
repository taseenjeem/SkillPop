import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2Icon } from "lucide-react";

export default function AuthLoading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkLoading>
        <div className="flex min-h-screen flex-col items-center justify-center gap-3">
          <Loader2Icon className="animate-spin" size={40} />
          <p>Checking authentication. Please wait...</p>
        </div>
      </ClerkLoading>
      <ClerkLoaded>{children}</ClerkLoaded>
    </>
  );
}
