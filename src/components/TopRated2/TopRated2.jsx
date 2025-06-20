import React from 'react';
import { FaStar } from 'react-icons/fa6';
import {img,img2,img3 ,man1 ,men15, men22, women1,women2, 
    women5,senator1, senator4, senator5, 
    } from '../../assets/TopRated'
const TopRated2Data = [
  {
    id: 1,
    img:img,
    title: 'Girls Casual',
    color: 'Black',
    rating: 4.5,
  },
  {
    id: 2,
    img: img2,
    title: 'Streetwear',
    color: 'Black',
    rating: 4.7,
  },
  {
    id: 3,
    img: img3,
    title: 'Formal Suit',
    color: 'Blue',
    rating: 4.9,
  },
  {
    id: 4,
    img: man1,
    title: 'Men Casual',
    color: 'Denim',
    rating: 4.3,
  },
    {
    id: 5,
    img: men15,
    title: 'Men Casual',
    color: 'White',
    rating: 4.5,
  },
  {
    id: 6,
    img:men22 ,
    title: 'Men Vintage',
    color: 'Black',
    rating: 4.7,
  },
  {
    id: 7,
    img: women1,
    title: 'Formal Suit',
    color: 'Grey',
    rating: 4.9,
  },
  {
    id: 8,
    img:  women5,
    title: 'Classic',
    color: 'Red',
    rating: 4.3,
  },
    {
    id: 9,
    img:women2,
    title: 'Casual',
    color: 'Yellow',
    rating: 4.5,
  },
  {
    id: 10,
    img: senator1,
    title: 'Senator',
    color: 'Black',
    rating: 4.7,
  },
  {
    id: 11,
    img: senator4,
    title: 'Formal',
    color: 'Black',
    rating: 4.9,
  },
  {
    id: 12,
    img: senator5,
    title: 'Denim',
    color: 'White',
    rating: 4.3,
  },
  
 
];

const TopRated2 = () => {
  return (
    <div

    data-aos="fade-up"
     className="bg-white py-10 px-5 text-white dark:bg-gray-900 ">
      <div className="text-center mb-10">
        <h3 className="text-orange-500 text-lg font-semibold">Top Rated Collections For You</h3>
        <h1 className="text-black dark:text-white text-3xl font-bold">Top Rated Collections</h1>
        <p className="text-gray-500 mt-2">Explore Our Top Rated styles and Fashion</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {TopRated2Data.map(({ id, img, title, color, rating }) => (
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

export default TopRated2;
