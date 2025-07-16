import Image from "next/image";
import signupImg from "/public/images/sign-up-picture.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CustomClerkRegForm from "@/components/pages/registration-page/CustomClerkRegForm";
import AuthLoading from "@/components/global/loaders/AuthLoading";

export default function SignUpPage() {
  return (
    <AuthLoading>
      <section className="custom-h-screen w-full">
        <div className="grid h-full w-full grid-cols-2">
          <div className="relative">
            <Image
              src={signupImg}
              alt="SkillPop Sign Up Image"
              className="absolute h-full object-cover"
            />
            <div className="from-background absolute bottom-0 h-96 w-full bg-gradient-to-t to-transparent p-5">
              <div className="absolute bottom-5 space-y-3">
                <h1 className="text-3xl font-bold">
                  Join the Learning Revolution!
                </h1>
                <p>
                  Create your SkillPop account and unlock a world of knowledge,
                  growth, and endless possibilities. Whether you&apos;re
                  starting a new skill or mastering an old one, we’ve got the
                  perfect courses for you.
                </p>
                <span>
                  Already have an account?
                  <Button asChild variant={"link"} className="p-1">
                    <Link href={"/sign-in"}>Sign in </Link>
                  </Button>
                  instead.
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <CustomClerkRegForm />
          </div>
        </div>
      </section>
    </AuthLoading>
  );
}
