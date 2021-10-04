import React from 'react';
import "./ServiceSingle.css";
import Menu from "../Menu/Menu";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import Footer from "../Footer/Footer";

const ServiceSingle = () => {
    return (
        <div>
            <Menu></Menu>
            <ServiceDetail></ServiceDetail>
            <Footer></Footer>
        </div>
    );
};

export default ServiceSingle;