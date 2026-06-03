import React from 'react';
import { BarChart3, Home, MessageSquare, Users } from 'lucide-react';

const ParentLayout = ({ children, currentPage, onPageChange }) => {
  const navigationItems = [
    { id: 'home', label: '协同首页', icon: Home, active: currentPage === 'home' },
    { id: 'assessment', label: '成长报告', icon: BarChart3, active: currentPage === 'assessment' },
    { id: 'messages', label: '家校消息', icon: MessageSquare, active: currentPage === 'messages' },
  ];

  return (
    <div className="app-shell app-shell-parent">
      <header className="glass-header px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-500 text-white shadow-lg shadow-indigo-200/70">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900">家长协同工作台</div>
              <div className="text-xs text-slate-500">看得懂孩子状态，跟得上学校节奏，也知道今晚怎么陪伴</div>
            </div>
          </div>
          <button
            onClick={() => (window.navigateToPage ? window.navigateToPage('home') : (window.location.pathname = '/'))}
            className="primary-button px-4 py-2"
          >
            返回首页
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-3 pb-24 pt-6 sm:px-4">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/80 bg-white/90 px-4 py-3 backdrop-blur-xl">
        <div className="nav-dock mx-auto flex max-w-md justify-around">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex flex-col items-center rounded-xl px-4 py-2 text-xs font-medium transition ${
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

export default ParentLayout;
