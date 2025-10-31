import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";

    let url = `https://my-json-server.typicode.com/SoYoungLEE-me/React-routing-shop/products?q=${searchQuery}`;

    const res = await fetch(url);
    const data = await res.json();

    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <main className="page">
      <Container className="py-4">
        <Row xs={2} md={3} lg={4} xxl={5}>
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
