import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

export default function App() {
  const [savedValues, setSavedValues] = useState([]);

  const handleFormSubmit = (value) => {
    const bufferArray = [...savedValues];
    bufferArray.push(value);
    setSavedValues(bufferArray);
  };

  return (
    <div className="App">
      <ul>
        {savedValues.map((text, index) => (
          <li>{text}</li>
        ))}
      </ul>
      <Form onSubmit={handleFormSubmit} />
      <List bufferArray={savedValues} />
    </div>
  );
}

// Создать новый компонент List
// List принимает в качестве пропсов массив строк
// У каждого элемента появляется кнопка удаления
// По нажатию на кнопку удаляется элемент из массива
// Для этого надо передать коллбэк для удаления,
// который будет принимать функцию с аргументом индекса
