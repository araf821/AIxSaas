import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColour?: string;
  bgColour?: string;
}

const Heading: FC<HeadingProps> = ({
  description,
  icon: Icon,
  title,
  bgColour,
  iconColour,
}) => {
  return (
    <div className="mb-8 flex items-center gap-x-3 px-4 lg:px-8 ">
      <div className={cn("w-fit rounded-md p-2", bgColour)}>
        <Icon className={cn("h-10 w-10", iconColour)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold ">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
