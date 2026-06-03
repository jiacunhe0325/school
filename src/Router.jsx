import React, { useEffect, useState } from 'react';
import App from './App';
import HomePage from './HomePage';
import ParentApp from './components/ParentApp';
import ManagementFlowPage from './components/ManagementFlowPage';
import StudentApp from './components/StudentApp';
import TeacherApp from './components/TeacherApp';

const supportedRoutes = new Set([
  'home',
  'ai-assistant',
  'student-app',
  'parent-app',
  'school-dashboard',
  'teacher-app',
]);

const resolvePageFromPath = (path) => {
  if (path === '/' || path === '') {
    return 'home';
  }

  const page = path.replace(/^\//, '');
  return supportedRoutes.has(page) ? page : 'home';
};

const Router = () => {
  const [currentPage, setCurrentPage] = useState(() => resolvePageFromPath(window.location.pathname));
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const navigateToPage = (page) => {
      const nextPage = supportedRoutes.has(page) ? page : 'home';
      setIsAnimating(true);

      window.setTimeout(() => {
        setCurrentPage(nextPage);
        window.history.pushState({}, '', nextPage === 'home' ? '/' : `/${nextPage}`);
        setIsAnimating(false);
      }, 300);
    };

    const handlePopState = () => {
      setCurrentPage(resolvePageFromPath(window.location.pathname));
    };

    window.navigateToPage = navigateToPage;
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      delete window.navigateToPage;
    };
  }, []);

  return (
    <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'ai-assistant' && <App />}
      {currentPage === 'student-app' && <StudentApp />}
      {currentPage === 'parent-app' && <ParentApp />}
      {currentPage === 'school-dashboard' && <ManagementFlowPage />}
      {currentPage === 'teacher-app' && <TeacherApp />}
    </div>
  );
};

export default Router;
