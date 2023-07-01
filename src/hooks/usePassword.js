import { useState } from "react";
import { passwordFacts } from "@/constants";

const usePassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fact, setFact] = useState(null);
  const [passStrength, setPassStrength] = useState('Weak')

  const generatePassword = (rules, length) => {
    const isRulesSelected = rules.filter((rule) => rule.value === true).length;

    if (isRulesSelected === 0) {
      setError("Please select atleast one rule");
      setPassword("");
      return null;
    }


    setError(null);

    let allowedCharacters = "",
      tempPass = "";

    rules.forEach((el, i) => {
      switch (i) {
        case 0:
          if (el.value) allowedCharacters += "~!@#$%^&*()*+,-./";
          break;
        case 1:
          if (el.value) allowedCharacters += "0123456789";
          break;
        case 2:
          if (el.value) allowedCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case 3:
          if (el.value) allowedCharacters += "abcdefghijklmnopqrstuvwxyz";
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      tempPass +=
        allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
    }

    if(length < 5){
        setPassStrength('Too Weak')
    }else if(length > 5 && length < 11 ){
        setPassStrength('Strong')
    }else {
        setPassStrength('Very Strong')
    }

    setPassword(tempPass);

    let random = Math.floor(Math.random()*10)

    setFact(passwordFacts[random])
  };

  return { generatePassword, error, password , passStrength , fact };
};

export default usePassword;
