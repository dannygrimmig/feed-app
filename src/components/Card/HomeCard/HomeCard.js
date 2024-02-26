import * as React from "react";
import { ShadowBox } from "../../ShadowBox/ShadowBox";

export function HomeCard({ recipe }) {
  const { id, name, chef, stars, serves, time } = recipe;

  return (
    <ShadowBox
      outerClassName="hover:bg-slate-800 dark:hover:bg-brand-50"
      innerClassName="bg-white dark:bg-brand-50 hover:translate-x-2 hover:-translate-y-2 transition cursor-pointer"
    >
      <div className="flex flex-col gap-4" data-testid={id}>
        <div className="h-[164px] bg-cyan-700 rounded-t-md"></div>

        <div className="px-2 flex flex-col gap-2">
          <div>
            <h1 className="text-xl">{name}</h1>
            <p className="text-sm">{chef}</p>
          </div>

          <div>
            <p>{stars.toString()} stars</p>
            <div className="flex gap-4">
              <p>serves: {serves.toString()}</p>
              <p>time: {time.toString()} min</p>
            </div>
          </div>
        </div>
      </div>
    </ShadowBox>
  );
}
