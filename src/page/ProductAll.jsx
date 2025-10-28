import React, { useEffect, useState } from "react";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const url = `http://localhost:5000/products`;
    const res = await fetch(url);
    const data = await res.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>전체 상품 페이지</h1>
    </div>
  );
};

export default ProductAll;
