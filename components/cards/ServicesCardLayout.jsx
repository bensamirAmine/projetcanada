import React from "react";
import ServicesCard from "./ServicesCard";

import { FaCanadianMapleLeaf, FaArrowRight } from "react-icons/fa";
const ServicesCardLayout = () => {
  return (
    <div className="container services-cards-container mt-5 mb-5">
      <div className="section-title">
        <h1>
          NOS <span>SERVICES</span> D'IMMIGRATION
          {/* Our <span>immigration</span> services */}
        </h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <a href="">
            <div className="card services-card px-4 my-3">
              <div className="row">
                <div className="service-card-content">
                  <div className="service-card-icon-container">
                    <FaCanadianMapleLeaf className="icon" />
                  </div>
                  <div className="texts">
                    <h4>Immigrer</h4>
                    <p>
                      Voulez-vous immigrer au Canada? Projet Canada est votre
                      meilleur choix. cliquez ici pour en savoir plus sur nos
                      services d'immigration.
                    </p>
                  </div>
                  <span className="see-more py-1">
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6">
          <a href="">
            <div className="card services-card px-4 my-3">
              <div className="row">
                <div className="service-card-content">
                  <div className="service-card-icon-container">
                    <FaCanadianMapleLeaf className="icon" />
                  </div>
                  <div className="texts">
                    <h4>Travailler</h4>
                    <p>
                      Vous êtes intéressé-e à immigrer au Canada à titre de
                      travailleur qualifié? cliquez ici pour en savoir plus sur
                      nos services d'immigration pour les travailleurs.
                    </p>
                  </div>
                  <span className="see-more py-1">
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6">
          <a href="">
            <div className="card services-card px-4 my-3">
              <div className="row">
                <div className="service-card-content">
                  <div className="service-card-icon-container">
                    <FaCanadianMapleLeaf className="icon" />
                  </div>
                  <div className="texts">
                    <h4>Étudier</h4>
                    <p>
                      Vous rêvez d'étudier au canada ? Canada abrite certaines
                      des meilleures options d'éducation et d'immigration au
                      monde. cliquez ici pour en savoir plus sur nos services
                      d'immigration pour étudiants.
                    </p>
                  </div>
                  <span className="see-more py-1">
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-6">
          <a href="">
            <div className="card services-card px-4 my-3">
              <div className="row">
                <div className="service-card-content">
                  <div className="service-card-icon-container">
                    <FaCanadianMapleLeaf className="icon" />
                  </div>
                  <div className="texts">
                    <h4>Visiter</h4>
                    <p>
                      Make your goal of moving to Canada a reality by exploring
                      over 100 available ways to immigrate.
                    </p>
                  </div>
                  <span className="see-more py-1">
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesCardLayout;
