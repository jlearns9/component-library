/* eslint-disable react/prop-types */

// import React from "react"

export default function Button({ children, ...rest}) {

    return (
        <button className="tooltip__button" {...rest}>
            {children}
        </button>
    )
}