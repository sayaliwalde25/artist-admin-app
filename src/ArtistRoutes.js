import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtistNavBar from "./ArtistNavBar";
import AdminDash from "./Components/AdminDash";
import AllArtists from "./Components/AllArtists";
import Artist from "./ArtistTab/Artist";
import ArtistOrderDetails from "./ArtistTab/ArtistOrderDetails";
// import ArtistDetails from "./Components/ArtistDetails";
// import AllCustomers from "./Components/AllCustomers";
import Customers from "./Components/Customers";

const ArtistRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <ArtistNavBar />
        <Routes>
          <Route path="/" element={<AdminDash />} />
          <Route path="/allartists" element={<AllArtists />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/artistorderdetails" element={<ArtistOrderDetails />} />
          {/* <Route path="/artisitdetails" element={<ArtistDetails />} /> */}
          {/* <Route path="/allcustomers" element={<AllCustomers />} /> */}
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ArtistRoutes;
