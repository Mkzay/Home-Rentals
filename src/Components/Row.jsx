const Row = () => {
  return (
    <div className="flex flex-col my-10 font-inter items-center justify-center gap-10 lg:flex-row">
      <div className="flex flex-col gap-2 lg:gap-4 w-5/12 lg:w-fit">
        <div className="flex gap-2 lg:gap-4 items-baseline justify-center">
          <img src="flexible.png" alt="image 6" />
          <img className="lg:w-6/12 w-full rounded-b-xl lg:rounded-b-3xl" src="happy.png" alt="image 7" />
        </div>
        <div className="flex gap-2 lg:gap-4 items-start justify-center">
          <img src="month.png" alt="image 8" />
          <img src="choose.png" alt="image 9" />
        </div>
      </div>
      <div className="lg:w-[540px] flex flex-col text-center px-5 items-center lg:px-0 lg:items-start lg:text-left gap-3">
        <h3 className="font-extrabold text-xl lg:text-5xl/[54px]">
          Flexibility and options to suit your lifestyle.
        </h3>
        <p className="lg:text-lg md:px-20">
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </p>
        <button className="lg:text-lg/5 lg:font-semibold font-medium bg-[#F4511E] text-white p-2 rounded-lg w-6/12 lg:p-5 lg:rounded-xl">
          Search Rooms
        </button>
      </div>
    </div>
  );
};

export default Row;
