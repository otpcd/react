import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      date: 'Jan 5',
      reminder: false,
    },
    {
      id: 2,
      text: 'Football',
      date: 'Jan 5',
      reminder: false,
    },
    {
      id: 3,
      text: 'Homework',
      date: 'Jan 5',
      reminder: false,
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      {<Tasks tasks={tasks} onDelete={deleteTask} />}
    </div>
  );
}

export default App;
