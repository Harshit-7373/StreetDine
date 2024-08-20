import React from 'react';
import './Dashboard.css'; // Import the CSS file for Dashboard

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-container">
        <div className="stat-card">
          <h2>Total Orders</h2>
          <p className="stat-value">120</p>
        </div>
        <div className="stat-card">
          <h2>Total Revenue</h2>
          <p className="stat-value">$2,500</p>
        </div>
        <div className="stat-card">
          <h2>New Customers</h2>
          <p className="stat-value">30</p>
        </div>
        <div className="stat-card">
          <h2>Pending Orders</h2>
          <p className="stat-value">15</p>
        </div>
      </div>
      <div className="chart-container">
        <div className="chart">
          <h2>Sales Chart</h2>
          {/* Include your chart component here */}
        </div>
        <div className="chart">
          <h2>Revenue Chart</h2>
          {/* Include your chart component here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
