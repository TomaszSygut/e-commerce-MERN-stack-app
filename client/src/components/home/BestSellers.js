import React, { useEffect, useState } from "react";
import { getProducts, getProductsCount } from "../../functions/product";
import ProductCard from "../cards/ProductCard";
import LoadingCard from "../cards/LoadingCard";
import { Pagination } from "antd";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    const loadAllProducts = () => {
      setLoading(true);
      // sort, order , limit
      getProducts("sold", "desc", page).then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    };
    loadAllProducts();
  }, [page]);

  useEffect(() => {
    getProductsCount().then((res) => {
      setProductsCount(res.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        {loading ? (
          <LoadingCard count={3} />
        ) : (
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-md-4 pb-5 pt-2">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-md pb-5 pt-2">
          <Pagination
            current={page}
            className="d-flex justify-content-center"
            total={(productsCount / 3) * 10}
            onChange={(value) => setPage(value)}
          />
        </div>
      </div>
    </>
  );
};

export default BestSellers;
