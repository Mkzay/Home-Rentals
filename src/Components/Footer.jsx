const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center gap-3 bg-gray-300 p-10 lg:p-16 lg:gap-20">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:w-full lg:px-20">
        <img src="logo.svg" alt="logo" />
        <div className="flex flex-col gap-5">
          <ul className="flex flex-col gap-5">
            <li>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</li>
            <li className="flex justify-between">
              <p>(123) 456-7890</p>
              <p>(123) 456-7890</p>
            </li>
          </ul>
          <ul className="flex gap-3 justify-between">
            <li>Social Media</li>
            <li>F</li>
            <li>X</li>
            <li>L</li>
            <li>Y</li>
            <li>I</li>
            <li>G</li>
            <li>P</li>
            <li>W</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between w-full">
        <ul className="flex flex-col items-center gap-4 pb-4 lg:flex-row">
          <li>About us</li>
          <li>Contact us</li>
          <li>Help</li>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
        </ul>
        <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
