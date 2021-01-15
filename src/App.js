import { useState } from "react";
import "./App.css";

import Button from "./components/Button/Button";

import Dice from "./components/Dice/Dice";

const possibility = [1, 2, 3, 4, 5, 6];
const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [diceData, setDiceData] = useState([]);

  const fetchDice = () => {
    setDiceData([]);
    setLoading(true);
    fetch("https://rolz.org/api/?6d6.json")
      .then((res) => res.json())
      .then((data) => {
        const dices = data.details
          .split("")
          .filter((item) => possibility.includes(+item));
        setDiceData(dices);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="container">
      <Button fetchDice={fetchDice} title="Roll Dice" />
      <div id="dice-wrapper">
        <p>{loading ? "Rolling...." : ""}</p>
        <p>{error}</p>
        {diceData?.map((dice, idx) => (
          <Dice value={dice} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default App;
