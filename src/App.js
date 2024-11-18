import React from 'react'
import Dashboard from './Container/Dashboard';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Navbar from './Container/Navbar';
import Footer from '../src/Container/Footer'
import MessagesPage from './Screen/MessagesPage';
import NotificationPage from './Screen/NotificationPage';
import Login from './Screen/Login';
import Signup from './Screen/SignUp';
import UpgradePlan from './Screen/UpgradePlan';
import CreatePage from './Screen/CreatePage';
import AlbumPage from './Screen/AlbumPage';
import ContactPage from './Screen/ContactPage';
import ProjectPage from './Screen/ProjectPage';
import ExplorePage from './Screen/ExplorePage';
import NewBoardPage from './Screen/NewBoardPage';
import BookmarkPage from './Screen/BookmarkPage';


function App(){
  return(
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='message' element={<MessagesPage/>} />
        <Route path='notification' element={<NotificationPage/>} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='plan' element={<UpgradePlan/>} />
        <Route path='Create' element={<CreatePage/>} />
        <Route path='album' element={<AlbumPage/>} />
        <Route path='contract' element={<ContactPage/>} />
        <Route path='project' element={<ProjectPage/>} />
        <Route path='explore' element={<ExplorePage/>} />
        <Route path='new_board' element={<NewBoardPage/>} />
        <Route path='bookmark' element={<BookmarkPage/>} />

      </Routes>
     
      <Footer/>
      </Router>

    </div>
  )
}
export default App;