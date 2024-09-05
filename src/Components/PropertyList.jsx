/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import {
  faBed,
  faShower,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PropertyList = ({ listings }) => {
  return (
    <div className="flex items-center justify-center flex-col py-20 gap-6">
      <h3 className="text-center text-2xl text-[#F4511E] font-extrabold lg:text-4xl mb-5">
        Property Listings
      </h3>
      {listings.length > 0 ? (
        // eslint-disable-next-line react/prop-types
        listings.map((listing, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-3xl mb-5 w-11/12 pb-5 lg:w-3/12 lg:h-[400px] flex gap-5 flex-col"
          >
            {listing.photos && (
              <img
                src={URL.createObjectURL(listing.photos)}
                alt={listing.name}
                className="rounded-t-3xl lg:h-[200px] lg:w-full"
              />
            )}

            <div className="px-5 flex flex-col justify-between gap-2">
              <p className="text-xl font-bold tracking-[-0.64px] lg:text-xl">
                {listing.address}
              </p>
              <p className="lg:text-base text-[#818181] ">{listing.roomType}</p>
              <p className="text-xl text-[#F4511E] font-bold tracking-[-0.64px] lg:text-xl">
                {listing.price}/Month
              </p>
              <div className="text-sm font-bold flex justify-between lg:text-base border-t pt-3">
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faBed} />
                  {listing.state}
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faShower} />
                  {listing.city}
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faTableCellsLarge} />
                  {listing.floorCount}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No listings added yet.</p>
      )}
    </div>
  );
};

export default PropertyList;
