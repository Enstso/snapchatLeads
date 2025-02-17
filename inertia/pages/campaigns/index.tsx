import { Head } from '@inertiajs/react'
import Campaign from '#models/campaign'
import { useState } from 'react';
import { router } from '@inertiajs/react';

export default function index(campaigns:{campaigns:Campaign[]}) {
    const [campaignList, setCampaignList] = useState(campaigns.campaigns);

    const handleDelete = (id) => {
      setCampaignList(campaignList.filter(campaign => campaign.id !== id));
    };
  
    const handleUpdate = (id) => {
      console.log(`Update campaign with ID: ${id}`);
    };
  
    const handleCreate = () => {
      console.log('Create new campaign');
      router.visit('/campaigns/create');
    };
  
    return (
      <div className="container mx-auto p-6">
        <Head title='Campaigns' />
        <h1 className="text-3xl font-bold mb-4">Campaigns</h1>
        <button 
          onClick={handleCreate} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600"
        >
          Create Campaign
        </button>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Snapchater</th>
                <th className="px-4 py-2 text-left">URL</th>
                <th className="px-4 py-2 text-left">Promo</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaignList.map(campaign => (
                <tr key={campaign.id} className="border-t">
                  <td className="px-4 py-2">{campaign.snapchater}</td>
                  <td className="px-4 py-2">{campaign.url || 'N/A'}</td>
                  <td className="px-4 py-2">{campaign.promo ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button 
                      onClick={() => handleUpdate(campaign.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                    >
                      Update
                    </button>
                    <button 
                      onClick={() => handleDelete(campaign.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  