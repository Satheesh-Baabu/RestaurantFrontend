import React, { useState, useEffect } from "react";
import axios from "axios";

const TableList = () => {
  const [qrlist, setqrlist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/qrlist")
      .then((response) => {
        console.log(response.data);
        setqrlist(response.data);
      })
      .catch((err) => console.error("Error fetching QR list:", err));
  }, []);

  const handleToggle = async (qr) => {
    const updatedActive = qr.active === 1 ? 0 : 1;

    try {
      // Update the database
      await axios.put(`http://localhost:8000/qrlist/${qr._id}`, {
        active: updatedActive,
      });

      setqrlist((prevList) =>
        prevList.map((item) =>
          item._id === qr._id ? { ...item, active: updatedActive } : item
        )
      );
    } catch (err) {
      console.error("Error updating QR state:", err);
      alert("Failed to update QR state.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">QR Code</th>
            <th className="border border-gray-300 px-4 py-2">QR Name</th>
            <th className="border border-gray-300 px-4 py-2">Active/Deactive</th>
          </tr>
        </thead>
        <tbody>
          {qrlist.map((qr, index) => (
            <tr key={qr._id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                {qr.active === 1 ? (
                  <a
                    href={`http://localhost:8000/${qr.filename}`}
                    download={`${qr.qrname}.png`}
                    className="cursor-pointer" target="_blank"
                  >
                    <img
                      src={`http://localhost:8000/${qr.filename}`}
                      alt={qr.qrname}
                      className="w-16 h-20 object-cover mx-auto"
                    />
                  </a>
                ) : (
                  <span className="text-gray-500">Inactive</span>
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">{qr.qrname}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleToggle(qr)}
                  className={`px-4 py-2 rounded ${qr.active === 1
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-700"
                    }`}
                >
                  {qr.active === 1 ? "ON" : "OFF"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
