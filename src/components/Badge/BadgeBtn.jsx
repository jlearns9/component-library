/* eslint-disable react/prop-types */

import React from 'react'
import { BadgeShapeContext } from "./Badge.jsx";

export default function BadgeBtn({ color, children }) {
    const shape = React.useContext(BadgeShapeContext)

    return (
        <div>
            <p className="small__text">
                {color} - {shape}
            </p>
            <button className={`badge__button ${shape} ${color}`}>
                {children}
            </button>
        </div>
    );
}
