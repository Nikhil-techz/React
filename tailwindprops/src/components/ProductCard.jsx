import React from "react";

function ProductCard({ name, price, device }) {
  return (
    <div className="bg-gray-300 rounded-lg p-4 shadow-md border-2">
      <li> {name}</li>
      <li> {price}</li>
      <li>{device}</li>
    </div>
  );
}

export default ProductCard;
