import React from 'react';
import "./Error.css";
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
        <div class="error">
        <div class="row">
        <div class="col-md-12">
        <h1 class="notfoundh1">Oops!</h1>
        <h2 class="notfoundh2">404 - Page not found</h2>
        <p class="notfoundp">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <NavLink class="notfound" to="/">Go To Homepage</NavLink>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Error;