import { useUser } from "@clerk/nextjs";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";

interface UserAvatarProps {}

const UserAvatar: FC<UserAvatarProps> = ({}) => {
  const { user } = useUser();

  return (
    <Avatar className="h-8 w-8 rounded-full">
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
