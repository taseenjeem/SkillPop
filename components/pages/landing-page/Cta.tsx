"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LearningCTA() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
                Why Choose SkillPop
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Learn Smarter, Not Harder
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Our proven micro-learning approach helps you retain more in less
                time. Master skills through bite-sized lessons designed for
                real-world application.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="font-medium">10-Minute Daily Lessons</span>
                  <p className="text-muted-foreground text-sm">
                    Perfect for busy schedules - learn during coffee breaks or
                    commutes
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <BookOpen className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Project-Based Learning</span>
                  <p className="text-muted-foreground text-sm">
                    Build portfolio-worthy projects with every course
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Award className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <span className="font-medium">Verifiable Certificates</span>
                  <p className="text-muted-foreground text-sm">
                    Earn credentials you can share on LinkedIn
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Button asChild>
                <Link href="#">Start Learning Free</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#">Explore Courses</Link>
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-lg">
            <Image
              src="/images/cta.webp" // Replace with your image path
              alt="SkillPop learning dashboard showing progress tracking and lesson interface"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-black/20 p-6">
              <div className="bg-background/90 rounded-lg p-4 text-xs backdrop-blur-sm md:max-w-[80%]">
                <h3 className="font-medium">
                  &quot;SkillPop helped me land my dream job in 3 months!&quot;
                </h3>
                <p className="text-muted-foreground mt-1 text-xs">
                  - Sarah K., Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
