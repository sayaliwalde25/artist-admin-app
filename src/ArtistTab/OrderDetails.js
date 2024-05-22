import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../CSS/OrderDetails.css";

const OrderDetails = () => {
  // useLocation
  const orderData = useLocation().state;
  const [orderDetails, setorderDetails] = useState([]);

  // useEffect
  useEffect(() => {
    axios
      .post("http://localhost:5000/artapi/orderbyid", {
        orderid: orderData._id,
      })
      .then((result) => {
        setorderDetails(result.data.data);
        console.log("order", result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="orderdetails-div">
      <h4>OrderDetails</h4>
      <p>{orderData._id}</p>
      <div>
        <div>
          <h6>ArtWork Name:{orderData?.CustId?.UserName}</h6>
          <h6>ArtWork Type:{orderData?.CustId?.UserEmail}</h6>
          <h6>ArtWork Type:{orderData?.CustId?.UserPassword}</h6>
          <h6>ArtWork Type:{orderData?.CustId?.UserMobileNo}</h6>
          <h6>ArtWork Type:{orderData?.CustId?.User_Type}</h6>
          {/* <h6>ArtWork Name:{orderData?.CustId?.CustomerName}</h6> */}
          {/* <h6>ArtWork Type:{orderData?.CustId?.CustomerEmail}</h6> */}
        </div>
        <div className="orderdetails-divs">
          {orderData.OrderItems.map((order) => {
            return (
              <div className="orderdetails-">
                <Card className="orderdetails-card">
                  <Card.Img
                    className="orderdetails-img"
                    src={`http://localhost:5000${order.ArtWorkId.ArtWorkImage}`}
                  />
                  <Card.Body className="orderdetails-body">
                    <div className="orderdetails-div">
                      <p className="orderdetails-p">
                        <span className="orderdetails-span">Quantity:</span>{" "}
                        {order.Qty}
                      </p>
                      <p className="orderdetails-p">
                        <span className="orderdetails-span">Name:</span>{" "}
                        {order.ArtWorkId.ArtWorkName}
                      </p>
                      <p className="orderdetails-p">
                        <span className="orderdetails-span">Price:</span>{" "}
                        {order.ArtWorkId.ArtWorkPrice}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
