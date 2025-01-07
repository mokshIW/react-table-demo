import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "../ui/select";

export default function PaginationSelection() {
  return (
    <div className="flex items-center gap-3">
      <div className="text-gray-500 text-sm">Rows per page</div>
      <Select>
        <SelectTrigger className="w-[90px]">
          <SelectValue placeholder="4" />
        </SelectTrigger>
        <SelectContent>
          {[4, 6, 8, 10, 15, 20, 30].map((size) => (
            <SelectItem key={size} value={size.toString()}>
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
