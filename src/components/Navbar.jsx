// Navbar.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const logout = () => {
    setAuthenticate(false);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      const keyword = e.target.value.trim(); // 공백 제거
      if (!keyword) return; // 빈 검색어 무시

      navigate(`/?q=${keyword}`); // 검색 실행
      e.target.value = ""; // 검색창 비우기
      setMenuOpen(false); // 메뉴 닫기
    }
  };

  return (
    <header className="hm-navbar">
      {/* 상단 로그인/로그아웃 */}
      <div className="hm-navbar__top">
        <button
          className="hm-navbar__login"
          type="button"
          onClick={authenticate ? logout : goToLogin}
        >
          <FontAwesomeIcon icon={faUser} />
          <span style={{ marginLeft: 4 }}>
            {authenticate ? "로그아웃" : "로그인"}
          </span>
        </button>
      </div>

      {/* 로고 */}
      <div className="hm-navbar__logo">
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          alt="H&M"
          onClick={goToHome}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* 햄버거 버튼 */}
      <button
        className="hm-navbar__hamburger"
        type="button"
        aria-label="메뉴 열기"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
      </button>

      {/* 메뉴 영역 */}
      <nav className={`hm-navbar__menu ${menuOpen ? "is-active" : ""}`}>
        {/* 검색창 */}
        <div className="hm-navbar__search">
          <button
            className="hm-navbar__search-btn"
            type="button"
            aria-label="검색 버튼"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="hm-navbar__search-icon"
            />
          </button>
          <input type="text" placeholder="제품검색" onKeyDown={search} />
        </div>

        {/* 메뉴 리스트 */}
        <ul className="hm-navbar__list">
          <li>여성</li>
          <li>Divided</li>
          <li>남성</li>
          <li>신생아/유아</li>
          <li>아동</li>
          <li>H&M HOME</li>
          <li>Sale</li>
          <li>지속가능성</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
