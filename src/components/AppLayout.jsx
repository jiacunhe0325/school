import React from 'react';
import { Bell, BookMarked, Compass, Home, Sparkles, Target, User } from 'lucide-react';

const AppLayout = ({ children, currentPage, onPageChange }) => {
  const navigationItems = [
    { id: 'home', label: '任务', icon: Home, active: currentPage === 'home' },
    { id: 'weakpoints', label: '成长', icon: Target, active: currentPage === 'weakpoints' },
    { id: 'courses', label: '拓展', icon: Compass, active: currentPage === 'courses' },
    { id: 'quizzes', label: '未来中心', icon: Sparkles, active: currentPage === 'quizzes' },
    { id: 'profile', label: '档案', icon: User, active: currentPage === 'profile' },
  ];

  return (
    <div className="app-shell app-shell-student">
      <header className="glass-header px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-500 text-white shadow-lg shadow-indigo-200/70">
              <BookMarked className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">学生成长工作台</h1>
              <p className="text-xs text-slate-500">个性化学习、素养拓展与未来学习体验</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100" aria-label="通知">
              <Bell className="h-5 w-5" />
            </button>
            <button
              onClick={() => (window.navigateToPage ? window.navigateToPage('home') : (window.location.pathname = '/'))}
              className="primary-button px-4 py-2"
            >
              返回首页
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-3 pb-24 pt-6 sm:px-4">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/80 bg-white/90 px-3 py-3 backdrop-blur-xl">
        <div className="nav-dock mx-auto flex max-w-3xl justify-around">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex min-w-0 flex-col items-center rounded-xl px-3 py-2 text-xs font-medium transition ${
                item.active ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-indigo-600'
              }`}
            >
              <item.icon className="mb-1 h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AppLayout;
