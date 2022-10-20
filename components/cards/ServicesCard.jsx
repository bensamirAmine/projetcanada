import React from "react";
import { FaCanadianMapleLeaf, FaArrowRight } from "react-icons/fa";

const ServicesCard = () => {
  return (
    <div className="card services-card px-4 my-3">
      <div className="row">
        <div className="service-card-content">
          <div className="service-card-icon-container">
            <FaCanadianMapleLeaf className="icon" />
          </div>
          <div className="texts">
            <h4>card example</h4>
            <p>
              Make your goal of moving to Canada a reality by exploring over 100
              available ways to immigrate.
            </p>
          </div>
          <span className="see-more py-1">
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
