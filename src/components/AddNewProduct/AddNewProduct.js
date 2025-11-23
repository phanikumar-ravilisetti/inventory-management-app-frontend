import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './AddNewProduct.css';
import axios from 'axios';

const AddNewProduct = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    unit: '',
    category: '',
    brand: '',
    stock: '',
    status: 'In Stock',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     axios.post('https://inventory-management-app-backend-w3ca.onrender.com/api/product/new', formData)
      .then(response => {
        console.log('Product added successfully:', response.data);
        alert('Product added successfully!');
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error adding the product!', error);
        alert('Failed to add product. Please try again.');
      });
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <label>Name*</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Unit</label>
        <input type="text" name="unit" value={formData.unit} onChange={handleChange} />

        <label>Category</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} />

        <label>Brand</label>
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} />

        <label>Stock*</label>
        <input type="number" name="stock" value={formData.stock} onChange={handleChange} required />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <label>Image</label>
        <input type="text" name="image" onChange={handleChange} />
    <div className='cancel-addproduct-btn-container'>
        <button type="button" className="cancel-addproduct-btns" onClick={() => navigate("/")}>Cancel</button>
        <button type="submit" className="cancel-addproduct-btns">Add Product</button>
      </div>  
                
      </form>
    </div>
  );
};

export default AddNewProduct;