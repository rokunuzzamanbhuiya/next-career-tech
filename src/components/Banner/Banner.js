import React from 'react';
import "./Banner.css";
import react from "../../images/banner-images/react.png";
import angular from "../../images/banner-images/angular.png";
import vue from "../../images/banner-images/vue.png";

const Banner = () => {
    return (
        <div className="container-fluid bg-color mt-5">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators pb-4">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                      <div className="row d-flex align-items-center p-5 mt-5">
                          <div className="col-md-7">
                              <h1 className="pb-2 text-white">React For your next development</h1>
                              <p className="text-white">This is the best React in the world for people who just want to waste time in front of funky world.</p>
                              <h1 className="pb-2 text-white">$2000</h1>
                              <button className="btn btn-danger bannerbtn">Buy Now</button>
                          </div>
                          <div className="col-md-5">
                            <img src={react} className="d-block w-100" alt="react"/>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                        <div className="row d-flex align-items-center p-5 mt-5">
                            <div className="col-md-7">
                              <h1 className="pb-2 text-white">Angular For your next development</h1>
                              <p className="text-white">This is the best Angular in the world for people who just want to waste time in front of funky world.</p>
                              <h1 className="pb-2 text-white">$2050</h1>
                              <button className="btn btn-danger bannerbtn">Buy Now</button>
                            </div>
                            <div className="col-md-5">
                            <img src={angular} className="d-block w-100" alt="angular"/>
                            </div>
                        </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row d-flex align-items-center p-5 mt-5">
                        <div className="col-md-7">
                            <h1 className="pb-2 text-white">Vue For your next development</h1>
                            <p className="text-white">This is the best Vue in the world for people who just want to waste time in front of funky world.</p>
                            <h1 className="pb-2 text-white">$2080</h1>
                            <button className="btn btn-danger bannerbtn">Buy Now</button>
                        </div>
                        <div className="col-md-5">
                          <img src={vue} className="d-block w-100" alt="vue"/>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>         
    );
};

export default Banner;