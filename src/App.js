import { useState } from "react";
import "./App.css";

import Button from "./components/Button/Button";
import Dice from "./components/Dice/Dice";
import Loading from "./loading.svg";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dice, setDice] = useState("");

  const fetchDice = () => {
    setDice("");
    setLoading(true);
    fetch("https://rolz.org/api/?1d6.json")
      .then((res) => res.json())
      .then((data) => {
        setDice(data.result);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="container">
      <div id="dice-wrapper">
        {loading && !error ? <img src={Loading} alt="Loading" /> : <></>}

        {error && !loading ? <p className="error">{error}</p> : <></>}

        {dice ? <Dice value={dice} /> : <></>}
      </div>
      <Button fetchDice={fetchDice} title="Roll Dice" />
    </div>
  );
};

export default App;
