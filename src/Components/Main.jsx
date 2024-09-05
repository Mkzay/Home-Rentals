const Main = () => {
  return (
    <div className="bg-[url(/Main.png)] bg-no-repeat bg-auto w-full h-full flex flex-col items-center justify-between gap-10 md:gap-24 py-28 font-inter lg:gap-0 lg:py-40 lg:flex-row lg:px-32">
      <h1 className="text-2xl text-center lg:text-left lg:text-[52px]/[70px] text-white tracking-[-1px] md:w-6/12 lg:w-[584px] font-bold capitalize">
        The most affortable place to stay in the san franciso bay area
      </h1>
      <div className="w-11/12 h-64 md:w-8/12 md:h-80 lg:w-[408px] lg:h-[340px] rounded-xl flex items-center justify-center">
        <img className="w-full lg:w-[408px] lg:h-[340px]" src="/phd.png" alt="map" />
      </div>
    </div>
  );
};

export default Main;
