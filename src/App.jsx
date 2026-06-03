import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Bot,
  Clock,
  Lightbulb,
  Send,
  Target,
  TrendingUp,
  User,
  Zap,
} from 'lucide-react';

const initialChatHistory = [
  {
    type: 'bot',
    text: '你好，这里是AI智能教学平台。你可以直接问知识点，也可以让我根据你的薄弱点安排今晚的学习顺序。',
  },
  {
    type: 'user',
    text: '今晚我只有 30 分钟，应该先学什么？',
  },
  {
    type: 'bot',
    text: '建议先完成“分数运算纠错”15 分钟，再做 8 道巩固题，最后用 5 分钟测一组口算。这样能优先修复你最近错误率最高的知识点。',
  },
];

const mockWeeklyGoal = {
  title: '本周目标：完成“分数与方程”补弱计划',
  progressPercent: 75,
  completedTasks: 3,
  totalTasks: 4,
  status: '进行中',
};

const mockRecommendations = [
  {
    icon: Target,
    title: '优先补弱：分数运算纠错',
    description: '预计 18 分钟，完成后可提升本周计划进度 12%',
    color: 'bg-indigo-500',
  },
  {
    icon: Clock,
    title: '快速回顾：化学方程式配平',
    description: '适合睡前 8 分钟复盘，降低同类错误率',
    color: 'bg-green-500',
  },
  {
    icon: Lightbulb,
    title: '拓展理解：牛顿第二定律生活化示例',
    description: '把抽象概念换成更容易理解的真实场景',
    color: 'bg-orange-500',
  },
];

const quickPrompts = [
  '帮我安排今晚 30 分钟学习计划',
  '解释一下牛顿第二定律，并举一个生活例子',
  '根据我的薄弱点推荐 1 组练习题',
];

const ChatBubble = ({ type, text }) => (
  <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
    <div
      className={`max-w-xs md:max-w-md p-3 rounded-xl shadow-md ${
        type === 'user'
          ? 'bg-blue-500 text-white rounded-br-none'
          : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
      } transition-colors duration-200`}
    >
      <div className="flex items-start">
        {type === 'bot' && <Bot className="w-5 h-5 mr-2 text-indigo-500 shrink-0" />}
        <p className="whitespace-pre-wrap">{text}</p>
        {type === 'user' && <User className="w-5 h-5 ml-2 text-white shrink-0" />}
      </div>
    </div>
  </div>
);

const App = () => {
  const [chatHistory, setChatHistory] = useState(initialChatHistory);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showGoalDetail, setShowGoalDetail] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const submitMessage = (message) => {
    if (!message.trim()) {
      return;
    }

    const newMessage = { type: 'user', text: message.trim() };
    setChatHistory((prev) => [...prev, newMessage]);
    setInputMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: `我已收到“${message.trim()}”。如果你想更高效，我可以继续给你这三个结果：1. 先学什么；2. 预计需要多久；3. 学完后再做哪一组练习。`,
      };
      setChatHistory((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1200);
  };

  const handleSendMessage = () => {
    submitMessage(inputMessage);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  const navigateToGoalDetail = () => {
    setShowGoalDetail((prev) => !prev);
  };

  const goToHomePage = () => {
    if (window.navigateToPage) {
      window.navigateToPage('home');
    } else {
      window.location.pathname = '/';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="sticky top-0 z-10 bg-white shadow-sm p-4 flex items-center justify-between border-b border-gray-100">
        <button
          className="p-2 text-gray-600 rounded-full hover:bg-gray-100 transition"
          onClick={goToHomePage}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">AI智能教学平台</h1>
        <div className="w-10" />
      </header>

      <main className="flex-grow p-4 md:p-6 overflow-y-auto">
        <div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl shadow-lg mb-6 cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
          onClick={navigateToGoalDetail}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              本周目标进度（{mockWeeklyGoal.status}）
            </h2>
            <Zap className="w-5 h-5" />
          </div>
          <p className="mt-1 text-sm opacity-90">{mockWeeklyGoal.title}</p>

          <div className="mt-3">
            <div className="flex justify-between text-sm font-medium">
              <span>完成度</span>
              <span>{mockWeeklyGoal.progressPercent}%</span>
            </div>
            <div className="w-full bg-blue-500 rounded-full h-2 mt-1">
              <div
                className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${mockWeeklyGoal.progressPercent}%` }}
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-right opacity-80">
            已完成 {mockWeeklyGoal.completedTasks} / {mockWeeklyGoal.totalTasks} 个任务
          </p>
        </div>

        {showGoalDetail && (
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm mb-6">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">本周目标拆解</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-blue-50 rounded-xl p-3 text-blue-700">已完成 3 个任务，当前进度稳定，建议今天优先收尾最后一项补弱任务。</div>
              <div className="bg-purple-50 rounded-xl p-3 text-purple-700">最后一项建议安排在今晚 20 分钟内完成，避免把本周计划拖到下周。</div>
              <div className="bg-green-50 rounded-xl p-3 text-green-700">完成后再接 1 组短测，可以更快确认这一轮学习是否真正有效。</div>
            </div>
          </div>
        )}

        <h3 className="text-xl font-semibold text-gray-800 mb-3 border-l-4 border-indigo-500 pl-2">
          AI 今日建议
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {mockRecommendations.map((rec) => (
            <div
              key={rec.title}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow duration-200"
            >
              <div className={`p-2 rounded-lg inline-block ${rec.color} text-white`}>
                {React.createElement(rec.icon, { className: 'w-6 h-6' })}
              </div>
              <p className="mt-2 text-base font-semibold text-gray-800">{rec.title}</p>
              <p className="text-sm text-gray-500">{rec.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 border-l-4 border-indigo-500 pl-2">
          常用提问
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              onClick={() => submitMessage(prompt)}
              disabled={isLoading}
            >
              {prompt}
            </button>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-3 border-l-4 border-indigo-500 pl-2">
          AI 问答互动
        </h3>
        <div className="bg-gray-100 p-4 rounded-xl shadow-inner h-96 overflow-y-scroll mb-2 border border-gray-200">
          {chatHistory.map((msg, index) => (
            <ChatBubble key={index} type={msg.type} text={msg.text} />
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white text-gray-800 p-3 rounded-xl rounded-tl-none border border-gray-100 shadow-md">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-indigo-500 rounded-full animate-pulse" />
                  <div className="h-2 w-2 bg-indigo-500 rounded-full animate-pulse delay-150" />
                  <div className="h-2 w-2 bg-indigo-500 rounded-full animate-pulse delay-300" />
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <div className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-indigo-500 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-gray-800">使用建议</div>
              <div className="text-sm text-gray-600 mt-1">
                提问时尽量带上“学科 + 知识点 + 你的困惑”。如果你想要更具体的帮助，也可以直接说明学习时长和目标分数。
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="sticky bottom-0 bg-white p-4 border-t border-gray-200 shadow-md">
        <div className="flex items-center max-w-4xl mx-auto">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 text-gray-800 placeholder-gray-500"
            placeholder="输入你的学习问题，或让 AI 帮你安排今晚的学习顺序..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <button
            className={`ml-2 p-3 rounded-full text-white transition duration-200 shadow-lg ${
              inputMessage.trim() === '' || isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95'
            }`}
            onClick={handleSendMessage}
            disabled={inputMessage.trim() === '' || isLoading}
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
