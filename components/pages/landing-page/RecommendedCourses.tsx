import { Badge } from "@/components/ui/badge";
import CourseCard from "@/components/ui/course-card";

export default function RecommendedCourses() {
  return (
    <section className="box-container py-16 sm:py-24">
      <div className="mb-12 text-center">
        <Badge
          variant="outline"
          className="border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium tracking-wide text-sky-600 uppercase dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400"
        >
          CAREER BOOSTERS
        </Badge>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Skills That Get You Hired
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
          Top-rated courses with industry-recognized certifications to advance
          your career.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
}
