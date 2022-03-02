import { createContext, useEffect, useState } from "react";
import { generate } from "../data/WordGenerator";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const word = generate();

    return <Context.Provider value={{ word }}>{children}</Context.Provider>;
};
