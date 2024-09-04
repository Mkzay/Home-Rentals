/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const PropertyList = ({ listings }) => {
  return (
    <div className="property-list flex items-center justify-center flex-col">
      <h3 className="text-center text-lg text-[#F4511E] font-extrabold lg:text-4xl mb-5">
        Property Listings
      </h3>
      {listings.length > 0 ? (
        // eslint-disable-next-line react/prop-types
        listings.map((listing, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-3xl mb-5 w-11/12"
          >
            {listing.photos && (
              <img
                src={URL.createObjectURL(listing.photos)}
                alt={listing.name}
                className="rounded-t-3xl"
              />
            )}

            <p className="text-black font-bold text-xl">{listing.address}</p>
            <p className="text-[#F4511E] font-bold text-xl">
              {listing.price}/Month
            </p>
            <p>{listing.floorCount}</p>
            <p>
              {listing.city}, {listing.state}
            </p>
            <p>{listing.roomType}</p>
          </div>
        ))
      ) : (
        <p>No listings added yet.</p>
      )}
    </div>
  );
};

export default PropertyList;
