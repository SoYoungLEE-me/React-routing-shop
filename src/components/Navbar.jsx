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
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-login">
          <FontAwesomeIcon icon={faUser} />
          <span style={{ marginLeft: "4px" }}>로그인</span>
        </div>
      </div>

      <div className="navbar-logo">
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
        ></img>
      </div>

      {/* 햄버거 버튼 (모바일 전용) */}
      <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
      </div>

      <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <div className={`navbar-search ${searchOpen ? "show" : ""}`}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-icon"
            onClick={() => {
              setSearchOpen(!searchOpen);
            }}
          />
          <input type="text" placeholder="제품검색" />
        </div>
        <ul>
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
