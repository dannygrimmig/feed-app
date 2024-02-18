import * as React from "react";
import { HomeCard } from "../../components/Card/HomeCard/HomeCard";

const array = [1, 2, 3, 4, 5];

export function Home() {
  return (
    <div>
      <h1 className="text-5xl mb-2">Home Page</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {array.map((num) => (
          <HomeCard key={num}>
            <div className="flex flex-col gap-4 px-4">
              <div>
                <h2 className="text-xl">Course Name</h2>
                <p className="text-sm">Location, MA</p>
              </div>

              <div className="flex">
                <figure className="flex items-center">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5eb5a0b9dd0f974ad91537ae/a4ad76ba-08e5-4487-b70b-8a0085618dcd/08aPBGL20-1mm0100Hc-900x600.jpeg"
                    alt=""
                    className="h-[144px] object-contain rounded-lg"
                  />
                </figure>
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-6xl">75</p>
                  <p className="text-sm">+3</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <figure className="w-[24px] h-[24px]">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                    alt=""
                    className="object-contain"
                  />
                </figure>
                <p className="text-sm">05/12/24</p>
              </div>
            </div>
          </HomeCard>
        ))}
      </div>
    </div>
  );
}
