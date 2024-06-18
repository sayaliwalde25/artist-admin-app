import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ArtistOrderTab = ({ data }) => {
  const [ArtistOrders, setArtistOrders] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:5000/artapi/ordersbycustid", {
        CustId: data?._id,
      })
      .then((result) => {
        setArtistOrders(result.data.data);
        console.log("Data", result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h4>ArtistOrderTab</h4>
      {/* Id:{data?._id} */}
    </div>
  );
};

export default ArtistOrderTab;
