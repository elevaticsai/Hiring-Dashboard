import { create } from 'zustand';
import { Candidate } from '../types';

interface CandidateStore {
  candidates: Candidate[];
  addCandidate: (candidate: Candidate) => void;
  updateCandidate: (candidate: Candidate) => void;
  getCandidatesByJob: (jobId: string) => Candidate[];
}

export const useCandidateStore = create<CandidateStore>((set, get) => ({
  candidates: [],
  addCandidate: (candidate) =>
    set((state) => ({ candidates: [...state.candidates, candidate] })),
  updateCandidate: (candidate) =>
    set((state) => ({
      candidates: state.candidates.map((c) =>
        c.id === candidate.id ? candidate : c
      ),
    })),
  getCandidatesByJob: (jobId) =>
    get().candidates.filter((candidate) => candidate.jobId === jobId),
}));