import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Calendar,
  LogOut,
  Menu,
  X,
  FileText,
  ClipboardList,
  UserCheck,
  MessageSquare,
  CheckCircle,
  Award,
  FileCheck
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const mainNavItems = [
    { path: '/', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard' },
    { path: '/jobs', icon: <Briefcase className="w-5 h-5" />, label: 'Jobs' },
    { path: '/candidates', icon: <Users className="w-5 h-5" />, label: 'Candidates' },
    { path: '/interviews', icon: <Calendar className="w-5 h-5" />, label: 'Interviews' },
  ];

  const processNavItems = [
    { path: '/phases/job-management', icon: <FileText className="w-5 h-5" />, label: 'Job Management' },
    { path: '/phases/application-tracking', icon: <ClipboardList className="w-5 h-5" />, label: 'Application Tracking' },
    { path: '/phases/candidate-screening', icon: <UserCheck className="w-5 h-5" />, label: 'Candidate Screening' },
    { path: '/phases/interview-phase', icon: <MessageSquare className="w-5 h-5" />, label: 'Interview Phase' },
    { path: '/phases/assessment', icon: <CheckCircle className="w-5 h-5" />, label: 'Assessment' },
    { path: '/phases/selection', icon: <Award className="w-5 h-5" />, label: 'Selection' },
    { path: '/phases/onboarding', icon: <FileCheck className="w-5 h-5" />, label: 'Onboarding' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-30">
        <div className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-indigo-600" />
          <h1 className="text-lg font-bold text-gray-900">TalentFlow</h1>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-gray-600 bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-40
        transform transition-transform duration-200 ease-in-out
        md:translate-x-0 overflow-y-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-4">
          <div className="hidden md:flex items-center gap-2 mb-8">
            <Briefcase className="w-8 h-8 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-900">TalentFlow</h1>
          </div>
          
          {/* Main Navigation */}
          <div className="space-y-2 mb-8">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-lg ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Process Navigation */}
          <div className="space-y-2">
            <div className="px-2 py-1">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Recruitment Process
              </h2>
            </div>
            {processNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-lg ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 w-full p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </nav>
      
      <main className="md:ml-64 p-4 md:p-8 mt-16 md:mt-0">
        {children}
      </main>
    </div>
  );
}