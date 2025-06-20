import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import womanimg from "../../assets/WomenCollection/womanimg.jpg";
import womanimg1 from "../../assets/WomenCollection/womanimg1.png";
import womanimg2 from "../../assets/WomenCollection/womanimg2.jpg";
import womanimg3 from "../../assets/WomenCollection/womanimg3.jpg";
import womanimg4 from "../../assets/WomenCollection/womanimg4.jpg";
import womanimg5 from "../../assets/WomenCollection/womanimg5.jpg";
import womanimg6 from "../../assets/WomenCollection/womanimg6.jpg";
import womanimg7 from "../../assets/WomenCollection/womanimg7.jpg";
import womanimg8 from "../../assets/WomenCollection/womanimg8.jpg";
import womanimg9 from "../../assets/WomenCollection/womanimg9.jpg";
import womanimg10 from "../../assets/WomenCollection/womanimg10.jpg";
import womanimg11 from "../../assets/WomenCollection/womanimg11.jpg";
import womanimg12 from "../../assets/WomenCollection/womanimg12.jpg";
import womanimg13 from "../../assets/WomenCollection/womanimg13.jpg";
import womanimg14 from "../../assets/WomenCollection/womanimg14.jpg";
import womanimg16 from "../../assets/WomenCollection/womanimg16.jpg";
import womanimg17 from "../../assets/WomenCollection/womanimg17.jpg";
import womanimg18 from "../../assets/WomenCollection/womanimg18.jpg";
import womanimg19 from "../../assets/WomenCollection/womanimg19.jpg";
import womanimg20 from "../../assets/WomenCollection/womanimg20.jpg";
import womanimg111 from "../../assets/WomenCollection/womanimg111.jpg";
import women3 from "../../assets/WomenCollection/women3.jpg";
import women5 from "../../assets/WomenCollection/women5.jpg";




const womenFashionData = [
      {
    id: 1,
    img: womanimg20,
    title: 'Black Gown',
    color: 'Black',
    rating: 4.5,
  },
  {
    id: 2,
    img: women5,
    title: 'HQ',
    color: 'Red',
    rating: 4.7,
  },
  {
    id: 3,
    img: women3,
    title: 'Formal Suit',
    color: 'White',
    rating: 4.9,
  },
  {
    id: 4,
    img: womanimg111,
    title: 'Women Classic',
    color: 'Denim',
    rating: 4.3,
  },  
  {
    id: 1,
    img: womanimg3,
    title: 'Casual Native',
    color: 'Mixed',
    rating: 4.9,
  },
  {
    id: 2,
    img: womanimg4,
    title: 'Classic',
    color: 'Mixed',
    rating: 4.7,
  },
  {
    id: 3,
    img: womanimg5,
    title: 'Formal',
    color: 'Mixed',
    rating: 4.9,
  },
  {
    id: 4,
    img: womanimg6,
    title: 'Gown',
    color: 'Denim',
    rating: 4.3,
  },
    {
    id: 1,
    img: womanimg7,
    title: 'Women Casual Ankara',
    color: 'Blue',
    rating: 4.5,
  },
  {
    id: 2,
    img: womanimg8,
    title: 'Classic',
    color: 'Grade A',
    rating: 4.7,
  },
  {
    id: 3,
    img: womanimg9,
    title: 'Formal',
    color: 'Grey',
    rating: 4.9,
  },
  {
    id: 4,
    img: womanimg10,
    title: 'Latest Styles',
    color: 'Denim',
    rating: 4.3,
  },
    {
    id: 1,
    img: womanimg12,
    title: 'Latest HQ',
    color: 'Mixed',
    rating: 4.5,
  },
  {
    id: 2,
    img: womanimg13,
    title: 'Classic',
    color: 'Mixed ',
    rating: 4.7,
  },
  {
    id: 3,
    img: womanimg14,
    title: 'Native',
    color: 'Ankara',
    rating: 4.5,
  },
  {
    id: 4,
    img: womanimg1,
    title: 'Classic',
    color: '',
    rating: 4.7,
  },
    {
    id: 1,
    img: womanimg16,
    title: 'Classic Native',
    color: 'Blue',
    rating: 4.5,
  },
  {
    id: 2,
    img: womanimg17,
    title: 'Formal Wear',
    color: 'Mixed',
    rating: 4.9,
  },
  {
    id: 3,
    img: womanimg18,
    title: 'V cut',
    color: 'Mixed',
    rating: 4.9,
  },
  {
    id: 4,
    img: womanimg19,
    title: 'Gown',
    color: 'Denim',
    rating: 4.3,
  },

 
];

const WomensCollections = () => {
  return (
    <div

    data-aos="fade-up"
     className="bg-white py-10 px-5 text-white dark:bg-gray-900 ">
      <div className="text-center mb-10">
        <h3 className="text-orange-500 text-lg font-semibold">Top Collections For You</h3>
        <h1 className="text-black dark:text-white text-3xl font-bold">Women's Collections</h1>
        <p className="text-gray-500 mt-2">Explore trending Women's fashion and styles</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {womenFashionData.map(({ id, img, title, color, rating }) => (
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

export default WomensCollections;
