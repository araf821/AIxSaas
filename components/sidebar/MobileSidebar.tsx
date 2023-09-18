"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheet";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {
  apiLimitCount: number;
  isSubscribed: boolean;
}

const MobileSidebar: FC<MobileSidebarProps> = ({
  apiLimitCount = 0,
  isSubscribed = false,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} isSubscribed={isSubscribed} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
