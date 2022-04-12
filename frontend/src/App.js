import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register_new";
import Login from "./components/common/Login";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Buyer from "./components/common/buyer";
import Vendor from "./components/common/vendor";
import Profile_buy from "./components/common/profile_buy";
import Profile_ven from "./components/common/profile_ven";
import Food_items from "./components/common/food_items.js";
import Food_add from "./components/common/food_add.js";
import Buyer_FoodList from "./components/common/buyerfoodlist"
import Vendor_orders from "./components/common/Vendor_orders.js";
import Buyer_orders from "./components/common/Buyer_orders";
import Buyer_Fav from "./components/common/Buyer_Fav";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Home />} />
        </Route>
        <Route path="vendor" element={<Vendor />} />
        <Route path="buyer" element={<Buyer />} />
        <Route path= "profile_buy" element={<Profile_buy />} />
        <Route path= "profile_ven" element={<Profile_ven />} />
        <Route path= "food_items" element={<Food_items />} />
        <Route path= "food_add" element={<Food_add />} />
        <Route path= "buyerfoodlist" element={<Buyer_FoodList />} />
        <Route path= "orders" element={<Vendor_orders />} />
        <Route path= "buyerorders" element={<Buyer_orders />} />
        <Route path= "buyerfavourites" element={<Buyer_Fav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
