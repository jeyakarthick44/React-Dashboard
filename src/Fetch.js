import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const statusToClassName = {
    Delivered: "blue",
    Completed: "green",
    Prepared: "orange",
  };

  useEffect(() => {
    userDetails();
  }, []);

  const userDetails = () => {
    axios
      .get("https://my-json-server.typicode.com/Ved-X/assignment/orders")
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h3 className="order">All ORDERS {20}</h3>
        <h6 className="result">Showing 8 - 10 of 84 results</h6>
        <hr />
        <div className="wrapper">
          <img
            className="search-img"
            src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
          />
          <input
            className="inputField"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>ADDRESS</th>
              <th>PRODUCT</th>
              <th>DATE ORDER</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((val) => {
                if (searchInput === "") {
                  return val;
                } else if (
                  val.customer.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((Data) => (
                <tr>
                  <td>{Data.order_id}</td>
                  <td>{Data.customer}</td>
                  <td className="address">
                    {Data.country}
                    <br />
                    <p>{Data.address}</p>
                  </td>
                  <td className="product_description">
                    {Data.product_title}
                    <br />
                    <p>{Data.product_description}</p>
                  </td>
                  <td>{Data.date}</td>
                  <button className="status">
                    <td className={statusToClassName[Data.status]}>
                      {Data.status}
                    </td>
                  </button>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Fetch;
