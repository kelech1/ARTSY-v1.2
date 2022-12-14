import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MarketplacePage from "./pages/MarketplacePage";
import ProductDetails from "./pages/ProductDetails";
import AuctionPage from "./pages/AuctionPage";
import Cartpage from "./pages/Cartpage";
import ShopingDetails from "./pages/ShopingDetails";
import DropPage from "./pages/DropPage";
import PaymentDetails from "./pages/PaymentDetails";
import Livebid from "./pages/Livebid";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/marketplace/details/:id" element={<ProductDetails />} />
        <Route path="/auction" element={<AuctionPage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/details" element={<ShopingDetails />} />
        <Route path="/drops" element={<DropPage />} />
        <Route path="/payment" element={<PaymentDetails />} />
        <Route path="/livebids" element={<Livebid />} />
      </Routes>
     
    </Router>
  );
}

export default App;
