/* eslint-disable react/prop-types */

import React from "react";

export const BadgeShapeContext = React.createContext();

export default function Badge({ shape, children }) {

    return (
        <div className="badge__type">
            <h2 className="badge__title">{shape}</h2>
            <div className="flex badge__buttons">
                <BadgeShapeContext.Provider value={shape}>
                    {children}
                </BadgeShapeContext.Provider>
            </div>
        </div>
    );
}
