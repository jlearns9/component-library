/* eslint-disable react/prop-types */

export default function Library({ type, style, children }) {

    return (
        <>
            <div className="library flex">
                <h1 className="library__title">{type}</h1>
                <div className={`${style}`}>{children}</div>
            </div>
        </>
    );
}