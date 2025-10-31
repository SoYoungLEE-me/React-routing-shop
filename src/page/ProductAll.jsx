import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    let searchQuery = query.get("q") || "";

    let url = `https://my-json-server.typicode.com/SoYoungLEE-me/React-routing-shop/products?q=${searchQuery}`;

    const res = await fetch(url);
    const data = await res.json();

    setProductList(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <main className="page">
      <Container className="py-4">
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <ClipLoader color="#36d7b7" size={60} />
          </div>
        ) : productList.length > 0 ? (
          <Row xs={2} md={3} lg={4} xxl={5} className="g-4">
            {productList.map((p) => (
              <Col key={p.id}>
                <ProductCard product={p} />
              </Col>
            ))}
          </Row>
        ) : (
          <div
            style={{
              textAlign: "center",
              marginTop: "100px",
              fontSize: "18px",
              color: "#555",
            }}
          >
            검색 결과가 없습니다.
          </div>
        )}
      </Container>
    </main>
  );
};

export default ProductAll;
