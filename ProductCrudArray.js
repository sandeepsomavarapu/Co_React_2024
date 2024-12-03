import React, { useState } from "react";

const ProductCrudArray = () => {
  const [productDetails, setProductDetails] = useState({
    productId: "",
    productName: "",
    productCost: "",
    productOnline: "",
    productCategory: "",
    availableInStore: [],
  });

  const [productList, setProductList] = useState([]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setProductDetails({
          ...productDetails,
          availableInStore: [...productDetails.availableInStore, value],
        });
      } else {
        setProductDetails({
          ...productDetails,
          availableInStore: productDetails.availableInStore.filter(
            (store) => store !== value
          ),
        });
      }
    } else {
      setProductDetails({
        ...productDetails,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductList([...productList, productDetails]);
    setProductDetails({
      productId: "",
      productName: "",
      productCost: "",
      productOnline: "",
      productCategory: "",
      availableInStore: [],
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table align="center">
          <tr>
            <td>Product ID</td>
            <td>
              <input
                type="text"
                name="productId"
                value={productDetails.productId}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>
              <input
                type="text"
                name="productName"
                value={productDetails.productName}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Product Cost</td>
            <td>
              <input
                type="number"
                name="productCost"
                value={productDetails.productCost}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Product Online</td>
            <td>
              <input
                type="radio"
                name="productOnline"
                value="Yes"
                checked={productDetails.productOnline === "Yes"}
                onChange={handleChange}
                required
              />
              <label for="yes">Yes</label> &nbsp; &nbsp;
              <input
                type="radio"
                name="productOnline"
                value="No"
                checked={productDetails.productOnline === "No"}
                onChange={handleChange}
                required
              />
              <label for="No">No</label>
            </td>
          </tr>
          <tr>
            <td>Product Category</td>
            <td>
              <select
                name="productCategory"
                value={productDetails.productCategory}
                onChange={handleChange}
                required
              >
                <option value=" ">---Select---</option>
                <option value="Grocery">Grocery</option>
                <option value="Mobile">Mobile</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Available in store</td>
            <td>
              &nbsp; &nbsp; &nbsp;
              <input
                type="checkbox"
                name="availableInStore"
                value="BigBazar"
                checked={productDetails.availableInStore.includes("BigBazar")}
                onChange={handleChange}
              />
              <label>Big Bazaar</label> &nbsp;
              <input
                type="checkbox"
                name="availableInStore"
                value="DMart"
                checked={productDetails.availableInStore.includes("DMart")}
                onChange={handleChange}
              />
              <label>DMart</label> &nbsp;
              <input
                type="checkbox"
                name="availableInStore"
                value="Relaince"
                checked={productDetails.availableInStore.includes("Relaince")}
                onChange={handleChange}
              />
              <label>Relaince</label> &nbsp;
              <input
                type="checkbox"
                name="availableInStore"
                value="Mega Store"
                checked={productDetails.availableInStore.includes("Mega Store")}
                onChange={handleChange}
              />
              <label>Mega store</label> &nbsp;
            </td>
          </tr>
          <button type="Submit">Add Product</button>
        </table>
      </form>
      <br></br>

      <table border="2" style={{ width: "60%" }}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Cost</th>
            <th>Product Online</th>
            <th>Product Category</th>
            <th>Available In Store</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={index}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.productCost}</td>
              <td>{product.productOnline}</td>
              <td>{product.productCategory}</td>
              <td>{product.availableInStore.join(",")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCrudArray;