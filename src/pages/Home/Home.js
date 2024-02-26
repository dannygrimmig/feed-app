import * as React from "react";
import { HomeCard } from "../../components/Card/HomeCard/HomeCard";

const recipe1 = {
  id: 1,
  name: "Beef Stew",
  chef: "dannygrimmig",
  stars: 3,
  serves: 4,
  time: 30,
};
const recipe2 = {
  id: 2,
  name: "Chicken Pot Pie",
  chef: "graceadonohue",
  stars: 5,
  serves: 6,
  time: 30,
};
const recipe3 = {
  id: 3,
  name: "Ceaser Wrap",
  chef: "dannygrimmig",
  stars: 4.5,
  serves: 2,
  time: 30,
};
const array = [recipe1, recipe2, recipe3];

export function Home() {
  return (
    <div>
      {/* <h1 className="text-5xl mb-2">Home Page</h1> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {array.map((recipe) => (
          <HomeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
