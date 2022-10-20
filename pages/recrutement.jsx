import React from "react";
import Head from "next/head";
import Image from "next/image";
import CountUp, { startAnimation } from "react-countup";
import {
  FaCanadianMapleLeaf,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import Header from "../components/Header/Header";

import image from "../public/image1.jpg";
import iheb from "../public/iheb.jpg";
import mohamed from "../public/mohamed.jpg";
import AboutUs from "../layouts/sections/AboutUs";
import image1 from "../public/leaf.png";
import image2 from "../public/bg3.jpg";
import image3 from "../public/bg4.jpg";
import map from "../public/map.png";
import Link from "next/link";
function recrutement(props) {
  return (
    <div className="services-page">
      <div className="services-page-fourth-section p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image src={map} width={500} height={500} />
            </div>
            <div className="col-md-6">
              <h1 className="bg-text">Recrutement</h1>
              <h1>Service de recrutement</h1>
              <p>
                Notre équipe de recruteurs prend en charge le processus complet
                du recrutement, de la sélection du candidat jusqu'à l'obtention
                de son visa, ainsi qu'à son accueil ici. Nous accordons une
                grande importance à l’intégration de chaque travailleur étranger
                dans son nouveau milieu de vie. En clair: nous éliminons de
                nombreux tracas pour que le recrutement de main d'oeuvre
                étrangère fonctionne pour votre entreprise.
              </p>
              <span className="btn-3d-rotate mt-4">
                <Link href="/contactus">
                  <a href="#"></a>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default recrutement;
