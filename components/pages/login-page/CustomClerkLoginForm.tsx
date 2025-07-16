"use client";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function CustomClerkLoginForm() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <SignIn
      appearance={{
        baseTheme: currentTheme === "dark" ? dark : undefined,
      }}
    />
  );
}
