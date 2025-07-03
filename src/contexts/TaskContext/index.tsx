import React, { createContext, useContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";

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

  type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
  }

  const initialContextValue = {
    state: initialState,
    setState: () => {}
  };
  

 export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
  children: React.ReactNode;
}

  export function TaskContextProvider({ children }: TaskContextProviderProps) {
    return (
      <TaskContext.Provider value={initialContextValue}>
        {children}
      </TaskContext.Provider>
    );
  }

  export function useTaskContext(){
    return useContext(TaskContext);
  }