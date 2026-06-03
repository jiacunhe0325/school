import React, { useMemo, useState } from 'react';
import { BarChart3, Brain, ChevronRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { sharedMockData } from '../mockPlatformData';

const growthAreas = [
  {
    id: 'math',
    title: '数学应用题',
    level: '重点提升',
    percent: 62,
    desc: '问题不在公式不会，而在解题步骤表达还不够稳定，适合用短链路训练修正。',
    diagnosis: `最近 3 次错误都集中在“${sharedMockData.primaryFocus.diagnosis}”。`,
    plan: ['先复述题意', '再列关系式', '最后口头讲一遍步骤'],
    linkedTask: '已关联到今晚任务 1',
    color: 'bg-rose-500',
  },
  {
    id: 'english',
    title: sharedMockData.secondaryFocus.short,
    level: '稳步修复',
    percent: 74,
    desc: '识别基本准确，但句式转换和口头表达时容易混用，建议通过轻量复盘稳定输出。',
    diagnosis: `书面选择题正确率较高，但${sharedMockData.secondaryFocus.diagnosis}。`,
    plan: ['先看时间线', '再改写句子', '最后做 30 秒口头表达'],
    linkedTask: '已关联到今晚任务 2',
    color: 'bg-indigo-500',
  },
  {
    id: 'science',
    title: '科学探究表达',
    level: '可继续拓展',
    percent: 83,
    desc: '基础能力较稳，下一步适合进入项目式任务，提升综合表达与问题解决能力。',
    diagnosis: '观察和记录都较稳定，但结论表达还可以更完整。',
    plan: ['先看样例', '再做观察记录', '最后完成结论表达'],
    linkedTask: '可关联未来学习中心主题任务',
    color: 'bg-purple-500',
  },
];

const WeakPointsPage = ({ onNavigate }) => {
  const [selectedAreaId, setSelectedAreaId] = useState(growthAreas[0].id);
  const selectedArea = useMemo(
    () => growthAreas.find((item) => item.id === selectedAreaId) ?? growthAreas[0],
    [selectedAreaId],
  );

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <BarChart3 className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">成长画像</h2>
            <p className="text-sm text-slate-500">点选一个成长区域，右侧会切换对应的 AI 诊断与训练建议</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr,1.05fr]">
        <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
          <div className="text-lg font-bold text-slate-900">成长区域列表</div>
          <div className="mt-5 space-y-3">
            {growthAreas.map((item) => {
              const selected = item.id === selectedAreaId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedAreaId(item.id)}
                  className={`w-full rounded-[24px] border px-4 py-4 text-left transition ${
                    selected ? 'border-indigo-300 bg-indigo-50/80 shadow-md' : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                      <div className="mt-1 text-sm text-slate-500">{item.level}</div>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                      {item.percent}%
                    </span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                  </div>
                  <div className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">AI 诊断详情</div>
                <div className="text-sm text-slate-500">{selectedArea.title}</div>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">问题判断</div>
                <div className="mt-2">{selectedArea.diagnosis}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">系统已关联</div>
                <div className="mt-2">{selectedArea.linkedTask}</div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold text-slate-900">训练建议</div>
            </div>
            <div className="mt-5 space-y-3">
              {selectedArea.plan.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('home')}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                回到任务页继续学习
              </button>
              <button
                onClick={() => onNavigate(selectedArea.id === 'science' ? 'quizzes' : 'home')}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700"
              >
                {selectedArea.id === 'science' ? '去未来学习中心' : '查看今晚主线'}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <ShieldCheck className="h-4 w-4 text-purple-600" />
              这里看到的不是“薄弱标签”
            </div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              而是一套会随着学习变化持续更新的成长建议系统。你点开的每个区域，都应该能直接带回今晚的任务动作。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeakPointsPage;
