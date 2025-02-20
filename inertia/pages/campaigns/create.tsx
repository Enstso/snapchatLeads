
import { useState } from 'react';
import {onCreate,urlsCampaign} from '../../../utils/utilsFront'
import { router } from '@inertiajs/react';
export default function CreateCampaignForm() {
  const [formData] = useState<{snapchater:any,url:any,promo:any}>({
    snapchater: '',
    url: '',
    promo: false,
  });

  
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData)
    onCreate(urlsCampaign.create,formData);
    router.visit('/');
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
            onChange={(e)=>formData.snapchater=e.target.value} 
            className="w-full px-3 py-2 border rounded-md" 
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">URL</label>
          <input 
            type="text" 
            name="url" 
            onChange={(e)=>formData.url = e.target.value} 
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input 
            type="checkbox" 
            name="promo"  
            onChange={(e)=>formData.promo =e.target.value} 
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
