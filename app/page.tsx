import Navbar from "@/components/Navbar";
import StatCards from "@/components/StatCards";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="m-5 poppins">
      <Card>
        <Navbar />
        <StatCards />
      </Card>
    </div>
  );
}
