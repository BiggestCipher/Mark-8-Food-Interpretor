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
      <h1 style={{ margin: "3.5rem", fontSize: "2.5rem" }}>Food Interpretor</h1>
      <input
        onChange={changeHandler}
        value={Food}
        placeholder={"Enter any Food Emoji"}
        style={{ padding: "0.5rem", fontSize: "1.5rem" }}
      />
      <h2 style={{ fontSize: " 3rem" }}> {Food} </h2> {}
      <h3 style={{ fontSize: " 2rem" }}> {meaning} </h3> {}
      {Foods.map((Food) => (
        <span
          onClick={() => FoodClickHandler(Food)}
          style={{
            fontSize: "2.5rem",
            margin: "8rem",
            padding: "4rem",
            cursor: "pointer"
          }}
        >
          {""}
          {Food}{" "}
        </span>
      ))}
    </div>
  );
}
