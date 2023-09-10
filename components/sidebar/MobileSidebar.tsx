import { FC } from "react";
import { Button } from "../ui/Button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheet";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {}

const MobileSidebar: FC<MobileSidebarProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
