"use client";

import { FC, useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

interface CrispChatProps {}

const CrispChat: FC<CrispChatProps> = ({}) => {
  useEffect(() => {
    Crisp.configure("2251f1d9-d913-4ce7-af93-361862768525");
  }, []);

  return null;
};

export default CrispChat;
