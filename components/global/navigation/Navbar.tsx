import { Button } from "@/components/ui/button";
import { ThemeToggler } from "@/components/ui/theme-toggler";
import { ChevronRight, ScanFace, Search } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="bg-background fixed top-0 z-50 w-full border-b">
      <div className="box-container flex items-center justify-between py-2">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-primary text-primary-foreground rounded-lg p-1">
            <ChevronRight className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold">SkillPop</span>
        </Link>
        <span>
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant={"ghost"}>
              <Link href={"/courses"}>Courses</Link>
            </Button>
            <Button asChild variant={"ghost"}>
              <Link href={"/pricing"}>Pricing</Link>
            </Button>
            <Button asChild variant={"ghost"}>
              <Link href={"/about-us"}>About Us</Link>
            </Button>
            <Button asChild variant={"ghost"}>
              <Link href={"/contact-us"}>Contact Us</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href={"#"}>
                <Search />
                Search
              </Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href={"sign-in"}>
                <ScanFace />
                Sign In
              </Link>
            </Button>
            <ThemeToggler />
          </div>
          <MobileMenu />
        </span>
      </div>
    </nav>
  );
}
