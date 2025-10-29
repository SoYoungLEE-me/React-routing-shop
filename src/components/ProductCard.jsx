import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card" onClick={showDetail}>
      <img className="card-img" src={product?.img} alt="벨티드 트윌 코트" />

      <div className="card-body">
        <p className="card-title">{product?.title}</p>
        <p className="card-price">{product?.price}원</p>

        <div className="card-size">
          {product?.size?.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        <div className="card-badge">
          {product?.choice && (
            <span className="badge badge-choice">CHOICE</span>
          )}
          {product?.new && <span className="badge badge-new">NEW</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
