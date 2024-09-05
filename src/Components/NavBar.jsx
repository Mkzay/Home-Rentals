import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="items-center justify-between lg:gap-64 mt-8 px-5 lg:px-32 absolute right-0 left-0 flex font-inter">
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <ul className="lg:flex items-center gap-16 text-white text-lg hidden">
        <li>
          <a className="cursor-pointer">Home</a>
        </li>
        <li>
          <a className="cursor-pointer">Landlord</a>
        </li>
        <li>
          <a className="cursor-pointer">Tenant</a>
        </li>
        <li>
          <a className="cursor-pointer">Property</a>
        </li>
        <li>
          <a className="cursor-pointer">Contact Us</a>
        </li>
      </ul>
      <button
        onClick={handleMenu}
        className="text-[#F4511E] text-2xl lg:hidden"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 h-screen w-full bg-white flex flex-col items-center justify-center gap-10 p-10 text-3xl lg:hidden`}
      >
        <button onClick={handleMenu} className="text-[#F4511E] fixed top-10 right-10">
          <FontAwesomeIcon icon={faX} />
        </button>
        <li>
          <a className="cursor-pointer">Home</a>
        </li>
        <li>
          <a className="cursor-pointer">Landlord</a>
        </li>
        <li>
          <a className="cursor-pointer">Tenant</a>
        </li>
        <li>
          <a className="cursor-pointer">Property</a>
        </li>
        <li>
          <a className="cursor-pointer">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
