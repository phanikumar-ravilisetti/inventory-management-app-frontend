import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
    const [editingRowId, setEditingRowId] = useState(null);
const fetchProducts = async () => {   
    try {
      const response = await axios.get("https://inventory-management-app-backend-w3ca.onrender.com/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }       
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onEditing = (id) => {
    setEditingRowId(id);
  }

  const onSave = (id) => {  
    const productToUpdate = products.find((product) => product.id === id);
    axios.put(`http://localhost:3000/api/product/${id}`, productToUpdate)
      .then(response => {   
        console.log('Product updated successfully:', response.data);
        alert('Product updated successfully!');
        setEditingRowId(null);
        fetchProducts();
      })
      .catch(error => {
        console.error('There was an error updating the product!', error);
        alert('Failed to update product. Please try again.');
      });   
  }


  return (
    <div className="home-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Unit</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty-row">
                No products found
              </td>
            </tr>
          ) : (
            products.map((item) => (
              <tr key={item.id}>
                <td>{editingRowId === item.id ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={item.name}
                      onChange={(e) => {
                        const updatedProducts = products.map((product) =>
                          product.id === item.id ? { ...product, name: e.target.value } : product
                        );
                        setProducts(updatedProducts);
                      }}
                    />
                  ) : (
                    item.name
                  )}</td>
                <td>{editingRowId === item.id ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={item.unit}
                      onChange={(e) => {
                        const updatedProducts = products.map((product) =>
                          product.id === item.id ? { ...product, unit: e.target.value } : product
                        );
                        setProducts(updatedProducts);
                      }}
                    />
                  ) : (
                    item.unit
                  )}</td>
                <td>{editingRowId === item.id ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={item.category}
                      onChange={(e) => {
                        const updatedProducts = products.map((product) =>
                          product.id === item.id ? { ...product, category: e.target.value } : product
                        );
                        setProducts(updatedProducts);
                      }}
                    />
                  ) : (
                    item.category
                  )}</td>
                <td>{editingRowId === item.id ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={item.brand}
                      onChange={(e) => {
                        const updatedProducts = products.map((product) =>
                          product.id === item.id ? { ...product, brand: e.target.value } : product
                        );
                        setProducts(updatedProducts);
                      }}
                    />
                  ) : (
                    item.brand
                  )}</td>
                <td>{editingRowId === item.id ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={item.stock}
                      onChange={(e) => {
                        const updatedProducts = products.map((product) =>
                          product.id === item.id ? { ...product, stock: e.target.value } : product
                        );
                        setProducts(updatedProducts);
                      }}
                    />
                  ) : (
                    item.stock
                  )}</td>
                <td className={item.status === "In Stock" ? "active-status" : "inactive-status"}>
                  {editingRowId === item.id ? (
                    <select
                      className="edit-input"
                      value={item.status}
                      onChange={(e) => {
                        const updatedProducts = products.map((product) =>
                          product.id === item.id ? { ...product, status: e.target.value } : product
                        );
                        setProducts(updatedProducts);
                      }}
                    >
                      <option value="In Stock">In Stock</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  ) : (
                    item.status
                  )}</td>
                <td>
                {editingRowId === item.id ? (
                    <>
                      <button className="save-btn" onClick={() => onSave(item.id)}>Save</button>
                    </>
                ) : (
                    <button className="edit-btn" onClick={() => onEditing(item.id)}>Edit</button>
                )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
