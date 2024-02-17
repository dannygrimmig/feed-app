import * as React from "react";
import { HomeCard } from "../../components/Card/HomeCard/HomeCard";

const array = [1, 2, 3, 4, 5];

export function Home() {
  return (
    <div>
      <h1 className="text-5xl mb-2">Home Page</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {array.map((num) => (
          <HomeCard key={num}>{num}</HomeCard>
        ))}
        <HomeCard>
          <div className="h-[250px]">hey</div>
        </HomeCard>
      </div>
    </div>
  );
}
