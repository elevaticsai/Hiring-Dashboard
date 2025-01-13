import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/auth/Login';
import { SignUp } from './pages/auth/SignUp';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { Dashboard } from './pages/Dashboard';
import { Jobs } from './pages/Jobs';
import { Candidates } from './pages/Candidates';
import { Interviews } from './pages/Interviews';
import { JobManagement } from './pages/phases/JobManagement';
import { ApplicationTracking } from './pages/phases/ApplicationTracking';
import { CandidateScreening } from './pages/phases/CandidateScreening';
import { InterviewPhase } from './pages/phases/InterviewPhase';
import { Assessment } from './pages/phases/Assessment';
import { Selection } from './pages/phases/Selection';
import { Onboarding } from './pages/phases/Onboarding';
import { useAuthStore } from './store/authStore';

export default function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <Router>
      <Routes>
        {/* Public Routes - Redirect to dashboard if already logged in */}
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignUp />} />
        <Route path="/forgot-password" element={user ? <Navigate to="/" replace /> : <ForgotPassword />} />

        {/* Protected Routes */}
        <Route path="/" element={
          <PrivateRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/jobs/*" element={
          <PrivateRoute>
            <Layout>
              <Jobs />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/candidates/*" element={
          <PrivateRoute>
            <Layout>
              <Candidates />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/interviews/*" element={
          <PrivateRoute>
            <Layout>
              <Interviews />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/phases/job-management" element={
          <PrivateRoute>
            <Layout>
              <JobManagement />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/phases/application-tracking" element={
          <PrivateRoute>
            <Layout>
              <ApplicationTracking />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/phases/candidate-screening" element={
          <PrivateRoute>
            <Layout>
              <CandidateScreening />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/phases/interview-phase" element={
          <PrivateRoute>
            <Layout>
              <InterviewPhase />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/phases/assessment" element={
          <PrivateRoute>
            <Layout>
              <Assessment />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/phases/selection" element={
          <PrivateRoute>
            <Layout>
              <Selection />
            </Layout>
          </PrivateRoute>
        } />
        <Route path="/phases/onboarding" element={
          <PrivateRoute>
            <Layout>
              <Onboarding />
            </Layout>
          </PrivateRoute>
        } />

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}