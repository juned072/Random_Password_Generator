import React, { useState } from "react";
import { LC, NC, UC, SC } from "../data/PasswordData";

const Password = () => {
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [passwordLenght, setPasswordLenght] = useState(8);
  const [finalPassword, setFinalPassword] = useState();

  const generatePassword = () => {
    let charSet = "";
    let finalPassword = "";
    if (upperCase || lowerCase || number || symbol) {
      if (upperCase) charSet += UC;
      if (lowerCase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;

      for (let i = 0; i < passwordLenght; i++) {
        finalPassword += charSet.charAt(
          Math.floor(Math.random() * charSet.length)
        );
        setFinalPassword(finalPassword);
      }
    } else {
      alert("select at least one checke box!");
    }
  };

  const copyPass = () => {
    navigator.clipboard.writeText(finalPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-950">
      <div className="h-auto w-full md:w-96 bg-blue-950 p-8 rounded-md shadow-custom ">
        <h1 className="text-center pb-8 text-white text-2xl">
          Password Generator
        </h1>
        <div className="flex justify-center items-center">
          <input
            value={finalPassword}
            type="text"
            readOnly
            className="bg-blue-800 p-2 outline-none w-72 md:w-full text-white"
          />
          <p
            className="p-2 bg-red-500 text-white cursor-pointer"
            onClick={copyPass}
          >
            Copy
          </p>
        </div>
        <div className="flex  md:flex-row justify-between items-center mt-4">
          <p className="text-white text-lg">Password Length</p>
          <input
            type="number"
            max={20}
            min={8}
            className="outline-none mt-2 md:mt-0 md:ml-4"
            value={passwordLenght}
            onChange={(e) => setPasswordLenght(e.target.value)}
          />
        </div>
        <div className="flex md:flex-row justify-between items-center mt-4">
          <p className="text-white text-lg">Include Uppercase letters</p>
          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => setUpperCase(!upperCase)}
          />
        </div>
        <div className="flex md:flex-row justify-between items-center mt-4">
          <p className="text-white text-lg">Include Lowercase letters</p>
          <input
            type="checkbox"
            checked={lowerCase}
            onChange={() => setLowerCase(!lowerCase)}
          />
        </div>
        <div className="flex md:flex-row justify-between items-center mt-4">
          <p className="text-white text-lg">Include Numbers</p>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>
        <div className="flex md:flex-row justify-between items-center mt-4 ">
          <p className="text-white text-lg">Include Symbols</p>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
        </div>
        <div className="text-center mt-8">
          <button
            className="p-2 w-full md:w-80 bg-blue-800 text-white rounded-md hover:bg-blue-900"
            onClick={generatePassword}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
