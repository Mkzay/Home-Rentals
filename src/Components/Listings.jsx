import { useEffect, useState } from "react";

const Listings = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.rentcast.io/v1/listings/rental/long-term?city=Austin&state=TX&status=Active&limit=12";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-Api-Key": "c04c7970ad90484ca2adf7f589d59f3f",
        },
      };

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        console.log(result);

        setProperties(result || []);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        console.error("Fetch error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center">{error}</div>;
  }

  return (
    <div className="font-inter flex flex-col gap-10 lg:gap-20 bg-[#F5F5F5] py-28 md:py-36 lg:py-24">
      <div className="flex items-center justify-between px-2 md:px-8 lg:px-28">
        <h2 className="text-lg font-extrabold md:text-4xl">
          List of Properties
        </h2>
        <button className="bg-[#F4511E] rounded-md text-white w-[150px] h-[40px] md:w-[200px]">
          View All Property
        </button>
      </div>
      <div>
        {properties.length > 0 ? (
          <ul className="flex items-center justify-center flex-wrap lg:px-20 lg:gap-28 lg:pb-32 gap-24">
            {properties.map((property, index) => (
              <li
                key={index}
                className="h-[350px] w-10/12 md:w-5/12 shadow-2xl gap-10 lg:w-72 lg:h-[321px] bg-black text-white rounded-3xl"
              >
                <img
                  className="rounded-t-2xl w-full h-[200px]"
                  src={property.image_url}
                />
                <div className="p-4 bg-white rounded-b-2xl shadow-2xl md:h-[200px] flex flex-col justify-between gap-5 text-black">
                  <p className="text-xl font-bold tracking-[-0.64px] lg:text-xl">
                    {property.formattedAddress}
                  </p>
                  <div className="font-normal flex flex-col">
                    <p className="lg:text-base text-[#818181] ">
                      {property.propertyType}
                    </p>
                    <p className="text-xl text-[#F4511E] font-bold tracking-[-0.64px] lg:text-xl">
                      {property.price}/Month
                    </p>
                  </div>
                  <div className="text-sm font-bold flex justify-between lg:text-base border-t pt-2">
                    <p>{property.bedrooms}</p>
                    <p>{property.bathrooms}</p>
                    <p>{property.squareFootage}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default Listings;
