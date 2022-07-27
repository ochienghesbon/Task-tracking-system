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


  //

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