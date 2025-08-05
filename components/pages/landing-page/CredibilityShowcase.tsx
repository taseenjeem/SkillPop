import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

interface Company {
  name: string;
  path: string;
}

const companies: Company[] = [
  {
    name: "Google",
    path: "/logos/google.svg",
  },
  {
    name: "Meta",
    path: "/logos/meta.svg",
  },
  { name: "Airbnb", path: "/logos/airbnb.svg" },
  { name: "Amazon", path: "/logos/amazon.svg" },
  { name: "AMD", path: "/logos/amd.svg" },
  { name: "apple", path: "/logos/apple.svg" },
  { name: "Binance", path: "/logos/binance.svg" },
  { name: "Cisco", path: "/logos/cisco.svg" },
  { name: "IBM", path: "/logos/ibm.svg" },
  { name: "meta", path: "/logos/meta.svg" },
  { name: "Nvidia", path: "/logos/nvidia.svg" },
  { name: "OpenAI", path: "/logos/openai.svg" },
  { name: "Spotify", path: "/logos/spotify.svg" },
  { name: "Tesla", path: "/logos/tesla.svg" },
  { name: "Trust Pilot", path: "/logos/trustpilot.svg" },
  { name: "Visa", path: "/logos/visa.svg" },
];
export default function CredibilityShowcase() {
  return (
    <section id="logos">
      <div className="box-container px-4 py-16 sm:py-24 md:px-8">
        <h3 className="text-center text-xl font-semibold tracking-widest text-gray-400 uppercase md:text-3xl">
          TRUSTED BY LEADING TEAMS
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {companies.map((company, idx) => (
              <Image
                key={idx}
                width={112}
                height={40}
                src={company.path}
                className="mx-2 w-20 grayscale md:mx-5 md:w-32 dark:brightness-0 dark:invert"
                alt={company.name}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3"></div>
        </div>
      </div>
    </section>
  );
}
