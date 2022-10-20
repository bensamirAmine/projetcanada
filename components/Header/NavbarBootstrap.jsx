import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarBootstrap = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark my-navbar bg-red-canada ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto  "> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto  ">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active " aria-current="page" href="#">
                  {/* Home */}
                  Accueil
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services">
                <a className="nav-link" aria-current="page" href="#">
                  Nos services
                </a>
              </Link>
            </li>

            <li className="nav-item dropdown megamenu">
              <a
                className="nav-link dropdown-toggle font-weight-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Immigration
              </a>
              <div
                aria-labelledby="megamneu"
                className="dropdown-menu border-0 p-0 m-0 animate slideIn"
              >
                <div className="container w-75">
                  <div className="row bg-white rounded-0 m-0 shadow-sm">
                    <div className="col-lg-7 col-xl-8">
                      <div className="p-4 ">
                        <div className="row">
                          <div className="col-8 mb-4">
                            <a href="" className="nav-link text-small pb-0">
                              <Link href="/info/express-entry">
                                <h6 className="font-weight-bold text-uppercase">
                                  Entrée Express
                                </h6>
                              </Link>
                            </a>

                            <ul className="list-unstyled mb-4">
                              <li className="nav-item">
                                <Link href="/info/travailleurs-qualifiés">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0"
                                  >
                                    • Programme des travailleurs qualifés
                                  </a>
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link href="/info/experience-canadienne">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0"
                                  >
                                    • Catégorie de l’expérience canadienne
                                  </a>
                                </Link>
                              </li>

                              <li className="nav-item">
                                <Link href="/info/travailleurs-métiers-spécialisés">
                                  <a
                                    href=""
                                    className="nav-link text-small pb-0"
                                  >
                                    • Programme des travailleurs de métiers
                                    spécialisées
                                  </a>
                                </Link>
                              </li>
                              {/* <li className="nav-item">
                                <a href="" className="nav-link text-small pb-0">
                                  Comprehensive Ranking System
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="" className="nav-link text-small pb-0">
                                  Improve Your CRS Score
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="" className="nav-link text-small pb-0">
                                  Invitation to Apply
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="" className="nav-link text-small pb-0">
                                  Receiving an ITA in Canada
                                </a>
                              </li>
                              <li className="nav-item">
                                <a href="" className="nav-link text-small pb-0">
                                  Express Entry Draw Results
                                </a>
                              </li> */}
                            </ul>
                          </div>
                          {/* <div className="col-6 mb-4">
                            <h6 className="font-weight-bold text-uppercase">
                              candidats des provinces
                            </h6>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-xl-4 px-0 d-flex d-lg-block background">
                      <div className="image-credit">
                        Photo by{" "}
                        <a href="https://unsplash.com/@reddalec?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                          Redd
                        </a>{" "}
                        on{" "}
                        <a href="https://unsplash.com/s/photos/canada?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                          Unsplash
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Travailleurs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Études
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Visite
              </a>
            </li> */}

            <li className="nav-item">
              <Link href="/recrutement">
                <a className="nav-link" aria-current="page" href="#">
                  Recrutement
                </a>
              </Link>
            </li>
            {/*
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Work
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
             <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sponsor
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Business
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Study
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inadmissibility
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settle
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Legal help
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBootstrap;
