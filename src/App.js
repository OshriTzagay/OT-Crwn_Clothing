import { Routes, Route } from "react-router-dom";
import Home from "./Components/routes/home/home.component";
import Navigation from "./Components/routes/navigation/Nav";
import Auth from "./Components/routes/Auth-Compo/Auth";
import Shop from "../src/Components/routes/shop/shop";
import CheckOut from "./Components/Check-Out-Compo/check-out";

// https://62a1cccd148db15e5c8a2098--euphonious-cucurucho-c6f100.netlify.app/

//!Deploy Link ^^^^^

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<CheckOut />} />

        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
