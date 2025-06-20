import React from 'react';
import foot from '../../assets/Footer/foot.jpg';
import logo from '../../assets/logo.png';
import {
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaInstagram,
} from 'react-icons/fa';

const BannerImg = {
  backgroundImage: `url(${foot})`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
};

const FooterLinks = [
  { title: 'Home', link: '/#' },
  { title: 'About', link: '/#about' },
  { title: 'Contact', link: '/#contact' },
  { title: 'Blog', link: '/blog' },
];

const Footer = () => {
  return (
    <footer style={BannerImg} className="text-white pt-10">
      <div className="container backdrop-blur-sm mx-auto  flex items-center px-20 ">
        <div className="grid md:grid-cols-3 gap-10 pb-10">
          {/* === Section 1: Company Info === */}
          <div>
            <img src={logo} alt="Company Logo" className="w-[150px] mb-4" />
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sequi porro odit necessitatibus eaque, non officiis expedita libero nemo magni dolor iure quos laborum illo esse quidem ad dolorem aut.
            </p>
          </div>

          {/* === Section 2: Navigation Links === */}
          <div>
            <h2 className="text-xl font-bold mb-4">Important Links</h2>
            <ul className="space-y-3">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="hover:translate-x-1 transition duration-300 block text-gray-200 hover:text-white"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === Section 3: Socials & Contact === */}
          <div>
            <h2 className="text-xl font-bold mb-4">Connect with Us</h2>
            <div className="flex items-center gap-4 mb-6">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-pink-400" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:text-blue-500" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl hover:text-blue-700" />
              </a>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Calabar, Cross River State</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+234-7043275033</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
