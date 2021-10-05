import React from "react";
import "./Services.css";
import { useState } from "react";
import { useEffect } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    
  return (
    <div className="container service text-center mt-5">
        <h1 className="contact-title">Our Services</h1>
        <p className="contact-paragraph">This one is a typical sweet Thanksgiving pie, although it took a bit of getting used to, at first. Top it up with Our Services and enjoy.</p>
        <div className="row">
          {services.map((services) => (
            <ServiceDetail services={services}></ServiceDetail>
          ))}
        </div>
    </div>
  );
};

export default Services;


















