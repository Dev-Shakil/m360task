// Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UsersPage from './pages/UsersPage';
import DashboardPage from './pages/DashboardPage';
import NotFound from './pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFound />} />
        
        {/* Redirect to sign in page if no match */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;