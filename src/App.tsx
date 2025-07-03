import { Home } from "./pages/Home";
import "./styles/theme.css";
import "./styles/global.css";
import type { TaskStateModel } from "./models/TaskStateModel";
import { useState } from "react";
import { TaskContextProvider } from "./contexts/TaskContext";

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaning: 0,
    formatedSecondsRemaning: "00:00",
    activeTask: null,
    currentCycle: 0,
    config: {
      workTime: 25, // 25 minutes in seconds
      shortBreak: 5, // 5 minutes in seconds
      longBreak: 15, // 15 minutes in seconds
    }
  };
export function App() {
  const [state, setState] = useState(initialState);
  
  return ( 
  <TaskContextProvider>
    <Home />
  </TaskContextProvider>
    )
  ;
}
