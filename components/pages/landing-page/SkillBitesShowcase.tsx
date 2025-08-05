import {
  Clock,
  MonitorPlay,
  Award,
  Users,
  BarChart2,
  BookOpen,
} from "lucide-react";
import React from "react";

const learningFeatures = [
  {
    icon: Clock,
    title: "10-Minute Lessons",
    description:
      "Bite-sized learning sessions designed for maximum retention and minimal time commitment.",
  },
  {
    icon: MonitorPlay,
    title: "Interactive Content",
    description:
      "Engaging video lessons with embedded quizzes and hands-on exercises.",
  },
  {
    icon: Award,
    title: "Skill Certification",
    description:
      "Earn verifiable credentials to showcase your new competencies.",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with real-world experience.",
  },
  {
    icon: BarChart2,
    title: "Progress Tracking",
    description:
      "Visual dashboards to monitor your learning journey and milestones.",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description:
      "Access cheat sheets, templates, and reference materials anytime.",
  },
];

export default function SkillBitesShowcase() {
  return (
    <div className="py-16 sm:py-24">
      <div className="box-container">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          The SkillPop Learning Experience
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center">
          Discover our unique approach to effective, engaging skill development
        </p>

        <div className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {learningFeatures.map((feature) => (
            <div
              key={feature.title}
              className="hover:border-primary/50 dark:bg-card bg-primary-foreground flex cursor-pointer flex-col rounded-xl border p-6 transition-all hover:shadow-sm"
            >
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <feature.icon className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
