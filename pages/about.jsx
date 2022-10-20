import React from "react";
import Head from "next/head";
import Image from "next/image";
import CountUp, { startAnimation } from "react-countup";
import { FaCanadianMapleLeaf, FaArrowRight } from "react-icons/fa";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import Header from "../components/Header/Header";

import image from "../public/image1.jpg";
import iheb from "../public/iheb.jpg";
import mohamed from "../public/mohamed.jpg";
import AboutUs from "../layouts/sections/AboutUs";
const theme = createTheme({
  palette: {
    primary: {
      main: "#EC1E24",
    },
    secondary: {
      main: "#00fff0",
    },
  },
});
const about = () => {
  return (
    <div>
      <Head>
        <title>About us</title>
      </Head>
      <div className="about-us-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container py-5 first-section">
                <div className="section-title">
                  <h1>
                    à propos <span>Projet</span> canada
                  </h1>
                </div>
                <div className="container pb-5">
                  <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center p-5 w-100">
                      <iframe
                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fprojetcanadatunisie%2Fvideos%2F1852141531486326%2F&show_text=false&width=560&t=0"
                        width="80%"
                        height="500"
                        scrolling="no"
                        frameBorder="0"
                        allowfullscreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen={true}
                      ></iframe>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center ">
                      <h2>Qui sommes-nous ?</h2>
                      <p className="mx-5 p-2">
                        <b>Projet Canada</b> Cabinet d’immigration pour
                        travailleur étranger, travailleur qualifié, étudiant,
                        investisseur, famille et entreprises, possède
                        l'expérience et les outils nécessaires pour mener à bien
                        tous vos dossiers d’immigration et répondre à vos
                        besoins. <br />
                        Nous sommes ici pour vous aider à réaliser vos rêves.
                      </p>
                    </div>
                    <div className="container mt-5">
                      {/* <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12 text-center">
                          <Image
                            src={mohamed}
                            className="d-block rounded-circle"
                            width="200"
                            height="200"
                          />
                          <h5 className="mb-2 mt-3">
                            <strong>Mohamed Souri</strong>
                          </h5>
                          <p className="text-muted">Co-founder</p>
                          <p></p>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 text-center">
                          <Image
                            src={iheb}
                            className="d-block rounded-circle"
                            width="200"
                            height="200"
                          />
                          <h5 className="mb-2 mt-3">
                            <strong>Iheb Souilem</strong>
                          </h5>
                          <p className="text-muted">Co-founder</p>
                          <p></p>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 text-center">
                          <Image
                            src={iheb}
                            className="d-block rounded-circle"
                            width="200"
                            height="200"
                          />
                          <h5 className="mb-2 mt-3">
                            <strong>Imed Tahenti</strong>
                          </h5>
                          <p className="text-muted">Co-founder</p>
                          <p></p>
                        </div>
                      </div> */}
                      {/* <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="card shadow text-center d-flex justify-content-center align-items-center p-4">
                            <h2>Mohamed Souri</h2>
                            <h6>Adminstrateur et trèsorier</h6>Consultant
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12"></div>
                  </div>

                  <div className="our-team">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="card border-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container p-5">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                      <div className="section-title">
                        <h1>
                          Pourquoi <span>nous</span> choisir?
                        </h1>
                        <p className="mt-5">
                          Pour immigrer, travailler, étudier ou visiter ! <br />{" "}
                          une seule adresse <b>Projet Canada</b> bel Notre
                          équipe de consultants ! <br />
                          compter sur les conseils et stratégies qui vous seront
                          fournis par notre équipe chevronnée vous permettra,
                          non seulement d’obtenir tous les documents et
                          autorisations gouvernementales requises, mais aussi de
                          placer correctement votre projet d’immigration dans un
                          contexte d’affaires ou personnel bien plus large.
                        </p>
                      </div>
                      {/* <div className="services-cards-container">
                        <div className="row">
                          <div className="col-md-6">
                            <a href="">
                              <div className="card services-card px-4 shadow">
                                <div className="row">
                                  <div className="service-card-content">
                                    <div className="texts">
                                      <h5>RECRUTEMENT</h5>
                                      <p>
                                        Recrutement, visa travailleur étranger,
                                        permis de travail au Québec Canada.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-md-6">
                            <a href="">
                              <div className="card services-card px-4 shadow">
                                <div className="row">
                                  <div className="service-card-content">
                                    <div className="texts">
                                      <h5>IMMIGRATION</h5>
                                      <p>
                                        Immigration travailleur étranger,
                                        investisseur, étudiants, réunification
                                        familiale, etc.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
