import React from "react";
import { navLinks } from "../constant";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
// import { Link } from "react-router-dom";

const Navbar = ({ onSearchQueryChange, onCategorySelect }) => {
  const [toggle, setToggle] = React.useState(false);
  const [active, setActive] = React.useState("");

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
    setToggle(false);
    setActive(category);
  };
  return (
    <nav className="w-full flex items-center p-8">
      <div className="w-full flex items-center justify-between text-black">
        <div>
          <h1 className="font-bold text-3xl align-middle hover:cursor-pointer">
            E-commerce
          </h1>
        </div>
        {/* <div className="hidden md:flex">
          <input
            className="md:w-[750px] p-2 rounded-md outline-none relative"
            type="text"
            placeholder="Search for the Products..."
            onChange={(e) => onSearchQueryChange(e.target.value)}
          />
          <button className="w-[100px] bg-gradient-to-l from-black text-white p-2 rounded-md absolute left-[960px] rounded-l-sm">
            Search
          </button>
        </div> */}
        <ul className="list-none sm:flex hidden flex-row gap-10 md:gap-15">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.name ? "text-white" : "text-black"
              } hover:text-white text-[18px] cursor-pointer font-serif font-semibold`}
              onClick={() => {
                handleCategorySelect(link.name);
              }}
            >
              <a href={link.path}>{link.name}</a>
              {/* <Link to={`/${link.path}`}>{link.name}</Link> */}
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-6 h-6 rounded-full mr-2"
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white absolute top-20 z-10 right-0 mx-4 my-2 min-w-[140px] min-h-[200px] rounded-xl`}
          >
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.name ? "text-white" : "text-black"
                  } hover:text-white text-[18px] cursor-pointer font-serif font-semibold`}
                  onClick={() => {
                    setActive(link.name);
                    setToggle(!toggle);
                  }}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
