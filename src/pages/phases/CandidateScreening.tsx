import React from 'react';
import { UserCheck, Filter } from 'lucide-react';

export function CandidateScreening() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <UserCheck className="w-8 h-8 text-yellow-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Candidate Screening</h1>
            <p className="text-gray-500">Review and evaluate candidate profiles</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Candidates to Screen</h2>
            <div className="space-y-4">
              {/* Add candidates list here */}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Screening Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">To Screen</span>
                <span className="font-semibold">28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Shortlisted</span>
                <span className="font-semibold">15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Rejected</span>
                <span className="font-semibold">13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}