import React from 'react';
import { CalendarDays, ShieldCheck, Sparkles } from 'lucide-react';

const SchoolLayout = ({ title = '学校治理与建设成效驾驶舱', children }) => {
  return (
    <div className="app-shell app-shell-school relative overflow-hidden">
      <header className="glass-header">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-blue-500 to-orange-500 text-sm font-black text-white shadow-lg shadow-blue-200/70">
              SCH
            </div>
            <div>
              <div className="text-base font-semibold text-slate-900">学校端驾驶舱</div>
              <div className="text-xs text-slate-500">建设成效、教学质量、治理能力与技术保障的一体化视图</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-sm md:inline-flex">
              <CalendarDays className="h-4 w-4 text-blue-500" />
              {new Date().toLocaleDateString('zh-CN')}
            </div>
            <button
              onClick={() => (window.navigateToPage ? window.navigateToPage('home') : (window.location.pathname = '/'))}
              className="ghost-button px-4 py-2"
            >
              返回首页
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-[30px] p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles className="h-4 w-4" />
                项目建设总览
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                学校端承接建设方案层面的叙事，重点不是单一角色体验，而是让管理者看到平台覆盖、
                教学质量、特色建设、治理保障与示范价值。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { label: '建设模块', value: '11' },
                { label: '核心角色', value: '4' },
                { label: '治理视角', value: '6' },
              ].map((item) => (
                <div key={item.label} className="metric-tile text-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</div>
                  <div className="mt-2 text-2xl font-bold text-slate-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700 ring-1 ring-slate-100">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <ShieldCheck className="h-4 w-4 text-blue-600" />
              学校端最关心的不是“有什么功能”，而是“建设是否见效、教学是否改进、治理是否可持续”。
            </div>
          </div>
        </div>

        <main className="mt-6">{children}</main>
      </div>
    </div>
  );
};

export default SchoolLayout;
