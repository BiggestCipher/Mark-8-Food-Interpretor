import React, { useState } from "react";
import "./styles.css";

const FoodGroup = {
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🍅": "Tomato",
  "🍄": "Mushroom",
  "🍗": "Poultry Leg",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🍭": "Lollipop"
};

const Foods = Object.keys(FoodGroup);

export default function App() {
  const [Food, setFood] = useState("");
  const [meaning, setMeaning] = useState("Translation will appear here:");

  function changeHandler(event) {
    const inputFood = event.target.value;
    setFood(inputFood);

    if (inputFood in FoodGroup) {
      setMeaning(FoodGroup[inputFood]);
    } else {
      setMeaning("Sorry! But I Can't recognize this Food. 😭");
    }
  }

  function FoodClickHandler(inputFood) {
    setMeaning(FoodGroup[inputFood]);
  }

  return (
    <div className="App">
      <h1>Food Interpretor</h1>
      <input
        onChange={changeHandler}
        value={Food}
        placeholder={"Enter any Food Emoji"}
        style={{ padding: "1em" }}
      />
      <h2> {Food} </h2> {}
      <h3> {meaning} </h3> {}
      {Foods.map((Food) => (
        <span
          onClick={() => FoodClickHandler(Food)}
          style={{ fontsize: "2rem", padding: "1rem", cursor: "pointer" }}
        >
          {""}
          {Food}{" "}
        </span>
      ))}
    </div>
  );
}
