import React from "react";
import image from "../../public/image1.jpg";
import image1 from "../../public/logo.jpg";
import image2 from "../../public/logo2.jpg";
import Image from "next/image";

const NewsSection = () => {
  return (
    <div className="container news-section-container">
      <div className="section-title">
        <h1>
          Latest <span>Immigration</span> News
        </h1>
      </div>
      <div className="row">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <Image
                  src={image}
                  className="d-block w-100 image"
                  layout="fill"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>First slide label</h1>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <Image
                  src={image1}
                  className="d-block w-100 image"
                  layout="fill"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>Second slide label</h1>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <Image
                  src={image2}
                  className="d-block w-100 image"
                  layout="fill"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>Third slide label</h1>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className="card news-card">
            <Image src={image} className="d-block w-100 image" layout="fill" />
            <div className="news-card-caption">
              <h1>Title here</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="card news-card-2">
            <Image src={image1} className="d-block w-100 image" layout="fill" />
            <div className="news-card-caption">
              <h1>Title here</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
