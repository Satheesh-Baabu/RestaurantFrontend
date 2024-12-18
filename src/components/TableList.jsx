import React from 'react'

const TableList = () => {
  const [qrlist, setqrlist] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/qrlist')
      .then(response => {
        console.log(response.data);
        setqrlist(response.data); 
      })
      .catch(err => console.error('Error fetching Qr list:', err));
  }, []);
  return (
    <div className="container mx-auto mt-8">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Qr Code</th>
            <th className="border border-gray-300 px-4 py-2">Table Name</th>
            <th className="border border-gray-300 px-4 py-2">A/D</th>
          </tr>
        </thead>
        <tbody>
          {qrlist.map((qr, index) => (
            <tr key={food._id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={`http://localhost:8000/${qr.filename}`} 
                  alt={qr.tablename}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">{qr.tablename}</td>
              <td className="border border-gray-300 px-4 py-2">{qr.actordeact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableList