import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';
import QRgenerator from './components/QRgenerator';
import TableList from './components/TableList';
import FoodList from './components/FoodList';
import AddFood from './components/AddFood';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Welcome");
  const menuItems = ["Home", "QR Code Generator","Table List","Food List","Add Food"];
  const cards = ["Card 1", "Card 2", "Card 3"];
  const links=["/","qrgenerator","tablelist","foodlist","addfood"]

  const handleMenuClick = (item) => {
    setHeaderTitle(item);
  };
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          menuItems={menuItems}
          onMenuClick={handleMenuClick}
          links={links}
        />

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} title={headerTitle} />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<DashboardContent cards={cards} />} />
              <Route path="/qrgenerator" element={<QRgenerator/>}/>
              <Route path="/tablelist" element={<TableList/>}/>
              <Route path="/foodlist" element={<FoodList/>}/>
              <Route path="/addfood" element={<AddFood/>}/>
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;