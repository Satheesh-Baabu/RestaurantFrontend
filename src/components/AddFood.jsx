import axios from 'axios';
import { useState } from 'react';

function AddFood() {
  const [formData, setFormData] = useState({
    foodname: '',
    foodtype: '',
    price: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('foodname', formData.foodname);
    data.append('foodtype', formData.foodtype);
    data.append('price', formData.price);
    data.append('description', formData.description);
    data.append('file', formData.file);

    try {
      const response = await axios.post('http://localhost:8000/addfood', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Food added successfully:', response.data);
      alert("Food added successfully")
    } catch (error) {
      console.error('Error adding food:', error);
      alert("food Not added")
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <label>Food Name:</label>
      <input type="text" name="foodname" onChange={handleChange} required />

      <label>Food Type:</label>
      <select name="foodtype" onChange={handleChange} required>
        <option value="">--Select--</option>
        <option value="Veg">Veg</option>
        <option value="Nonveg">Non-Veg</option>
      </select>

      <label>Price:</label>
      <input type="number" name="price" onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" rows="3" onChange={handleChange} required />

      <label>File:</label>
      <input type="file" name="file" onChange={handleFileChange} required className='border border-black' />

      <button type="submit" className='border rounded-xl bg-blue-500 p-1 text-white curosor-pointer'>Add Food</button>
    </form>
  );
}

export default AddFood;
