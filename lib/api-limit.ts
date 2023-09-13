import { auth } from "@clerk/nextjs";
import db from "./prismadb";
import { MAX_FREE_LIMIT } from "@/constants";

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await db.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApiLimit) {
    await db.userApiLimit.update({
      where: {
        userId,
      },
      data: {
        count: userApiLimit.count + 1,
      },
    });
  } else {
    await db.userApiLimit.create({
      data: {
        userId,
        count: 1,
      },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await db.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_LIMIT) {
    return true;
  } else {
    return false;
  }
};
