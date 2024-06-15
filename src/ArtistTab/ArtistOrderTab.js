import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ArtistOrderTab = ({ data }) => {
  const [ArtistOrders, setArtistOrders] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/artapi/allorders")
      .then((result) => {
        setArtistOrders(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h4>ArtistOrderTab</h4>
      {ArtistOrders.map((order) => {
        <h5>{order.OrderDate}</h5>
      })}
    </div>
  );
};

export default ArtistOrderTab;
