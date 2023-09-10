import { FC } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

interface BotAvatarProps {}

const BotAvatar: FC<BotAvatarProps> = ({}) => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="rounded-full" src="/bebibot.png" />
    </Avatar>
  );
};

export default BotAvatar;
