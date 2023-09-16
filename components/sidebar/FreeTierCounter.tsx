import { FC, useEffect, useState } from "react";
import { Card, CardContent } from "../ui/Card";
import { MAX_FREE_LIMIT } from "@/constants";
import { Progress } from "../ui/Progress";
import { Button } from "../ui/Button";
import { Zap } from "lucide-react";

interface FreeTierCounterProps {
  apiLimitCount: number;
}

const FreeTierCounter: FC<FreeTierCounterProps> = ({ apiLimitCount = 0 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="px-3 ">
      <Card className="border-0 bg-white/10">
        <CardContent className="py-6 ">
          <div className="mb-4 space-y-2 text-center text-sm text-white">
            <p>
              {apiLimitCount} / {MAX_FREE_LIMIT} Free Generations
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_LIMIT) * 100}
            />
          </div>
          <Button variant="premium" className="w-full">
            Upgrade
            <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeTierCounter;
