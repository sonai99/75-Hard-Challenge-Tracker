import React, { useState } from "react";
import "./TotalDaysList.css";
// import TaskPage from "./TaskPage"; // Import the TaskPage component
import IndividualDaysTask from "../IndividualDaysTask/IndividualDaysTask";

const TotalDaysList = () => {
  const totalDays = 75; // Change this to the total number of days
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div className="total-days-list">
      {Array.from({ length: totalDays + 1 }, (_, index) => (
        <div
          className={`day ${selectedDay === index ? "active" : ""}`}
          key={index}
          onClick={() => setSelectedDay(index)}
        >
          {selectedDay === index && <IndividualDaysTask dayNumber={index} />}
          Day {index}
        </div>
      ))}
    </div>
  );
};

export default TotalDaysList;
