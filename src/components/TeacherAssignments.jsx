import React, { useState } from 'react';
import {
  Calendar,
  ClipboardList,
  Clock,
  FileText,
  Plus,
  Sparkles,
  Users,
} from 'lucide-react';
import TeacherLayout from './TeacherLayout';

const classThemes = [
  {
    active: 'from-indigo-500 to-blue-500 text-white shadow-indigo-200/70',
    idle: 'bg-white text-slate-700 hover:bg-indigo-50',
  },
  {
    active: 'from-indigo-500 to-orange-500 text-white shadow-indigo-200/70',
    idle: 'bg-white text-slate-700 hover:bg-indigo-50',
  },
  {
    active: 'from-purple-500 to-orange-500 text-white shadow-purple-200/70',
    idle: 'bg-white text-slate-700 hover:bg-purple-50',
  },
  {
    active: 'from-orange-500 to-orange-500 text-white shadow-orange-200/70',
    idle: 'bg-white text-slate-700 hover:bg-orange-50',
  },
];

const typeThemes = [
  {
    active: 'from-pink-500 to-rose-500 text-white shadow-pink-200/70',
    idle: 'bg-white text-slate-700 hover:bg-pink-50',
  },
  {
    active: 'from-indigo-500 to-blue-500 text-white shadow-indigo-200/70',
    idle: 'bg-white text-slate-700 hover:bg-indigo-50',
  },
  {
    active: 'from-orange-500 to-indigo-500 text-white shadow-orange-200/70',
    idle: 'bg-white text-slate-700 hover:bg-orange-50',
  },
];

const statThemes = [
  'from-indigo-50 to-blue-50 text-indigo-900',
  'from-indigo-50 to-orange-50 text-indigo-900',
  'from-orange-50 to-orange-50 text-orange-900',
];

const FormBlock = ({ label, helper, children }) => (
  <div className="grid gap-4 rounded-[24px] border border-white/80 bg-slate-50/80 p-4 md:grid-cols-[220px_minmax(0,1fr)]">
    <div>
      <div className="text-sm font-semibold text-slate-900">{label}</div>
      {helper && <div className="mt-2 text-sm leading-6 text-slate-500">{helper}</div>}
    </div>
    <div>{children}</div>
  </div>
);

const ChoiceButton = ({ label, active, onClick, theme }) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
      active
        ? `bg-gradient-to-r ${theme.active} shadow-lg`
        : `${theme.idle} shadow-sm`
    }`}
  >
    {label}
  </button>
);

const ReportStat = ({ label, value, index }) => (
  <div className={`rounded-[24px] bg-gradient-to-br ${statThemes[index % statThemes.length]} p-4`}>
    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</div>
    <div className="mt-2 text-lg font-semibold leading-7">{value}</div>
  </div>
);

const statusTheme = {
  已提交: 'bg-purple-50 text-purple-700',
  未提交: 'bg-rose-50 text-rose-700',
};

const TeacherAssignments = ({ onTabChange }) => {
  const [selectedClasses, setSelectedClasses] = useState(['高一(1)班']);
  const [questionTypes, setQuestionTypes] = useState(['选择题']);
  const [quantity, setQuantity] = useState(10);
  const [deadlineDate, setDeadlineDate] = useState('');
  const [deadlineTime, setDeadlineTime] = useState('');
  const [knowledge, setKnowledge] = useState(['一元一次方程', '分数运算']);
  const [report, setReport] = useState(null);
  const [pageNotice, setPageNotice] = useState('');

  const classes = ['高一(1)班', '高一(2)班', '初三(1)班', '初三(2)班'];
  const questionTypeOptions = ['选择题', '填空题', '解答题'];
  const students = [
    { name: '张三', class: '高一(1)班', score: 86, time: '25 分钟', status: '已提交' },
    { name: '李四', class: '高一(1)班', score: 72, time: '32 分钟', status: '已提交' },
    { name: '王五', class: '高一(2)班', score: '-', time: '-', status: '未提交' },
  ];

  const toggleSelection = (selectedValues, setValues, value) => {
    setValues(
      selectedValues.includes(value)
        ? selectedValues.filter((selectedValue) => selectedValue !== value)
        : [...selectedValues, value],
    );
  };

  const generateReport = () => {
    setReport({
      accuracy: '78%',
      wrongTypes: '计算失误（35%）｜概念不清（25%）｜审题偏差（20%）｜步骤缺失（20%）',
      subjectiveNotes: '主观题常见问题：关键步骤缺失、结论表达不完整、单位与符号遗漏。',
    });
    setPageNotice('已生成讲评摘要，可直接用于下一节课的课堂讲评与个体跟进。');
  };

  const handleAssign = () => {
    setPageNotice(`已为 ${selectedClasses.join('、')} 生成作业方案，建议明天第一节课前查看提交情况。`);
  };

  return (
    <TeacherLayout currentTab="assignments" onTabChange={onTabChange}>
      <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-orange-500 via-orange-500 to-rose-500 p-6 text-white shadow-[0_32px_70px_-30px_rgba(234,88,12,0.65)] sm:p-8">
        <div className="absolute -right-12 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-pink-200/20 blur-3xl" />
        <div className="relative">
          <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white/90">
            作业布置建议
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            先锁定知识点，再控制题量，让讲评和跟进真正闭环
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
            如果你先把目标班级、题型和知识点定准，后面的批改摘要和下一节课讲评都会自然顺下来。
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              '当前推荐题量 10-12 题，兼顾完成率和讲评效率。',
              '建议优先覆盖“方程应用 + 分数运算”两类知识点。',
              '布置完成后立刻生成讲评摘要，第二天更好用。',
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/12 px-4 py-4 text-sm leading-6 text-white/90">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {pageNotice && (
        <section className="mt-6 rounded-[28px] border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-sm font-medium text-indigo-800 shadow-lg shadow-indigo-100/70">
          {pageNotice}
        </section>
      )}

      <section className="mt-6 rounded-[28px] border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-200/70 backdrop-blur-xl sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow-lg">
            <ClipboardList className="h-5 w-5" />
          </div>
          <div>
            <div className="text-base font-semibold text-slate-900">作业布置</div>
            <div className="text-sm text-slate-500">把班级、题型、题量和知识点一次定清楚</div>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <FormBlock
            label="选择班级（可多选）"
            helper="建议同层次班级使用同一套作业，方便你横向比较完成率和错因分布。"
          >
            <div className="flex flex-wrap gap-3">
              {classes.map((className, index) => (
                <ChoiceButton
                  key={className}
                  label={className}
                  active={selectedClasses.includes(className)}
                  onClick={() => toggleSelection(selectedClasses, setSelectedClasses, className)}
                  theme={classThemes[index % classThemes.length]}
                />
              ))}
            </div>
          </FormBlock>

          <FormBlock
            label="题型组合"
            helper="当前推荐先用客观题 + 1 道解答题，既保证效率，也能保留诊断价值。"
          >
            <div className="flex flex-wrap gap-3">
              {questionTypeOptions.map((questionType, index) => (
                <ChoiceButton
                  key={questionType}
                  label={questionType}
                  active={questionTypes.includes(questionType)}
                  onClick={() => toggleSelection(questionTypes, setQuestionTypes, questionType)}
                  theme={typeThemes[index % typeThemes.length]}
                />
              ))}
            </div>
          </FormBlock>

          <FormBlock
            label="题量"
            helper="保持在 10-12 题最稳，作业既能完成诊断，也不容易拉低提交率。"
          >
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              className="h-12 w-36 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
            />
          </FormBlock>

          <FormBlock
            label="截止时间"
            helper="建议至少预留一个晚自习或家庭学习时段，方便学生从容完成。"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <Calendar className="h-5 w-5 text-orange-500" />
                <input
                  type="date"
                  value={deadlineDate}
                  onChange={(event) => setDeadlineDate(event.target.value)}
                  className="w-full bg-transparent text-sm text-slate-700 outline-none"
                />
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <Clock className="h-5 w-5 text-orange-500" />
                <input
                  type="time"
                  value={deadlineTime}
                  onChange={(event) => setDeadlineTime(event.target.value)}
                  className="w-full bg-transparent text-sm text-slate-700 outline-none"
                />
              </div>
            </div>
          </FormBlock>

          <FormBlock
            label="关联知识点"
            helper="建议和本周班级共性薄弱点保持一致，避免作业目标过于分散。"
          >
            <div className="flex flex-wrap items-center gap-3">
              {knowledge.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gradient-to-r from-indigo-500 to-orange-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-200/70"
                >
                  {item}
                </span>
              ))}
              <button
                type="button"
                onClick={() => setKnowledge([...knowledge, '几何证明'])}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Plus className="h-4 w-4" />
                添加“几何证明”
              </button>
            </div>
          </FormBlock>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={handleAssign}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/70 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            立即布置作业
            <Sparkles className="h-4 w-4" />
          </button>
          <button
            onClick={() => onTabChange('dashboard')}
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            返回教学概览
          </button>
        </div>
      </section>

      <section className="mt-6 rounded-[28px] border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-200/70 backdrop-blur-xl sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-orange-500 text-white shadow-lg">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <div className="text-base font-semibold text-slate-900">AI 批改摘要</div>
            <div className="text-sm text-slate-500">一键提炼班级共性错误、讲评重点和主观题问题</div>
          </div>
          <button
            onClick={generateReport}
            className="ml-auto rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            生成讲评摘要
          </button>
        </div>

        {report ? (
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            <ReportStat label="整体正确率" value={report.accuracy} index={0} />
            <ReportStat label="错误类型分布" value={report.wrongTypes} index={1} />
            <ReportStat label="主观题讲评重点" value={report.subjectiveNotes} index={2} />
          </div>
        ) : (
          <div className="mt-5 rounded-[24px] bg-gradient-to-r from-indigo-50 to-pink-50 px-5 py-5 text-sm leading-7 text-slate-600">
            点击“生成讲评摘要”后，你会直接拿到班级共性错误、主观题问题和下一节课讲评重点。
          </div>
        )}
      </section>

      <section className="mt-6 rounded-[28px] border border-white/80 bg-white/70 p-5 shadow-xl shadow-slate-200/70 backdrop-blur-xl sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-orange-500 text-white shadow-lg">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <div className="text-base font-semibold text-slate-900">学生作业列表</div>
            <div className="text-sm text-slate-500">这里保留清晰表格，但通过颜色让状态更容易识别</div>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-slate-500">
                {['姓名', '班级', '得分', '用时', '提交状态', '操作'].map((head) => (
                  <th key={head} className="px-3 py-3 font-semibold">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={`${student.name}-${student.class}`} className="border-t border-slate-100">
                  <td className="px-3 py-4 font-medium text-slate-800">{student.name}</td>
                  <td className="px-3 py-4 text-slate-600">{student.class}</td>
                  <td className="px-3 py-4 text-slate-600">{student.score}</td>
                  <td className="px-3 py-4 text-slate-600">{student.time}</td>
                  <td className="px-3 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusTheme[student.status]}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <button
                      onClick={() => setPageNotice(`已定位到 ${student.name} 的作业情况，可继续补充个体讲评与跟进记录。`)}
                      className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      查看详情
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </TeacherLayout>
  );
};

export default TeacherAssignments;
