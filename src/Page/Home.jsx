import Body from "../Components/Body";
import Main from "../Components/Main";
import Listings from "../Components/Listings";
import PropertyList from "../Components/PropertyList";
import Row from "../Components/Row";
import AddNewListing from "../Components/AddNewListing";
import Footer from "../Components/Footer";
import Testimony from "../Components/Testimony.jsx";
import { useState } from "react";

const Home = () => {
  const [listings, setListings] = useState([]);

  const addNewListing = (newListing) => {
    setListings([...listings, newListing]);
  };
  return (
    <div>
      <Main />
      <Body />
      <Listings />
      <PropertyList listings={listings} />
      <Row />
      <AddNewListing addListing={addNewListing} />
      <Testimony />
      <Footer />
    </div>
  );
};

export default Home;
