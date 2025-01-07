"use client";
import React, { useEffect, useState } from "react";

import { ArrowLeft, ArrowRight, ChevronFirst, ChevronLast } from "lucide-react";
import { useTheme } from "next-themes";
import PaginationSelection from "./PaginationSelection";
import { Button } from "../ui/button";

export default function PaginationArea() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-100";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className={`relative w-full h-[80px] max-sm:h-[206px] max-sm:pt-4 max-sm:pb-4 overflow-hidden flex justify-between items-center px-6 ${bgColor} border-t max-sm:flex-col max-sm:gap-2`}
    >
      <PaginationSelection />
      <div className="flex gap-6 items-center max-sm:flex-col max-sm:mt-4 max-sm:gap-2">
        <span className="text-sm text-gray-600">Page 1 of 3</span>
        <div className="flex items-center justify-end space-x-2">
          {/* First Page Button */}
          <Button variant="outline" className="size-9 w-12" size="sm">
            <ChevronFirst size={16} />
          </Button>

          {/* Previos Page Button */}
          <Button variant="outline" className="size-9 w-12" size="sm">
            <ArrowLeft size={16} />
          </Button>

          {/* Next Page Button */}
          <Button variant="outline" className="size-9 w-12" size="sm">
            <ArrowRight size={16} />
          </Button>

          {/* Last Page Button */}
          <Button variant="outline" className="size-9 w-12" size="sm">
            <ChevronLast size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
