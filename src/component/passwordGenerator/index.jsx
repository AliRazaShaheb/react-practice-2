import { useState } from "react";
import "./passwordgenerator.css";
const PasswordGenerator = () => {
  const [copyStatus, setCopyStatus] = useState("Copy");
  const [randomPass, set_randomPass] = useState("");
  const [rangeVal, set_rangeVal] = useState("10");
  const [options, set_options] = useState([
    { label: "Include Uppercase Letters", state: true },
    { label: "Include Lowercase Letters", state: true },
    { label: "Include Numbers", state: true },
    { label: "Include Symbols", state: true }
  ]);
  const getRange = (e) => {
    const { value } = e.target;
    set_rangeVal(value);
  };
  const gPassHandler = () => {
    let character = "";
    if (options[0].state) character += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options[1].state) character += "abcdefghijklmnopqrstuvwxyz";
    if (options[2].state) character += "0123456789";
    if (options[3].state) character += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0; i < rangeVal; i++) {
      let randomIndex = Math.floor(Math.random() * character.length);
      password += character[randomIndex];
    }
    if (!character) {
      alert("at least one option should be selected");
      return;
    }
    set_randomPass(password);
  };
  const optionHandler = (index) => {
    const _options = [...options];
    _options[index].state = !options[index].state;
    set_options(_options);
  };

  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = randomPass;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setCopyStatus("Copied");

    // Reset the copy status back to "Copy" after 2 seconds
    setTimeout(() => {
      setCopyStatus("Copy");
    }, 2000);
  };
  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(randomPass);
  //   setCopyStatus("Copied");

  //   setTimeout(() => {
  //     setCopyStatus("Copy");
  //   }, 2000);
  // };

  return (
    <div className="password-generator-container">
      {randomPass ? (
        <div className="password-copy u-flex-between ">
          <p>{randomPass}</p>
          <button className="u-btn" onClick={copyToClipboard}>
            {copyStatus}
          </button>
        </div>
      ) : null}
      <div className="char-length u-flex-between">
        <p>Character Length</p>
        <p>{rangeVal}</p>
      </div>
      <div className="range-container">
        <input
          type="range"
          min="4"
          max="20"
          value={rangeVal}
          className="u-w-full"
          onChange={getRange}
        />
      </div>
      <div className="options">
        {options.map((each, idx) => {
          return (
            <label className="u-flex-start" key={idx}>
              <input
                type="checkbox"
                checked={each.state}
                onChange={() => optionHandler(idx)}
              />
              {each.label}
            </label>
          );
        })}
      </div>
      <div className="generate-btn">
        <button className="u-btn" onClick={gPassHandler}>
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
