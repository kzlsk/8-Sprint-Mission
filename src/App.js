import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Commu from "./pages/Commu";
import Market from "./pages/Market";
import Login from "./pages/Login";
import Header from "./global/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="items" element={<Market />} />
          <Route path="community" element={<Commu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
