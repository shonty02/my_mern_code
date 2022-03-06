import { useEffect, useState } from "react";
import app_config from "../config";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

const ManageProduct = () => {
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/product/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductArray(data);
        setLoading(false);
      });
  };

  const deleteProduct = (id) => {
    fetch(url + "/product/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchData();
        toast.success("Product Successfully Deleted!!", {
          icon: "🎈🎈",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayProducts = () => {
    if (!loading) {
      return productArray.map((product, i) => (
        <tr key={product._id}>
          <td>{i + 1}</td>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>
            {new Date(product.createdAt).toLocaleDateString()} &nbsp;
            {new Date(product.createdAt).toLocaleTimeString()}
          </td>
          <td>
            <Button
              variant="contained"
              color="error"
              onClick={(e) => deleteProduct(product._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </Button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Manage Products</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Create At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayProducts()}</tbody>
      </table>
    </div>
  );
};

export default ManageProduct;