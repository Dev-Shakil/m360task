// Routes.tsx
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UsersPage from './pages/UsersPage';
import DashboardPage from './pages/DashboardPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound';
import {useDispatch} from "react-redux"
import { setUser } from 'features/authSlice';
import PrivateRoute from 'components/PrivateRoute';

const AppRoutes: React.FC = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}")

  useEffect(()=>{
    dispatch(setUser(user));
  },[]);
  return (
    <Router>
      <ToastContainer/>
      <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/users" element={<PrivateRoute>
          <UsersPage />
        </PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute>
          <DashboardPage />
        </PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
        
        {/* Redirect to sign in page if no match */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;