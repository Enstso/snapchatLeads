import { useState } from 'react';

export default function CampaignForm() {
  const [formData, setFormData] = useState({
    snapchater: '',
    url: '',
    promo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //onCreate(formData);
    setFormData({ snapchater: '', url: '', promo: false });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Snapchater</label>
          <input 
            type="text" 
            name="snapchater" 
            value={formData.snapchater} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-md" 
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">URL</label>
          <input 
            type="text" 
            name="url" 
            value={formData.url} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input 
            type="checkbox" 
            name="promo" 
            checked={formData.promo} 
            onChange={handleChange} 
            className="mr-2"
          />
          <label className="text-gray-700">Promo</label>
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  );
}
