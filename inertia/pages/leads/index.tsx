import { useState } from "react";
import Lead from "#models/lead";

export default function Index({ leads }: { leads: Lead[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 50;

  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);

  const totalPages = Math.ceil(leads.length / leadsPerPage);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Leads List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Username</th>
              <th className="p-2 border">Clicks</th>
              <th className="p-2 border">Campaign ID</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentLeads.map((lead) => (
              <tr key={lead.id} className="border">
                <td className="p-2 text-center">{lead.id}</td>
                <td className="p-2 text-center">{lead.username}</td>
                <td className="p-2 text-center">{lead.nbClicked}</td>
                <td className="p-2 text-center">{lead.campaignId}</td>
                <td className="p-2 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className={`mx-1 px-4 py-2 border rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-2 p-2">Page {currentPage} of {totalPages}</span>
        <button
          className={`mx-1 px-4 py-2 border rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
