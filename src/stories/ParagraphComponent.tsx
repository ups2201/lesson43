import React from "react";
import "./paragraphComponent.css"

// параграф текста (с разными стилями - обычный, цитата, полужирный)
export const ParagraphComponent = ({ type, text }) => {
let fontStyle;
    switch (type) {
        case "quote": {
            fontStyle = "paragraphComponent-quote";
            break;
        }
        case "bold": {
            fontStyle = "paragraphComponent-bold";
            break;
        }
        default: {
            fontStyle = "paragraphComponent";
            break;
        }
    }

    return (
        <p className={fontStyle}>
            {text}
        </p>
    );
};