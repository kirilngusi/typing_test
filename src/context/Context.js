import { createContext, useEffect, useState } from "react";
import { WORDS_EN_200 } from "../data/WordData";
import { generate } from "../data/WordGenerator";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const word = generate();

    // function shuffle(array) {
    //     return array.sort(() => Math.random() - 0.5);
    // }

    // const textToString = shuffle(WORDS_EN_200).toString();
    // const textCor = textToString.replaceAll(",", " ");

    // useEffect(() => {
    //     setText(word);
    // }, []);
    const text = word;

    return <Context.Provider value={{ text }}>{children}</Context.Provider>;
};
