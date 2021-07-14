import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../functions/category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then((categories) => {
      setCategories(categories.data);
      setLoading(false);
    });
  }, []);
  const showCategories = () =>
    categories.map((category) => (
      <div
        key={category._id}
        className="btn btn-outlined-primary btn-lg btn-block btn-raised m-3"
      >
        <Link to={`/category/${category.slug}`}>{category.name}</Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <h4 className="text-center"> Loading...</h4>
        ) : (
          showCategories()
        )}
      </div>
    </div>
  );
};

export default CategoryList;
