import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import Navbar from "./components/Navbar";

//1. 전체 상품 페이지, 로그인, 상품상세페이지
//2. 전체 상품 페이지에서는 전체 상품 목록으르 볼 수 있다.
//3. 상품 디ㅔ일을 눌렀으나, 로그인이 안되어있을 경우 로그인 페이지가 먼저 나온다.
//4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 나온다.
//7. 로그인 로그아웃 상태를 표시해야한다.
//8. 상품을 검색할 수 있어야 한다.

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
