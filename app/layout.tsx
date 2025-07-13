import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "/styles/globals.css";

const fontStyle = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SkillPop",
  description: "A new way to learn and grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontStyle.className} antialiased`}>{children}</body>
    </html>
  );
}
