/* eslint-disable react/prop-types */

import React from "react"
import Button from "../Button/Button.jsx"
import { TooltipContext } from "./Tooltip.jsx"

export default function TooltipButton({ children, interactionType }) {
    const { toggleOpen } = React.useContext(TooltipContext)

    const handleClick = () => {
        if (interactionType === 'click') {
            toggleOpen();
        }
    };

    const handleHover = () => {
        if (interactionType === 'hover') {
            toggleOpen();
        }
    };

    const handleLeave = () => {
        if (interactionType === 'hover') {
            toggleOpen();
        }
    };

    return (
        <Button 
            onClick={handleClick}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            {children}
        </Button>
    )
}