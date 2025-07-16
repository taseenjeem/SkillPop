"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CircleDollarSign,
  FileVideo,
  Info,
  LogOut,
  Menu,
  PhoneForwarded,
  ScanFace,
  Search,
} from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant={"outline"} size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b">
          <SheetTitle>SkillPop</SheetTitle>
          <SheetDescription>A new way to learn and grow.</SheetDescription>
        </SheetHeader>
        <div className="space-y-4 px-4">
          <div className="w-full">
            <p className="mb-3 text-xs font-bold uppercase">General</p>
            <div className="flex flex-col gap-2">
              <Button
                asChild
                variant={"outline"}
                className="w-full"
                size={"sm"}
              >
                <Link href={"/pricing"}>
                  <CircleDollarSign />
                  Pricing
                </Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-full"
                size={"sm"}
              >
                <Link href={"/courses"}>
                  <FileVideo />
                  Courses
                </Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-full"
                size={"sm"}
              >
                <Link href={"/about-us"}>
                  <Info />
                  About Us
                </Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-full"
                size={"sm"}
              >
                <Link href={"/contact-us"}>
                  <PhoneForwarded />
                  Contact Us
                </Link>
              </Button>
              <Button variant={"outline"} className="w-full" size={"sm"}>
                <Search />
                Search
              </Button>
            </div>
          </div>
          <div className="w-full">
            <p className="mb-3 text-xs font-bold uppercase">Accounts</p>
            <div className="flex flex-col gap-2">
              <Button variant={"outline"} className="w-full" size={"sm"}>
                <ScanFace />
                Sign In
              </Button>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="destructive">
              <LogOut />
              Sign Out
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
