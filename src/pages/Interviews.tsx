import React from 'react';
import { useCandidateStore } from '../store/candidateStore';
import { Calendar, Clock, MapPin, Video } from 'lucide-react';

export function Interviews() {
  const candidates = useCandidateStore((state) => state.candidates);
  const interviews = candidates.flatMap((c) => 
    c.interviews.map((i) => ({
      ...i,
      candidate: c
    }))
  ).filter((i) => i.status === 'scheduled');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Interviews</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Calendar className="w-5 h-5" />
          Schedule Interview
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interviews.map((interview) => (
          <div key={interview.id} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {interview.candidate.firstName} {interview.candidate.lastName}
                </h3>
                <p className="text-sm text-gray-500 capitalize">{interview.type} Interview</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                interview.status === 'scheduled'
                  ? 'bg-yellow-100 text-yellow-800'
                  : interview.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {interview.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                {new Date(interview.scheduledAt).toLocaleString()}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Video className="w-4 h-4" />
                Video Call
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                Remote
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Join Call
                </button>
                <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}