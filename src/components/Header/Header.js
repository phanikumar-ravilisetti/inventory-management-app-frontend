import { useNavigate } from "react-router-dom";

import "./Header.css";

import Home from "../Home/Home";

const Header = () => {
    const navigate = useNavigate();
return (<>
        <h1 className="home-title">Inventory Management System</h1>
        <header className="header-container">
            <div className="left-section">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="search-input"
                />

                <select className="category-filter">
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="kitchen">Kitchen</option>
                </select>


                 <button className="add-product-btn" type="button" onClick={() => navigate("/add-product") }>Add New Product</button>
            </div>


            <div className="right-section">
            <button className="import-btn">Import</button>
            <button className="export-btn">Export</button>
            </div>
        </header>
        <Home />
    </>
        );
};

export default Header;