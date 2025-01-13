export interface Job {
  id: string;
  title: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  salaryRange: {
    min: number;
    max: number;
  };
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  status: 'draft' | 'published' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export interface Candidate {
  id: string;
  jobId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  status: 'new' | 'screening' | 'interview' | 'assignment' | 'offer' | 'hired' | 'rejected';
  matchScore: number;
  notes: string[];
  interviews: Interview[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Interview {
  id: string;
  candidateId: string;
  interviewerId: string;
  type: 'screening' | 'technical' | 'cultural' | 'final';
  scheduledAt: Date;
  feedback?: string;
  score?: number;
  status: 'scheduled' | 'completed' | 'cancelled';
}