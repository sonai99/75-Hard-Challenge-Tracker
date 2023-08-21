import React, { useState, useEffect } from "react";
import "./IndividualDaysTask.css";
import { useParams } from "react-router";

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
  // const localStorageKey = `completedChallenges_day${dayNumber}`;
  const { dayNumber } = useParams(); // Extract dayNumber from the URL
  const localStorageKey = `completedChallenges_day${dayNumber}`;

  const [completedChallenges, setCompletedChallenges] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );
  const [allChallengesCompleted, setAllChallengesCompleted] = useState(false);

  useEffect(() => {
    // Check if all challenges are completed
    if (completedChallenges.length === initialChallenges.length) {
      setAllChallengesCompleted(true);
      // Show an alert or perform other actions here
      alert("Congratulations! All challenges completed on this Day!");
    } else {
      setAllChallengesCompleted(false);
    }
  }, [completedChallenges]);

  const handleComplete = (challenge) => {
    if (!completedChallenges.includes(challenge)) {
      const updatedCompletedChallenges = [...completedChallenges, challenge];
      setCompletedChallenges(updatedCompletedChallenges);

      // Save completed challenges to localStorage
      localStorage.setItem(
        localStorageKey,
        JSON.stringify(updatedCompletedChallenges)
      );
    }
  };

  return (
    <div className="task-page">
      <h2>Today's Challenges</h2>
      <ul>
        {initialChallenges.map((challenge, index) => (
          <li className="taks-li" key={index}>
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
