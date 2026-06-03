import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  Brain,
  CheckCircle,
  ChevronRight,
  Clock,
  Lightbulb,
  Play,
  Star,
  Target,
  Trophy,
} from 'lucide-react';

const QuizResultModal = ({ result, onClose, onRetry }) => {
  const getScoreColor = (score) => {
    if (score >= 90) {
      return 'text-green-500';
    }
    if (score >= 70) {
      return 'text-yellow-500';
    }
    return 'text-red-500';
  };

  const getScoreMessage = (score) => {
    if (score >= 90) {
      return '掌握得比较稳定，可以继续做进阶题。';
    }
    if (score >= 70) {
      return '基础还不错，建议再复盘错题后做一组巩固。';
    }
    return '先回到对应课程或补弱页，把错因真正弄清楚。';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center">
          <Trophy className="w-14 h-14 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">测验完成</h2>
          <div className={`text-4xl font-bold mb-2 ${getScoreColor(result.score)}`}>{result.score} 分</div>
          <p className="text-gray-600 mb-6">{getScoreMessage(result.score)}</p>

          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="font-bold text-gray-800">{result.correctAnswers}</div>
                <div className="text-gray-600">答对题数</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-800">{result.wrongAnswers}</div>
                <div className="text-gray-600">答错题数</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-800">{result.totalQuestions}</div>
                <div className="text-gray-600">总题数</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-green-600">+{result.earnedPoints}</div>
                <div className="text-gray-600">获得积分</div>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              查看解析
            </button>
            <button
              onClick={onRetry}
              className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
            >
              重新测验
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuizDetailPage = ({ quiz, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  const questions = useMemo(
    () => [
      {
        id: 1,
        question: '计算：3/4 + 2/5 = ?',
        options: ['23/20', '5/9', '1 1/20', '1 3/20'],
        correctAnswer: 3,
        explanation: '先通分：3/4=15/20，2/5=8/20，相加得到 23/20，也就是 1 又 3/20。',
        hint: '先通分，再相加。',
        points: 10,
      },
      {
        id: 2,
        question: '下列哪个步骤最适合先做，用来解决应用题“看不懂题”的问题？',
        options: ['直接列公式', '先找已知和未知', '先猜答案', '先做口算'],
        correctAnswer: 1,
        explanation: '应用题最先要做的是拆出已知条件和未知目标，这样才知道如何列式。',
        hint: '先把题目中的关键信息整理出来。',
        points: 10,
      },
      {
        id: 3,
        question: '解方程：2x + 5 = 15',
        options: ['x = 5', 'x = 10', 'x = 7.5', 'x = 20'],
        correctAnswer: 0,
        explanation: '2x + 5 = 15，先移项得到 2x = 10，再两边同时除以 2，所以 x = 5。',
        hint: '先把常数项移到等式右边。',
        points: 15,
      },
      {
        id: 4,
        question: '如果一道题做错后，你最应该先做什么？',
        options: ['马上刷 10 道新题', '跳过不看', '先弄清错因，再做同类题', '等老师讲完再说'],
        correctAnswer: 2,
        explanation: '补弱最重要的是先弄清错因，再用少量同类题验证是否真的改正。',
        hint: '复盘比刷量更重要。',
        points: 10,
      },
    ],
    [],
  );

  const activeQuestion = questions[currentQuestion];

  const handleAnswer = (answerIndex) => {
    setUserAnswers((prev) => ({ ...prev, [currentQuestion]: answerIndex }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setShowExplanation(false);
      return;
    }

    const correctAnswers = questions.filter((q, index) => userAnswers[index] === q.correctAnswer).length;
    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
    const earnedPoints = questions.reduce((sum, q, index) => sum + (userAnswers[index] === q.correctAnswer ? q.points : 0), 0);
    const score = Math.round((earnedPoints / totalPoints) * 100);

    setQuizResult({
      score,
      correctAnswers,
      wrongAnswers: questions.length - correctAnswers,
      totalQuestions: questions.length,
      earnedPoints: Math.round(score * 1.5),
    });
    setShowResultModal(true);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowExplanation(false);
    setShowResultModal(false);
    setQuizResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-gray-800 transition-colors flex-shrink-0"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
                <span className="hidden sm:inline">返回测验列表</span>
              </button>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <quiz.icon className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{quiz.title}</h1>
                <p className="text-sm sm:text-base text-gray-600">{quiz.description}</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-2 sm:ml-4">
              <div className="text-lg sm:text-2xl font-bold text-blue-600">{Math.round((Object.keys(userAnswers).length / questions.length) * 100)}%</div>
              <div className="text-xs sm:text-sm text-gray-600">完成度</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm text-gray-600">答题进度</span>
            <span className="text-xs sm:text-sm text-gray-600">
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              第 {currentQuestion + 1} 题 / {questions.length}
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>建议 1-2 分钟内完成</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">{activeQuestion.question}</h3>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Target className="w-4 h-4" />
                <span>{activeQuestion.points} 分</span>
              </div>
              <button
                onClick={() => setShowExplanation((prev) => !prev)}
                className="flex items-center space-x-1 text-yellow-600 hover:text-yellow-700"
              >
                <Lightbulb className="w-4 h-4" />
                <span>{showExplanation ? '收起提示' : '查看提示'}</span>
              </button>
            </div>
          </div>

          {showExplanation && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
              <div className="flex items-center space-x-2 text-yellow-800 text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>{activeQuestion.hint}</span>
              </div>
            </div>
          )}

          <div className="space-y-3 mb-6">
            {activeQuestion.options.map((option, index) => {
              const isSelected = userAnswers[currentQuestion] === index;
              const isCorrect = index === activeQuestion.correctAnswer;
              const showReview = showResultModal || (quizResult && !showResultModal);

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    showReview
                      ? isCorrect
                        ? 'border-green-500 bg-green-50'
                        : isSelected
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 bg-gray-50'
                      : isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                        isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-800">{option}</span>
                    </div>
                    {showReview && isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {showReview && isSelected && !isCorrect && <AlertCircle className="w-5 h-5 text-red-500" />}
                  </div>
                </button>
              );
            })}
          </div>

          {quizResult && !showResultModal && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span className="font-medium text-blue-800">本题解析</span>
              </div>
              <p className="text-blue-700 text-sm">{activeQuestion.explanation}</p>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion((prev) => prev - 1);
                }
              }}
              disabled={currentQuestion === 0}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              上一题
            </button>

            <div className="flex items-center space-x-3">
              {quizResult && !showResultModal ? (
                <button
                  onClick={() => {
                    if (currentQuestion < questions.length - 1) {
                      setCurrentQuestion((prev) => prev + 1);
                    }
                  }}
                  disabled={currentQuestion === questions.length - 1}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  下一题解析
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={userAnswers[currentQuestion] === undefined}
                  className="flex items-center space-x-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      <span>下一题</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>完成测验</span>
                      <Trophy className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg mt-6">
          <div className="flex items-start space-x-3">
            <Brain className="w-5 h-5 text-indigo-500 mt-0.5" />
            <div>
              <div className="font-semibold text-gray-800">测验使用建议</div>
              <div className="text-sm text-gray-600 mt-1">
                如果这组测验得分不理想，先回到对应课程或补弱页复盘错因，再做第二次，不建议直接反复硬刷。
              </div>
            </div>
          </div>
        </div>

        {showResultModal && quizResult && (
          <QuizResultModal
            result={quizResult}
            onClose={() => setShowResultModal(false)}
            onRetry={handleRetry}
          />
        )}
      </div>
    </div>
  );
};

export default QuizDetailPage;
