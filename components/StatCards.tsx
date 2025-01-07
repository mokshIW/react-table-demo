import React, { ReactNode } from "react";
import { Card } from "./ui/card";
import { DollarSign, Handshake, ChartLine } from "lucide-react";

type SingleCard = {
  id: number;
  title: string;
  value: string;
  icon: ReactNode;
};

export default function StatCards() {
  const stats: SingleCard[] = [
    {
      id: 1,
      title: "Total Sales",
      value: "$125,000",
      icon: <DollarSign size={24} />,
    },
    {
      id: 2,
      title: "Deals in Progress",
      value: "45",
      icon: <Handshake size={24} />,
    },
    {
      id: 3,
      title: "Conversion Rate",
      value: "67%",
      icon: <ChartLine size={24} />,
    },
  ];

  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-7 gap-6 p-6">
      {stats.map((stat, index) => (
        <SingleStatCard key={index} SingleCard={stat} />
      ))}
    </div>
  );
}

function SingleStatCard({ SingleCard }: { SingleCard: SingleCard }) {
  return (
    <Card className="p-4 flex flex-col gap-2 shadow-none">
      {/* Header & Icon */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-600">
          {SingleCard.title}
        </span>
        <div className="size-7 rounded-md flex items-center justify-center text-sm bg-primary/25 font-bold text-primary">
          {SingleCard.icon}
        </div>
      </div>
      {/* Amount */}
      <div className="text-3xl font-bold">{SingleCard.value}</div>
    </Card>
  );
}
