import React, { useState } from "react";
import "./IndividualDaysTask.css";

const initialChallenges = [
  "Followed my diet",
  "Read a book",
  "Did an indoor workout",
  "Did an outdoor workout",
  "No alcohol/smoking/porn",
  "Uploaded a daily progress pic",
  "1 gallon of water",
];

const IndividualDaysTask = () => {
  const [completedChallenges, setCompletedChallenges] = useState([]);

  const handleComplete = (challenge) => {
    if (!completedChallenges.includes(challenge)) {
      setCompletedChallenges([...completedChallenges, challenge]);
    }
  };

  return (
    <div className="task-page">
      <h2>Today's Challenges</h2>
      <ul>
        {initialChallenges.map((challenge, index) => (
          <li key={index}>
            <span
              className={
                completedChallenges.includes(challenge) ? "completed" : ""
              }
            >
              {challenge}
            </span>
            {!completedChallenges.includes(challenge) && (
              <button onClick={() => handleComplete(challenge)}>
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndividualDaysTask;
