import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Bag from "../../assets/Assesories/Bag.jpg"
import glass from "../../assets/Assesories/glass.jpg"
import Glasses from "../../assets/Assesories/Glasses.jpg"
import Hat1 from "../../assets/Assesories/Hat1.jpg"
import shoe from "../../assets/Assesories/shoe.jpg"
import shoe1 from "../../assets/Assesories/shoe1.jpg"
import shoe3 from "../../assets/Assesories/shoe3.jpg"
import shoes4 from "../../assets/Assesories/shoe4.jpg"
import shoe5 from "../../assets/Assesories/shoe5.jpg"
import shoe6 from "../../assets/Assesories/shoe6.jpg"
import shoe7 from "../../assets/Assesories/shoe7.jpg"
import shoe8 from "../../assets/Assesories/shoe8.jpg"
import shoe9 from "../../assets/Assesories/shoe9.jpg"
import shoe11 from "../../assets/Assesories/shoe11.jpg"
import straw from"../../assets/Assesories/straw.jpg"



const AssesoriesData = [
  {
    id: 1,
    img: Bag,
    title: 'Classic Bag',
    color: 'Blue',
    rating: 4.5,
  },
  {
    id: 2,
    img: shoe5,
    title: 'Men ',
    color: 'Black',
    rating: 4.7,
  },
  {
    id: 3,
    img: glass,
    title: 'Formal',
    color: 'Grey',
    rating: 4.9,
  },
  {
    id: 4,
    img: Glasses,
    title: '____',
    color: 'Denim',
    rating: 4.3,
  },
    {
    id: 1,
    img:Hat1,
    title: 'Men',
    color: 'Blue',
    rating: 4.5,
  },
  {
    id: 2,
    img: Hat1,
    title: 'Men',
    color: 'Black',
    rating: 4.7,
  },
  {
    id: 3,
    img: shoe,
    title: 'Formal Suit',
    color: 'Grey',
    rating: 4.9,
  },
  {
    id: 4,
    img: shoe1 ,
    title: 'Denim ',
    color: 'Denim',
    rating: 4.3,
  },
    {
    id: 1,
    img: shoe3 ,
    title: 'Casual',
    color: '____',
    rating: 4.5,
  },
  {
    id: 2,
    img: shoes4,
    title: 'Men Streetwear',
    color: 'Black',
    rating: 4.7,
  },
  {
    id: 3,
    img: shoe6,
    title: 'Formal',
    color: 'Grey',
    rating: 4.9,
  },
  {
    id: 4,
    img:shoe7,
    title: 'Denim',
    color: 'Denim',
    rating: 4.3,
  },
    {
    id: 1,
    img: shoe8,
    title: 'Men Casual',
    color: '____',
    rating: 4.5,
  },
  {
    id: 2,
    img: shoe9,
    title: 'Men Streetwear',
    color: 'Black',
    rating: 4.7,
  },
  {
    id: 3,
    img:shoe11,
    title: '____',
    color: '____',
    rating: 4.9,
  },
  {
    id: 4,
    img: straw,
    title: '____',
    color: 'Denim',
    rating: 4.3,
  },

];

const Assesories = () => {
  return (
    <div

    data-aos="fade-up"
     className="bg-white py-10 px-5 text-white dark:bg-gray-900 ">
      <div className="text-center mb-10">
        <h3 className="text-orange-500 text-lg font-semibold">Top Rated Collections For You</h3>
        <h1 className="text-black dark:text-white text-3xl font-bold">Our Exclusive Assesories</h1>
        <p className="text-gray-500 mt-2">Explore Our Exclusive Assesories</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {AssesoriesData.map(({ id, img, title, color, rating }) => (
          <div key={id} className="bg-[#161b22] rounded-lg p-4 text-center shadow-lg">
            <img src={img} alt={title} className="h-60 w-full object-cover rounded-md mb-4" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-400 text-sm">{color}</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-yellow-400">
              <FaStar />
              <span className="text-white">{rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assesories;
