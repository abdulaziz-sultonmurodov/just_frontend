import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import "../styles/counter.css";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter flex justify-between align-center p-5 mr-20">
      <BiMinus className="white pointer" onClick={() => setCount(count - 1)} />
      <p className="white fontSecondary">{count}</p>
      <BiPlus className="white pointer" onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default Counter;
