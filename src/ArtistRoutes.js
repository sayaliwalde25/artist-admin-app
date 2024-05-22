import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArtistNavBar from "./ArtistNavBar";
import AdminDash from "./Components/AdminDash";
import AllArtists from "./Components/AllArtists";
import ArtistDetails from "./Components/ArtistDetails";
import AllCustomers from "./Components/AllCustomers";
import Customers from "./Components/Customers";
import Artist from "./Components/Artist";
import OrderDetails from "./ArtistTab/OrderDetails";

const ArtistRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <ArtistNavBar />
        <Routes>
          <Route path="/" element={<AdminDash />} />
          <Route path="/allartists" element={<AllArtists />} />
          <Route path="/artisitdetails" element={<ArtistDetails />} />
          <Route path="/allcustomers" element={<AllCustomers />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/artist" element={<Artist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ArtistRoutes;
