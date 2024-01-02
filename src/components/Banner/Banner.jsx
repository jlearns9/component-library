/* eslint-disable react/prop-types */

// import React from "react";

import { Success, Warning, Error, Neutral } from "../../assets/svg.jsx";

export default function Banner({ status, children }) {
    const lineType = children.length > 1 ? "multiline" : "singleline"
    let iconType;
    let color;

    if (status === "success") {
        iconType = <Success />;
        color = "green";
    } else if (status === "warning") {
        iconType = <Warning />;
        color = "yellow";
    } else if (status === "error") {
        iconType = <Error />;
        color = "red";
    } else if (status === "neutral") {
        iconType = <Neutral />;
        color = "blue";
    } else {
        iconType = null;
        color = null;
    }

    return (
        <>
            <p className="small__text">
                {status} - {lineType}
            </p>
            <div className={`flex banner ${color}`}>
                {iconType}
                <div>{children}</div>
            </div>
        </>
    );
}
