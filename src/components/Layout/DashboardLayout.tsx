import React, { ReactNode } from 'react';
import Sidebar from 'components/Sidebar';
import UserTopbar from 'components/UserTopbar';

const DashboardLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
    <div className="flex">
      <div className="h-screen">
        <Sidebar />
      </div>
      {/* <div className="w-full"><UserTopbar/></div> */}
      <main className="w-full">
      <UserTopbar/>
        {children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;