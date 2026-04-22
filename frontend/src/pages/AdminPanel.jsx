import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { PlusCircle, Save } from 'lucide-react';
import axios from 'axios';

const AdminPanel = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({ title: '', subject: '', price: 0 });
  const [status, setStatus] = useState('');

  // Protection Check
  if (!user || user.role !== 'admin') {
    return <div className="p-10 text-center text-red-600 font-bold text-xl">Access Denied. Admin Only.</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/courses', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStatus('Course successfully added!');
      setFormData({ title: '', subject: '', price: 0 }); // reset
    } catch (error) {
      setStatus('Failed to add course.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center gap-3 mb-8 border-b pb-4">
          <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
            <PlusCircle className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Add New Course</h1>
        </div>

        {status && <div className="mb-4 p-4 rounded bg-green-100 text-green-800 font-medium">{status}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
            <input 
              type="text" 
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g., Class 5 Mathematics - Masterclass"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              >
                <option value="">Select Subject</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
              <input 
                type="number" 
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
          </div>

          <button type="submit" className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors">
            <Save className="w-5 h-5" /> Publish Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;