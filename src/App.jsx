import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx';
import { tasks as data } from './tasks.js';

import { useState, useEffect } from "react";

function App() { 
  
  return (
    <main className="bg-gray-20 h-screen"> 
      <div className="container mx-auto p-10">
        <TaskForm  />
        <TaskList />
      </div>
    </main>
  )

}

export default App;