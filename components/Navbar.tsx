import { FC } from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./sidebar/MobileSidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const apiLimitCount = await getApiLimitCount();
  const isSubscribed = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar
        apiLimitCount={apiLimitCount}
        isSubscribed={isSubscribed}
      />

      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
