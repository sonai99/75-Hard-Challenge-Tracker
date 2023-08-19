import "./App.css";
import { Route, Routes } from "react-router";
import LandingPage from "./Components/LandingPage/LandingPage";
import TaskPage from "./Components/TaskPage/TaskPage";
import Login from "./Components/AuthPage/Login/Login";
import Signup from "./Components/AuthPage/Signup/Signup";
import Header from "./Components/LandingPage/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
