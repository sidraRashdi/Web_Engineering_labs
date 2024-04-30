import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const arr = ["zab", "zzz", "zia", "abc"];
  const z = arr.filter((ele) => ele.charAt(0) === "z");
  return (
    <>
      <div>{JSON.stringify(z)};</div>
    </>
  );
}

export default App;
