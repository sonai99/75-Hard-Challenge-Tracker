import "./App.css";
import { Route, Routes } from "react-router";
import LandingPage from "./Components/LandingPage/LandingPage";
import TaskPage from "./Components/TaskPage/TaskPage";
import Login from "./Components/AuthPage/Login/Login";
import Signup from "./Components/AuthPage/Signup/Signup";
import Header from "./Components/LandingPage/Header/Header";
import TotalDaysList from "./Components/TaskPage/TotalDaysList/TotalDaysList";
import IndividualDaysTask from "./Components/TaskPage/IndividualDaysTask/IndividualDaysTask";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/day/:dayNumber" element={<TotalDaysList />} />
        <Route path="/day/:dayNumber/tasks" element={<IndividualDaysTask />} />
      </Routes>

      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
