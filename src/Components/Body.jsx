const Body = () => {
  return (
    <div className="font-inter flex flex-col items-center justify-center lg:items-start gap-10 lg:px-32 pt-10 pb-20">
      <h1 className="text-2xl text-center lg:text-left lg:text-4xl/[64px] text-black font-extrabold capitalize">
        minimum living cost takes care of everything
      </h1>
      <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
        <div className="flex items-center justify-center">
          <img
            src="/shot.jpeg"
            alt="shot"
            className=" w-11/12 lg:w-[387px] h-[521px] rounded-tl-[50px] rounded-br-[50px]"
          />
        </div>
        <div className="flex items-center justify-center px-10 lg:flex-col lg:gap-20">
          <div className="flex flex-col lg:flex-row text-base lg:text-2xl font-semibold gap-5">
            <div>
              <div className="w-[77px] h-[77px] bg-white shadow-xl flex items-center justify-center mb-4">
                <img src="/icon1.png" alt="icon1" />
              </div>
              <p className="w-6/12 lg:w-[159px] h-[70px]">
                Pay as Little as possible!
              </p>
            </div>
            <div>
              <div className="w-[77px] h-[77px] bg-white shadow-xl flex items-center justify-center mb-4">
                <img src="/icon2.png" alt="icon2" />
              </div>
              <p className="w-6/12 lg:w-[190px] h-[70px]">
                Enjoy wisdom of community!
              </p>
            </div>
            <div>
              <div className="w-[77px] h-[77px] bg-white shadow-xl flex items-center justify-center mb-4">
                <img src="/icon3.png" alt="icon3" />
              </div>
              <p className="w-6/12 lg:w-[293px] h-[70px]">
                Let&apos;s someone else be the Landlord!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row text-base lg:text-2xl font-semibold gap-5">
            <div>
              <div className="w-[77px] h-[77px] bg-white shadow-xl flex items-center justify-center mb-4">
                <img src="/icon4.png" alt="icon4" />
              </div>
              <p className="w-6/12 lg:w-[188px] h-[70px]">
                Enjoy peaceful Environment!
              </p>
            </div>
            <div>
              <div className="w-[77px] h-[77px] bg-white shadow-xl flex items-center justify-center mb-4">
                <img src="/icon5.png" alt="icon5" />
              </div>
              <p className="w-6/12 lg:w-[163px] h-[70px]">
                Stay Safe! Save Money!
              </p>
            </div>
            <div>
              <div className="w-[77px] h-[77px] bg-white shadow-xl flex items-center justify-center mb-4">
                <img src="/icon6.png" alt="icon6" />
              </div>
              <p className="w-6/12 lg:w-[170px] h-[70px]">
                Pay for what you use !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
