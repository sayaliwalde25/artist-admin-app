import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtistNavBar from "./ArtistNavBar";
import AdminDash from "./AdminDash";
import AllArtists from "./AllArtists";
import Artist from "../ArtistTab/Artist";
// import ArtistOrderDetails from "../ArtistTab/ArtistOrderDetails";
// import ArtistDetails from "./Components/ArtistDetails";
// import AllCustomers from "./Components/AllCustomers";
import Customers from "./Customers";

const ArtistRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <ArtistNavBar />
        <Routes>
          <Route path="/" element={<AdminDash />} />
          <Route path="/allartists" element={<AllArtists />} />
          <Route path="/artist" element={<Artist />} />
          {/* <Route path="/artistorderdetails" element={<ArtistOrderDetails />} /> */}
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ArtistRoutes;
