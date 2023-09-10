import Image from "next/image";
import { FC } from "react";

interface EmptyStateProps {
  label: string;
}

const EmptyState: FC<EmptyStateProps> = ({ label }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-20">
      <div className="relative h-72 w-72">
        <Image alt="empty" fill src="/bebibot.png" />
      </div>
      <p className="text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default EmptyState;
