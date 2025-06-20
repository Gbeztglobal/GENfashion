import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import men1 from "../../assets/MensCollection/men1.jpg"
import men2 from "../../assets/MensCollection/men2.jpg"
import men3 from "../../assets/MensCollection/men3.jpg"
import men4 from "../../assets/MensCollection/men4.jpg"
import men5 from "../../assets/MensCollection/men5.jpg"
import men6 from "../../assets/MensCollection/men6.jpg"
import men7 from "../../assets/MensCollection/men7.jpg"
import men8 from "../../assets/MensCollection/men8.jpg"
import men9 from "../../assets/MensCollection/men9.jpg"
import men10 from "../../assets/MensCollection/men10.jpg"
import men11 from "../../assets/MensCollection/men11.jpg"
import men12 from "../../assets/MensCollection/men12.jpg"
import men13 from "../../assets/MensCollection/men13.jpg"
import men14 from "../../assets/MensCollection/men14.jpg"
import men15 from "../../assets/MensCollection/men15.jpg"
import men16 from "../../assets/MensCollection/men16.jpg"
import men17 from "../../assets/MensCollection/men17.jpg"
import men18 from "../../assets/MensCollection/men18.jpg"
import men19 from "../../assets/MensCollection/men19.jpg"
import men20 from "../../assets/MensCollection/men20.jpg"
import men21 from "../../assets/MensCollection/men21.jpg"
import men22 from "../../assets/MensCollection/men22.jpg"
import men23 from "../../assets/MensCollection/men23.jpg"
import men24 from "../../assets/MensCollection/men24.jpg"



const menFashionData = [
  {
    id: 1,
    img: men1,
    title: 'Senator Casual',
    color: 'Black',
    rating: 4.5,
  },
  {
    id: 2,
    img: men2,
    title: 'Senator',
    color: 'Ash',
    rating: 4.7,
  },
  {
    id: 3,
    img: men3,
    title: 'Formal Suit',
    color: 'Grey',
    rating: 4.9,
  },
  {
    id: 4,
    img: men4,
    title: 'Denim Jacket',
    color: 'Denim',
    rating: 4.3,
  },
    {
    id: 1,
    img: men5,
    title: 'Men', 
    color: 'Blue',
    rating: 4.5,
  },
  {
    id: 2,
    img: men6,
    title: 'Men Streetwear',
    color: 'Black',
    rating: 4.7,
  },
  {
    id: 3,
    img: men7,
    title: 'Formal Suit',
    color: 'Grey',
    rating: 4.9,
  },
  {
    id: 4,
    img: men8,
    title: 'Denim Jacket',
    color: 'Denim',
    rating: 4.3,
  },
    {
    id: 1,
    img: men9,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.5,
  },
  {
    id: 2,
    img: men10,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.7,
  },
  {
    id: 3,
    img: men11,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.9,
  },
  {
    id: 4,
    img: men12,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.3,
  },
    {
    id: 1,
    img: men13,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.5,
  },
  {
    id: 2,
    img: men14,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.7,
  },
  {
    id: 3,
    img:men15,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.9,
  },
  {
    id: 4,
    img:men16,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.3,
  },
    {
    id: 1,
    img:men17,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.5,
  },
  {
    id: 2,
    img:men18,
   title: 'Classic Wear',
    color: 'HQ',
    rating: 4.7,
  },
  {
    id: 3,
    img: men19,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.9,
  },
  {
    id: 4,
    img: men20,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.3,
  },
    {
    id: 1,
    img: men21,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.5,
  },
  {
    id: 2,
    img: men22,
    title: 'Senator',
    color: '',
    rating: 4.7,
  },
  {
    id: 3,
    img: men23,
    title: 'Classic Wear',
    color: 'HQ',
    rating: 4.9,
  },
  {
    id: 4,
    img: men24,
   title: 'Senator',
    color: 'Blue',
    rating: 4.3,
  },
 
 
];

const MenCollections = () => {
  return (
    <div

    data-aos="fade-up"
     className="bg-white py-10 px-5 text-white dark:bg-gray-900 ">
      <div className="text-center mb-10">
        <h3 className="text-orange-500 text-lg font-semibold">Top Collections For You</h3>
        <h1 className="text-black dark:text-white text-3xl font-bold">Men's Collections</h1>
        <p className="text-gray-500 mt-2">Explore trending men's fashion and styles</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {menFashionData.map(({ id, img, title, color, rating }) => (
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

export default MenCollections;
