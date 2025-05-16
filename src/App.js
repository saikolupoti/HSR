import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeadList from './screens/LeadList';
import LeadDetail from './screens/LeadDetail';
import LeadManage from './screens/LeadManage';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeadList />} />
        <Route path="/lead/:id" element={<LeadDetail />} />
        <Route path="/manage/:id" element={<LeadManage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
