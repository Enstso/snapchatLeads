
import { useState } from 'react';
import { onUpdate,urlsCampaign } from '../../../utils/utilsFront'
import Campaign from '#models/campaign';
export default function UpdateCampaignForm(campaign:Campaign) {
  const [formData, setFormData] = useState<any>(campaign);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onUpdate(`${urlsCampaign.update}${campaign.id}`,formData);
    setFormData({ snapchater: '', url: '', promo: false });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Snapchater</label>
          <input 
            type="text" 
            name="snapchater" 
            value={formData.snapchater}
            onChange={(e)=>formData.snapchater=e.target} 
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
            onChange={(e)=>formData.url = e.target} 
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input 
            type="checkbox" 
            name="promo"  
            checked={formData.promo}
            onChange={(e)=>formData.promo =e.target} 
            className="mr-2"
          />
          <label className="text-gray-700">Promo</label>
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}
