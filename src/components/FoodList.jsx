import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FoodList() {
  const [foodlist, setFoodlist] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/foodlist')
      .then(response => {
        console.log(response.data);
        setFoodlist(response.data); 
      })
      .catch(err => console.error('Error fetching food list:', err));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Food Name</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {foodlist.map((food, index) => (
            <tr key={food._id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{food.foodname}</td>
              <td className="border border-gray-300 px-4 py-2">{food.foodtype}</td>
              <td className="border border-gray-300 px-4 py-2">${food.price}</td>
              <td className="border border-gray-300 px-4 py-2">{food.description}</td>
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={`http://localhost:8000/${food.filename}`} 
                  alt={food.foodname}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodList;
