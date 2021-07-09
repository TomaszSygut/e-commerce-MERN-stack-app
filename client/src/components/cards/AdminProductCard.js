import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
  const { title, images, description } = product;

  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : ""}
          style={{ height: "150px", objectFit: "cover" }}
          className="mt-2"
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default AdminProductCard;
