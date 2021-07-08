import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { useSelector } from "react-redux";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { createProduct } from "../../../functions/product";
import { toast } from "react-toastify";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
const initialState = {
  title: "Macbook Pro",
  description: "This is the best Apple product",
  price: "45000",
  categories: [],
  category: "",
  subs: [],
  shipping: "Yes",
  quantity: "50",
  images: [],
  colors: ["Black", "Brown", "Silver", "White", "Blue"],
  brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
  color: "White",
  brand: "Apple",
};

const ProductCreate = () => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);
  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories().then((c) => setValues({ ...values, categories: c.data }));
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, " ----- ", e.target.value);
  };

  const handleCategoryChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [], category: e.target.values });

    getCategorySubs(e.target.value).then((res) => {
      setSubOptions(res.data);
      console.log(res.data);
    });
    setShowSub(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is created`);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // if (err.response.status === 400) toast.error(err.response.data);
        toast.error(err.response.data.err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Product create</h4>
          <hr />
          <div className="p-3">
            <FileUpload />
          </div>
          <ProductCreateForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCategoryChange={handleCategoryChange}
            values={values}
            showSub={showSub}
            setValues={setValues}
            subOptions={subOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
