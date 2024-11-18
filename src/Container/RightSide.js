
import { useState } from "react"
import logo1 from '../Assest/Makerble_log.png'
import {
    FaPlus,
    FaChevronRight,
  } from 'react-icons/fa'
  import { FaArrowRightLong } from "react-icons/fa6";
  import { FaArrowLeftLong } from "react-icons/fa6";
  import { IoMdSettings } from "react-icons/io";
 import { Link } from "react-router-dom";

export default function RightSide() {
  const [newTask, setNewTask] = useState("")
  const[showBoard,setShowBoard]=useState("")
  const [tasks, setTasks] = useState([
    { id: 1, text: "follow up call needed", completed: false },
    { id: 2, text: "contact the local authority", completed: false },
    { id: 3, text: "Book in another meeting", completed: false },
    { id: 4, text: "Speak to the GP about XYZ", completed: false },
    { id: 5, text: "you need to call her about ...", completed: false },
    { id: 6, text: "Submission deadline", completed: false },
  ])

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
      setNewTask("")
    }
  }

  return (
    <div className="max-w-4xl mx-auto">

<div>
  <div className="flex items-center justify-between bg-white mb-1 p-3 rounded-t-lg ">
    <h3 className="text-xl text-blue-700 font-medium">Boards</h3>
    <button className="bg-blue-500 font-medium text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 flex items-center space-x-1">
      <FaPlus className="w-3 h-3" />
      <Link to='new_board'>
      <span>New Board</span>
      </Link>
      
    </button>
  </div>
  <div className="space-y-1 bg-white  p-3 rounded-b-lg">
    {['Angola Production', 'Attendance Reporting', 'CHIVA RYH'].map((albums, i) => (
      <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md group cursor-pointer">
        <div className="flex items-center space-x-2">
        <img src={logo1} className="text-gray-400 h-8 w-8" />
          <span className="text-sm text-gray-600">{albums}</span>
        </div>
       
        <FaChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    ))}

    <div className="flex justify-end mb-2">
    <button
              className="text-blue-300 hover:text-blue-600 text-xs"
              onClick={() => setShowBoard(!showBoard)}
            >
              {showBoard ? 'Hide' : 'Show All'}
            </button>
    </div>
  </div>
</div>
      <div className="flex justify-between bg-white items-center rounded-t-lg p-3 mt-2">
        <h1 className="text-xl font-semibold text-gray-800">Personal Progress</h1>
        <a href="#" className="text-blue-500 hover:text-blue-600">
          Go to board
        </a>
      </div>

      {/* Progress Indicators */}
      <div className="space-y-4 mb-8 bg-white rounded-b-lg p-3 mt-1">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-orange-500 rounded-full flex-shrink-0" />
          <div className="flex-grow">
            <p className="text-gray-600 mb-1 text-sm">Are either of your parents living?</p>
            <div className="h-4 bg-gray-200 rounded-lg">
              <div className="h-full w-[70%] bg-emerald-600 rounded-lg " ><p className='text-sm text-center text-white'>7</p></div>
            </div>
          </div>
          <button className="p-1 bg-slate-900 hover:bg-gray-100 rounded-lg">
            <FaPlus className="w-3 h-7 text-white" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-blue-500 rounded-full flex-shrink-0" />
          <div className="flex-grow">
            <p className="text-gray-600 text-sm mb-1">Do you belong to any groups in whi...</p>
            <div className="h-4 bg-gray-200 rounded-full">
              <div className="h-full w-[60%] bg-blue-500 rounded-full" ><p className='text-sm text-center text-white'>6</p> </div>
            </div>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded-lg bg-gray-900">
            <FaPlus className="w-3 h-7 text-white" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-pink-500 rounded-full flex-shrink-0" />
          <div className="flex-grow">
            <p className="text-gray-600 text-sm mb-1">1-2-1 Events</p>
            <div className="h-4 bg-gray-200 rounded-lg">
              <div className="h-full w-[27%] bg-red-500 rounded-lg" ><p className='text-sm text-center text-white'>27</p> </div>
            </div>
          </div>
          <button className="p-1 hover:bg-gray-100 bg-gray-900 rounded-lg">
            <FaPlus className="w-3 h-7 text-white" />
          </button>
        </div>
        <div className="flex justify-end mb-4">
  <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
    Show All
  </a>
</div>
 
      </div>
  

      

      {/* Tasks Section */}
      <div className="mb-1">
        <div className="flex justify-between items-center bg-white rounded-t-lg p-3 mb-1">
          <h2 className="text-xl font-semibold text-gray-800">Tasks</h2>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 text-sm">
              <span className="text-gray-600 border p-1 rounded-lg border-gray-700">25 To Do</span>
              <span className="text-gray-400">|</span>
              <span className="text-white rounded-lg p-1 bg-gray-400">43 Done</span>
            </div>
            <button className="px-4 py-1 bg-blue-300 text-white rounded-md hover:bg-blue-200">
              Filters
            </button>
          </div>
        </div>

        {/* Add Task Input */}
        <div className="flex gap-2  px-7 py-3 bg-white ">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add your next task"
            className="flex-grow p-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTask}
            className="px-3  bg-red-500 text-white  hover:bg-red-600"
          >
            Save Task
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-2 bg-white rounded-b-lg py-6 px-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-2 p-2 border rounded-md hover:bg-gray-50"
            >
            
              <span className="flex-grow text-gray-700">{task.text}</span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
                className="w-3 h-3 border-2 rounded text-blue-500 focus:ring-blue-500"
              />
              <button className="p-1 hover:bg-gray-200 rounded">
                <IoMdSettings className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          ))}
             <div className="flex justify-center py-4">
        <button className="flex items-center p-1 px-4 rounded-l-lg  border border-gray-600 hover:border-blue-400 text-gray-500 hover:text-blue-400">
          <FaArrowLeftLong className="w-4 h-4 mr-1 text-gray-500 hover:text-blue-400" />
          Previous
        </button>
        <button className="flex items-center p-1 hover:text-blue-400 px-6 rounded-r-lg border border-gray-600 hover:border-blue-400 text-gray-500">
          Next
          <FaArrowRightLong className="w-4 h-4 ml-1 text-gray-500 hover:text-blue-400" />
        </button>
      </div>
        </div>
        
   
      </div>

      
    </div>
  )
}