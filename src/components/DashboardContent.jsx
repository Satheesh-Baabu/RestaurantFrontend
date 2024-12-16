function DashboardContent({ cards }) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-4 shadow rounded">{card}</div>
          ))}
        </div>
      </div>
    );
  }
export default DashboardContent