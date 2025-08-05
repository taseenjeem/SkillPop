import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImg from "/public/images/hero.webp";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-muted-foreground inline-flex items-center gap-2 text-sm">
              <Badge>Trending</Badge> Join 50,000+ learners worldwide
            </div>
            <h1 className="mt-4 text-2xl/tight font-bold tracking-tight text-balance sm:text-4xl/tight lg:text-5xl/tight">
              Unlock Your Potential with Bite-Sized Mastery
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-lg text-base/7 leading-tight sm:text-lg/8 md:leading-normal">
              SkillPop transforms learning into an adventure with 10-minute
              daily lessons, interactive challenges, and personalized progress
              tracking.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:justify-center">
              <Button asChild>
                <Link href={"/sign-up"}>Start Learning Free</Link>
              </Button>
              <Button asChild variant={"link"}>
                <Link href={"/courses"}>
                  Explore Courses <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <Image
              src={heroImg}
              alt="Happy students learning on SkillPop platform"
              className="w-full rounded-2xl shadow-xl"
              priority={true}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
}
