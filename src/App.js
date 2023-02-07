// import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
// import HomeRight from "./components/HomeRight";
// import PlaceOrder from "./components/PlaceOrder";
// import DanhMuc from "./components/DanhMuc";
// import SoLenh from "./components/SoLenh";
// import TaiSan from "./components/TaiSan";
// import DanhMuc from "./components/DanhMuc";
import Home from "./pages/Home";
// import Board from "./components/Board";
import TaiSan from "./pages/TaiSan";
import HuongDan from "./pages/HuongDan";
// import Middle from "./components/Middle";

function App() {
  return (
    <div className="App">
      {/* <TaiSan /> */}
      {/* <HomeRight /> */}
      {/* <SoLenh /> */}
      {/* <DanhMuc /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/tai-san" element={<TaiSan />}></Route>
        <Route path="/trang-chu" element={<Home />}></Route>
        <Route path="/huong-dan" element={<HuongDan />}></Route>
      </Routes>
      {/* <Middle /> */}
      {/* <Login /> */}
      {/* <Header /> */}
      {/* <TaiSan /> */}
      {/* <HuongDan /> */}
      {/* <Board /> */}
      {/* <Home /> */}
      {/* <PlaceOrder /> */}
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
