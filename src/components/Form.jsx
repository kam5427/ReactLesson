import { useState } from "react";

export default function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const handleOkButtonClick = () => {
    onSubmit(inputValue);
    setInputValue("");
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input value={inputValue} onChange={handleInputChange}></input>
      <button onClick={handleOkButtonClick}>OK</button>
      <button onClick={() => setInputValue("")}>clear</button>
    </div>
  );
}
