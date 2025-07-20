import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Link from "next/link";
import { Separator } from "./separator";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";
import { Clock, Star, Users } from "lucide-react";

export default function CourseCard() {
  return (
    <Link href={"#"} className="group">
      <Card className="group-hover:border-primary dark:bg-card bg-primary-foreground duration-300">
        <CardHeader>
          <div className="relative mb-4 h-56 overflow-hidden rounded-lg">
            <Image
              src={"/images/sign-in-picture.webp"}
              alt=""
              width={500}
              height={400}
              className="absolute h-full w-full rounded-lg object-cover object-center duration-300 group-hover:scale-105"
            />
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <Badge variant={"secondary"}>Beginner</Badge>
              <Badge variant={"secondary"}>
                <Clock />
                12h 30m
              </Badge>
            </div>
          </div>
          <CardTitle>Complete Web Development</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-5">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-xs">
              <strong>John Doe</strong>
              <p>Senior Web Developer at Amazon</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Star color="#fbbf24" fill="#fbbf24" size={16} />
              <Star color="#fbbf24" fill="#fbbf24" size={16} />
              <Star color="#fbbf24" fill="#fbbf24" size={16} />
              <Star color="#fbbf24" fill="#fbbf24" size={16} />
              <Star color="#fbbf24" fill="#fbbf24" size={16} />
              <span className="text-muted-foreground text-sm">4.8 (578)</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Users size={16} />
              3,400+ Students
            </div>
          </div>
          <div className="group-hover:border-primary rounded-lg border p-2 duration-300">
            <p className="text-center text-xl font-semibold">$19.99</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
