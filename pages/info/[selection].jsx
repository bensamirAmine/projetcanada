import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import CountUp, { startAnimation } from "react-countup";
import {
  FaCanadianMapleLeaf,
  FaArrowRight,
  FaLanguage,
  FaCertificate,
  FaPlusCircle,
} from "react-icons/fa";
import { GiCrown } from "react-icons/gi";
import { MdInfoOutline } from "react-icons/md";
import { GoArrowSmallDown } from "react-icons/go";
import { SiAircanada } from "react-icons/si";
import { GrUserExpert, GrCertificate } from "react-icons/gr";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import Link from "next/link";
import Header from "../../components/Header/Header";
import image from "../../public/loop.jpg";
import image1 from "../../public/leaf.png";
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
const info = () => {
  const router = useRouter();
  const { selection } = router.query;
  return (
    <div>
      <Head>
        <title>{selection}</title>
      </Head>
      <div className="info-page">
        {selection === "express-entry" && (
          <div className="container-fluid  info-page-container">
            <div className="section-title mt-5 p-5">
              <h1>
                Entrée <span>Express</span>
              </h1>
              <p className="pt-4">
                <b>
                  {" "}
                  Entrée express est un système en ligne que nous utilisons pour
                  gérer les demandes d’immigration présentées par des
                  travailleurs qualifiés.
                </b>
              </p>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="container-info-details">
                    <div class="card-info-details">
                      <div class="slide slide1">
                        <div class="content">
                          <div class="card-info-details-title">
                            <h6>Catégorie de l’expérience canadienne</h6>
                          </div>
                        </div>
                      </div>
                      <div class="slide slide2">
                        <div class="content">
                          <ul className="list-justifiee">
                            <li>
                              Pour les travailleurs qualifiés qui ont de
                              l’expérience de <b>travail au Canada</b>.
                            </li>
                            <li>
                              L’expérience de travail doit avoir été acquise
                              dans les
                              <b> 3 années précédant </b>
                              la présentation de votre demande.
                            </li>
                          </ul>
                          <Link
                            className="listLink"
                            href="/info/experience-canadienne"
                          >
                            <span className="listLink">En savoir plus >></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container-info-details">
                    <div class="card-info-details">
                      <div class="slide slide1">
                        <div class="content">
                          <div class="card-info-details-title">
                            <h6>
                              Programme des travailleurs qualifiés (fédéral)
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="slide slide2">
                        <div class="content">
                          <ul className="list-justifiee">
                            <li>
                              Pour les travailleurs qualifiés qui ont de
                              l’expérience de travail à l’étranger.
                            </li>
                            <li>
                              Vous devez satisfaire aux critères relatifs aux
                              études et aux autres facteurs
                            </li>
                          </ul>
                          <Link
                            className="listLink"
                            href="/info/travailleurs-qualifiés"
                          >
                            <span className="listLink">En savoir plus >></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container-info-details">
                    <div class="card-info-details">
                      <div class="slide slide1">
                        <div class="content">
                          <div class="card-info-details-title">
                            <h6>
                              Programme des travailleurs de métiers spécialisés
                              (fédéral)
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="slide slide2">
                        <div class="content">
                          <ul className="list-justifiee">
                            <li>
                              Pour les travailleurs qualifiés dans un métier
                              spécialisé.
                            </li>
                            <li>
                              Vous devez avoir une offre d’emploi valide ou un
                              certificat de compétence.
                            </li>
                          </ul>
                          <Link
                            className="listLink"
                            href="/info/travailleurs-métiers-spécialisés"
                          >
                            <span className="listLink">En savoir plus >></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* experience canadienne */}
        {(selection === "express-entry" ||
          selection === "experience-canadienne") && (
          <div className="info-page-standard-container">
            {/* {selection === "experience-canadienne" && <div></div>} */}
            <div className="container-fluid w-100 p-0">
              <div className="first-section container">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="first-section-left">
                      <div className="first-section-left-title">
                        <h1>Catégorie de l’expérience canadienne</h1>
                      </div>
                      <div className="first-section-left-paragraph">
                        <p>
                          Il s’agit de l’un des trois programmes fédéraux gérés
                          dans le cadre d’Entrée express, La catégorie de
                          l’expérience canadienne est destinée aux travailleurs
                          qualifiés qui ont de l’expérience de travail au Canada
                          et qui souhaitent devenir résidents permanents.
                        </p>
                      </div>
                      <div className="first-section-left-button pt-3">
                        <Link href="/contactus">
                          <button className="btn btn-danger rounded-pill py-2 px-3">
                            Découvrez si vous êtes éligible
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="first-section-right">
                      <div className="first-section-right-image">
                        <Image src={image} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-section">
                <div className="section-title">
                  <h1>
                    Exigences <span>minimales</span>
                  </h1>
                </div>
                <div className="second-section-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card my-classy-card">
                          <div className="my-classy-card-header">
                            <div className="icon-container">
                              <FaLanguage className="icon" />
                            </div>
                            <div className="title">
                              <h5>Langues</h5>
                            </div>
                          </div>
                          <div className="my-classy-card-body">
                            <p>
                              <b>
                                Avoir obtenu les niveaux de compétence
                                linguistique exigés pour votre emploi pour
                                chacune de ces compétences linguistiques:
                              </b>
                            </p>
                            <hr />
                            <ul>
                              <li>écriture;</li>
                              <li>lecture;</li>
                              <li>compréhension de l’oral;</li>
                              <li>expression orale;</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card my-classy-card">
                          <div className="my-classy-card-header">
                            <div className="icon-container">
                              <SiAircanada className="icon" />
                            </div>
                            <div className="title">
                              <h5>Expérience professionnelle</h5>
                            </div>
                          </div>
                          <div className="my-classy-card-body">
                            <p>
                              <b>
                                avoir acquis au moins 1 an d’expérience de
                                travail qualifié au Canada au cours des 3
                                dernières années avant de présenter une demande
                                :
                              </b>
                            </p>
                            <hr />
                            <ul>
                              <li>à temps plein;</li>
                              <li>de même durée à temps partiel;</li>
                              <li>à temps plein dans plus d’un emploi</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card my-classy-card">
                          <div className="my-classy-card-header">
                            <div className="icon-container">
                              <FaCertificate className="icon" />
                            </div>
                            <div className="title">
                              <h5>Diplôme canadien</h5>
                            </div>
                          </div>
                          <div className="my-classy-card-body">
                            <p>
                              <b>
                                Avoir un diplôme canadien (certificat ou
                                diplôme) ou un diplôme étranger ET une
                                évaluation des diplômes d’études (EDE).
                              </b>
                            </p>
                            <hr />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-5 py-5 d-flex justify-content-center align-items-center">
                        <Link href="/contactus">
                          <button className="btn btn-danger rounded-pill py-2 px-3 m-2">
                            Obtenir nos conseils
                          </button>
                        </Link>
                        <Link href="/contactus">
                          <button className="btn btn-secondary rounded-pill py-2 px-3">
                            Consultaion
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* travailleurs qualifiés */}
        {(selection === "express-entry" ||
          selection === "travailleurs-qualifiés") && (
          <div className="info-page-standard-container">
            {/* {selection === "experience-canadienne" && <div></div>} */}
            <div className="container-fluid w-100 p-0">
              <div className="first-section container">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="first-section-left">
                      <div className="first-section-left-title">
                        <h1>Programme des travailleurs qualifiés</h1>
                      </div>
                      <div className="first-section-left-paragraph">
                        <p>
                          Il s’agit de l’un des trois programmes fédéraux gérés
                          dans le cadre d’Entrée express, Le programme des
                          travailleurs qualifiés s’adresse aux travailleurs
                          qualifiés qui ont une expérience de travail à
                          l’étranger qui veulent immigrer au Canada de façon
                          permanente.
                        </p>
                      </div>
                      <div className="first-section-left-button pt-3">
                        <Link href="/contactus">
                          <button className="btn btn-danger rounded-pill py-2 px-3">
                            Découvrez si vous êtes éligible
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="first-section-right">
                      <div className="first-section-right-image">
                        <Image src={image} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-section bg-white">
                <div className="section-title">
                  <h1>
                    <span>Exigences</span> du programme
                  </h1>
                  <p className="mt-5">
                    <b>
                      {" "}
                      Pour qu'un candidat soit admissible à postuler au FSWP, le
                      candidat doit atteindre les exigences minimales du
                      programme. Vous trouverez ci-dessous les conditions que
                      vous devez remplir pour être éligible.
                    </b>
                  </p>
                </div>
                <div className="container-fluid">
                  <div className="content-parag">
                    <h5>Expérience professionnelle</h5>
                    <p className="text-justify">
                      La première exigence pour ce programme est une expérience
                      professionnelle d'un an dans un emploi qualifié au cours
                      des dix dernières années avant de postuler. L'expérience
                      doit être dans un emploi classé par la Classification
                      nationale des professions comme : Emplois managériaux
                      (type de compétence 0) Emplois professionnels (niveau de
                      compétence A) Emplois techniques et métiers spécialisés
                      (niveau de compétence B) L'expérience peut être soit sous
                      la forme de Un emploi à temps plein où vous travaillez
                      pendant une période de 12 mois Un emploi à temps partiel
                      équivalent à un emploi à temps plein d'un an Job étudiant
                      dans lequel vous êtes payé en salaire ou en commission
                    </p>
                  </div>
                  <div className="content-parag">
                    <h5>Les compétences linguistiques</h5>
                    <p className="text-justify">
                      Vous devez passer un test de langue en anglais ou en
                      français pour montrer votre niveau dans l'une des langues.
                      Le test montrera votre capacité à parler, écouter, écrire
                      et lire. Pour l'anglais, vous pouvez passer l'IELTS et
                      pour le français, vous pouvez passer le FEC. Vous devez
                      également obtenir la note minimale pour le Canada Language
                      Bench Mark, qui est de 7 en tout. Plus vous obtenez une
                      note élevée, plus vous avez de chances de vous qualifier.
                      Le test de langue devient invalide deux ans après le jour
                      où vous avez obtenu le résultat.
                    </p>
                  </div>
                  <div className="content-parag">
                    <h5>Éducation</h5>
                    <p className="text-justify">
                      Vous devez avoir obtenu un diplôme ou un certificat dans
                      une école secondaire canadienne ou si vous avez fait des
                      études à l'extérieur du Canada, vous devez avoir un
                      diplôme ou un certificat équivalent à une école secondaire
                      canadienne et ensuite fournir : diplômes étrangers et une
                      évaluation des diplômes aux fins de l'immigration qui
                      montre que vous avez terminé une école équivalente à une
                      école secondaire canadienne.
                    </p>
                  </div>
                  <div className="content-parag">
                    <h5>Preuve de fonds</h5>
                    <p className="text-justify">
                      Vous devez avoir la preuve que vous avez assez d'argent
                      pour vous installer au Canada avec votre famille ou une
                      preuve que vous avez obtenu un emploi ou que vous pouvez
                      travailler légalement au Canada. Si vous ne remplissez pas
                      les conditions financières, vous ne serez pas admissible
                      au Programme fédéral des travailleurs qualifiés. Une autre
                      chose à propos de ce programme est que le fonds augmente à
                      mesure que le nombre de membres de la famille augmente.
                      Vous verrez les détails ci-dessous.
                    </p>
                  </div>
                  <div className="content-parag">
                    <h5>La recevabilité</h5>
                    <p className="text-justify">
                      Vous devez être légalement autorisé à entrer au Canada
                      avant de pouvoir être admissible à la catégorie fédérale
                      des travailleurs qualifiés. Cela signifie que vous devez
                      être innocenté par la police de l'absence de casier
                      judiciaire. Vous devez également être autorisé
                      médicalement à prouver que vous êtes médicalement apte.
                    </p>
                  </div>
                  <div className="content-parag">
                    <h5>
                      Admissibilité au programme fédéral des travailleurs
                      qualifiés
                    </h5>
                    <p className="text-justify">
                      Une fois que vous avez satisfait aux exigences mentionnées
                      ci-dessus, vous êtes admissible à présenter une demande de
                      résidence permanente au Canada par le biais du Programme
                      fédéral des travailleurs qualifiés organisé sous le
                      système Entrée express par IRCC.
                    </p>
                  </div>
                  <div className="content-parag">
                    <h5>
                      Fonds de règlement du Programme fédéral des travailleurs
                      qualifiés
                    </h5>
                    <p className="text-justify">
                      Le FSWP exige que vous ayez une certaine somme d'argent en
                      banque avant de pouvoir prétendre à une demande d'entrée
                      express via le système. L'argent montre que vous êtes prêt
                      à vous installer au Canada avec les membres de votre
                      famille. Si vous n'êtes pas en mesure de répondre à ces
                      critères, vous ne pourrez peut-être pas postuler à Canada
                      PR via ce programme. Le fonds augmente à mesure que le
                      nombre de membres de la famille augmente. Ce tableau
                      indique le montant minimum dont vous avez besoin pour
                      immigrer au Canada. Si vous avez plus d'argent, vous devez
                      indiquer le montant total dans votre profil ou votre
                      demande.
                    </p>
                  </div>
                  {/* <div className="d-flex">
                  <div className="plable-card mx-3">
                    <div>
                      <div className="title">
                        <h1>Expérience professionnelle</h1>
                      </div>
                      <div className="content">
                        La première exigence pour ce programme est une
                        expérience professionnelle d'un an dans un emploi
                        qualifié au cours des dix dernières années avant de
                        postuler. L'expérience doit être dans un emploi classé
                        par la Classification nationale des professions comme :
                        Emplois managériaux (type de compétence 0) Emplois
                        professionnels (niveau de compétence A) Emplois
                        techniques et métiers spécialisés (niveau de compétence
                        B) L'expérience peut être soit sous la forme de Un
                        emploi à temps plein où vous travaillez pendant une
                        période de 12 mois Un emploi à temps partiel équivalent
                        à un emploi à temps plein d'un an Job étudiant dans
                        lequel vous êtes payé en salaire ou en commission
                      </div>
                    </div>
                  </div>
                  <div className="plable-card mx-3">
                    <div>
                      <div className="title">
                        <h1>Compétences linguistiques</h1>
                      </div>
                      <div className="content">
                        Vous devez passer un test de langue en anglais ou en
                        français pour montrer votre niveau dans l'une des
                        langues. Le test montrera votre capacité à parler,
                        écouter, écrire et lire. Pour l'anglais, vous pouvez
                        passer l'IELTS et pour le français, vous pouvez passer
                        le FEC. Vous devez également obtenir la note minimale
                        pour le Canada Language Bench Mark, qui est de 7 en
                        tout. Plus vous obtenez une note élevée, plus vous avez
                        de chances de vous qualifier. Le test de langue devient
                        invalide deux ans après le jour où vous avez obtenu le
                        résultat.
                      </div>
                    </div>
                  </div>
                  <div className="plable-card mx-3">
                    <div>
                      <div className="title">
                        <h1>Expérience professionnelle</h1>
                      </div>
                      <div className="content">
                        La première exigence pour ce programme est une
                        expérience professionnelle d'un an dans un emploi
                        qualifié au cours des dix dernières années avant de
                        postuler. L'expérience doit être dans un emploi classé
                        par la Classification nationale des professions comme :
                        Emplois managériaux (type de compétence 0) Emplois
                        professionnels (niveau de compétence A) Emplois
                        techniques et métiers spécialisés (niveau de compétence
                        B) L'expérience peut être soit sous la forme de Un
                        emploi à temps plein où vous travaillez pendant une
                        période de 12 mois Un emploi à temps partiel équivalent
                        à un emploi à temps plein d'un an Job étudiant dans
                        lequel vous êtes payé en salaire ou en commission
                      </div>
                    </div>
                  </div>
                  <div className="plable-card mx-3">
                    <div>
                      <div className="title">
                        <h1>Expérience professionnelle</h1>
                      </div>
                      <div className="content">
                        La première exigence pour ce programme est une
                        expérience professionnelle d'un an dans un emploi
                        qualifié au cours des dix dernières années avant de
                        postuler. L'expérience doit être dans un emploi classé
                        par la Classification nationale des professions comme :
                        Emplois managériaux (type de compétence 0) Emplois
                        professionnels (niveau de compétence A) Emplois
                        techniques et métiers spécialisés (niveau de compétence
                        B) L'expérience peut être soit sous la forme de Un
                        emploi à temps plein où vous travaillez pendant une
                        période de 12 mois Un emploi à temps partiel équivalent
                        à un emploi à temps plein d'un an Job étudiant dans
                        lequel vous êtes payé en salaire ou en commission
                      </div>
                    </div>
                  </div>
                  <div className="plable-card mx-3">
                    <div>
                      <div className="title">
                        <h1>Expérience professionnelle</h1>
                      </div>
                      <div className="content">
                        La première exigence pour ce programme est une
                        expérience professionnelle d'un an dans un emploi
                        qualifié au cours des dix dernières années avant de
                        postuler. L'expérience doit être dans un emploi classé
                        par la Classification nationale des professions comme :
                        Emplois managériaux (type de compétence 0) Emplois
                        professionnels (niveau de compétence A) Emplois
                        techniques et métiers spécialisés (niveau de compétence
                        B) L'expérience peut être soit sous la forme de Un
                        emploi à temps plein où vous travaillez pendant une
                        période de 12 mois Un emploi à temps partiel équivalent
                        à un emploi à temps plein d'un an Job étudiant dans
                        lequel vous êtes payé en salaire ou en commission
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Programme des travailleurs de métiers spécialisés  */}
        {(selection === "express-entry" ||
          selection === "travailleurs-métiers-spécialisés") && (
          <div className="info-page-standard-container">
            {/* {selection === "experience-canadienne" && <div></div>} */}
            <div className="container-fluid w-100 p-0">
              <div className="first-section container">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="first-section-left">
                      <div className="first-section-left-title">
                        <h1>
                          Programme des travailleurs de métiers spécialisés
                        </h1>
                      </div>
                      <div className="first-section-left-paragraph">
                        <p>
                          Il s’agit de l’un des trois programmes fédéraux gérés
                          dans le cadre d’Entrée express, Le Programme des
                          travailleurs de métiers spécialisés (fédéral)
                          s’adresse aux travailleurs qualifiés qui veulent
                          devenir résidents permanents en raison de leur
                          qualification dans un métier spécialisé.
                        </p>
                      </div>
                      <div className="first-section-left-button pt-3">
                        <Link href="/contactus">
                          <button className="btn btn-danger rounded-pill py-2 px-3">
                            Découvrez si vous êtes éligible
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="first-section-right">
                      <div className="first-section-right-image">
                        <Image src={image} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-section">
                <div className="section-title">
                  <h1>
                    Exigences <span>minimales</span>
                  </h1>
                </div>
                <div className="second-section-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card my-classy-card">
                          <div className="my-classy-card-header">
                            <div className="icon-container">
                              <FaLanguage className="icon" />
                            </div>
                            <div className="title">
                              <h5>Langues</h5>
                            </div>
                          </div>
                          <div className="my-classy-card-body">
                            <p>
                              <b>
                                Avoir obtenu les niveaux de compétence
                                linguistique exigés pour votre emploi pour
                                chacune de ces compétences linguistiques:
                              </b>
                            </p>
                            <hr />
                            <ul>
                              <li>écriture;</li>
                              <li>lecture;</li>
                              <li>compréhension de l’oral;</li>
                              <li>expression orale;</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card my-classy-card">
                          <div className="my-classy-card-header">
                            <div className="icon-container">
                              <SiAircanada className="icon" />
                            </div>
                            <div className="title">
                              <h5>Expérience professionnelle</h5>
                            </div>
                          </div>
                          <div className="my-classy-card-body">
                            <p>
                              <b>
                                avoir acquis au moins 2 ans d’expérience de
                                travail à temps plein (ou une expérience
                                équivalente à temps partiel) dans un métier
                                spécialisé au cours des 5 années précédant votre
                                demande
                              </b>
                            </p>
                            <hr />
                            <ul>
                              <li>votre travail doit être rémunéré;</li>
                              <li>salaire payé ou commission;</li>
                              <li>
                                le bénévolat ou les stages non rémunérés ne
                                comptent pas
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card my-classy-card">
                          <div className="my-classy-card-header">
                            <div className="icon-container">
                              <FaCertificate className="icon" />
                            </div>
                            <div className="title">
                              <h5>répondre aux exigences</h5>
                            </div>
                          </div>
                          <div className="my-classy-card-body">
                            <p>
                              <b>
                                répondre aux exigences en matière d’emploi pour
                                ce métier spécialisé, énoncées dans la
                                Classification nationale des professions, sauf
                                en ce qui concerne le besoin d’un certificat de
                                qualification;
                              </b>
                            </p>
                            <hr />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-5">
                        <div className="card my-classy-card">
                          <div className="my-classy-card-header">
                            <div className="icon-container">
                              <FaPlusCircle className="icon" />
                            </div>
                            <div className="title">
                              <h5>avoir soit</h5>
                            </div>
                          </div>
                          <div className="my-classy-card-body">
                            <ul>
                              <li>
                                une offre d’emploi à temps plein valide pour une
                                période totale d’au moins 1 an;
                              </li>
                              <li>
                                un certificat de qualification dans ce métier
                                spécialisé délivré par une autorité provinciale,
                                territoriale ou fédérale canadienne.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-5 py-5 d-flex justify-content-center align-items-center">
                        <Link href="/contactus">
                          <button className="btn btn-danger rounded-pill py-2 px-3 m-2">
                            Obtenir nos conseils
                          </button>
                        </Link>
                        <Link href="/contactus">
                          <button className="btn btn-secondary rounded-pill py-2 px-3">
                            Consultaion
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default info;
