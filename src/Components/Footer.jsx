import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faXTwitter,
  faLinkedinIn,
  faYoutube,
  faInstagram,
  faGooglePlusG,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  faWifi,
  faPhone,
  faPrint,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center gap-3 bg-gray-300 p-10 pt-0 lg:p-16 lg:pt-0 lg:gap-20 ">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:w-full lg:px-20 border-t border-[#F4511E] pt-10 lg:pt-16">
        <img src="logo.svg" alt="logo" />
        <div className="flex flex-col gap-5">
          <ul className="flex flex-col gap-5">
            <li>
              <FontAwesomeIcon
                className="text-[#F4511E]"
                icon={faLocationDot}
              />{" "}
              345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
            </li>
            <li className="flex justify-between">
              <p>
                <FontAwesomeIcon className="text-[#F4511E]" icon={faPhone} />{" "}
                (123) 456-7890
              </p>
              <p>
                <FontAwesomeIcon className="text-[#F4511E]" icon={faPrint} />{" "}
                (123) 456-7890
              </p>
            </li>
          </ul>
          <ul className="flex gap-3 justify-between text-[#F4511E]">
            <li className="text-[#0A142F] font-normal">Social Media</li>
            <li>
              <FontAwesomeIcon icon={faSquareFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faXTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} />{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGooglePlusG} />
            </li>
            <li>
              <FontAwesomeIcon icon={faPinterest} />
            </li>
            <li>
              <FontAwesomeIcon icon={faWifi} />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between w-full border-t border-[#7BB9FC] pt-5">
        <ul className="flex flex-col items-center gap-4 pb-4 lg:flex-row">
          <li>About us</li>
          <li>Contact us</li>
          <li>Help</li>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
        </ul>
        <p>Copyright © 2020 Minimum living cost. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
