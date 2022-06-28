import './App.css';
import ProductContainer from "./components/ProductContainer";
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import {Route,Routes,} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductContainer />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
