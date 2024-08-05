import React from "react";

// картинка (с вариантами обтекания)
export const ImageComponent = ({ type, src, text }) => {
    return (
        <>
            {text}
            <img align={type} src={src} className={"imageComponent"}/>
        </>
    );
};