import React from 'react';
import {
  ArrowRight,
  BarChart2,
  Bell,
  ClipboardList,
  GraduationCap,
  PieChart,
  TrendingUp,
  Users,
} from 'lucide-react';
import TeacherLayout from './TeacherLayout';

const kpiThemes = [
  {
    accent: 'from-indigo-500 to-blue-500',
    badge: 'bg-indigo-50 text-indigo-700',
    glow: 'shadow-indigo-200/70',
  },
  {
    accent: 'from-indigo-500 to-orange-500',
    badge: 'bg-indigo-50 text-indigo-700',
    glow: 'shadow-indigo-200/70',
  },
  {
    accent: 'from-orange-500 to-orange-500',
    badge: 'bg-orange-50 text-orange-700',
    glow: 'shadow-orange-200/70',
  },
];

const todoThemes = [
  {
    iconBg: 'from-indigo-500 to-blue-500',
    tag: 'bg-indigo-50 text-indigo-700',
  },
  {
    iconBg: 'from-orange-500 to-pink-500',
    tag: 'bg-pink-50 text-pink-700',
  },
  {
    iconBg: 'from-purple-500 to-orange-500',
    tag: 'bg-purple-50 text-purple-700',
  },
];

const KPI = ({ label, value, icon: Icon, hint, index }) => {
  const theme = kpiThemes[index % kpiThemes.length];

  return (
    <div className={`rounded-[28px] border border-white/80 bg-white/70 p-5 shadow-xl ${theme.glow} backdrop-blur-xl`}>
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.accent} text-white shadow-lg`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.badge}`}>{label}</span>
      </div>
      <div className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-2 text-sm leading-6 text-slate-600">{hint}</div>
    </div>
  );
};

const ScoreSegmentBar = ({ segments }) => {
  const width = 520;
  const height = 210;
  const padding = 28;
  const max = Math.max(...segments.map((segment) => segment.count));
  const colors = ['#38bdf8', '#818cf8', '#d946ef', '#fb7185', '#f59e0b'];
  const barWidth = Math.floor((width - padding * 2) / segments.length) - 12;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" aria-hidden="true">
      {segments.map((segment, index) => {
        const barHeight = Math.round((segment.count / max) * (height - padding * 2 - 20));
        const x = padding + index * (barWidth + 12);
        const y = height - padding - barHeight;

        return (
          <g key={segment.label}>
            <rect x={x} y={y} width={barWidth} height={barHeight} rx={12} fill={colors[index % colors.length]} opacity="0.88" />
            <text x={x + barWidth / 2} y={height - 8} textAnchor="middle" className="fill-slate-500 text-[10px]">
              {segment.label}
            </text>
            <text x={x + barWidth / 2} y={y - 8} textAnchor="middle" className="fill-slate-800 text-[10px] font-semibold">
              {segment.count}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const Pie = ({ data }) => {
  const size = 240;
  const radius = 92;
  const cx = size / 2;
  const cy = size / 2;
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const colors = ['#38bdf8', '#818cf8', '#d946ef', '#fb7185', '#f59e0b'];
  let startAngle = -Math.PI / 2;

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full max-w-[240px]" aria-hidden="true">
      {data.map((item, index) => {
        const angle = (item.value / total) * Math.PI * 2;
        const endAngle = startAngle + angle;
        const x1 = cx + radius * Math.cos(startAngle);
        const y1 = cy + radius * Math.sin(startAngle);
        const x2 = cx + radius * Math.cos(endAngle);
        const y2 = cy + radius * Math.sin(endAngle);
        const largeArc = angle > Math.PI ? 1 : 0;
        const path = `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

        startAngle = endAngle;

        return <path key={item.label} d={path} fill={colors[index % colors.length]} opacity="0.9" />;
      })}
      <circle cx={cx} cy={cy} r="38" fill="white" opacity="0.92" />
      <text x={cx} y={cy - 2} textAnchor="middle" className="fill-slate-800 text-[11px] font-semibold">
        共性
      </text>
      <text x={cx} y={cy + 16} textAnchor="middle" className="fill-slate-500 text-[10px]">
        薄弱点
      </text>
    </svg>
  );
};

const TodoCard = ({ title, items, index }) => {
  const theme = todoThemes[index % todoThemes.length];

  return (
    <div className="rounded-[28px] border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.iconBg} text-white shadow-lg`}>
          <Bell className="h-5 w-5" />
        </div>
        <div>
          <div className="text-base font-semibold text-slate-900">{title}</div>
          <div className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-medium ${theme.tag}`}>重点列表</div>
        </div>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.text}
            className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50/90 px-4 py-3 text-sm text-slate-700"
          >
            <span>{item.text}</span>
            <button className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              查看
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeacherDashboard = ({ onTabChange }) => {
  const kpis = [
    { label: '覆盖班级', value: 8, icon: GraduationCap, hint: '今日安排 6 个班次，课堂节奏平稳。' },
    { label: '学生总数', value: 320, icon: Users, hint: '其中 18 人需要优先跟进学习稳定性。' },
    { label: '待讲评作业', value: 36, icon: ClipboardList, hint: '高一(1)班最适合先处理。' },
  ];

  const segments = [
    { label: '90-100', count: 28 },
    { label: '80-89', count: 62 },
    { label: '70-79', count: 84 },
    { label: '60-69', count: 52 },
    { label: '<60', count: 17 },
  ];

  const weakPoints = [
    { label: '一元一次方程应用', value: 28 },
    { label: '几何证明', value: 22 },
    { label: '函数基础', value: 18 },
    { label: '英语长句分析', value: 14 },
    { label: '电学基础', value: 18 },
  ];

  return (
    <TeacherLayout currentTab="dashboard" onTabChange={onTabChange}>
      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-600 to-orange-600 p-6 text-white shadow-[0_32px_70px_-30px_rgba(91,33,182,0.7)] sm:p-8">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="relative">
          <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white/90">
            今日教学重点
          </div>
          <div className="mt-4 max-w-4xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              先讲评高一(1)班作业，再跟进18名风险学生的分层练习
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
              当前最需要你介入的是 70-79 分段学生的稳定性问题。把讲评聚焦在计算失误、审题偏差和步骤表达，
              最容易在下一次课堂上看到直接改善。
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => onTabChange('assignments')}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              去处理待讲评作业
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onTabChange('class-analytics')}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              查看班级学情分布
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              '70-79 分段学生最多，先解决会做但不稳的问题。',
              '方程应用和几何证明仍是本周最明显的共性薄弱点。',
              '讲评后立刻生成跟进名单，方便下节课继续追踪。',
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/12 px-4 py-4 text-sm leading-6 text-white/90">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {kpis.map((kpi, index) => (
          <KPI key={kpi.label} {...kpi} index={index} />
        ))}
      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-200/70 backdrop-blur-xl sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-lg">
              <BarChart2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-semibold text-slate-900">班级分数段分布</div>
              <div className="text-sm text-slate-500">一眼判断“基础不稳”还是“理解断层”</div>
            </div>
          </div>
          <div className="mt-5 rounded-[24px] bg-gradient-to-br from-indigo-50 to-indigo-50 p-4">
            <ScoreSegmentBar segments={segments} />
          </div>
          <div className="mt-4 rounded-2xl bg-slate-50/90 px-4 py-4 text-sm leading-6 text-slate-600">
            结论：70-79 分段人数最多，说明不少学生具备基础解题能力，但稳定性和步骤表达仍有明显缺口。
          </div>
        </div>

        <div className="rounded-[28px] border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-200/70 backdrop-blur-xl sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg">
              <PieChart className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-semibold text-slate-900">班级共性薄弱点</div>
              <div className="text-sm text-slate-500">用颜色强度区分最需要优先处理的模块</div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-center">
            <div className="flex justify-center rounded-[24px] bg-gradient-to-br from-pink-50 to-orange-50 p-4">
              <Pie data={weakPoints} />
            </div>
            <div className="space-y-3">
              {weakPoints.map((point, index) => (
                <div key={point.label} className="rounded-2xl bg-slate-50/90 px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-800">{point.label}</div>
                    <div className="text-sm font-bold text-indigo-700">{point.value}</div>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
                    <div
                      className={`h-full rounded-full ${
                        [
                          'bg-indigo-500',
                          'bg-indigo-500',
                          'bg-orange-500',
                          'bg-pink-500',
                          'bg-orange-500',
                        ][index % 5]
                      }`}
                      style={{ width: `${Math.min(point.value * 3, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-50/90 px-4 py-4 text-sm leading-6 text-slate-600">
            结论：方程应用和几何证明值得先做统一讲评，再用分层练习拉开跟进节奏。
          </div>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <TodoCard
          index={0}
          title="今日优先处理"
          items={[
            { text: '高一(1)班数学作业：36 份待讲评' },
            { text: '初三(2)班物理练习：8 份未提交需提醒' },
          ]}
        />
        <TodoCard
          index={1}
          title="重点关注学生"
          items={[
            { text: '高一(3)班 张三：连续 3 次步骤失分' },
            { text: '初三(2)班 李四：作业提交延迟 2 次' },
          ]}
        />
        <TodoCard
          index={2}
          title="教研与通知"
          items={[
            { text: '周五下午教研会：分层作业设计复盘' },
            { text: '下周统一测评：时间调整至周三上午' },
          ]}
        />
      </section>

      <section className="mt-6 rounded-[28px] border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-200/70 backdrop-blur-xl sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
              下一步建议
            </div>
            <div className="mt-3 text-xl font-semibold text-slate-900">如果你现在只有10分钟，最应该做的是哪件事？</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              先进入“作业与讲评”，把高一(1)班的讲评摘要生成出来。这个动作对明天课堂的帮助最大。
            </div>
          </div>
          <button
            onClick={() => onTabChange('assignments')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200/70 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            去处理讲评任务
            <TrendingUp className="h-4 w-4" />
          </button>
        </div>
      </section>
    </TeacherLayout>
  );
};

export default TeacherDashboard;
