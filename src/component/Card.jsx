import React from "react";

const Card = ({ image, title, description, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 flex gap-3 items-start">

      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-cover rounded-md"
      />

      <div className="flex-1">

        <h4 className="font-semibold text-sm">
          {title}
        </h4>

        <p className="text-xs text-gray-500 mt-1 leading-snug">
          {description}
        </p>

        <div className="flex items-center justify-between mt-2">

          <span className="text-[#FF7A18] font-semibold text-sm">
            {price}
          </span>

          <button className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FF7A18] text-white text-sm">
            +
          </button>

        </div>
      </div>
    </div>
  );
};

export default Card;