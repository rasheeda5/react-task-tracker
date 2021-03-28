import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, 
      text: "Doctors Appt", 
      day: "Feb 5th @ 2.30pm", 
      reminder: true, 
    },
    {
      id: 2,
      text: "Meeting @ School",  
      day: "Feb 6th @ 1.30pm",
      reminder: true,
    },
    { id: 3, 
      text: "Food Shopping", 
      day: "Feb 5th @ 2.30pm", 
      reminder: false, 
    },
  ]);


const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const changeReminder = (id) => {
  console.log("hello")
}
  return (
    <div className="container">
      <Header/>
      {tasks.length > 0? <Tasks tasks = {tasks} onDelete = {deleteTask} onDoubleClick = {changeReminder}/>: 'No Tasks :)'}
    </div> 
  );
}

export default App;
