import { useState } from "react";
// import { Business } from "../../api-service/mock-business";
// import { Icon } from "../icon";
// import { InfoText } from "../info-text";

export const Box = ({ businessDetails }) => {
  const { image_url, name, rating, price, categories, location } =
    businessDetails;
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="grid grid-rows-[repeat(2,_auto)] gap-2 col-span-3 cursor-pointer">
      <div className="aspect-square relative">
        <button
          className="absolute z-10 top-3 right-3"
          onClick={() => {
            setIsFavorite((prevState) => !prevState);
          }}
        ></button>
        <img
          src={image_url}
          alt={`${name} image`}
          className="w-full h-full object-center object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <header className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <h6 className="font-semibold">{name}</h6>
          </div>
        </header>
        {categories.map((category, i) => (
          <span key={category.alias}>
            {category.title}
            {i + 1 < categories.length && ", "}
          </span>
        ))}
        {location.address1}, <strong>{location.city}</strong>
      </div>
    </div>
  );
};
