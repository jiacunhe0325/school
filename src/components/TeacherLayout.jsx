import React from 'react';
import { BarChart2, BookOpen, ChevronRight, ClipboardList, Home, Sparkles, UserCheck, Users } from 'lucide-react';

const navGroups = [
  {
    title: '总览',
    items: [
      { key: 'dashboard', label: '教学总览', icon: Home, accent: 'from-indigo-500 to-blue-500', text: 'text-indigo-700' },
    ],
  },
  {
    title: '教学主线',
    items: [
      { key: 'prep', label: '智能备课', icon: BookOpen, accent: 'from-indigo-500 to-orange-500', text: 'text-indigo-700' },
      { key: 'classes', label: '课堂联动', icon: Users, accent: 'from-purple-500 to-orange-500', text: 'text-purple-700' },
      { key: 'assignments', label: '作业评价', icon: ClipboardList, accent: 'from-orange-500 to-orange-500', text: 'text-orange-700' },
    ],
  },
  {
    title: '质量改进',
    items: [
      { key: 'class-analytics', label: '学情分析', icon: BarChart2, accent: 'from-pink-500 to-rose-500', text: 'text-pink-700' },
      { key: 'student-eval', label: '教研协同', icon: UserCheck, accent: 'from-indigo-500 to-blue-500', text: 'text-indigo-700' },
    ],
  },
];

const NavItem = ({ icon: Icon, label, active, onClick, accent, text }) => (
  <button
    onClick={onClick}
    className={`group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm transition ${
      active ? 'bg-white text-slate-900 shadow-lg shadow-slate-200/70' : 'text-slate-600 hover:bg-white/80 hover:text-slate-900'
    }`}
  >
    <span
      className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
        active ? `bg-gradient-to-br ${accent} text-white shadow-lg` : 'bg-white/90 text-slate-500 shadow-sm'
      }`}
    >
      <Icon className="h-5 w-5" />
    </span>
    <span className="font-medium">{label}</span>
    {active ? (
      <span className={`ml-auto rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold ${text}`}>当前</span>
    ) : (
      <ChevronRight className="ml-auto h-4 w-4 text-slate-300 transition group-hover:text-slate-500" />
    )}
  </button>
);

const TeacherLayout = ({ currentTab = 'dashboard', onTabChange = () => {}, children }) => {
  return (
    <div className="app-shell app-shell-teacher relative overflow-hidden">
      <header className="glass-header">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-500 to-orange-500 text-sm font-black text-white shadow-lg shadow-indigo-200/70">
              T
            </div>
            <div>
              <div className="text-base font-semibold text-slate-900">教师教学工作台</div>
              <div className="text-xs text-slate-500">围绕备课、课堂、评价、教研的一体化支持界面</div>
            </div>
          </div>
          <button
            onClick={() => (window.navigateToPage ? window.navigateToPage('home') : (window.location.pathname = '/'))}
            className="ghost-button px-4 py-2"
          >
            返回首页
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 lg:col-span-3 xl:col-span-2">
            <div className="glass-panel rounded-[28px] p-4">
              <div className="mb-4 rounded-3xl bg-gradient-to-br from-indigo-600 via-orange-500 to-indigo-500 p-4 text-white shadow-lg shadow-indigo-200/70">
                <div className="flex items-center gap-2 text-sm text-white/85">
                  <Sparkles className="h-4 w-4" />
                  今日教学节奏
                </div>
                <div className="mt-2 text-xl font-semibold">先看学情结论，再决定备课和课堂动作</div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-white/20 px-3 py-1">备课 3 项</span>
                  <span className="rounded-full bg-white/20 px-3 py-1">课堂 2 项</span>
                  <span className="rounded-full bg-white/20 px-3 py-1">教研 1 项</span>
                </div>
              </div>

              <div className="space-y-4">
                {navGroups.map((group) => (
                  <div key={group.title}>
                    <div className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{group.title}</div>
                    <div className="mt-2 space-y-2">
                      {group.items.map((item) => (
                        <NavItem
                          key={item.key}
                          icon={item.icon}
                          label={item.label}
                          active={currentTab === item.key}
                          onClick={() => onTabChange(item.key)}
                          accent={item.accent}
                          text={item.text}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="col-span-12 lg:col-span-9 xl:col-span-10">{children}</section>
        </div>
      </div>
    </div>
  );
};

export default TeacherLayout;
