import * as React from "react";
import { ShadowBox } from "../ShadowBox/ShadowBox";
import { LocalDining } from "@mui/icons-material";
import TimerIcon from "@mui/icons-material/Timer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { StyledRating } from "../StyledRating/StyledRating";

export function RecipeCard({ recipe, onRecipeClick }) {
  const { id, image, name, chef, stars, serves, time } = recipe;

  function handleClick() {
    onRecipeClick(recipe);
  }

  return (
    <ShadowBox
      outerClassName="hover:bg-slate-800 dark:hover:bg-sky-900"
      innerClassName="bg-white dark:bg-slate-100 hover:translate-x-2 hover:-translate-y-2 transition cursor-pointer"
    >
      <div
        className="flex flex-col gap-4"
        data-testid={id}
        onClick={handleClick}
      >
        <div className="h-[164px] md:h-[200px] bg-slate-100 rounded-t-md">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="object-cover h-full w-full rounded-t-md"
          />
        </div>

        <div className="px-2 pb-4 flex flex-col gap-2">
          <div>
            <h1 className="text-xl">{name}</h1>
            <p className="text-sm flex gap-1 items-center">
              <AccountCircleIcon fontSize="small" />
              {chef}
            </p>
          </div>

          <div>
            <StyledRating
              value={stars}
              icon={<LocalDining />}
              emptyIcon={<LocalDining />}
              precision={0.5}
            />
            <div className="flex gap-4">
              <p className="flex gap-1 items-center">
                <PeopleAltIcon /> {serves.toString()}
              </p>

              <p className="flex gap-1 items-center">
                <TimerIcon /> {time.toString()} min
              </p>
            </div>
          </div>
        </div>
      </div>
    </ShadowBox>
  );
}
