import React, { useMemo, useState } from 'react';
import {
  Award,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle,
  ChevronRight,
  Clock,
  Microscope,
  Play,
  Star,
  Target,
  Type,
} from 'lucide-react';

const subjectMap = {
  math: { label: '数学', icon: Calculator },
  chinese: { label: '语文', icon: Type },
  english: { label: '英语', icon: Award },
  science: { label: '科学', icon: Microscope },
};

const CourseDetailPage = ({ course, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const subjectMeta = subjectMap[course.subject] || subjectMap.math;
  const SubjectIcon = subjectMeta.icon;

  const lessons = useMemo(
    () => [
      { id: 1, title: '课程目标与常见错因', duration: '5 分钟', completed: true, type: '讲解' },
      { id: 2, title: '核心概念拆解', duration: '12 分钟', completed: true, type: '讲解' },
      { id: 3, title: '例题演示与步骤提示', duration: '15 分钟', completed: course.progress >= 50, type: '互动' },
      { id: 4, title: '同类题巩固训练', duration: '10 分钟', completed: false, type: '练习' },
      { id: 5, title: '阶段小测', duration: '8 分钟', completed: false, type: '测验' },
      { id: 6, title: '进阶应用', duration: '12 分钟', completed: false, type: '拓展' },
    ],
    [course.progress],
  );

  const reviews = [
    { id: 1, user: '林可', rating: 5, date: '2024-01-15', comment: '最有帮助的是它会先从错题切入，不会一上来就给很多新题。' },
    { id: 2, user: '王一帆', rating: 4, date: '2024-01-12', comment: '课程节奏比较清楚，做完后知道自己下一步该练什么。' },
    { id: 3, user: '陈雨桐', rating: 5, date: '2024-01-10', comment: '讲解和练习衔接得很好，适合薄弱点补强。' },
  ];

  const tabItems = [
    { id: 'overview', label: '课程概览', icon: BookOpen },
    { id: 'lessons', label: '课程目录', icon: Play },
    { id: 'reviews', label: '学员评价', icon: Star },
    { id: 'stats', label: '学习统计', icon: BarChart3 },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case '基础':
        return 'bg-green-100 text-green-700';
      case '中等':
        return 'bg-yellow-100 text-yellow-700';
      case '进阶':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
              <span className="text-sm sm:text-base">返回课程列表</span>
            </button>
            <div className="text-right flex-shrink-0 ml-2 sm:ml-4">
              <div className="text-xl sm:text-2xl font-bold text-blue-600">{course.progress}%</div>
              <div className="text-xs sm:text-sm text-gray-600">学习进度</div>
            </div>
          </div>

          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
              <SubjectIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{course.title}</h1>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{course.description}</p>
              <div className="flex flex-wrap items-center gap-2 sm:space-x-4">
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getDifficultyColor(course.difficulty)}`}>
                  {course.difficulty}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                  学习时长：{course.duration}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                  {course.rating} 分
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                  目标：{course.goal}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-4 sm:mb-6">
          <div className="flex border-b overflow-x-auto">
            {tabItems.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 sm:px-6 sm:py-3 font-medium transition-colors whitespace-nowrap text-sm sm:text-base ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-4">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  <span>这门课会帮你解决什么</span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">先弄清核心概念，避免只记公式不理解。</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">围绕高频错题类型做定向练习，而不是盲目刷题。</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">最后通过阶段小测确认是否真正掌握。</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">课程节奏</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: '先理解', desc: '先把错因和知识点讲清楚，减少反复出错。', color: 'bg-blue-50' },
                    { title: '再巩固', desc: '用少量高质量练习建立稳定做题步骤。', color: 'bg-purple-50' },
                    { title: '后检测', desc: '用短测检验效果，再决定是否需要二次复习。', color: 'bg-green-50' },
                  ].map((item) => (
                    <div key={item.title} className={`${item.color} rounded-xl p-4`}>
                      <div className="font-semibold text-gray-800">{item.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'lessons' && (
            <div className="space-y-3 sm:space-y-4">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${lesson.completed ? 'bg-green-100' : 'bg-blue-100'}`}>
                      {lesson.completed ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Play className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{lesson.title}</div>
                      <div className="text-sm text-gray-500">
                        {lesson.type} · {lesson.duration}
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    {lesson.completed ? '回看' : '开始'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-0">学员评价</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold text-sm sm:text-base">{course.rating}</span>
                    <span className="text-gray-600 text-sm sm:text-base">({reviews.length} 条评价)</span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-3 sm:pb-4 last:border-b-0">
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium text-gray-600">{review.user.charAt(0)}</span>
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-gray-800 text-sm sm:text-base">{review.user}</div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 ml-auto flex-shrink-0">{review.date}</div>
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">累计学习</p>
                      <p className="text-2xl font-bold">2.5 小时</p>
                    </div>
                    <Clock className="w-8 h-8 text-blue-200" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">已完成课时</p>
                      <p className="text-2xl font-bold">
                        {course.completedLessons}/{course.lessons}
                      </p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-200" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">当前正确率</p>
                      <p className="text-2xl font-bold">84%</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-purple-200" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">下一步建议</p>
                      <p className="text-lg font-bold">做 1 组小测</p>
                    </div>
                    <Target className="w-8 h-8 text-orange-200" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3">进度提示</h4>
                <div className="space-y-2">
                  {[
                    '你已经完成核心讲解部分，适合进入同类题巩固。',
                    '当前课程进度不错，建议不要中断太久，避免重新进入状态。',
                    '学完这门课后，最好立刻做 1 组对应测验确认掌握。',
                  ].map((tip) => (
                    <div key={tip} className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                      {tip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
