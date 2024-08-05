import React from "react";

// компонент "заголовок (с поддержкой уровней)"
export const HeaderComponent = ({ level, text }) => {
    if (level < 1 || level > 6) {
        throw Error(`Не существует тега h${level}`);
    }
    return React.createElement(
        `h${level}`,
        {},
        text
    );
};