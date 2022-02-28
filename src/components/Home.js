import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/Context.js";

const Home = () => {
    const { text } = useContext(Context);

    const [input, setInput] = useState("");
    const [correct, setCorrect] = useState(true);

    const [currentChar, setCurrentChar] = useState(text.charAt(0));
    const [incomingChars, setIncomingChars] = useState(text.substring(1));
    const [outgoingChars, setOutgoingChars] = useState("");

    const [accuracy, setAccuracy] = useState("0");
    const [typedChars, setTypedChars] = useState("");

    const onChangeInput = (e) => {
        setInput(e.target.value);
    };

    const useKeyPress = ({ key }) => {
        let updatedIncomingChars = incomingChars;
        let updatedOutgoingChars = outgoingChars;
        let sumTypedChars = typedChars + key;
        if (key === " ") {
            setInput("");
        }
        if (key === currentChar) {
            setCorrect(true);

            //save outgoing char
            updatedOutgoingChars += currentChar;
            setOutgoingChars(updatedOutgoingChars);

            //set current char
            setCurrentChar(incomingChars.charAt(0));
            updatedIncomingChars = incomingChars.substring(1);

            if (updatedIncomingChars.split(" ").length < 10) {
                //render text
                updatedIncomingChars += " " + text;
            }

            //set next char
            setIncomingChars(updatedIncomingChars);
        } else {
            setCorrect(false);
        }
        setTypedChars(sumTypedChars);

        setAccuracy(
            (
                (updatedOutgoingChars.length * 100) /
                sumTypedChars.length
            ).toFixed(2)
        );
    };

    return (
        <>
            <div className="textInputBase">
                <span className="outgoingText ">
                    {outgoingChars.slice(-30)}
                </span>
                <span className={correct ? "currentChar" : "incorrect-text"}>
                    {currentChar}
                </span>
                <span className="incomingText ">
                    {incomingChars.substring(0, 30)}
                </span>
            </div>
            <input
                className="formInput"
                type="text"
                placeholder="Space"
                value={input}
                onChange={onChangeInput}
                onKeyPress={useKeyPress}
            />
            <p className="results">{accuracy}% acc</p>
        </>
    );
};

export default Home;
