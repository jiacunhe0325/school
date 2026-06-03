import React, { useState } from 'react';
import AppLayout from './AppLayout';
import StudentHomePage from './StudentHomePage';
import WeakPointsPage from './WeakPointsPage';
import WeakPointDetailPage from './WeakPointDetailPage';
import CoursesPage from './CoursesPage';
import CourseDetailPage from './CourseDetailPage';
import QuizPage from './QuizPage';
import QuizDetailPage from './QuizDetailPage';
import ProfilePage from './ProfilePage';
import PageTransition from './PageTransition';

const StudentApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentWeakPoint, setCurrentWeakPoint] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pageDirection, setPageDirection] = useState('slide-up');

  const handlePageChange = (newPage) => {
    if (newPage === 'ai-assistant') {
      if (window.navigateToPage) {
        window.navigateToPage('ai-assistant');
      } else {
        window.location.pathname = '/ai-assistant';
      }
      return;
    }

    setIsAnimating(true);
    
    // 根据页面切换方向设置动画
    const pages = ['home', 'courses', 'quizzes', 'weakpoints', 'profile'];
    const currentIndex = pages.indexOf(currentPage);
    const newIndex = pages.indexOf(newPage);
    
    if (newIndex > currentIndex) {
      setPageDirection('slide-left');
    } else {
      setPageDirection('slide-right');
    }
    
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsAnimating(false);
    }, 300);
  };

  const handleWeakPointSelect = (point) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentWeakPoint(point);
      setCurrentPage('weakpoint-detail');
      setIsAnimating(false);
    }, 300);
  };

  const handleBackFromDetail = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage('weakpoints');
      setCurrentWeakPoint(null);
      setIsAnimating(false);
    }, 300);
  };

  const handleCourseClick = (course) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentCourse(course);
      setCurrentPage('course-detail');
      setIsAnimating(false);
    }, 300);
  };

  const handleBackFromCourseDetail = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage('courses');
      setCurrentCourse(null);
      setIsAnimating(false);
    }, 300);
  };

  const handleQuizClick = (quiz) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuiz(quiz);
      setCurrentPage('quiz-detail');
      setIsAnimating(false);
    }, 300);
  };

  const handleBackFromQuizDetail = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage('quizzes');
      setCurrentQuiz(null);
      setIsAnimating(false);
    }, 300);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <StudentHomePage 
            onNavigate={handlePageChange}
          />
        );
      case 'weakpoints':
        return (
          <WeakPointsPage 
            onNavigate={handlePageChange}
            onPointSelect={handleWeakPointSelect}
          />
        );
      case 'weakpoint-detail':
        return currentWeakPoint ? (
          <WeakPointDetailPage 
            weakPoint={currentWeakPoint}
            onBack={handleBackFromDetail}
          />
        ) : null;
      case 'courses':
        return <CoursesPage onCourseClick={handleCourseClick} />;
      case 'course-detail':
        return currentCourse ? (
          <CourseDetailPage 
            course={currentCourse}
            onBack={handleBackFromCourseDetail}
          />
        ) : null;
      case 'quizzes':
        return <QuizPage onQuizClick={handleQuizClick} />;
      case 'quiz-detail':
        return currentQuiz ? (
          <QuizDetailPage 
            quiz={currentQuiz}
            onBack={handleBackFromQuizDetail}
          />
        ) : null;
      case 'profile':
        return <ProfilePage onNavigate={handlePageChange} />;
      default:
        return (
          <StudentHomePage 
            onNavigate={handlePageChange}
          />
        );
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      <AppLayout 
        currentPage={currentPage} 
        onPageChange={handlePageChange}
      >
        <PageTransition 
          pageKey={currentPage} 
          direction={pageDirection}
        >
          {renderPage()}
        </PageTransition>
      </AppLayout>
    </div>
  );
};

export default StudentApp;
