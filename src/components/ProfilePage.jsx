import React, { useState } from 'react';
import { BadgeCheck, HeartPulse, Layers, User } from 'lucide-react';

const profileTabs = ['学习主线', '拓展主线', '健康关注', '成长标签'];

const profileContent = {
  学习主线: '数学应用题补强 + 英语表达稳定化，当前主线任务会随着最近一周表现自动调整。',
  拓展主线: '科技素养项目体验 + 美育创作任务，完成后的主题结果会同步写入个人成长记录。',
  健康关注: '保持每周运动记录与体能趋势追踪，系统会根据任务密度给出晚间活动提醒。',
  成长标签: '探究积极、表达稳定提升、需要持续巩固步骤清晰度。标签不是固定评价，会随着行为与结果变化更新。',
};

const iconMap = {
  学习主线: Layers,
  拓展主线: BadgeCheck,
  健康关注: HeartPulse,
  成长标签: User,
};

const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState(profileTabs[0]);
  const Icon = iconMap[selectedTab];

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-500 text-white shadow-lg">
            <User className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">我的成长档案</h2>
            <p className="text-sm text-slate-500">把学习、素养、健康和成长过程拆成可切换的档案视图</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.85fr,1.15fr]">
        <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
          <div className="text-lg font-bold text-slate-900">档案目录</div>
          <div className="mt-5 space-y-3">
            {profileTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`w-full rounded-2xl px-4 py-4 text-left text-sm font-semibold transition ${
                  selectedTab === tab ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold text-slate-900">{selectedTab}</div>
            </div>
            <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
              {profileContent[selectedTab]}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/80 bg-slate-900 p-6 text-white shadow-xl">
            <div className="text-lg font-bold">这份档案现在更像什么？</div>
            <div className="mt-3 text-sm leading-7 text-slate-200">
              更像一个持续更新的个人成长面板，而不是静态个人页。每个标签都能成为后续学生端任务、未来学习中心体验和家长端反馈的来源。
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
