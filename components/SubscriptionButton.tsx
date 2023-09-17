"use client";

import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { Zap } from "lucide-react";
import axios from "axios";

interface SubscriptionButtonProps {
  isSubscribed: boolean;
}

const SubscriptionButton: FC<SubscriptionButtonProps> = ({
  isSubscribed = false,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      disabled={isLoading}
      className=""
      onClick={onClick}
      variant={isSubscribed ? "default" : "premium"}
    >
      {isSubscribed ? "Manage Subscription" : "Upgrade"}
      {!isSubscribed && <Zap className="ml-2 h-4 w-4 fill-white" />}
    </Button>
  );
};

export default SubscriptionButton;
