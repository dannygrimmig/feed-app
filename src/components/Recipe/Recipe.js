import * as React from "react";

export function Recipe({ recipe, onClose }) {
  const { name, serves, time, image, ingredients, directions } = recipe;

  return (
    <div>
      <div className="grid md:grid-cols-2 py-4">
        <div className="flex flex-col md:border-r p-4 gap-4">
          <div className="flex justify-between flex-wrap">
            <p className="outline-none text-3xl font-header">{name}</p>
            <button
              className="px-4 py-2 border rounded-full"
              type="button"
              onClick={onClose}
            >
              close
            </button>
          </div>

          <div className="flex items-center pb-6 border-b">
            <div className="flex gap-2">
              <label>serves: </label>
              <p className="outline-none w-8">{serves}</p>
            </div>

            <div className="flex gap-2">
              <label>time: </label>
              <p className="outline-none w-8">{time}</p>
            </div>
          </div>

          <div className="border-b pb-6">
            <label className="font-header">ingredients</label>

            <ol className="pl-4 list-disc">
              {ingredients.map((ingredient, index) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ol>
          </div>

          <div>
            <label className="font-header">directions</label>

            <ol className="pl-4 list-decimal">
              {directions.map((direction, index) => (
                <li key={direction}>{direction}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="p-4 flex flex-col justify-start">
          <img
            src={
              !!image
                ? image
                : "https://t3.ftcdn.net/jpg/02/43/64/02/360_F_243640274_bRUJEbjJw0ei8K9vrHTMVAfKMtwNx0qO.jpg"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
