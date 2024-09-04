import { useState, useEffect } from "react";
import testimonyData from "./testimony.js";

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonyData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = testimonyData[currentIndex];

  return (
    <div className="bg-[#F4511E12]/[7%] mt-20 py-24 px-5 flex flex-col gap-5 lg:flex-row-reverse lg:items-center lg:justify-center">
      <div className="flex items-center justify-center">
        <img src="/mahito.png" alt={currentItem.name} />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 bg-[url(/comma.png)] bg-no-repeat bg-[top_left_] lg:w-[635px] lg:items-start">
        <p className="text-center md:px-20 lg:text-left">{currentItem.description}</p>
        <ul className="flex items-center gap-3">
          <li>
            <img src={currentItem.image2} alt={currentItem.name} />
          </li>
          <li>
            <p>{currentItem.name}</p>
            <p>{currentItem.title}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimony;
