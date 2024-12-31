import { useState } from "react";
import "./Challenge.css";

const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncerement = () => {
    setCount(count + step);
  };
  const handleDecrement = () => {
    setCount(count - step);
  };
  return (
    <div className="container state-container">
      <h3>useState Challenge</h3>
      <p className="count">
        Count: <span> {count} </span>
      </p>

      <div className="read-the-docs grid-two-col">
        <label>Step:</label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <div className="grid-three-col">
        <button onClick={handleIncerement} disabled={count >= 100}>
          Increment
        </button>
        <button onClick={handleDecrement} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default CounterChallenge;
