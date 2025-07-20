import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "/styles/globals.css";
import Navbar from "@/components/global/navigation/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/global/footer/Footer";
import Background from "@/components/ui/background";

const fontStyle = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SkillPop - A new way to learn and grow.",
  description: "A new way to learn and grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${fontStyle.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Background>
              <Navbar />
              {children}
              <Footer />
            </Background>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
