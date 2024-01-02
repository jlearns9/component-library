/* eslint-disable react/prop-types */

import { FaReact } from "react-icons/fa";

export default function Header({ children }) {

    return (
        <>
            <div className="flex header">
                <FaReact className="header__icon" />
                <h1 className="header__title">{children}</h1>
            </div>
            <hr />
        </>
    );
}