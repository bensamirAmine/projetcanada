import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

function UsefullLinks() {
  return (
    <div className="top-nav">
      <ul className="top-nav-nav">
        <li className="top-nav-items">
          <Link href="/">
            <a className="top-nav-items__link">Accueil</a>
          </Link>
        </li>
        <li className="top-nav-items">
          <Link href="/about">
            <a className="top-nav-items__link">À propos</a>
          </Link>
        </li>
        {/* <li className="top-nav-items">
          <a href="" className="top-nav-items__link">
            Forum
          </a>
        </li> */}
        <li className="top-nav-items">
          <Link href="/contactus">
            <a className="top-nav-items__link">Contactez-nous</a>
          </Link>
        </li>
        {/* 
        <li className="top-nav-items">
          <a href="" className="top-nav-items__link">
            Account
          </a>
        </li> */}
        <li className="top-nav-items social-icon-container">
          <Link href="https://www.facebook.com/projetcanadatunisie">
            <AiFillFacebook className="facebook" />
          </Link>
          <Link href="https://www.instagram.com/canadaprojet/">
            <AiFillInstagram className="instagram" />
          </Link>
          <Link href="https://twitter.com/projetcanada201">
            <AiFillTwitterCircle className="twitter" />
          </Link>
          {/* <a href="" className="top-nav-items__link social-icon">
            <AiFillYoutube className="youtube" />
          </a> */}
        </li>
      </ul>
    </div>
  );
}

export default UsefullLinks;
