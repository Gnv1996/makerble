import { useState } from 'react'
import {
  FaBell,
  FaSearch,
  FaChevronDown,
  FaPlus,
  FaRegEnvelope,
  FaRegBookmark,
 
} from 'react-icons/fa'
import { CiStar } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import Aside from './Aside';
import logo from '../Assest/logo.png'
import RightSide from './RightSide';
import Home from './Home';


export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'follow up call needed', completed: false },
    { id: 2, text: 'contact the local authority', completed: false },
    { id: 3, text: 'Book in another meeting', completed: false },
    { id: 4, text: 'Speak to the GP about XYZ', completed: false },
    { id: 5, text: 'Submission deadline', completed: false }
  ])

  const [newTask, setNewTask] = useState('')

  const addTask = (e) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }])
      setNewTask('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      

      <div className="flex">
        {/* Left Sidebar */}
       <Aside/>

        {/* Main Content */}
        <main className="flex-1">
       <Home/>
          
        </main>

        {/* Right Sidebar */}
        <aside className="w-96 mt-3  h-[calc(100vh-6rem)] ">
       
<RightSide/>
        </aside>
      </div>
      
    </div>
  )
}