import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtistNavBar from "./ArtistNavBar";
import AdminDash from "./Components/AdminDash";
import AllArtists from "./Components/AllArtists";
// import ArtistDetails from "./Components/ArtistDetails";
// import AllCustomers from "./Components/AllCustomers";
import Customers from "./Components/Customers";
import Artist from "./Components/Artist";
import ArtOrderDetails from "./ArtistTab/ArtOrderDetails";

const ArtistRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <ArtistNavBar />
        <Routes>
          <Route path="/" element={<AdminDash />} />
          <Route path="/allartists" element={<AllArtists />} />
          {/* <Route path="/artisitdetails" element={<ArtistDetails />} /> */}
          {/* <Route path="/allcustomers" element={<AllCustomers />} /> */}
          <Route path="/artorderdetails" element={<ArtOrderDetails />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/artist" element={<Artist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ArtistRoutes;
