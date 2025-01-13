import { create } from 'zustand';
import { Job } from '../types';

interface JobStore {
  jobs: Job[];
  activeJob: Job | null;
  addJob: (job: Job) => void;
  updateJob: (job: Job) => void;
  setActiveJob: (job: Job | null) => void;
}

export const useJobStore = create<JobStore>((set) => ({
  jobs: [],
  activeJob: null,
  addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
  updateJob: (job) => set((state) => ({
    jobs: state.jobs.map((j) => (j.id === job.id ? job : j)),
  })),
  setActiveJob: (job) => set({ activeJob: job }),
}));