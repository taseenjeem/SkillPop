import { Badge } from "@/components/ui/badge";

export default function RecommendedCourses() {
  return (
    <section className="box-container">
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
    </section>
  );
}
