import React from "react";
import ArtistNavBar from "./ArtistNavBar";
import AllArtists from "./Components/AllArtist";
import AllCustomers from "./Components/AllCustomer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDash from "./Components/AdminDash";
import ArtistsDetails from "./Components/ArtistsDetails";
import Artist from "./Components/Artist";

function ArtistRountes() {
  return (
    <div>
      <BrowserRouter>
        <ArtistNavBar />
        <Routes>
          <Route path="/" element={<AdminDash />} />
          <Route path="/allartists" element={<AllArtists />} />
          <Route path="/artisitsdetails" element={<ArtistsDetails />} />
          <Route path="/allcustomers" element={<AllCustomers />} />
          <Route path="/artist" element={<Artist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ArtistRountes;
