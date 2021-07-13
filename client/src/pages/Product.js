import React, { useState, useEffect } from "react";
import { getProduct } from "../functions/product";

const Product = ({ match }) => {
  const [product, setProduct] = useState(3);
  const { slug } = match.params;
  useEffect(() => {
    loadSingleProduct();
  }, []);

  const loadSingleProduct = () =>
    getProduct(slug).then((res) => setProduct(res.data));

  return <div>{JSON.stringify(product)}</div>;
};

export default Product;
