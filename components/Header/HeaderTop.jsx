import { dialogClasses } from "@mui/material";
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

import Logo from "../../public/logo.jpg";
import { AiFillPhone, AiFillMail, AiTwotonePushpin } from "react-icons/ai";

const HeaderTop = () => {
  return (
    <div className="headertopContainer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="header-element">
              <Image src={Logo} alt="Logo" height={50} width={50} />
              <span className="slogan">
                VOTRE SOURCE DE CONFIANCE SUR L'IMMIGRATION CANADIENNE
              </span>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <div className="header-contact-card">
                  <div className="header-contact-icon">
                    <AiFillPhone className="header-contact-card-icon__icon primary font-large-2 float-left" />
                  </div>
                  <div className="header-contact-card__title">
                    <h1>(+216) 73 366 901</h1>
                    <h2>Contactez-nous par téléphone</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="header-contact-card">
                  <div className="header-contact-icon">
                    <AiFillMail className="header-contact-card-icon__icon primary font-large-2 float-left" />
                  </div>
                  <div className="header-contact-card__title">
                    <h1>Par email</h1>
                    <h2>projetcanada@outlook.com</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="header-contact-card">
                  <div className="header-contact-icon">
                    <AiTwotonePushpin className="header-contact-card-icon__icon primary font-large-2 float-left" />
                  </div>
                  <div className="header-contact-card__title">
                    <h1>Immeuble Jaziri B16</h1>
                    <h2> (Voisin Hôtel Cléopâtre)</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
