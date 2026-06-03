import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  Compass,
  HeartPulse,
  MessageSquare,
  Rocket,
  Sparkles,
  Target,
  Trophy,
} from 'lucide-react';
import { sharedMockData } from '../mockPlatformData';

const learningTasks = [
  {
    id: 'math-fix',
    type: '重点补强',
    title: sharedMockData.primaryFocus.title,
    duration: '18 分钟',
    status: '现在开始',
    reason: `最近 3 次练习中，${sharedMockData.primaryFocus.diagnosis}，优先修复这一点最能带动后续得分。`,
    coach: '先看 2 道错题复盘，再做 4 道同类题，完成后立刻做 1 题口头讲解。',
    next: '完成后去做 6 分钟验证题，确认是否真的掌握。',
    accent: 'from-rose-500 to-orange-500',
  },
  {
    id: 'english-review',
    type: '短时复盘',
    title: sharedMockData.secondaryFocus.title,
    duration: '12 分钟',
    status: '随后进行',
    reason: '今天不建议大量刷题，更适合用短时复盘把单元表达稳定下来。',
    coach: '先读例句，再自己改写 3 个句子，最后录一段 30 秒口头表达。',
    next: '如果表达顺畅，可以把复盘时间压缩到 8 分钟。',
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'future-lab',
    type: '拓展体验',
    title: sharedMockData.futureLab.title,
    duration: '20 分钟',
    status: '任务后开放',
    reason: '完成基础学习后，适合进入沉浸式主题任务，把知识和真实场景连接起来。',
    coach: '从“安全实验观察”主题进入，先做观察再做推理。',
    next: '体验完成后，把收获写进成长档案。',
    accent: 'from-indigo-500 to-orange-500',
  },
];

const growthSignals = [
  {
    title: '本周学习节奏',
    value: '3 / 4 项主线已完成',
    detail: '整体节奏稳定，但周中复盘任务容易被跳过。',
    icon: Clock3,
  },
  {
    title: '成长表现',
    value: '表达清晰度持续上升',
    detail: '最近一周口头讲解的完整度明显提升。',
    icon: Trophy,
  },
  {
    title: '健康提醒',
    value: '晚间任务后建议活动 10 分钟',
    detail: '保持学习与体能节奏平衡，避免久坐。',
    icon: HeartPulse,
  },
];

const supportFeed = [
  `AI伴学提醒：${sharedMockData.primaryFocus.short}建议先做“错因复述”，再进入练习。`,
  `教师同步：${sharedMockData.className} 明天会继续跟进这条主线。`,
  `成长提示：完成${sharedMockData.futureLab.title}后，记得更新成长档案。`,
];

const StudentHomePage = ({ onNavigate }) => {
  const [selectedTaskId, setSelectedTaskId] = useState(learningTasks[0].id);
  const [completedTaskIds, setCompletedTaskIds] = useState(['english-review']);

  const selectedTask = useMemo(
    () => learningTasks.find((task) => task.id === selectedTaskId) ?? learningTasks[0],
    [selectedTaskId],
  );

  const toggleTaskComplete = (taskId) => {
    setCompletedTaskIds((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId],
    );
  };

  const completedCount = completedTaskIds.length;

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-600 via-indigo-600 to-orange-600 p-6 text-white shadow-[0_32px_80px_-36px_rgba(79,70,229,0.6)] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white/90">
              今日学习工作台
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              今晚该学什么、为什么先学、学完以后去哪儿继续成长
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
              学生端现在会把任务顺序、完成状态、AI辅导建议和成长提醒放在同一屏里。这里看到的重点，会和家长端、教师端、学校端保持一致。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { label: '今日主线', value: '3 项' },
              { label: '已完成', value: `${completedCount} 项` },
              { label: '学习时长', value: '50 分钟' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/12 px-4 py-4 text-center">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{item.label}</div>
                <div className="mt-2 text-2xl font-bold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
        <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-slate-900">今晚任务队列</div>
              <div className="text-sm text-slate-500">点选任务后，右侧会切换对应的 AI 辅导建议</div>
            </div>
            <button
              onClick={() => onNavigate('weakpoints')}
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              查看成长页
            </button>
          </div>

          <div className="mt-5 space-y-3">
            {learningTasks.map((task, index) => {
              const completed = completedTaskIds.includes(task.id);
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
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                          {task.type}
                        </span>
                      </div>
                      <div className="mt-3 text-lg font-semibold text-slate-900">{task.title}</div>
                      <div className="mt-1 text-sm text-slate-500">
                        {task.duration} · {task.status}
                      </div>
                      <div className="mt-3 text-sm leading-7 text-slate-600">{task.reason}</div>
                    </button>

                    <button
                      onClick={() => toggleTaskComplete(task.id)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                        completed
                          ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      {completed ? '已完成' : '标记完成'}
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
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedTask.accent} text-white shadow-lg`}>
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">AI 辅导面板</div>
                <div className="text-sm text-slate-500">当前聚焦：{selectedTask.title}</div>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">建议怎么开始</div>
                <div className="mt-2">{selectedTask.coach}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">完成后的下一步</div>
                <div className="mt-2">{selectedTask.next}</div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('ai-assistant')}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  继续问 AI
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onNavigate('quizzes')}
                  className="rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700"
                >
                  进入验证任务
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="text-lg font-bold text-slate-900">即时提醒流</div>
            <div className="mt-4 space-y-3">
              {supportFeed.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                  <MessageSquare className="mt-1 h-4 w-4 shrink-0 text-indigo-600" />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
        <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900">成长信号</div>
              <div className="text-sm text-slate-500">把学习、表现和健康提醒放到一个工作台里</div>
            </div>
          </div>
          <div className="mt-5 grid gap-3">
            {growthSignals.map((item) => (
              <div key={item.title} className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-500">{item.title}</div>
                    <div className="text-lg font-semibold text-slate-900">{item.value}</div>
                  </div>
                </div>
                <div className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">素养拓展入口</div>
                <div className="text-sm text-slate-500">做完主线任务后，系统会推荐更适合的成长方向</div>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
              <div className="rounded-2xl bg-slate-50 px-4 py-4">科技素养：PBL 项目、编程与机器人任务</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-4">美育发展：音乐、美术与创作表达建议</div>
              <div className="rounded-2xl bg-slate-50 px-4 py-4">体质健康：运动状态与个性化锻炼提醒</div>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="mt-5 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              查看拓展主题
            </button>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">未来学习中心</div>
                <div className="text-sm text-slate-500">让知识在沉浸式场景里变得更可理解</div>
              </div>
            </div>
            <div className="mt-4 text-sm leading-7 text-slate-600">
              今天的推荐主题是“{sharedMockData.futureLab.title}”。完成主线任务后可以进入，系统会把体验结果同步回成长档案。
            </div>
            <button
              onClick={() => onNavigate('quizzes')}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700"
            >
              进入未来学习中心
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentHomePage;
