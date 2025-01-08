import Link from "next/link";

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

function Item({ title, path }: { title: string; path: string }) {
  return (
    <Link href={path} className="w-full ">
      <Card className="w-full p-6 h-64 flex flex-row group gap-2 text-center items-center justify-center shadow-md hover:shadow-xl">
        <span className="text-xl font-bold">{title}</span>
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 duration-200 transition-all"
        />
      </Card>
    </Link>
  );
}
export default function ExampleHomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col max-w-3xl w-full items-center justify-center gap-10 pt-10">
        <span className="font-semibold text-4xl text-balance max-w-xl text-center">
          Shadcn Dropdowns with Responsive Dialog for:
        </span>
        <div className="flex flex-row gap-4 w-full ">
          <Item title="Card" path="/card" />
          <Item title="Table" path="/table" />
        </div>
      </div>
    </div>
  );
}
