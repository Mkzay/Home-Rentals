import { useEffect, useState } from "react";

const Listings = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://realtor-data-api-for-real-estate.p.rapidapi.com/realtor_data/property/?city=San%20Jose&state_code=CA&offset=0&api_key=api_key";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
          "x-rapidapi-host": "realtor-data-api-for-real-estate.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setProperties(result.listing || []);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
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

  console.log(properties);

  return (
    <div className="font-inter flex flex-col gap-10">
      <div className="flex items-center justify-between px-2 md:px-8 lg:px-28">
        <h2 className="text-lg font-extrabold md:text-4xl">
          List of Properties
        </h2>
        <button className="bg-[#F4511E] rounded-md text-b w-[150px] h-[40px] md:w-[200px]">
          View All Property
        </button>
      </div>
      <div>
        {properties.length > 0 ? (
          <ul className="flex items-center justify-center flex-wrap gap-5">
            {properties.map((property, index) => (
              <li
                key={index}
                className="h-[350px] w-10/12 shadow-2xl lg:w-80 lg:h-[521px] text-white rounded-3xl"
              >
                <img
                  className="rounded-t-2xl w-full"
                  src={property.image_url}
                  alt={property.title}
                />
                <div>
                  <p className="text-black text-xl/[29.95px] font-bold tracking-[-0.64px] lg:text-2xl/[29.95px]">
                    {property.displayable_address}
                  </p>
                  <div>
                    <p>{property.category}</p>
                    <p>{property.price}/Month</p>
                  </div>
                  <div>
                    <p>{property.num_bedrooms}</p>
                    <p>{property.num_bathrooms}</p>
                    <p>{property.num_floors}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Listings;
