import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Product from "../../pages/Product";
const SingleProduct = ({ product }) => {
  const { title, description, images, slug } = product;
  const { Meta } = Card;

  return (
    <>
      <div className="col-md-7">image carousel</div>
      <div className="col-md-5">
        <Card
          actions={[
            <>
              <ShoppingCartOutlined className="text-success" /> Add to Cart
            </>,
            <Link to="/">
              <HeartOutlined className="text-info" /> <br />
              Add to Wishlist
            </Link>,
          ]}
        >
          <Meta title={title} description={description} />
          <p>price/category/subs/shipping/color/brand/quantity avaiable/sold</p>
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
