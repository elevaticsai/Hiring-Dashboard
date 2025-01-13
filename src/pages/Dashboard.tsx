import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useJobStore } from '../store/jobStore';
import { useCandidateStore } from '../store/candidateStore';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  TrendingUp,
  Clock,
  FileText,
  CheckCircle,
  UserCheck,
  ClipboardList,
  MessageSquare,
  Award,
  FileCheck
} from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();
  const jobs = useJobStore((state) => state.jobs);
  const candidates = useCandidateStore((state) => state.candidates);
  
  const activeJobs = jobs.filter((job) => job.status === 'published').length;
  const totalCandidates = candidates.length;
  const upcomingInterviews = candidates
    .flatMap((c) => c.interviews)
    .filter((i) => i.status === 'scheduled').length;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Active Jobs"
          value={activeJobs}
          icon={<Briefcase className="w-6 h-6 text-blue-600" />}
          trend="+2 this week"
        />
        <DashboardCard
          title="Total Candidates"
          value={totalCandidates}
          icon={<Users className="w-6 h-6 text-green-600" />}
          trend="+15 this week"
        />
        <DashboardCard
          title="Upcoming Interviews"
          value={upcomingInterviews}
          icon={<Calendar className="w-6 h-6 text-purple-600" />}
          trend="5 today"
        />
        <DashboardCard
          title="Time to Hire"
          value="18 days"
          icon={<Clock className="w-6 h-6 text-orange-600" />}
          trend="-2 days"
        />
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900">Recruitment Pipeline</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ProcessCard
            title="Job Management"
            icon={<FileText className="w-6 h-6 text-blue-600" />}
            metrics={[
              { label: 'Active Jobs', value: '12' },
              { label: 'Draft Jobs', value: '3' },
              { label: 'Total Views', value: '1.2k' }
            ]}
            progress={85}
            onClick={() => navigate('/phases/job-management')}
          />
          
          <ProcessCard
            title="Application Tracking"
            icon={<ClipboardList className="w-6 h-6 text-green-600" />}
            metrics={[
              { label: 'New Applications', value: '45' },
              { label: 'Processed', value: '38' },
              { label: 'Conversion Rate', value: '84%' }
            ]}
            progress={75}
            onClick={() => navigate('/phases/application-tracking')}
          />
          
          <ProcessCard
            title="Candidate Screening"
            icon={<UserCheck className="w-6 h-6 text-yellow-600" />}
            metrics={[
              { label: 'To Screen', value: '28' },
              { label: 'Shortlisted', value: '15' },
              { label: 'Rejected', value: '13' }
            ]}
            progress={65}
            onClick={() => navigate('/phases/candidate-screening')}
          />
          
          <ProcessCard
            title="Interviews"
            icon={<MessageSquare className="w-6 h-6 text-purple-600" />}
            metrics={[
              { label: 'Scheduled', value: '8' },
              { label: 'Completed', value: '12' },
              { label: 'Pass Rate', value: '60%' }
            ]}
            progress={45}
            onClick={() => navigate('/phases/interview-phase')}
          />
          
          <ProcessCard
            title="Assessment"
            icon={<CheckCircle className="w-6 h-6 text-indigo-600" />}
            metrics={[
              { label: 'Assigned', value: '18' },
              { label: 'Completed', value: '15' },
              { label: 'Avg Score', value: '82%' }
            ]}
            progress={70}
            onClick={() => navigate('/phases/assessment')}
          />
          
          <ProcessCard
            title="Selection"
            icon={<Award className="w-6 h-6 text-red-600" />}
            metrics={[
              { label: 'In Review', value: '6' },
              { label: 'Offers Made', value: '3' },
              { label: 'Accepted', value: '2' }
            ]}
            progress={35}
            onClick={() => navigate('/phases/selection')}
          />
          
          <ProcessCard
            title="Onboarding"
            icon={<FileCheck className="w-6 h-6 text-teal-600" />}
            metrics={[
              { label: 'In Progress', value: '4' },
              { label: 'Completed', value: '8' },
              { label: 'Pending', value: '2' }
            ]}
            progress={80}
            onClick={() => navigate('/phases/onboarding')}
          />
        </div>
      </div>
    </div>
  );
}

interface DashboardCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  trend: string;
}

function DashboardCard({ title, value, icon, trend }: DashboardCardProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex justify-between items-start">
        {icon}
        <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          {trend}
        </span>
      </div>
      <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-900">{value}</h3>
      <p className="text-sm sm:text-base text-gray-600">{title}</p>
    </div>
  );
}

interface ProcessCardProps {
  title: string;
  icon: React.ReactNode;
  metrics: Array<{ label: string; value: string }>;
  progress: number;
  onClick: () => void;
}

function ProcessCard({ title, icon, metrics, progress, onClick }: ProcessCardProps) {
  return (
    <div 
      className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow duration-200"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      
      <div className="space-y-3 mb-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{metric.label}</span>
            <span className="text-sm font-medium text-gray-900">{metric.value}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-gray-500">Progress</span>
          <span className="text-xs font-medium text-gray-900">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}