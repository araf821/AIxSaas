"use client";

import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/Dialog";
import {
  Check,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  Zap,
} from "lucide-react";
import { useProModal } from "@/hooks/useProModal";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

interface ProModalProps {}

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    colour: "text-violet-500",
    bgColour: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    colour: "text-emerald-500",
    bgColour: "bg-emerald-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    colour: "text-pink-700",
    bgColour: "bg-pink-700/10",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    colour: "text-orange-700",
    bgColour: "bg-orange-700/10",
  },
  {
    label: "Code Generation",
    icon: Code,
    colour: "text-green-700",
    bgColour: "bg-green-700/10",
  },
];

const ProModal: FC<ProModalProps> = ({}) => {
  const { isOpen, onClose } = useProModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 py-1 font-bold">
              Upgrade Bebibot
              <Badge variant="premium" className="py-1 text-sm uppercase">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="space-y-2 pt-2 text-center font-medium text-zinc-900">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="flex items-center justify-between border-black/5 p-3"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("w-fit rounded-md p-2", tool.bgColour)}>
                    <tool.icon className={cn("h-6 w-6", tool.colour)} />
                  </div>
                  <div className="text-sm font-semibold">{tool.label}</div>
                </div>
                <Check className={`${tool.colour} h-5 w-5`} />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size="lg" className="w-full" variant="premium">
            Upgrade <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
