import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for the Sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/" className="nav-link">Dashboard</Link></li>
        <li><Link to="/orders" className="nav-link">Orders</Link></li>
        <li><Link to="/tables" className="nav-link">Tables</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
