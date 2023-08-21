  import React, { useState } from "react";
  import IndividualDaysTask from "../IndividualDaysTask/IndividualDaysTask";
  import { Link } from "react-router-dom";
  import "./TotalDaysList.css";

  const TotalDaysList = () => {
    const totalDays = 75;
    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (index) => {
      setSelectedDay(index === selectedDay ? null : index);
    };

    return (
      <div className="total-days-list">
        {Array.from({ length: totalDays + 1 }, (_, index) => (
          <Link
            to={`/day/${index}/tasks`}
            key={index}
            className={`day ${selectedDay === index ? "active" : ""}`}
            onClick={() => handleDayClick(index)}
          >
            Day {index}
          </Link>
        ))}
        {selectedDay !== null && (
          <IndividualDaysTask dayNumber={selectedDay} key={selectedDay} />
        )}
      </div>
    );
  };

  export default TotalDaysList;
