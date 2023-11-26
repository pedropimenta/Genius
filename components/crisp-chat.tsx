"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("778541ac-cb4f-448d-b878-c313f1c435e4");
  }, []);

  return null;
};
