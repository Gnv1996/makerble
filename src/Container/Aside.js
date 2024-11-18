import React,{useState} from 'react'

import {
  FaPlus,
  FaChevronRight,
  FaImage,
} from 'react-icons/fa'

import { MdOutlineQuestionMark } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import logo from '../Assest/Makerble_log.png'
import handicon from "../Assest/handicon.png"

import bulbicon from "../Assest/bulbicon.png"
import the from "../Assest/the.png"
import fund from "../Assest/fund.png"
import logo1 from "../Assest/logo_t.png"
import { Link } from 'react-router-dom';



function Aside(){
  const [showContact, setShowContact] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);
  const [showOrganisation, setShowOrganisation] = useState(false);
  const [showFollower, setShowFollower] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  
  const contactList = ['Harry', 'Siyamadit', 'Claire', 'New Contact'];
  const projectList = ['4359 Test', 'A Test 5146', 'A Training Project', 'Another Project'];
  const albumList = ['2021 Portfolio', 'All Partners', 'Big Lottery Fund', 'New Album'];
  const organisationList = [
    'An Organisation Demo',
    'A Showcase International Development Education Charity',
    'Oak Tree Secondary School',
    'Another Organisation',
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);
const imageIcon=[logo,logo,fund,logo]
  const image = [the, handicon, bulbicon,logo];
    return(
        <div>

    <aside className=" w-96 mb-20 bg-gray-50 ">
          <div className="pt-4 pr-4 ">
            <div className="flex items-center justify-between bg-white p-4 rounded-t-lg mb-1">
              <div className="flex items-center space-x-2 ">
                <span className="text-xl text-blue-700 font-semibold">15 Contacts</span>
                <CiFilter className=" w-6 h-6  text-blue-700" />
                <MdOutlineQuestionMark className="rounded-full  w-5 h-5 bg-blue-700 text-white" />
                
              </div>
              <button className="bg-blue-500 font-medium text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 flex items-center space-x-1">
                <FaPlus className="w-3 h-3" />
                <Link to='contract'>
                <span>New Contacts</span>
                </Link>
               
              </button>
            </div>

            {/* Contact*/}
            <div className="mb-6 bg-white rounded-lg p-3">
       
          <div className="space-y-1">
            {contactList.slice(0, showContact ? contactList.length : 3).map((contact, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md group cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <img src={logo} className="h-8 w-8" alt="contact-icon" />
                  <span className="text-xs text-blue-300">{contact}</span>
                </div>
                <div className="ml-auto">
          <IoMdSettings className="w-5 h-5  text-blue-600" />
        </div>
        <FaChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              className="text-blue-300 hover:text-blue-600 text-xs"
              onClick={() => setShowContact(!showContact)}
            >
              {showContact ? 'Hide' : 'Show All'}
            </button>
          </div>
        </div>


            {/* Projects*/}
            <div className="mb-6 bg-white rounded-lg p-3">
          <div className="flex items-center justify-between bg-white  rounded-t-lg mb-1">
              <div className="flex items-center">
                <span className="text-xl text-blue-700 mb-2 font-semibold">Projects</span>
              </div>
              <button className="bg-blue-500 font-medium text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 flex items-center space-x-1">
                <FaPlus className="w-3 h-3" />
                <Link to='project'>
                <span>New Projects</span>
                </Link>
                
              </button>
            </div>
          <div className="space-y-1">
            {projectList.slice(0, showProject ? projectList.length : 3).map((project, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md group cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <img src={logo1} className="h-8 w-8" alt="project-icon" />
                  <span className="text-xs text-gray-600">{project}</span>
                </div>
                <div className="ml-auto">
          <IoMdSettings className="w-5 h-5  text-blue-600" />
        </div>
        <FaChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              className="text-blue-300 hover:text-blue-600 text-xs"
              onClick={() => setShowProject(!showProject)}
            >
              {showProject ? 'Hide' : 'Show All'}
            </button>
          </div>
        </div>

{/* Albums*/}

<div className="mb-6 bg-white rounded-lg p-3">
          <div className="flex items-center justify-between bg-white  rounded-t-lg mb-1">
              <div className="flex items-center">
                <span className="text-xl text-blue-700 mb-2 font-semibold">Albums</span>
              </div>
              <button className="bg-blue-500 font-medium text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600 flex items-center space-x-1">
                <FaPlus className="w-3 h-3" />
                <Link to='album'>
                <span>New Albums</span>
                </Link>
                
              </button>
            </div>
          <div className="space-y-1">
            {albumList.slice(0, showAlbum ? albumList.length : 3).map((album, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md group cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <img src={imageIcon[i]} className="h-8 w-8" alt="album-icon" />
                  <span className="text-xs text-gray-600">{album}</span>
                </div>
                <div className="ml-auto">
          <IoMdSettings className="w-5 h-5  text-blue-600" />
        </div>
        <FaChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              className="text-blue-300 hover:text-blue-600 text-xs"
              onClick={() => setShowAlbum(!showAlbum)}
            >
              {showAlbum ? 'Hide' : 'Show All'}
            </button>
          </div>
        </div>


{/* Organisation*/}
<div className="mb-6 bg-white rounded-lg p-3">
          <h3 className="text-xl text-blue-700 font-medium mb-2">Organisations</h3>
          <div className="space-y-1">
            {organisationList
              .slice(0, showOrganisation ? organisationList.length : 3)
              .map((organisation, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md group cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <img src={image[i]} className="h-8 w-8" alt="organisation-icon" />
                    <span className="text-xs text-gray-600">{organisation}</span>
                  </div>
                  <div className="ml-auto">
          <IoMdSettings className="w-5 h-5  text-blue-600" />
        </div>
        <FaChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
              ))}
          </div>
          <div className="flex justify-end">
            <button
              className="text-blue-300 hover:text-blue-600 text-xs"
              onClick={() => setShowOrganisation(!showOrganisation)}
            >
              {showOrganisation ? 'Hide' : 'Show All'}
            </button>
          </div>
        </div>




{/* Followers*/}
<div>
  <div className="flex items-center justify-between bg-white rounded-t-lg mt-4 p-3 mb-1">
    <h3 className="text-xl text-blue-700 font-medium">Followers</h3>
  </div>
  
  <div className="bg-white rounded-b-lg p-4">
    <div className="flex items-center space-x-4">
      {[
        logo, 
        logo, 
        'https://randomuser.me/api/portraits/men/2.jpg', 
        'https://randomuser.me/api/portraits/women/2.jpg', 
        'https://randomuser.me/api/portraits/men/3.jpg',  
        'https://randomuser.me/api/portraits/women/3.jpg',
      ].map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Profile ${i + 1}`}
          className="w-10 h-10 rounded-full border border-gray-200"
        />
      ))}
    </div>
    
    <div className="flex justify-end mt-2">
      <button className="text-blue-300 hover:text-blue-600 text-xs flex items-center space-x-1" onClick={() => setShowAllProjects(!showAllProjects)}>
      {showAllProjects ? 'Hide' : 'Show All'}
      </button>
    </div>
  </div>
</div>

{/* People*/}

<div>
  <div className="flex items-center justify-between bg-white rounded-lg mt-4 p-3 mb-1">
    <h3 className="text-xl text-blue-700 font-medium">People you Follow</h3>
  </div>
  
  <div className="bg-white rounded-lg p-4">
    <div className="flex items-center space-x-4">
      {[
        'https://randomuser.me/api/portraits/men/1.jpg', 
        'https://randomuser.me/api/portraits/women/1.jpg', 
        'https://randomuser.me/api/portraits/men/2.jpg', 
        'https://randomuser.me/api/portraits/women/2.jpg', 
        'https://randomuser.me/api/portraits/men/3.jpg',  
        'https://randomuser.me/api/portraits/women/3.jpg',
       
      ].map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Profile ${i + 1}`}
          className="w-10 h-10 rounded-full border border-gray-200"
        />
      ))}
    </div>
    
    <div className="flex justify-end mt-2">
      <button className="text-blue-300 hover:text-blue-600 text-xs flex items-center space-x-1" onClick={() => setShowPeople(!showPeople)}>
      {showPeople ? 'Hide' : 'Show All'}
      </button>
    </div>
  </div>
</div>


          </div>
        </aside>
            </div>

    )
}
export default Aside


