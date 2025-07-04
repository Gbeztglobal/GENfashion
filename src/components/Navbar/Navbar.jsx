import { IoMdSearch } from "react-icons/io";
import logo from '../../assets/logo.png';
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { Link } from 'react-router-dom';


// Navigation menu links
const menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Top Rated", link: "/TopRated2" },
  { id: 3, name: "Mens Wear", link: "/MensCollection" },
  { id: 4, name: "Womens Wear", link: "/WomensCollection" },
  { id: 5, name: "Accessories", link: "/Assesories" },
];

// Dropdown links
const Dropdownlinks = [
  { id: 1, name: "Trending Fashion Style", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link:"/TopRated2"}, 
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      {/* Top navbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
          {/* Logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className='h-10' />
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className='relative group hidden sm:block'>
              <input
                type="text"
                placeholder='Search'
                className="w-[200px] sm-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 hover:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>
          </div>

          {/* Order button */}
          <button
            onClick={handleOrderPopup}
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">Order</span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>

          {/* Dark mode toggle */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="inline-block px-4 hover:text-primary duration-200">
                {item.name}
              </Link>
            </li>
          ))}

          {/* Dropdown menu */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-[2px] py-2 cursor-pointer">
              Trending Fashion
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </div>
            <div className="absolute z-[9999] hidden group-hover:block w-[180px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {Dropdownlinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:hover:bg-black text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
