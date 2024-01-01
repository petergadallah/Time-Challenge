import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  console.log("Peter");
  const [name, setName] = useState("unknown entitiy");
  const inputRef = useRef();
  const clickHandler = () => {
    setName(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {name}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
