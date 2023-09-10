import Image from "next/image";
import { FC } from "react";

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-4">
      <div className="relative h-10 w-10 animate-spin">
        <Image alt="logo" fill src="/bebibot.png" />
      </div>
      <p className="text-sm text-muted-foreground">Bebibot is thinking...</p>
    </div>
  );
};

export default Loader;
