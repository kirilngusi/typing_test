import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/Context.js";
import useKeyPress from "./UseKeyPress.js";

const FormInput = () => {
    const { text } = useContext(Context);

    const [input, setInput] = useState("");
    const [leftPadding, setLeftPadding] = useState(
        new Array(30).fill(" ").join(" ")
    );

    const [currentChar, setCurrentChar] = useState(text.charAt(0));
    const [incomingChars, setIncomingChars] = useState(text.substring(1));
    const [correct, setCorrect] = useState(true);
    const [outgoingChars, setOutgoingChars] = useState("");

    const onChangeInput = (e) => {
        setInput(e.target.value);
    };

    const useKeyPress = ({ key }) => {
        let updatedIncomingChars = incomingChars;
        let updatedOutgoingChars = outgoingChars;

        if (key == " ") {
            setInput("");
        }
        if (key == currentChar) {
            setCorrect(true);

            console.log("a1", leftPadding.length);

            if (leftPadding.length > 0) {
                setLeftPadding(leftPadding.substring(1));
                console.log("kho hieu", leftPadding.substring(1));
            }

            updatedOutgoingChars += currentChar;
            setOutgoingChars(updatedOutgoingChars);

            console.log("outgoingChars", outgoingChars);

            setCurrentChar(incomingChars.charAt(0));

            updatedIncomingChars = incomingChars.substring(1);

            if (updatedIncomingChars.split(" ").length < 10) {
                updatedIncomingChars += " " + text;
            }
            setIncomingChars(updatedIncomingChars);
        }
    };

    return (
        <>
            <div className="textInputBase">
                <span className="outgoingText ">
                    {(leftPadding + outgoingChars).slice(-30)}
                </span>
                <br />
                <span className={correct ? "currentChar" : "incorrect-text"}>
                    {currentChar}
                </span>
                <br />
                <span className="incomingText ">
                    {incomingChars.substring(0, 30)}
                </span>
            </div>
            <input
                className=""
                type="text"
                placeholder="Enter"
                value={input}
                onChange={onChangeInput}
                onKeyPress={useKeyPress}
            />
        </>
    );
};

export default FormInput;
