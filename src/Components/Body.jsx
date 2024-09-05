const Body = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-2 pt-10 pb-20 md:px-32">
      <h1 className="text-2xl text-center lg:text-left lg:text-3xl/[64px] text-black font-extrabold capitalize">
        minimum living cost takes care of everything
      </h1>
      <div className="flex flex-col items-center justify-center gap-10 md:gap-14 lg:gap-16 lg:flex-row">
        <img
          className="rounded-tl-[50px] rounded-br-[50px] lg:w-[387px] h-[521px] flex-1"
          src="/shot.jpeg"
          alt="shot"
        />
        <div className="flex flex-1 bg-red gap-16 w-10/12 md:w-7/12 lg:flex-col lg:gap-10 ">
          <div className="flex flex-col gap-5 lg:flex-row">
            <p className="flex flex-col lg:w-3/12">
              <img
                className="w-[37.5px] h-[37.5px]"
                src="/icon1.png"
                alt="icon1"
              />
              Pay as Little as possible!
            </p>
            <p className="flex flex-col lg:w-3/12">
              <img
                className="w-[37.5px] h-[37.5px]"
                src="/icon2.png"
                alt="icon2"
              />
              Enjoy wisdom of community!
            </p>
            <p className="flex flex-col lg:w-3/12">
              <img
                className="w-[37.5px] h-[37.5px]"
                src="/icon3.png"
                alt="icon3"
              />
              Let&apos;s someone else be the Landlord!
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row">
            <p className="flex flex-col lg:w-3/12">
              <img
                className="w-[37.5px] h-[37.5px]"
                src="/icon4.png"
                alt="icon4"
              />
              Enjoy peaceful Environment!
            </p>
            <p className="flex flex-col lg:w-3/12">
              <img
                className="w-[37.5px] h-[37.5px]"
                src="/icon5.png"
                alt="icon5"
              />
              Stay Safe! Save Money!
            </p>
            <p className="flex flex-col lg:w-3/12">
              <img
                className="w-[37.5px] h-[37.5px]"
                src="/icon6.png"
                alt="icon6"
              />
              Pay for what you use!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
