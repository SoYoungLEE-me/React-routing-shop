import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

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
    <main className="page">
      <Container className="py-4">
        <Row xs={2} md={3} lg={4} xxl={5} className="g-3">
          {productList.map((p) => (
            <Col key={p.id}>
              <ProductCard product={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default ProductAll;
