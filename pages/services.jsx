import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
function services(props) {
  return (
    <div className="services-page">
      <div className="vertical-line1"></div>
      <div className="services-page-header">
        <div className="overlay"></div>
        <h1 className="title">
          Projet Canada <br /> Vous offre deux <br /> types de services.
        </h1>
      </div>
      <div className="vertical-line2"></div>
      <div className="vertical-line3"></div>
      <div className="hexagon">
        <div className="hexagon-top">
          {/* bottom arrow icon */}
          <FaChevronDown className="hexa-icon" color={"white"} />
        </div>
        <div className="hexagon-body"></div>
        <div className="hexagon-bottom"></div>
      </div>
      <div className="services-page-first-section p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image src={image3} width={500} height={500} />
            </div>
            <div className="col-md-6">
              <h1 className="bg-text">Immigration</h1>
              <h1>Service d'immigration</h1>
              <p>
                Que vous soyez une entreprise ou un particulier, compter sur les
                conseils et stratégies qui vous seront fournis par notre équipe
                chevronnée vous permettra, non seulement d’obtenir tous les
                documents et autorisations gouvernementales requises, mais aussi
                de placer correctement votre projet d’immigration dans un
                contexte d’affaires ou personnel bien plus large.
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
      <div className="services-page-second-section p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="bg-text">Immigration</h1>
              <h1>Services aux entreprises</h1>
              <div className="row">
                <div className="col-md-6">
                  <ul className="services-parag-list  pt-3">
                    <li>Étude d’impact sur le marché du travail (EIMT)</li>
                    <li>Dispense d’Étude d’impact sur le marché du travail</li>
                    <li>Expérience internationale Canada</li>
                    <li>Transferts intra-compagnie</li>
                    <li>Certificat de sélection temporaire (Québec)</li>
                    <li>Permis de travail, toutes catégories confondues</li>
                    <li>
                      Évaluation des affichages de poste et d’autres efforts de
                      recrutement
                    </li>
                    <li>Vérification de conformité, en cas d’inspection</li>
                    <li>
                      Évaluation de contrats de travail pour travailleurs
                      étrangers temporaires
                    </li>
                    <li>
                      Accompagnement personnalisé lors de vos missions de
                      recrutement à l’étranger
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="services-parag-list  pt-3">
                    <li>
                      Renouvellement et / ou modification des EIMT, dispenses
                      EIMT et autres
                    </li>
                    <li>
                      Renouvellement et / ou modification de permis de travail
                    </li>
                    <li>
                      Permis de travail ouvert pour conjoints-es, et
                      renouvellement (visa de travail sur mesure)
                    </li>
                    <li>
                      Permis d’études ou fiche de visiteur pour enfants, et
                      renouvellement
                    </li>
                    <li>
                      Demande de résidence permanente à titre de travailleur
                      qualifié, selon la catégorie applicable au fédéral (ex:
                      Entry Express) ou au Québec (CSQ - Certificat de sélection
                      du Québec)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-page-third-section p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="bg-text">Immigration</h1>
              <h1>Services aux particuliers</h1>
              <div className="row">
                <div className="col-md-6">
                  <ul className="services-parag-list  pt-3">
                    <li>
                      Immigration des travailleurs qualifiés au fédéral : volet
                      Entry Express, toutes catégories confondues
                    </li>
                    <li>
                      Immigration des travailleurs qualifiés au Québec : volet
                      Certificat de sélection (CSQ), toutes catégories
                      confondues
                    </li>
                    <li>
                      Demande et renouvellement de permis de travail, de permis
                      d’études et de statut de visiteur
                    </li>
                    <li>Demande de permis d’études, et renouvellement</li>
                    <li>Demande de sélection temporaire (Québec)</li>
                    <li>
                      Obtention du statut pour la famille qui vous accompagne
                    </li>
                    <li>
                      Parrainage d’époux, conjoint-e de fait et enfants à charge
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="services-parag-list  pt-3">
                    <li>Parrainage des parents et des grands-parents</li>
                    <li>
                      Parrainage d’autres membres de la famille admissibles
                    </li>
                    <li>Supervisa pour parents et grands-parents</li>
                    <li>Visas de visiteurs</li>
                    <li>Visas d’affaires</li>
                    <li>Autorisation de voyage électronique</li>
                    <li>Renouvellement de carte de résident permanent</li>
                    <li>Demande de citoyenneté canadienne</li>
                    <li>
                      Citoyenneté canadienne pour enfants des Canadiens nés à
                      l’étranger
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    // <div className="services-main">
    //   <div className="services-header">
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-md-7">
    //           <div className="services-header-left container">
    //             <div className="services-header-left-content">
    //               <div className="services-header-slogan">
    //                 <h1>Pour Immigrer, Travailler, étudier Ou visiter</h1>
    //                 <p>
    //                   Notre équipe de consultants a le plaisir de vous servir !
    //                 </p>
    //                 <p className="services-header-left-paragraph">
    //   Que vous soyez une entreprise ou un particulier, compter
    //   sur les conseils et stratégies qui vous seront fournis par
    //   notre équipe chevronnée vous permettra, non seulement
    //   d’obtenir tous les documents et autorisations
    //   gouvernementales requises, mais aussi de placer
    //   correctement votre projet d’immigration dans un contexte
    //   d’affaires ou personnel bien plus large.
    //                 </p>
    //               </div>
    //               <div className="my-button-group">
    //                 <button>
    //                   Avoir nos conseils{" "}
    //                   <FaArrowRight className="my-button-icon" />
    //                 </button>
    //                 <button>
    //                   Vous voulez une consultaion{" "}
    //                   <FaArrowRight className="my-button-icon" />
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-5">
    //           <div className="services-header-image"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="services-first-section">
    //     <div className="container pt-5">
    //       <div className="section-title">
    //         <h1>
    //           <span>Service</span> d'Immigration
    //         </h1>
    //         <p className="mt-5">
    //           <b>
    //             {" "}
    //             Projet Canada. possède l'expérience et les outils nécessaires
    //             pour mener à bien tous vos dossiers d’immigration et répondre à
    //             vos besoins.
    //           </b>
    //         </p>
    //       </div>
    //       <div className="container-fluid">
    //         <div className="content-parag">
    //           <div className="my-services-parag-card">
    //             <h2>Services aux entreprises</h2>
    //             <hr />
    //             <p className="text-justify ">
    //               À cause de la pénurie de main d’œuvre, votre entreprise
    //               envisage-t-elle l’embauche de travailleurs étrangers
    //               temporaires, spécialisés ou non? Ou avez-vous découvert un
    //               professionnel à talent unique? Ou désirez-vous transférer au
    //               Canada un travailleur d’outre-mer? Avez-vous besoin de
    //               planifier vos actions quant à l’embauche à l’international?
    //               Notre équipe peut vous représenter par-devant les autorités
    //               canadiennes et québécoises dans le cadre des formalités
    //               suivantes :
    //             </p>
    // <ul className="services-parag-list">
    //   <li>Étude d’impact sur le marché du travail (EIMT)</li>
    //   <li>Dispense d’Étude d’impact sur le marché du travail</li>
    //   <li>Expérience internationale Canada</li>
    //   <li>Transferts intra-compagnie</li>
    //   <li>Certificat de sélection temporaire (Québec)</li>
    //   <li>Permis de travail, toutes catégories confondues</li>
    //   <li>
    //     Évaluation des affichages de poste et d’autres efforts de
    //     recrutement
    //   </li>
    //   <li>Vérification de conformité, en cas d’inspection</li>
    //   <li>
    //     Évaluation de contrats de travail pour travailleurs
    //     étrangers temporaires
    //   </li>
    //   <li>
    //     Accompagnement personnalisé lors de vos missions de
    //     recrutement à l’étranger
    //   </li>
    // </ul>

    //             <p className="text-justify ">
    //   Avez-vous déjà des travailleurs étrangers temporaires
    //   talentueux dans votre entreprise ? Voulez-vous ou avez-vous
    //   l’obligation de renouveler leur statut ou les appuyer pour une
    //   éventuelle résidence permanente ? Y-a-t-il des travailleurs
    //   étrangers déjà au Canada intéressés à travailler pour vous ?
    //   Voulez-vous embaucher des étudiants internationaux récemment
    //   diplômés ? Voici ce que nous pouvons faire pour vous :
    //             </p>
    //             <ul className="services-parag-list">
    //   <li>
    //     Renouvellement et / ou modification des EIMT, dispenses EIMT
    //     et autres
    //   </li>
    //   <li>
    //     Renouvellement et / ou modification de permis de travail
    //   </li>
    //   <li>
    //     Permis de travail ouvert pour conjoints-es, et
    //     renouvellement (visa de travail sur mesure)
    //   </li>
    //   <li>
    //     Permis d’études ou fiche de visiteur pour enfants, et
    //     renouvellement
    //   </li>
    //   <li>
    //     Demande de résidence permanente à titre de travailleur
    //     qualifié, selon la catégorie applicable au fédéral (ex:
    //     Entry Express) ou au Québec (CSQ - Certificat de sélection
    //     du Québec)
    //   </li>
    //             </ul>
    //           </div>
    //           <br />

    //           <div className="my-services-parag-card">
    //            1231546 <h2>Services aux particuliers</h2>
    //             <hr />
    //             <p className="text-justify ">
    //               Déjà au Canada en tant que travailleur, étudiant ou visiteur
    //               et vous ne voulez pas perdre votre statut ? Ou depuis votre
    //               pays d’origine, vous êtes intéressé-e à immigrer au Canada à
    //               titre de travailleur qualifié ? Nous pouvons prendre en charge
    //               votre dossier :
    //             </p>
    //             <ul className="services-parag-list">
    //   <li>
    //     Immigration des travailleurs qualifiés au fédéral : volet
    //     Entry Express, toutes catégories confondues
    //   </li>
    //   <li>
    //     Immigration des travailleurs qualifiés au Québec : volet
    //     Certificat de sélection (CSQ), toutes catégories confondues
    //   </li>
    //   <li>
    //     Demande et renouvellement de permis de travail, de permis
    //     d’études et de statut de visiteur
    //   </li>
    //             </ul>

    //             <p className="text-justify ">
    //               Étudier au Canada fait partie de vos rêves ? Nous vous offrons
    //               ceci :
    //             </p>
    //             <ul className="services-parag-list">
    //   <li>Demande de permis d’études, et renouvellement</li>
    //   <li>Demande de sélection temporaire (Québec)</li>
    //   <li>
    //     Obtention du statut pour la famille qui vous accompagne
    //   </li>
    //             </ul>

    //             <p className="text-justify ">
    //               Voudriez-vous faire venir au Canada un membre admissible de
    //               votre famille résidant à l’étranger ? Notre équipe est prête à
    //               vous aider :
    //             </p>
    //             <ul className="services-parag-list">
    //   <li>
    //     Parrainage d’époux, conjoint-e de fait et enfants à charge
    //   </li>
    //   <li>Parrainage des parents et des grands-parents</li>
    //   <li>Parrainage d’autres membres de la famille admissibles</li>
    //   <li>Supervisa pour parents et grands-parents</li>
    //   <li>Visas de visiteurs</li>
    //   <li>Visas d’affaires</li>
    //   <li>Autorisation de voyage électronique</li>
    //             </ul>

    //             <p className="text-justify ">
    //               La citoyenneté canadienne vous tient à cœur ? Voici nos
    //               services :
    //             </p>
    //             <ul className="services-parag-list">
    //   <li>Renouvellement de carte de résident permanent</li>
    //   <li>Demande de citoyenneté canadienne</li>
    //   <li>
    //     Citoyenneté canadienne pour enfants des Canadiens nés à
    //     l’étranger
    //   </li>
    //             </ul>
    //           </div>
    //           <br />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default services;
