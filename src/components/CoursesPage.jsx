import React, { useMemo, useState } from 'react';
import { Cpu, Music4, Orbit, PlayCircle, Sparkles } from 'lucide-react';

const tracks = [
  {
    id: 'tech',
    title: '科技素养',
    icon: Cpu,
    color: 'from-indigo-500 to-blue-500',
    desc: '围绕 PBL 项目、编程、机器人与 AI 通识任务，培养探究与实践能力。',
    items: ['项目式学习', '编程与机器人', '探究式研究任务'],
    sample: '今日推荐：用“校园能耗观察”做一个小型数据探究任务。',
  },
  {
    id: 'art',
    title: '美育发展',
    icon: Music4,
    color: 'from-indigo-500 to-orange-500',
    desc: '通过欣赏、创作与沉浸式体验，让艺术学习更具个性与表达性。',
    items: ['音乐与美术创作', '沉浸式审美体验', '差异化表达指导'],
    sample: '今日推荐：完成一段“主题情绪色彩”创作练习。',
  },
  {
    id: 'health',
    title: '体质健康',
    icon: Sparkles,
    color: 'from-purple-500 to-orange-500',
    desc: '结合运动状态与体能趋势，生成更适合你的锻炼提醒与成长反馈。',
    items: ['运动负荷提醒', '个性化锻炼建议', '体能成长记录'],
    sample: '今日推荐：学习任务结束后进行 10 分钟轻运动恢复。',
  },
];

const CoursesPage = ({ onNavigate }) => {
  const [selectedTrackId, setSelectedTrackId] = useState(tracks[0].id);
  const selectedTrack = useMemo(
    () => tracks.find((item) => item.id === selectedTrackId) ?? tracks[0],
    [selectedTrackId],
  );

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <Orbit className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">素养拓展</h2>
            <p className="text-sm text-slate-500">左侧选择拓展方向，右侧查看更具体的样例任务和进入方式</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr,1.05fr]">
        <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
          <div className="text-lg font-bold text-slate-900">拓展方向</div>
          <div className="mt-5 space-y-3">
            {tracks.map((track) => {
              const selected = track.id === selectedTrackId;
              return (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrackId(track.id)}
                  className={`w-full rounded-[24px] border px-4 py-4 text-left transition ${
                    selected ? 'border-indigo-300 bg-indigo-50/80 shadow-md' : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${track.color} text-white shadow-lg`}>
                      <track.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-slate-900">{track.title}</div>
                      <div className="text-sm text-slate-500">{track.desc}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedTrack.color} text-white shadow-lg`}>
                <selectedTrack.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900">{selectedTrack.title}</div>
                <div className="text-sm text-slate-500">更接近真实产品原型的专题详情视图</div>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              {selectedTrack.items.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <PlayCircle className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold text-slate-900">样例任务</div>
            </div>
            <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
              {selectedTrack.sample}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate(selectedTrack.id === 'health' ? 'profile' : 'quizzes')}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {selectedTrack.id === 'health' ? '写入成长档案' : '进入主题体验'}
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700"
              >
                回到主任务页
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
