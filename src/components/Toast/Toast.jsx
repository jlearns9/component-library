/* eslint-disable react/prop-types */

import React from "react";
import {
    ToastSuccess,
    ToastWarning,
    ToastInfo,
    ToastError,
} from "../../assets/svg.jsx";

export default function Toast({ message, closeToast, color, status }) {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            closeToast();
        }, 4000); // Toast Timer

        return () => clearTimeout(timer);
    }, [closeToast]);

    let iconType;

    if (status === "success") {
        iconType = <ToastSuccess />;
    } else if (status === "warning") {
        iconType = <ToastWarning />;
    } else if (status === "info") {
        iconType = <ToastInfo />;
    } else if (status === "error") {
        iconType = <ToastError />;
    } else {
        iconType = <ToastInfo />;
    }

    return (
        <div className="toast">
            <div className={`toast__details ${color} flex`}>
                <div>{iconType}</div>
                <div className="flex column wrap">{message}</div>
            </div>
        </div>
    );
}
