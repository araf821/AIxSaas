"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { FC } from "react";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/Button";

interface LandingHeroProps {}

const LandingHero: FC<LandingHeroProps> = ({}) => {
  const { isSignedIn } = useAuth();

  return (
    <div className="space-y-5 py-36 text-center font-bold text-white">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>The Best AI Tool for</h1>
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text pb-2 text-transparent">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Code Generation.",
                "Image Generation.",
                "Music Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="text-sm font-light text-zinc-400 md:text-xl">
        Create content using AI 10 times faster!
      </div>

      <div className="">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant={"premium"}
            className="rounded-full p-4 font-semibold md:p-6 md:text-lg"
          >
            Start generating for free!
          </Button>
        </Link>
      </div>

      <div className="text-xs font-normal text-zinc-400 md:text-sm">
        No credit card required!
      </div>
    </div>
  );
};

export default LandingHero;
