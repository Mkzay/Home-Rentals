import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="items-center justify-between lg:gap-64 mt-8 px-5 lg:px-32 absolute right-0 left-0 flex">
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
      <button className="text-[#F4511E] text-2xl lg:hidden">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default NavBar;
