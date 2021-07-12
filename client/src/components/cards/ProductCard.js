import React from "react";
import { Card, Skeleton } from "antd";
import laptop from "../../images/laptop.jpeg";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // destructure
  const { title, description, images, slug } = product;
  const { Meta } = Card;
  return (
    <>
      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <>
            <ShoppingCartOutlined className="text-danger" /> <br /> Add to Cart
          </>,
        ]}
      >
        <Meta
          title={title}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
};
export default ProductCard;
