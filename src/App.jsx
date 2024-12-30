import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import Login from './Admin/Login';
import { AuthContext } from './components/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={user ? <Dashboard /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
