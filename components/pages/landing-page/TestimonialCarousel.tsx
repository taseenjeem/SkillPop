"use client";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Repeat2,
  Heart,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useState } from "react";

const tweets = [
  {
    id: "1",
    user: {
      name: "Priya Patel",
      handle: "@priyacodes",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop",
      verified: true,
    },
    content:
      "Completed the Advanced JavaScript course on SkillPop and landed my first frontend developer role! The project-based learning approach gave me real portfolio pieces to showcase. #careerchange #webdev",
    date: "1d ago",
    metrics: {
      replies: 8,
      retweets: 15,
      likes: 94,
    },
    url: "#",
  },
  {
    id: "2",
    user: {
      name: "Marcus Chen",
      handle: "@marcusdesigns",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
      verified: false,
    },
    content:
      "Never thought I could learn UI design online until I tried SkillPop's 10-minute daily challenges. Now I'm designing apps for clients! The bite-sized lessons made all the difference. #uidesign",
    date: "3d ago",
    metrics: {
      replies: 12,
      retweets: 23,
      likes: 156,
    },
    url: "#",
  },
  {
    id: "3",
    user: {
      name: "SkillPop Alumni",
      handle: "@skillpopgrads",
      avatar:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop",
      verified: true,
    },
    content:
      "Our community now has 50,000+ learners who've completed SkillPop courses! Join us in celebrating their achievements across tech, business, and creative fields. #proudcommunity",
    date: "1w ago",
    metrics: {
      replies: 42,
      retweets: 87,
      likes: 532,
    },
    url: "#",
  },
  {
    id: "4",
    user: {
      name: "Aisha Johnson",
      handle: "@aishatech",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop",
      verified: true,
    },
    content:
      "After finishing the Data Science track, I built a predictive model that got me promoted! The instructor feedback was invaluable. Thank you @skillpopteam! #datascience #careergrowth",
    date: "2w ago",
    metrics: {
      replies: 19,
      retweets: 34,
      likes: 287,
    },
    url: "#",
  },
  {
    id: "5",
    user: {
      name: "Diego Ramirez",
      handle: "@diego_dev",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop",
      verified: false,
    },
    content:
      "SkillPop's React course had me building production-ready apps faster than any bootcamp I tried. The interactive code playgrounds are genius! #reactjs #webdevelopment",
    date: "3w ago",
    metrics: {
      replies: 7,
      retweets: 31,
      likes: 203,
    },
    url: "#",
  },
  {
    id: "6",
    user: {
      name: "Elena Wong",
      handle: "@elenawongart",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop",
      verified: true,
    },
    content:
      "From complete beginner to selling digital illustrations online - all thanks to SkillPop's visual design courses. The 1:1 mentor sessions were game-changers! #digitalart #passiontoprofit",
    date: "1mo ago",
    metrics: {
      replies: 24,
      retweets: 52,
      likes: 421,
    },
    url: "#",
  },
  {
    id: "7",
    user: {
      name: "Tech Career Hub",
      handle: "@techcareers",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
      verified: true,
    },
    content:
      "New data shows SkillPop graduates are 3x more likely to get tech job offers within 6 months compared to traditional courses. Their project-based certifications really stand out to employers! #hiring",
    date: "2mo ago",
    metrics: {
      replies: 38,
      retweets: 143,
      likes: 876,
    },
    url: "#",
  },
  {
    id: "8",
    user: {
      name: "Omar Hassan",
      handle: "@omarmakesmusic",
      avatar:
        "https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?q=80&w=756&auto=format&fit=crop",
      verified: false,
    },
    content:
      "Produced my first EP after completing SkillPop's music production course. Never thought online learning could be this hands-on! The DAW simulations are incredible. #musicproduction",
    date: "2mo ago",
    metrics: {
      replies: 15,
      retweets: 29,
      likes: 312,
    },
    url: "#",
  },
];

export default function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  return (
    <>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="pt-2 pb-6">
            {tweets.map((tweet) => (
              <CarouselItem
                key={tweet.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="dark:bg-card bg-primary-foreground h-full border shadow-sm transition-all hover:shadow-md">
                  <CardContent className="flex h-full flex-col">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={tweet.user.avatar}
                            alt={tweet.user.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-semibold">
                              {tweet.user.name}
                            </span>
                            {tweet.user.verified && (
                              <RiVerifiedBadgeFill
                                className="text-primary h-3.5 w-3.5"
                                fill="#0ea5e9"
                              />
                            )}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            {tweet.user.handle}
                          </div>
                        </div>
                      </div>
                      <FaXTwitter className="text-primary h-5 w-5" />
                    </div>

                    <p className="mb-4 grow text-sm">{tweet.content}</p>

                    <div className="border-t pt-4 md:flex md:items-center md:justify-between">
                      <div className="text-muted-foreground mb-2 text-xs">
                        {tweet.date}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-muted-foreground hover:text-primary flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-xs">
                              {tweet.metrics.replies}
                            </span>
                          </div>
                          <div className="text-muted-foreground flex items-center gap-1 hover:text-green-500">
                            <Repeat2 className="h-4 w-4" />
                            <span className="text-xs">
                              {tweet.metrics.retweets}
                            </span>
                          </div>
                          <div className="text-muted-foreground flex items-center gap-1 hover:text-red-500">
                            <Heart className="h-4 w-4" />
                            <span className="text-xs">
                              {tweet.metrics.likes}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center justify-center gap-4">
          <Button
            size="icon"
            className="h-9 w-9 rounded-full p-0"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            className="h-9 w-9 rounded-full p-0"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  );
}
