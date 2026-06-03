import React, { useMemo, useState } from 'react';
import { Activity, BarChart2, BookOpen, Boxes, Building2, ShieldCheck } from 'lucide-react';
import { sharedMockData } from '../mockPlatformData';
import SchoolLayout from './SchoolLayout';

const dashboardViews = [
  {
    id: 'overview',
    title: '建设成效总览',
    icon: Building2,
    summary: '看平台覆盖、角色贯通和项目落地状态。',
  },
  {
    id: 'quality',
    title: '教学质量分析',
    icon: BarChart2,
    summary: '看学科趋势、年级画像和重点风险点。',
  },
  {
    id: 'governance',
    title: '治理与保障',
    icon: ShieldCheck,
    summary: '看学校管理、数据安全、运维与研发支撑。',
  },
];

const SchoolDashboard = () => {
  const [selectedViewId, setSelectedViewId] = useState(dashboardViews[0].id);
  const selectedView = useMemo(
    () => dashboardViews.find((item) => item.id === selectedViewId) ?? dashboardViews[0],
    [selectedViewId],
  );

  const kpis = [
    { label: '平台覆盖', value: '校-师-生-家四端贯通', icon: Boxes },
    { label: '教学主线', value: '备课-课堂-学习-评价闭环', icon: BookOpen },
    { label: '特色建设', value: '科技素养 / 美育 / 体质健康 / 未来学习中心', icon: Activity },
    { label: '治理保障', value: '管理、安全、运维、研发支撑', icon: ShieldCheck },
  ];

  const linkedSignals = [
    `学生端主任务：${sharedMockData.primaryFocus.title}`,
    `教师端重点班级：${sharedMockData.className}`,
    `家长端待跟进消息：${sharedMockData.parentMessage}`,
    `学校端摘要：${sharedMockData.schoolSummary}`,
  ];

  return (
    <SchoolLayout>
      <section className="grid gap-4 lg:grid-cols-4">
        {kpis.map((item) => (
          <div key={item.label} className="rounded-[28px] border border-white/80 bg-white/80 p-5 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-500 text-white shadow-lg">
              <item.icon className="h-6 w-6" />
            </div>
            <div className="mt-4 text-sm font-semibold text-slate-500">{item.label}</div>
            <div className="mt-2 text-lg font-bold leading-7 text-slate-900">{item.value}</div>
          </div>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[0.85fr,1.15fr]">
        <div className="rounded-[30px] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
          <div className="text-lg font-bold text-slate-900">驾驶舱视角</div>
          <div className="mt-5 space-y-3">
            {dashboardViews.map((view) => (
              <button
                key={view.id}
                onClick={() => setSelectedViewId(view.id)}
                className={`w-full rounded-2xl px-4 py-4 text-left transition ${
                  selectedViewId === view.id ? 'bg-blue-50 text-blue-700 shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="text-base font-semibold">{view.title}</div>
                <div className="mt-2 text-sm leading-7">{view.summary}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 shadow-sm">
                <selectedView.icon className="h-5 w-5" />
              </div>
              <div className="text-lg font-semibold text-slate-900">{selectedView.title}</div>
            </div>
            <div className="mt-5 grid gap-3">
              {selectedViewId === 'overview' && (
                <>
                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                    平台已经形成学生端、家长端、教师端、学校端四端分工明确但数据线索一致的原型闭环。
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                    科技素养、美育、体质健康和未来学习中心都已经嵌入角色视图，而不是孤立展示。
                  </div>
                </>
              )}
              {selectedViewId === 'quality' && (
                <>
                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                    {sharedMockData.schoolSummary}
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                    这条风险已经同步映射到教师端待办、学生端任务和家长端陪伴建议里。
                  </div>
                </>
              )}
              {selectedViewId === 'governance' && (
                <>
                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                    学校管理、设备运维、数据安全和技术研发支撑共同保证平台能持续稳定运行。
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                    治理视角不是离开教学，而是支撑教学、家校协同与特色建设持续推进。
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
            <div className="text-lg font-semibold text-slate-900">跨角色联动摘要</div>
            <div className="mt-5 space-y-3">
              {linkedSignals.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SchoolLayout>
  );
};

export default SchoolDashboard;
