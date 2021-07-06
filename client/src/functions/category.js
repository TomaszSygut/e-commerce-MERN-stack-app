import axios from 'axios';

export const getCategories = async () =>  await axios.get(`${process.env.REACT_APP_API}/categories`);

export const Category = async (slug) =>  await axios.get(`${process.env.REACT_APP_API}/category/${slug}`);

export const removeCategories = async (slug, authtoken) =>  {
    await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
        headers: {
            authtoken,
        }
    });
}

export const updateCategories = async (slug, category, authtoken) =>  {
    await axios.put(`${process.env.REACT_APP_API}/category/${slug}`, {
        headers: {
            authtoken,
        }
    });
}

export const createCategories = async (category, authtoken) =>  {
    await axios.put(`${process.env.REACT_APP_API}/category/`,category,  { 
        headers: {
            authtoken,
        }
    }); 
}
  