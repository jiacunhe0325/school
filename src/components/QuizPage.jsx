import React, { useMemo, useState } from 'react';
import { Compass, Globe2, Rocket, School, Wand2 } from 'lucide-react';
import { sharedMockData } from '../mockPlatformData';

const scenes = [
  {
    id: 'immersive',
    title: '沉浸式学科场景',
    icon: Rocket,
    desc: '让抽象知识点在更真实、可感知的环境中被理解和体验。',
    path: ['进入主题空间', '完成观察任务', '输出结论表达'],
  },
  {
    id: 'research',
    title: '虚拟研学',
    icon: Globe2,
    desc: '通过虚拟空间进行主题研学、跨校互动与情境探索。',
    path: ['选择主题', '记录过程', '完成展示卡片'],
  },
  {
    id: 'experiment',
    title: '安全实验与跨学科探究',
    icon: Wand2,
    desc: '在低风险环境下进行实验体验和综合性项目实践。',
    path: ['做实验观察', '记录变量变化', '形成跨学科结论'],
  },
];

const QuizPage = ({ onNavigate }) => {
  const [selectedSceneId, setSelectedSceneId] = useState(scenes[0].id);
  const selectedScene = useMemo(
    () => scenes.find((item) => item.id === selectedSceneId) ?? scenes[0],
    [selectedSceneId],
  );

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-600 via-indigo-600 to-blue-500 p-6 text-white shadow-[0_32px_80px_-36px_rgba(14,165,233,0.6)]">
        <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white/90">
          未来学习中心
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight">让这里更像可进入的“主题场景”，而不是单页介绍</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85">
          现在你可以切换不同主题场景，右侧会看到它的体验路径和与学校建设方案的对应关系。当前推荐主题也会同步出现在家长端、教师端和学校端的说明里。
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr,1.05fr]">
        <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
          <div className="text-lg font-bold text-slate-900">主题场景</div>
          <div className="mt-5 space-y-3">
            {scenes.map((scene) => {
              const selected = scene.id === selectedSceneId;
              return (
                <button
                  key={scene.id}
                  onClick={() => setSelectedSceneId(scene.id)}
                  className={`w-full rounded-[24px] border px-4 py-4 text-left transition ${
                    selected ? 'border-indigo-300 bg-indigo-50/80 shadow-md' : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                      <scene.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-slate-900">{scene.title}</div>
                      <div className="text-sm text-slate-500">{scene.desc}</div>
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
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                <Compass className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold text-slate-900">体验路径</div>
            </div>
            <div className="mt-5 space-y-3">
              {selectedScene.path.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
                <School className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold text-slate-900">与学校建设如何对应</div>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                学生端看到的是学习体验，背后对应的是建设方案中的未来学习中心模块，本周推荐主题是“{sharedMockData.futureLab.title}”。
              </div>
              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                这里强调的不只是“好看”，而是把抽象知识转化成更可理解、更可实践的场景。
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('profile')}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                写入成长档案
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700"
              >
                回到任务页
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuizPage;
