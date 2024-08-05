import React from "react";

// параграф текста (с разными стилями - обычный, цитата, полужирный)
export const ImageComponent = ({ type, src }) => {

    return (<img align={type} src={src} className={"imageComponent"}/>);

};