import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [detailInfo, setDetailInfo] = useState([]);
  let { id } = useParams();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/SoYoungLEE-me/React-routing-shop/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();

    setDetailInfo(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <main className="product-detail">
      {/* 이미지 영역 */}
      <div className="detail-image-wrap" style={{ position: "relative" }}>
        {detailInfo?.["new"] === true && (
          <span className="detail-badge">NEW</span>
        )}

        <img className="detail-img" src={detailInfo?.img} alt="상품 이미지" />
      </div>

      {/* 상품 정보 영역 */}
      <div className="detail-info">
        <h2 className="detail-title">{detailInfo?.title}</h2>
        {detailInfo?.["choice"] === true && (
          <p className="detail-sub">conscious choice</p>
        )}
        <p className="detail-price">{detailInfo?.price}원</p>

        <div className="detail-select-row">
          <div className="select-box">
            <label>사이즈</label>
            <select>
              {detailInfo?.size?.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="select-box">
            <label>수량</label>
            <select>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="cart-btn">
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
        </button>

        <button className="buy-btn">바로 구매하기</button>
      </div>
    </main>
  );
};

export default ProductDetail;
