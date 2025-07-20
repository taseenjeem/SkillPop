import { Badge } from "@/components/ui/badge";
import { FaXTwitter } from "react-icons/fa6";
import TestimonialCarousel from "./TestimonialCarousel";

export default function CreatorShowcase() {
  return (
    <div className="py-16 sm:py-24">
      <div className="box-container">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <FaXTwitter className="text-primary h-5 w-5" />
            <Badge
              variant="outline"
              className="border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium tracking-wide text-sky-600 uppercase dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-400"
            >
              X (Formerly Twitter)
            </Badge>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Hear What Our Learners Say
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            See how 50,000+ students transformed their skills and careers with
            our bite-sized learning approach.
          </p>
        </div>
        <TestimonialCarousel />
      </div>
    </div>
  );
}
