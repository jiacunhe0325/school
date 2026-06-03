import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle,
  ChevronLeft,
  Clock,
  Play,
  Star,
  Target,
  Zap,
} from 'lucide-react';

const stepThemes = [
  'from-blue-500 to-indigo-600',
  'from-purple-500 to-orange-600',
  'from-green-500 to-purple-600',
];

const WeakPointDetailPage = ({ weakPoint, onBack }) => {
  const [currentStep, setCurrentStep] = useState(weakPoint?.currentStep || 0);
  const [showMemoryCards, setShowMemoryCards] = useState(true);

  const detail = useMemo(() => {
    if (!weakPoint) {
      return null;
    }

    return {
      title: `${weakPoint.subject} · ${weakPoint.topic}`,
      goal: '把高频错误变成稳定得分点',
      steps: [
        {
          title: '先看懂错在哪里',
          description: '用最近错题回看核心概念，优先修正常见步骤错误。',
          duration: '8-10 分钟',
          checklist: ['回看最近 3 道错题', '标出自己最容易错的步骤', '用自己的话复述规则'],
        },
        {
          title: '再做同类题巩固',
          description: '围绕同一知识点做少量高质量练习，避免盲目刷题。',
          duration: '10-12 分钟',
          checklist: ['完成 6-8 道同类题', '每做完 1 题就立刻对照思路', '把错题归类到同一个原因'],
        },
        {
          title: '最后用小测确认掌握',
          description: '通过短测检查是否真正掌握，而不是只看过程感觉。',
          duration: '5-8 分钟',
          checklist: ['完成 1 组小测', '正确率达到 80% 以上', '记录还需要继续复习的点'],
        },
      ],
      memoryCards: [
        {
          title: '关键提醒',
          content: '先复盘错因，再做同类题，最后用小测确认，避免重复犯同一类错误。',
        },
        {
          title: '今晚目标',
          content: `建议投入 ${weakPoint.studyTime} 分钟，把当前掌握度从 ${weakPoint.mastery}% 提升到更稳定状态。`,
        },
        {
          title: '完成收益',
          content: '补上这个知识点后，后续相关题型的正确率通常会更稳定，做题速度也会提升。',
        },
      ],
      resources: [
        { title: '5 分钟概念讲解', type: '视频', desc: '先把关键规则再看一遍，适合开始前快速进入状态。', duration: '5 分钟' },
        { title: '同类题训练包', type: '练习', desc: '集中训练高频错题类型，完成后立即给出结果反馈。', duration: '12 分钟' },
        { title: '过关小测', type: '测验', desc: '用 1 组短测判断是否真正掌握，不再只靠感觉。', duration: '6 分钟' },
      ],
    };
  }, [weakPoint]);

  if (!detail || !weakPoint) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 shadow-sm sticky top-0 z-10 rounded-xl sm:rounded-2xl mb-4">
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">返回</span>
            </button>
            <h1 className="font-bold text-gray-800 text-sm sm:text-lg">补弱详情</h1>
            <div className="w-12 sm:w-16" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="font-bold text-xl text-gray-800">{detail.title}</h2>
                  <p className="text-gray-600">当前掌握度 <span className="font-bold text-red-600">{weakPoint.mastery}%</span></p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">建议用时</div>
                <div className="text-2xl font-bold text-blue-600">{weakPoint.studyTime} 分钟</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-red-600">{weakPoint.wrongQuestions}</div>
                <div className="text-xs text-gray-500">最近错题</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">{currentStep + 1}/3</div>
                <div className="text-xs text-gray-500">当前步骤</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">85%</div>
                <div className="text-xs text-gray-500">目标掌握度</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-start space-x-2">
                <Brain className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="font-medium text-blue-800 mb-1">AI 诊断结论</div>
                  <p className="text-sm text-blue-700">{weakPoint.reason || detail.goal}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-6 h-6" />
                <h3 className="font-bold text-lg">记忆卡片</h3>
              </div>
              <button
                onClick={() => setShowMemoryCards((prev) => !prev)}
                className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm transition-colors"
              >
                {showMemoryCards ? '收起' : '展开'}
              </button>
            </div>

            {showMemoryCards && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {detail.memoryCards.map((card) => (
                  <div key={card.title} className="bg-white/15 rounded-xl p-4">
                    <div className="font-semibold mb-1">{card.title}</div>
                    <div className="text-sm text-white/90">{card.content}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl text-gray-800 flex items-center">
              <Zap className="w-6 h-6 text-yellow-500 mr-2" />
              三步提升计划
            </h3>

            {detail.steps.map((step, index) => (
              <div
                key={step.title}
                className={`rounded-2xl p-5 shadow-lg border ${
                  currentStep === index ? 'bg-white border-blue-200' : 'bg-white/80 border-white'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start space-x-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${stepThemes[index]} text-white flex items-center justify-center`}>
                      {index < currentStep ? <CheckCircle className="w-6 h-6" /> : <Target className="w-6 h-6" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">{step.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                      <div className="text-xs text-gray-500 mt-2">预计 {step.duration}</div>
                    </div>
                  </div>
                  {currentStep === index && (
                    <button
                      onClick={() => setCurrentStep((prev) => Math.min(prev + 1, detail.steps.length - 1))}
                      className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      标记完成
                    </button>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                  {step.checklist.map((item) => (
                    <div key={item} className="bg-gray-50 rounded-xl p-3 text-sm text-gray-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>推荐学习资源</span>
            </h3>
            <div className="space-y-3">
              {detail.resources.map((resource) => (
                <div key={resource.title} className="flex items-start justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="font-semibold text-gray-800">{resource.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{resource.desc}</div>
                    <div className="text-xs text-gray-500 mt-2">
                      {resource.type} · {resource.duration}
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>开始</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">完成这项补弱后，建议立刻接一组小测</h3>
              <p className="text-sm text-gray-600 mt-1">用结果判断是否真正掌握，而不是只看过程感觉。</p>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <span>进入巩固测验</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeakPointDetailPage;
