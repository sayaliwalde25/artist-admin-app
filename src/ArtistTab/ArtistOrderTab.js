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
    // console.log("hello")
  });

  return (
    <div>
      <h4>ArtistOrderTab</h4>
      {ArtistOrders.map((order) => {
        <h4>{order.OrderDate}</h4>;
      })}
    </div>
  );
};

export default ArtistOrderTab;
