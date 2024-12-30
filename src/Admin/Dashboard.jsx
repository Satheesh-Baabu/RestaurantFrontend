import React, { useState,useContext, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardContent from '../components/DashboardContent';
import QRgenerator from '../components/QRgenerator';
import TableList from '../components/TableList';
import FoodList from '../components/FoodList';
import AddFood from '../components/AddFood';
import { AuthContext } from '../components/AuthContext';
import axios from 'axios';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('Welcome');
  const [currentComponent, setCurrentComponent] = useState('home');

  // Define menu items and corresponding links
  const menuItems = ['Home', 'QR Code Generator', 'Table List', 'Food List', 'Add Food'];
  const links = ['/dashboard/home', '/dashboard/qrgenerator', '/dashboard/tablelist', '/dashboard/foodlist', '/dashboard/addfood'];

  const componentsMap = {
    home: <DashboardContent cards={['Card 1', 'Card 2', 'Card 3']} />,
    qrgenerator: <QRgenerator />,
    tablelist: <TableList />,
    foodlist: <FoodList />,
    addfood: <AddFood />,
  };

  // Handle menu item clicks to change the header title and component
  const handleMenuClick = (item, index) => {
    setHeaderTitle(item);
    setCurrentComponent(['home', 'qrgenerator', 'tablelist', 'foodlist', 'addfood'][index]);
  };

  const {user,dispatch}=useContext(AuthContext)
  const [username,setusername]=useState();
  axios.defaults.headers.common["Authorization"]=user
  const getuserprofile=async()=>{
    await axios.get("http://localhost:8000/dashboard")
    .then(res=>{alert(res.data);setusername(res.data)})
    .catch(err=>console.log(err))
  }
  function handleLogout(){
    console.log("hello")
    dispatch:{
      type:"LOGOUT"
    }
  }
  useEffect(()=>{getuserprofile();},[])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        menuItems={menuItems} // Pass the menu items
        links={links}          // Pass the corresponding links
        onMenuClick={handleMenuClick}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header Component */}
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} title={headerTitle} />
        <main className="flex-1 overflow-y-auto p-4">
          {/* Dynamically render the selected component */}
          {componentsMap[currentComponent] || <DashboardContent />}
        </main>
      </div>
      
      <button className="border bg-cyan-400" onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default Dashboard;
