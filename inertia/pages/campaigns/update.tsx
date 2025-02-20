import { useState } from 'react'
import { onUpdate, urlsCampaign } from '../../../utils/utilsFront'
import { router } from '@inertiajs/react'
export default function UpdateCampaignForm(campaign: any) {
  const [formData, setFormData] = useState<any>(campaign.props)
  console.log(formData.props)
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onUpdate(`${urlsCampaign.update}${formData.id}`, formData);
    router.visit('/')
}

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
            onChange={(e) => setFormData({ ...formData, snapchater: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="promo"
            checked={formData.promo}
            onChange={(e) => setFormData({ ...formData, promo: e.target.value })}
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
  )
}
