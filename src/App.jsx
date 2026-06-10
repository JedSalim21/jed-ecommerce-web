import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import AuthProvider from "./context/AuthContext";
import ProductDatails from "./pages/ProductDatails";

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<ProductDatails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
