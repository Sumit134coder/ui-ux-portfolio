"use client";

import { useState } from "react";
import { passwordRules, passwordFacts } from "@/constants";
import { FaRegSadCry, FaRegCopy } from "react-icons/fa";
import { BsShieldLockFill , BsGithub , BsLinkedin } from "react-icons/bs";
import usePassword from "@/hooks/usePassword";
import "./styles.css";

const PassGenerator = () => {
  const { password, error, generatePassword, passStrength, fact } =
    usePassword();

  const [passLength, setPassLength] = useState(4);
  const [initial, setInitial] = useState(true);
  const [checkboxes, setCheckboxes] = useState(passwordRules);
  const [copied, setCopied] = useState(false);

  const handleCheckbox = (index) => {
    const temp = [...checkboxes];
    temp[index].value = !temp[index].value;

    setCheckboxes(temp);
  };

  const handleCopyPassword = () => {
    setCopied(true);

    navigator.clipboard.writeText(password);

    setTimeout(() => {
      setCopied(false);
    }, [2000]);
  };

  return (
    <div className="flex justify-center items-center text-white w-full h-full bg-[#DAFFFB]">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-[3rem] w-auto m-4 md:m-0 lg:w-1/2 lg:h-2/3 h-auto shadow-xl">
        {/* --pass container--- */}
        <div className="rounded-[2rem] bg-gradient p-[1rem] flex flex-col justify-between items-center">
          <h1 className="text-center font-semibold">Password</h1>

          {initial ? (
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[3rem] text-center">
                <BsShieldLockFill />
              </h1>
              <p className="font-semibold mt-3">
                Genrerate password with just a click
              </p>
            </div>
          ) : (
            <>
              {error ? (
                <div className="flex flex-col items-center">
                  <div>
                    <FaRegSadCry className="text-[4rem]" />
                  </div>
                  <h5 className="font-semibold text-center mt-3">{error}</h5>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <h5 className="text-[2rem] font-semibold text-center">
                    {password}
                  </h5>
                  <button
                    className="btn-pass mt-4 rounded-full px-4 py-2 flex items-center"
                    onClick={handleCopyPassword}
                  >
                    <span className="mr-3">
                      <FaRegCopy />
                    </span>
                    {copied ? "Copied..." : "Copy"}
                  </button>
                </div>
              )}
            </>
          )}

          { initial ? <div className="flex items-center justify-center text-[2rem] gap-5">
            <a href='https://github.com/Sumit134coder' target="_blank"><BsGithub /></a>
            <a href='https://www.linkedin.com/in/sumit-mehra-6579171b4/' target="_blank"><BsLinkedin /></a>
          </div> : <div>
            <h4 className="text-center font-semibold text-lg">
              {error ? "Can't generate password" : passStrength}
            </h4>
            <p className="text-sm my-3 text-center">{fact}</p>
          </div>}
        </div>

        {/* --values--- */}
        <div className="p-[1rem] text-[#001C30] flex flex-col justify-between">
          <h2 className="font-bold text-[1.6rem]">Password Customization</h2>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="font-semibold">Character Length</label>
              <span className="text-lg font-bold">{passLength}</span>
            </div>
            <input
              type="range"
              className="pass-range"
              min="4"
              max="16"
              value={passLength}
              onChange={(e) => setPassLength(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 gap-3 my-4">
            {checkboxes.map((el, i) => (
              <div key={`pass-check-${i}`} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="pass-input"
                  value={el.value}
                  onChange={(e) => handleCheckbox(i)}
                />
                <label className={el.value && "font-semibold"}>
                  {el.title}
                </label>
              </div>
            ))}
          </div>

          <button
            className="bg-gradient w-full text-white font-semibold p-4 rounded-full"
            onClick={() => {
              setInitial(false);
              generatePassword(checkboxes, passLength);
            }}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassGenerator;
