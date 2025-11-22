import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import AddNewProduct from './components/AddNewProduct/AddNewProduct';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/add-product" element={<AddNewProduct />} />
      </Routes>
    </Router>
  );
}

export default App;