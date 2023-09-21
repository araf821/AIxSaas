"use client";

import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/Button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

interface LandingNavbarProps {}

const LandingNavbar: FC<LandingNavbarProps> = ({}) => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex items-center justify-between bg-transparent p-4">
      <Link className="flex items-center" href="/">
        <div className="relative mr-4 h-8 w-8">
          <Image fill alt="logo" src="/bebibot.png" className="rounded-full" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Bebibot
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
