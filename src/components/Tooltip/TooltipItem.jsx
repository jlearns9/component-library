/* eslint-disable react/prop-types */

import React from "react";
import { Inbox } from "../../assets/svg.jsx";
import { TooltipContext } from "./Tooltip.jsx"

export default function TooltipItem({ color, stroke, children }) {
    const { open } = React.useContext(TooltipContext)

    return (
        <>
            {open ? (
                <div className="tooltip">
                    <div className={`tooltip__details ${color} flex`}>
                        {Inbox(stroke)}
                        <div>{children}</div>
                    <div className={`tooltip__triangle ${color}`}></div>
                    </div>
                </div>
            ) : null
            }
        </>
    );
}
