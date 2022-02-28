import { createContext, useEffect, useState } from "react";
import { generate } from "../data/WordGenerator";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const word = generate();
    const text = word;

    return <Context.Provider value={{ text }}>{children}</Context.Provider>;
};
