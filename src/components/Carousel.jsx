/* eslint-disable react/prop-types */

import React from "react";
import { GoDot, GoDotFill } from "react-icons/go";


export default function Carousel({ children }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const totalChildren = React.Children.count(children);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalChildren - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalChildren - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel flex">
            <div className="carousel__buttons flex">
                <button className="carousel__button" onClick={goToPrev}>←</button>
                <div>
                    {[...Array(totalChildren)].map((_, index) => (
                        <span key={index}>
                            {index === currentIndex ? <GoDotFill /> : <GoDot />}
                        </span>
                    ))}
                </div>
                <button className="carousel__button" onClick={goToNext}>→</button>
            </div>
            {React.Children.map(children, (child, index) => (
                <div
                    key={index}
                    style={{
                        display: index === currentIndex ? "block" : "none",
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}
