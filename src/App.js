import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'



function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([ ])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])


  // Fetch all tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8000/tasks');
    const data = await res.json();
    return data;
  }


  // Fetch one task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`);
    const data = await res.json();
    return data;
  }



  // Add taks
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:8000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = {id, ...task};
    // setTasks([...tasks, newTask])
  }


  // Delete Task ----> PROP DRILLING
  const delTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE"
    });

    // setTasks(tasks.filter((curTask) => {
    //   if(curTask.id !== id)
    //     return curTask;
    // }))
    setTasks(tasks.filter((curTask) =>(curTask.id !== id)) )
  };
  
    


  // Toggle Reminder ----> PROP DRILLING
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id);

    const updatedTask = {
      ...taskToToggle, 
      reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:8000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    });
    const data = await res.json();

    setTasks(tasks.map((task) => 
      task.id === id ? 
      {...task, reminder: data.reminder} : task
    ))
  }



  return (
    <Router>
      <div className="container">
        <Header 
          title="Task Tracking System" 
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask}
        />
        
        <Route path='/' exact render={(props) => (
          <>
              <AddTasks onAdd={addTask} showAddTask={showAddTask} />
              {
                tasks.length > 0 ? 
                  <Tasks 
                    tasks={tasks} 
                    onDelete={delTask} 
                    onToggle={toggleReminder}
                  /> : 'No Task to display'
              }
          </>
        ) } />
        <Route path='/about' exact component={About}/>
        <Footer />
      </div>
    
    </Router>
    );
}

export default App;