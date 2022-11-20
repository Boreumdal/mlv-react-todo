import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import { useEffect, useState } from 'react';

function App() {
  const [addTaskToggle, setAddTaskToggle] = useState(false)
  const [taskList, setTaskList] = useState([])
  const [trigger, setTrigger] = useState(false)

  const addTaskToggleFunc = () => {
    setAddTaskToggle(!addTaskToggle)
  }
  
  const toggleTrigger = () => {
    setTrigger(!trigger)
  }

  const handleDelete = (e) => {
    const newTaskList = JSON.parse(localStorage.reactTask).filter(out => out.id !== +e.target.id)
    localStorage.setItem('reactTask', JSON.stringify(newTaskList))
    toggleTrigger()
  }

  useEffect(() => {
    if (localStorage.getItem('reactTask')){
      if (localStorage.reactTask !== ''){
        setTaskList(JSON.parse(localStorage.reactTask))
      }
      else {
        setTaskList(localStorage.reactTask)
      }
    }
    else {
      localStorage.setItem('reactTask', [])
    }
  }, [trigger])

  return (
    <div className="bg-gray-100 container h-screen w-screen overflow-hidden flex justify-center items-center text-gray-800">
      <div className='bg-white shadow-md w-[500px] px-4 py-7'>
        <Navbar addTaskToggle={addTaskToggle} addTaskToggleFunc={addTaskToggleFunc} toggleTrigger={toggleTrigger} />
        <MainContent taskList={taskList} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
