import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar, menuItems, onMenuClick, links }) {
  return (
    <div
      className={`bg-blue-600 text-white w-64 fixed lg:static transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 h-full`}
    >
      <div className="p-4 font-bold text-lg flex justify-between items-center">
        <span>Dashboard</span>
        <button className="lg:hidden text-white" onClick={toggleSidebar}>X</button>
      </div>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <Link to={links[index]} key={index} onClick={() => onMenuClick(item, index)}>
              <li className="p-4 hover:bg-blue-700">{item}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
