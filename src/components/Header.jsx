function Header({ toggleSidebar ,title}) {
    return (
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <div className="text-xl font-bold">{title}</div>
        <button
          className="lg:hidden p-2 rounded bg-blue-600 text-white"
          onClick={toggleSidebar}
        >
          Menu
        </button>
      </header>
    );
  }
export default Header