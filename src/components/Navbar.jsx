// Navbar.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="hm-navbar">
      <div className="hm-navbar__top">
        <button className="hm-navbar__login" type="button">
          <FontAwesomeIcon icon={faUser} />
          <span style={{ marginLeft: 4 }}>로그인</span>
        </button>
      </div>

      <div className="hm-navbar__logo">
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          alt="H&M"
        />
      </div>

      {/* 햄버거 (모바일) */}
      <button
        className="hm-navbar__hamburger"
        type="button"
        aria-label="메뉴 열기"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
      </button>

      <nav className={`hm-navbar__menu ${menuOpen ? "is-active" : ""}`}>
        <div className={`hm-navbar__search ${searchOpen ? "is-show" : ""}`}>
          <button
            className="hm-navbar__search-btn"
            type="button"
            aria-label="검색 열기"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="hm-navbar__search-icon"
            />
          </button>
          <input type="text" placeholder="제품검색" />
        </div>

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
