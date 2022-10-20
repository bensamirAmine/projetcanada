import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="title">
              <h2>À propos</h2>
            </div>

            <p>
              Cabinet d’immigration pour travailleur étranger, travailleur
              qualifié, étudiant, investisseur, famille et entreprises, possède
              l'expérience et les outils nécessaires pour mener à bien tous vos
              dossiers d’immigration et répondre à vos besoins. Nous sommes ici
              pour vous aider à réaliser vos rêves.
            </p>

            <div className="social-media-icons">
              <a href="" className="social-media-icons__link">
                <AiFillFacebook className="facebook" />
              </a>
              <a href="" className="social-media-icons__link">
                <AiFillInstagram className="instagram" />
              </a>
              <a href="" className="social-media-icons__link">
                <AiFillTwitterCircle className="twitter" />
              </a>
              <a href="" className="social-media-icons__link">
                <AiFillYoutube className="youtube" />
              </a>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="title">
              <h2>Liens utiles</h2>
            </div>

            <table className="table w-100">
              <tr>
                <td>
                  <ul className="usefull-links">
                    <li>
                      <Link href="/services">
                        <a href="">Je veux IMMIGRER</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a href="">Je veux un PERMIS DE TRAVAIL</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a href="">Je veux PARRAINER</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a href="">Je veux étudier</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a href="">Je veux INVESTIR</a>
                      </Link>
                    </li>
                  </ul>
                </td>
                <td>
                  <ul className="usefull-links">
                    <li>
                      <Link href="/services">
                        <a href="">Je suis nouveau au CANADA</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a href="">Je suis EMPLOYEUR</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a href="">Je veux une AIDE JURIDIQUE</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a href="">Je veux surmonter l'INADMISSIBILITÉ</a>
                      </Link>
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h6>© Copyright 2020 Projet-canada.ca. All Rights Reserved</h6>
      </div>
    </div>
  );
};

export default Footer;
