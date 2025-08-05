"use client";
import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function CustomClerkRegForm() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="my-16">
      <SignUp
        appearance={{
          baseTheme: currentTheme === "dark" ? dark : undefined,
        }}
      />
    </div>
  );
}
