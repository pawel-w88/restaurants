import React from "react";
import { MockRestaurant } from "./MockRestaurant";


export const Box = () => {
const { name, image_url, rating, price, categories, location } = MockRestaurant[0];
  return (
    <div className="grid grid-rows-[repeat(2,_auto)] gap-1 col-span-3">
      <div className="aspect-square">
        {/*icon*/}
        <img
          src={image_url}
          alt={`${name} image`}
          className="w-full h-full object-cover object-center rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <header className="flex justify-between">
          <div className="flex gap-2 items-center">
            <h6 className="font-bold">{name}</h6>
            <span>{price}</span>
          </div>
          <div>
            {/* <Heart /> */}
            <span className="text-sm">{rating}</span>
          </div>
        </header>

        <div>
          {categories.map((category, i) => (
            <span key={category.alias}>
              {category.title}
              {i + 1 < categories.length && ", "}
            </span>
          ))}
        </div>
        <div>
          {location.address1}, {location.city}
        </div>
      </div>
    </div>
  );
};
