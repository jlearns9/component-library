/* eslint-disable react/prop-types */

// import React from "react";
import { LeftQuote, Dots } from "../../assets/svg.jsx";

export default function Testimonial({ name, role, image, logo, children }) {
    // Alt represents a testimonial without an image.  The other with an image
    const type = image ? "testimonial" : "testimonial-alt";

    if (image) {
        return (
            <>
                <div className={type}>
                    <img className="testimonial__image" src={image} />
                    <div className={`${type}__details`}>
                        <LeftQuote />
                        {children}
                        <h3 className="testimonial__name">{name}</h3>
                        <h4 className="testimonial__role">{role}</h4>
                    </div>
                </div>
                <p className="small__text">Testimonial with image</p>
            </>
        );
    } else {
        return (
            <>
                <div className={type}>
                    <div className={`${type}__details`}>
                        {logo}
                        <div className="testimonial-alt__quote">{children}</div>
                        <div className="testimonial-alt__contact">
                            <span className="testimonial__name">{name}</span>{" "}
                            <span className="divider">/</span>{" "}
                            <span className="testimonial__role">{role}</span>
                        </div>
                    </div>
                    <div className="svg__dots"><Dots /></div>
                </div>
                <p className="small__text">Testimonial without image</p>
            </>
        );
    }
}
