import React, { useMemo, useState } from 'react';
import { Clock3, MessageSquare, Send } from 'lucide-react';
import { sharedMockData } from '../mockPlatformData';

const initialThreads = [
  {
    id: 1,
    from: '数学老师',
    tag: '待跟进',
    time: '今天 18:30',
    summary: sharedMockData.parentMessage,
  },
  {
    id: 2,
    from: '班主任',
    tag: '待确认',
    time: '今天 16:00',
    summary: `下周家校沟通活动时间已发布，请${sharedMockData.studentName}家长确认是否参加。`,
  },
];

const ParentMessagesPage = () => {
  const [threads, setThreads] = useState(initialThreads);
  const [selectedThreadId, setSelectedThreadId] = useState(initialThreads[0].id);
  const [replyText, setReplyText] = useState('');

  const selectedThread = useMemo(
    () => threads.find((item) => item.id === selectedThreadId) ?? threads[0],
    [threads, selectedThreadId],
  );

  const handleReply = () => {
    if (!replyText.trim()) {
      return;
    }

    setThreads((prev) => [
      {
        id: Date.now(),
        from: '我刚发送的回复',
        tag: '已发送',
        time: '刚刚',
        summary: replyText.trim(),
      },
      ...prev,
    ]);
    setReplyText('');
  };

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">家校消息</h2>
            <p className="text-sm text-slate-500">左侧看消息列表，右侧看当前消息详情与快速回复</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
          <div className="text-lg font-bold text-slate-900">消息列表</div>
          <div className="mt-5 space-y-3">
            {threads.map((thread) => (
              <button
                key={thread.id}
                onClick={() => setSelectedThreadId(thread.id)}
                className={`w-full rounded-[24px] border px-4 py-4 text-left transition ${
                  selectedThreadId === thread.id ? 'border-indigo-300 bg-indigo-50/80 shadow-md' : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="font-semibold text-slate-900">{thread.from}</div>
                  <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-600">
                    {thread.tag}
                  </span>
                </div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{thread.summary}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-lg font-bold text-slate-900">{selectedThread.from}</div>
                <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <Clock3 className="h-3.5 w-3.5" />
                  {selectedThread.time}
                </div>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
                {selectedThread.tag}
              </span>
            </div>
            <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
              {selectedThread.summary}
            </div>
            <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
              这条消息和学生端、教师端当前关注的是同一件事：{sharedMockData.primaryFocus.short}。
            </div>
          </div>

          <div className="rounded-[30px] border border-white/80 bg-white/85 p-6 shadow-lg shadow-slate-200/70">
            <div className="text-sm font-semibold text-slate-900">快速回复</div>
            <div className="mt-3 flex gap-2">
              <input
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400"
                placeholder="输入要发送给老师或学校的回复..."
              />
              <button
                onClick={handleReply}
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <Send className="h-4 w-4" />
                发送
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentMessagesPage;
