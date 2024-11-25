'use client'

import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <NextUIProvider>
    {children}
    </NextUIProvider>;
};

export default Provider;
