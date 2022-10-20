import Link from "next/link";
import React from "react";

const VideoHeader = () => {
  return (
    <header className="VideoHeader">
      <div className="overlay"></div>

      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source
          // src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
          src="./vid.mp4"
          type="video/mp4"
        />
      </video>

      {/*  
      <div className="container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <h1 className="display-3">Video Header</h1>
            <p className="lead mb-0">Using HTML5 Video and Bootstrap</p>
          </div>
        </div>
      </div> 
       <div className="container h-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12"></div>
          </div>
        </div>
      </div>
      */}
      <div className="container-fluid">
        <div id="stripes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="d-flex h-100 text-center align-items-center video-header-content">
          <div className="w-100 text-white">
            <h1 className="display-3 text-uppercase">Projet canada</h1>

            <p className="lead mb-0">
              Pour immigrer, travailler, étudier ou visiter ! <br />
              Une seule adresse <b>Projet Canada</b> !
            </p>
            <div
              className="btn-group mt-5"
              role="group"
              aria-label="Basic example"
            >
              <Link href="/services">
                <button type="button" className="btn btn-secondary">
                  Immigration
                </button>
              </Link>
              <Link href="/services">
                <button type="button" className="btn btn-secondary">
                  Recrutement
                </button>
              </Link>
              <Link href="/about">
                <button type="button" className="btn btn-secondary">
                  Qui somme-nous ?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VideoHeader;
