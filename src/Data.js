import React from "react";
const Data = ({ data, searchHandler, term }) => {
  const statusToClassName = {
    Delivered: "blue",
    Completed: "green",
    Prepared: "orange",
  };

  return (
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
        {data.map((Data) => (
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
              <td className={statusToClassName[Data.status]}>{Data.status}</td>
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Data;
