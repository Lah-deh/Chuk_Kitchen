import React from "react";
import Card from './Card';
import { Link } from "react-router";

import Food1 from "../assets/Rectangle 21.png";
import Food2 from "../assets/F 2.png";
import Food3 from "../assets/Rectangle 21.png";

const Popular = () => {

  const foods = [
    {
      image: Food1,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: "₦3,500",
    },
    {
      image: Food2,
      title: "Eba & Egusi Soup (Goat Meat)",
      description:
        "Rich egusi soup served with soft eba and tender goat meat.",
      price: "₦3,500",
    },
    {
      image: Food3,
      title: "Peppered Beef",
      description:
        "Spicy grilled beef tossed in rich pepper sauce.",
      price: "₦3,500",
    },
    {
      image: Food1,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, served with crispy fried chicken and plantain.",
      price: "₦3,500",
    },
    {
      image: Food2,
      title: "Eba & Egusi Soup (Goat Meat)",
      description:
        "Rich egusi soup served with soft eba and tender goat meat.",
      price: "₦3,500",
    },
    {
      image: Food3,
      title: "Peppered Beef",
      description:
        "Spicy grilled beef tossed in rich pepper sauce.",
      price: "₦3,500",
    },
  ];

  return (
    <div className="space-y-3 ">
      <h3 className="font-semibold text-lg">Popular</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {foods.map((food, index) => (
        <Card 
          key={index}
          image={food.image}
          title={food.title}
          description={food.description}
          price={food.price}
          className={index >= 3 ? 'hidden sm:block' : ''}
        />
      ))}
      </div>
      <p className='text-[#1E88E5] text-[16px] font-semi-medium mt-5 text-center mb-17 sm:hidden'>
            <Link to='/menu'>View All Categories</Link>
      </p>
    </div>
  );
};

export default Popular;