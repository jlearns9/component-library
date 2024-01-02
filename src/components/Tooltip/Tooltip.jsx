/* eslint-disable react/prop-types */

import React from "react"
import useToggle from "../../hooks/useToggle.js"

const TooltipContext = React.createContext()
export { TooltipContext }

export default function Tooltip({ children }) {
    const [open, toggleOpen] = useToggle({
        initialValue: false, 
    })

    return (
        <TooltipContext.Provider value={{ open, toggleOpen }}>
            <div className="tooltip__container">
                {children}
            </div>
        </TooltipContext.Provider>
    )
}
