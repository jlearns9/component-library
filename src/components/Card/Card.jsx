/* eslint-disable react/prop-types */

// import React from "react";

export default function Card({ icon, children }) {

    return (
        <div className="card">
            <p className="small__text">Card</p>
            <div className="card__details">
                {<div className="card__icon">{icon}</div>}
                {children}
            </div>
        </div>
    );
}
