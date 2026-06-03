import React, { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, HeartHandshake, MoonStar, Sparkles } from 'lucide-react';
import { sharedMockData } from '../mockPlatformData';

const supportTasks = [
  {
    id: 'review-math',
    title: `陪${sharedMockData.studentName}复述${sharedMockData.primaryFocus.short}`,
    status: '建议今晚先做',
    detail: sharedMockData.primaryFocus.supportTip,
  },
  {
    id: 'sync-teacher',
    title: '和数学老师同步一句观察',
    status: '完成任务后进行',
    detail: '只要同步“步骤表达是否更稳”这一点，不需要额外写长反馈。',
  },
  {
    id: 'confirm-meeting',
    title: '确认家校沟通活动时间',
    status: '本周内完成',
    detail: '班主任已发出通知，建议今晚顺手确认。',
  },
];

const ParentHomePage = ({ onNavigate }) => {
  const [selectedTaskId, setSelectedTaskId] = useState(supportTasks[0].id);
  const [doneMap, setDoneMap] = useState({ 'confirm-meeting': true });

  const selectedTask = useMemo(
    () => supportTasks.find((item) => item.id === selectedTaskId) ?? supportTasks[0],
    [selectedTaskId],
  );

  const toggleDone = (taskId) => {
    setDoneMap((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-gradient-to-br from-indigo-600 via-indigo-600 to-indigo-600 p-6 text-white shadow-[0_32px_80px_-36px_rgba(99,102,241,0.6)] sm:p-8">
        <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white/90">
          家庭协同首页
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">让家长端也像真的在协同，而不是只看摘要</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
          家长端现在也有待办、联动建议和状态切换。你在这里看到的重点，会和学生端任务、教师端关注点、学校端摘要保持一致。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate('assessment')}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            查看成长报告
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => onNavigate('messages')}
            className="rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            查看家校消息
          </button>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr,1.05fr]">
        <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
          <div className="text-lg font-bold text-slate-900">家庭支持待办</div>
          <div className="mt-5 space-y-3">
            {supportTasks.map((task) => {
              const done = doneMap[task.id] ?? false;
              const selected = selectedTaskId === task.id;
              return (
                <div
                  key={task.id}
                  className={`rounded-[24px] border px-4 py-4 transition ${
                    selected ? 'border-indigo-300 bg-indigo-50/80 shadow-md' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <button className="text-left" onClick={() => setSelectedTaskId(task.id)}>
                      <div className="text-lg font-semibold text-slate-900">{task.title}</div>
                      <div className="mt-1 text-sm text-slate-500">{task.status}</div>
                      <div className="mt-3 text-sm leading-7 text-slate-600">{task.detail}</div>
                    </button>
                    <button
                      onClick={() => toggleDone(task.id)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                        done ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      {done ? '已完成' : '标记完成'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <MoonStar className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">当前支持动作</div>
                <div className="text-sm text-slate-500">{selectedTask.title}</div>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                这条建议来自平台对学生端学习任务和教师端教学反馈的整合，不需要家长自己翻译学情数据。
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-4">{selectedTask.detail}</div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">跨角色联动提示</div>
                <div className="text-sm text-slate-500">这几端现在在看同一件事</div>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {[
                `学生端：今晚主任务是“${sharedMockData.primaryFocus.title}”`,
                `教师端：${sharedMockData.className} 的重点跟进也是“${sharedMockData.primaryFocus.short}”`,
                `学校端：总览摘要里已经出现同一条班级风险`,
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold text-slate-900">快速入口</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('messages')}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                去发消息
              </button>
              <button
                onClick={() => onNavigate('assessment')}
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700"
              >
                去看报告
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentHomePage;
