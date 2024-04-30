import React from 'react';
import { FiHome, FiSettings, FiUsers, FiMail, FiCalendar, FiBell, FiHelpCircle } from 'react-icons/fi'; // Import icons from react-icons
import '../styles/Sidebar.css'; // Import your CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className='p-1 text-center border-bottom'  style={{whiteSpace:'nowrap'}}> 
            <h3>Logic web +</h3>
        </div>
      <div className="sidebar-item">
        <FiHome className="icon" />
        <span className="text">Dashboard</span>
      </div>
      <div className="sidebar-item">
        <FiUsers className="icon" />
        <span className="text">Users</span>
      </div>
      <div className="sidebar-item">
        <FiSettings className="icon" />
        <span className="text">Settings</span>
      </div>
      <div className="sidebar-item">
        <FiMail className="icon" />
        <span className="text">Messages</span>
      </div>
      <div className="sidebar-item">
        <FiCalendar className="icon" />
        <span className="text">Calendar</span>
      </div>
      <div className="sidebar-item">
        <FiBell className="icon" />
        <span className="text">Notifications</span>
      </div>
      <div className="sidebar-item">
        <FiHelpCircle className="icon" />
        <span className="text">Help</span>
      </div>
    </div>
  );
};

export default Sidebar;
