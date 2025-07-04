import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
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