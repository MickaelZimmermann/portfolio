import React from 'react';
import Aside from '../Navbar/Aside.component';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <Aside />
      <main>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
