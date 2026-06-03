import React, { useMemo, useState } from 'react';
import { Activity, BarChart3, HeartPulse, ShieldCheck } from 'lucide-react';
import { sharedMockData } from '../mockPlatformData';

const reportViews = [
  {
    id: 'study',
    title: '学习表现',
    icon: Activity,
    summary: `${sharedMockData.primaryFocus.short}是本周最需要家庭与学校一起跟进的重点。`,
  },
  {
    id: 'growth',
    title: '成长表现',
    icon: ShieldCheck,
    summary: `${sharedMockData.studentName}愿意复盘、愿意表达，执行力比上周更稳定。`,
  },
  {
    id: 'health',
    title: '健康状态',
    icon: HeartPulse,
    summary: '建议继续保持运动频次与作息规律，避免晚间任务后久坐。',
  },
];

const ParentAssessmentPage = () => {
  const [selectedViewId, setSelectedViewId] = useState(reportViews[0].id);
  const selectedView = useMemo(
    () => reportViews.find((item) => item.id === selectedViewId) ?? reportViews[0],
    [selectedViewId],
  );

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <BarChart3 className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">成长报告</h2>
            <p className="text-sm text-slate-500">切换不同报告维度，右侧会同步切换解释与家庭动作建议</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.85fr,1.15fr]">
        <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
          <div className="text-lg font-bold text-slate-900">报告维度</div>
          <div className="mt-5 space-y-3">
            {reportViews.map((view) => (
              <button
                key={view.id}
                onClick={() => setSelectedViewId(view.id)}
                className={`w-full rounded-2xl px-4 py-4 text-left transition ${
                  selectedViewId === view.id ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="text-base font-semibold">{view.title}</div>
                <div className="mt-2 text-sm leading-7">{view.summary}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <selectedView.icon className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold text-slate-900">{selectedView.title}</div>
            </div>
            <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
              {selectedView.summary}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="text-lg font-bold text-slate-900">家长怎么理解这份报告</div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <div className="rounded-2xl bg-slate-50 px-4 py-4">不是为了让家长自己做“老师”，而是让家庭支持更聚焦、更省力。</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-4">当学生端任务和教师端重点一致时，家长端只需要理解“今晚怎么配合”。</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentAssessmentPage;
