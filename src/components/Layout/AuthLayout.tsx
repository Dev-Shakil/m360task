import React, { ReactNode } from 'react';
import TopBar from '../TopBar';

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;