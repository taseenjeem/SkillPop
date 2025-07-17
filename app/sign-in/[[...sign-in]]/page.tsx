import Image from "next/image";
import signinImg from "/public/images/sign-in-picture.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CustomClerkLoginForm from "@/components/pages/login-page/CustomClerkLoginForm";
import AuthLoading from "@/components/global/loaders/AuthLoading";

export default function SignInPage() {
  return (
    <AuthLoading>
      <section className="w-full md:h-screen">
        <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
          <div className="relative h-96 w-full lg:h-full">
            <Image
              src={signinImg}
              alt="SkillPop Sign In Image"
              className="absolute h-full object-cover"
            />
            <div className="from-background absolute bottom-0 h-96 w-full bg-gradient-to-t to-transparent p-5">
              <div className="absolute bottom-5 space-y-3">
                <h1 className="text-2xl font-bold md:text-3xl">
                  Unlock Your Learning Journey!
                </h1>
                <p className="text-sm md:text-base">
                  Welcome back to SkillPop – where knowledge meets fun! Sign in
                  to dive into courses that spark curiosity, fuel growth, and
                  turn skills into superpowers.
                </p>
                <span className="text-sm md:text-base">
                  Not a member yet?
                  <Button asChild variant={"link"} className="p-1">
                    <Link href={"/sign-up"}>Join Now</Link>
                  </Button>
                  and start learning today!
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <CustomClerkLoginForm />
          </div>
        </div>
      </section>
    </AuthLoading>
  );
}
