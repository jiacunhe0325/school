import React, { useState } from 'react';
import ParentLayout from './ParentLayout';
import ParentHomePage from './ParentHomePage';
import ParentAssessmentPage from './ParentAssessmentPage';
import ParentMessagesPage from './ParentMessagesPage';

const ParentApp = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <ParentHomePage onNavigate={handlePageChange} />;
      case 'assessment':
        return <ParentAssessmentPage onNavigate={handlePageChange} />;
      case 'messages':
        return <ParentMessagesPage onNavigate={handlePageChange} />;
      default:
        return <ParentHomePage onNavigate={handlePageChange} />;
    }
  };

  return (
    <ParentLayout currentPage={currentPage} onPageChange={handlePageChange}>
      {renderPage()}
    </ParentLayout>
  );
};

export default ParentApp;
