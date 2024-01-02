/* eslint-disable react/prop-types */

import React from "react";
import ReactDOM from "react-dom";
import Toast from "./Toast";
import happytoast from "../../assets/happytoast.jpg"
import sadtoast from "../../assets/sadtoast.png"
import smarttoast from "../../assets/smarttoast.png"
import suspicioustoast from "../../assets/suspicioustoast.png"

export default function ToastPortal({ color, status, children }) {
    const portalRoot = document.getElementById("toast-root");
    const [visible, setVisible] = React.useState(false);
    const [toastMessage, setToastMessage] = React.useState("");

    const showToast = (message) => {
        setToastMessage(message);
        setVisible(true);
    };

    const closeToast = () => {
        setVisible(false);
    };

    let toastImg;
    if (status === "success") {
        toastImg = happytoast;
    } else if (status === "warning") {
        toastImg = suspicioustoast;
    } else if (status === "info") {
        toastImg = smarttoast;
    } else if (status === "error") {
        toastImg = sadtoast;
    } else {
        toastImg = sadtoast;
    }

    return (
        <>
            {visible &&
                ReactDOM.createPortal(
                    <Toast
                        color={color}
                        status={status}
                        message={toastMessage}
                        closeToast={closeToast}
                    />,
                    portalRoot
                )}
            <button
                className="toast__button"
                onClick={() => showToast(children)}
            >
                <img className="toast__img" src={toastImg} />
            </button>
            <div id="toast-root"></div>
        </>
    );
}
