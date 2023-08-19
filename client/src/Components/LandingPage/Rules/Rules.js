import React from "react";
import "./Rules.css";

const rulesData = [
  "Make a diet and stick to it",
  "Read atleast 10 Pages from a Book",
  "Do an indoor workout [atleast 45 mins]",
  "Do an outdoor workout [atleast 45 mins]",
  "Do Not consume any alcohol/smoking/porn",
  "Upload a daily progress pic",
  "Drink 1 gallon of water",
  "Update in our website daily without miss"
];

const Rules = () => {
  return (
    <div className="rules-container">
      <h2>Challenge Rules</h2>
      <ul className="rules-list">
        {rulesData.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rules;
