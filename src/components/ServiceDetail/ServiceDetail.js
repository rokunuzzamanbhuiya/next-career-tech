import React from "react";
import "./ServiceDetail.css";

const ServiceDetail = (props) => {
  const { name, detail, price, picture } = props.services;
 
  return (
    <div className="col-md-3 p-2 ">
        <div className="card service-card text-center w-100 outline">
            <div className="card-body">
                <img className="service-card-logo" src={picture} width="100" height="100" alt="react"/>
                <h4 className="service-card-title mt-3 pb-2">{name}</h4>
                <h6 className="service-card-subTitle pb-2 m-0">{detail}</h6>
                <h2 className="pb-2">${price}</h2>
                <button className="btn btn-danger servicebtn mb-4">Buy Now</button>
            </div>
        </div>
    </div>
  );
};

export default ServiceDetail;




