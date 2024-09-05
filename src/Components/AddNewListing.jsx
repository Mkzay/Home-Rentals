/* eslint-disable react/prop-types */
import { useState } from "react";

const AddNewListing = ({ addListing }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    unitNumber: "",
    city: "",
    state: "",
    roomType: "",
    price: "",
    floorCount: "",
    description: "",
    photos: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addListing(formData);
    setFormData({
      name: "",
      address: "",
      unitNumber: "",
      city: "",
      state: "",
      roomType: "",
      price: "",
      floorCount: "",
      description: "",
      photos: null,
    });
  };

  return (
    <div className="font-inter flex items-center justify-center flex-col gap-10">
      <h3 className="text-lg text-center font-medium lg:text-2xl">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h3>
      <div className="flex flex-col items-center justify-center gap-14 bg-white shadow-2xl p-10 w-11/12 lg:w-10/12">
        <h3 className="text-center text-[#F4511E] font-bold lg:text-3xl">
          Add A New Property
        </h3>
        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 lg:flex-row">
            <label className="flex flex-col">
              Name
              <input
                className="border-fbd border p-2 placeholder:text-fph placeholder:text-base bg-[#F9F9F9] lg:w-80"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
              />
            </label>
            <label className="flex flex-col">
              Address
              <input
                className="border-fbd border p-2 placeholder:text-fph placeholder:text-base bg-[#F9F9F9] lg:w-80"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Address"
                required
              />
            </label>
            <label className="flex flex-col">
              Unit Number
              <input
                className="border-fbd border p-2 placeholder:text-fph placeholder:text-base bg-[#F9F9F9] lg:w-80"
                type="text"
                name="unitNumber"
                value={formData.unitNumber}
                onChange={handleChange}
                placeholder="Enter Unit Number"
              />
            </label>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row">
            <label className="flex flex-col">
              City
              <select
                className="border-fbd border p-2 placeholder:text-fph placeholder:text-base bg-[#F9F9F9] lg:w-80"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select City
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <label className="flex flex-col">
              State
              <select
                className="border-fbd border p-2 placeholder:text-fph placeholder:text-base bg-[#F9F9F9] lg:w-80"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select State
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <label className="flex flex-col">
              Room Type
              <select
                className="border-fbd border p-2 placeholder:text-fph placeholder:text-base bg-[#F9F9F9] lg:w-80"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Room Type
                </option>
                <option value="Single Family">Single Family</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row">
            <label className="flex flex-col">
              Price
              <input
                className="border-fbd border p-2 placeholder:text-fph placeholder:text-base bg-[#F9F9F9] lg:w-80"
                type="text"
                name="price"
                required
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter Price"
              />
            </label>
            <label className="flex flex-col">
              Floor Count
              <select
                className="border-fbd border p-2 placeholder:text-fph placeholder:text-base bg-[#F9F9F9] lg:w-80"
                name="floorCount"
                required
                value={formData.floorCount}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Floor Count
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
          </div>
          <label className="flex flex-col">
            Description
            <textarea
              className="border-fbd border p-2 bg-[#F9F9F9] h-48"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Upload Photos
            <input
              className="border-fbd border p-2 border-separate border-dotted border-orange-500 bg-white w-full h-24"
              type="file"
              name="photos"
              onChange={handleChange}
              required
            />
          </label>
          <div className="flex items-center justify-center">
            <button
              className="bg-[#F4511E] p-4 md:p-3 w-11/12 md:w-4/12 rounded-xl text-white font-medium"
              type="submit"
            >
              Add New Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewListing;
