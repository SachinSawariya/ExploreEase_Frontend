import React, { useState } from "react";
import "./Hotel.css";
import ProductCard from "../../Card/ProductCard";
import Product from "../../Card/ProductApi";

const Hotel = () => {
  const [productData, setProductData] = useState(Product);

  return (
    <div className="hotel">
      <ProductCard productData={productData} />
    </div>
  );
};

export default Hotel;
