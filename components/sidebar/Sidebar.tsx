"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

interface SidebarProps {}

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    colour: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    colour: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    colour: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    colour: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    colour: "text-emerald-500",
  },

  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    colour: "text-green-500",
  },

  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 h-8 w-8">
            <Image fill className="rounded-lg" src="/bebibot.png" alt="logo" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Bebibot
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              className="group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white"
              key={route.label}
              href={route.href}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("mr-3 h-5 w-5", route.colour)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
