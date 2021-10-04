import React from 'react';
import "./ServiceDetail.css";
import imgreact from "../../images/services/react.png";
import imgredux from "../../images/services/redux.png";
import imgvue from "../../images/services/vue.png";
import imgnode from "../../images/services/node.png";
import imgangular from "../../images/services/angular.png";
import imgjs from "../../images/services/js.png";
import imghtml from "../../images/services/html.png";
import imgcss from "../../images/services/css.png";

const ServiceDetail = () => {
    return (
        <div class="container section-marginTop text-center">
    <h1 class="contact-title">Our Services</h1>
        <p class="contact-paragraph">This one is a typical sweet Thanksgiving pie, although it took a bit of getting used to, at first. Top it up with Our Services and enjoy.</p>
    <div class="row">
        <div class="col-md-3 p-2 ">
            <div class="card service-card text-center w-100">
                <div class="card-body">
                    <img class="service-card-logo" src={imgreact} width="100" height="100" alt="react"/>
                    <h4 class="service-card-title mt-3 pb-2">React Course</h4>
                    <h6 class="service-card-subTitle pb-2 m-0">React Frontend Development</h6>
                    <h1 className="pb-2">$2000</h1>
                    <button className="btn btn-danger servicebtn mb-4">Buy Now</button>
                </div>
            </div>
        </div>

        <div class="col-md-3 p-2">
            <div class="card  service-card text-center w-100">
                <div class="card-body">
                    <img class="service-card-logo" src={imgredux} width="100" height="100" alt="vue"/>
                    <h4 class="service-card-title mt-3 pb-2">Redux Course</h4>
                    <h6 class="service-card-subTitle pb-2 m-0">Redux Frontent Development</h6>
                    <h1 className="pb-2">$2000</h1>
                    <button className="btn btn-danger servicebtn mb-4">Buy Now</button>
                </div>
            </div>
        </div>

        <div class="col-md-3 p-2">
            <div class="card  service-card  text-center w-100">
                <div class="card-body">
                    <img class="service-card-logo" src={imgvue} width="100" height="100" alt="angular"/>
                    <h4 class="service-card-title mt-3 pb-2">Vue Course</h4>
                    <h6 class="service-card-subTitle pb-2 m-0">Vue Frontend Development</h6>
                    <h1 className="pb-2">$2000</h1>
                    <button className="btn btn-danger servicebtn mb-4">Buy Now</button>
                </div>
            </div>
        </div>

        <div class="col-md-3 p-2 ">
            <div class="card service-card text-center w-100">
                <div class="card-body">
                    <img class="service-card-logo" src={imgnode} width="100" height="100" alt="redux"/>
                    <h4 class="service-card-title mt-3 pb-2">Node Course</h4>
                    <h6 class="service-card-subTitle pb-2 m-0">Node for Recat Course</h6>
                    <h1 className="pb-2">$2000</h1>
                    <button className="btn btn-danger servicebtn mb-4">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="col-md-3 p-2 ">
            <div class="card service-card text-center w-100">
                <div class="card-body">
                    <img class="service-card-logo" src={imgangular} width="100" height="100" alt="react"/>
                    <h4 class="service-card-title mt-3 pb-2">Angular Course</h4>
                    <h6 class="service-card-subTitle pb-2 m-0">Angular Frontend Development</h6>
                    <h1 className="pb-2">$2000</h1>
                    <button className="btn btn-danger servicebtn mb-4">Buy Now</button>
                </div>
            </div>
        </div>

        <div class="col-md-3 p-2">
            <div class="card  service-card text-center w-100">
                <div class="card-body">
                    <img class="service-card-logo" src={imgjs} width="100" height="100" alt="vue"/>
                    <h4 class="service-card-title mt-3 pb-2">JavaScript Course</h4>
                    <h6 class="service-card-subTitle pb-2 m-0">JavaScript Frontent Development</h6>
                    <h1 className="pb-2">$2000</h1>
                    <button className="btn btn-danger servicebtn mb-4">Buy Now</button>
                </div>
            </div>
        </div>

        <div class="col-md-3 p-2">
            <div class="card  service-card  text-center w-100">
                <div class="card-body">
                    <img class="service-card-logo" src={imghtml} width="100" height="100" alt="angular"/>
                    <h4 class="service-card-title mt-3 pb-2">HTML Course</h4>
                    <h6 class="service-card-subTitle pb-2 m-0">HTML Frontend Development</h6>
                    <h1 className="pb-2">$2000</h1>
                    <button className="btn btn-danger servicebtn mb-4">Buy Now</button>
                </div>
            </div>
        </div>

        <div class="col-md-3 p-2 ">
            <div class="card service-card text-center w-100">
                <div class="card-body">
                    <img class="service-card-logo" src={imgcss} width="100" height="100" alt="redux"/>
                    <h4 class="service-card-title mt-3 pb-2">CSS Course</h4>
                    <h6 class="service-card-subTitle pb-2 m-0">CSS for Frontend Course</h6>
                    <h1 className="pb-2">$2000</h1>
                    <button className="btn btn-danger servicebtn mb-4">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ServiceDetail;