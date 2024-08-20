import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import OrderCard from './components/OrderCard';
import TableList from './components/TableList';
import NotFound from './components/NotFound';
import './App.css'; // Import general styles for App

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrderCard />} />
          <Route path="/tables" element={<TableList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
