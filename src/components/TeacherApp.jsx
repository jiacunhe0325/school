import React, { useState } from 'react';
import { 
  BookOpen, Users, BarChart2, Sparkles, Brain, ArrowLeft,
  FileText, CheckCircle2, ChevronRight, PenTool, LayoutTemplate,
  Loader2, PlayCircle, Settings, Target, Flag, Cpu, Palette,
  Activity, Globe, AlertTriangle, Video, MapPin, Database,
  TrendingUp, FileQuestion, MessageCircle, Layers, Send, BookMarked,
  Lightbulb, Zap, HelpCircle, Heart, Scale, ShieldAlert, Award, TrendingDown,
  Network, GitMerge, Webcam, Share2, FolderDown, MessageSquare,
  Code2, Rocket, Terminal, Radar, ShieldCheck, Bug, ZapOff, CheckSquare,
  Trophy, GraduationCap, Milestone, BrainCircuit, Compass, Microscope, ArrowDownToLine,
  Music, Image, Camera, Wand2, Speaker, Glasses, Move, Mic, Waves, Smile, Star, Volume2,
  HeartPulse, Watch, Timer, Dumbbell, ClipboardList,
  Flower2, Flame, Wind, FlaskConical, TestTube, Satellite, CloudLightning, Thermometer, Box, ArrowRight
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-lg' 
        : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
    }`}
  >
    <Icon className="h-4 w-4 shrink-0" />
    <span className="font-medium text-sm text-left line-clamp-1">{label}</span>
  </button>
);

const TeacherApp = () => {
  const [activeTab, setActiveTab] = useState('prep');
  
  // --- MOCK STATES ---
  const [prepStep, setPrepStep] = useState('analysis'); // 'analysis', 'generating', 'dashboard'
  const [classState, setClassState] = useState('waiting'); // waiting, active, evaluation
  const [ideoStep, setIdeoStep] = useState('dashboard'); // 'dashboard', 'interactive', 'evaluation'
  const [researchStep, setResearchStep] = useState('dashboard'); // 'dashboard', 'observation', 'achievement'
  const [techStep, setTechStep] = useState('dashboard'); // 'dashboard', 'workspace', 'evaluation'
  const [personalizedStep, setPersonalizedStep] = useState('dashboard'); // 'dashboard', 'learning_path', 'evaluation'
  const [aestheticStep, setAestheticStep] = useState('perception'); // 'perception', 'creation', 'appreciation'
  const [healthStep, setHealthStep] = useState('collection'); // 'collection', 'evaluation', 'intervention'
  const [futureStep, setFutureStep] = useState('hub'); // 'hub', 'control'
  const [selectedScene, setSelectedScene] = useState(null); // 'chinese', 'history', 'science', 'physics'

  const navigateHome = () => {
    if (window.navigateToPage) window.navigateToPage('home');
    else window.location.pathname = '/';
  };

  const handleGenerateLesson = () => {
    setPrepStep('generating');
    setTimeout(() => {
      setPrepStep('dashboard');
    }, 2500);
  };

  return (
    <div className="flex h-screen bg-[#030712] font-sans selection:bg-purple-500/30 overflow-hidden text-slate-300">
      
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-white/5 bg-white/[0.02] flex flex-col z-20 shrink-0 overflow-y-auto custom-scrollbar">
        <div className="h-20 flex items-center px-6 border-b border-white/5 shrink-0 sticky top-0 bg-[#030712]/80 backdrop-blur-md z-10">
          <div className="flex items-center gap-2 cursor-pointer" onClick={navigateHome}>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shrink-0">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-white tracking-tight text-lg">教师工作台</span>
          </div>
        </div>
        
        <div className="p-4 flex flex-col gap-1.5 pb-24">
          <div className="text-xs font-semibold text-slate-500 mb-1 mt-2 px-2 uppercase tracking-wider">教育教学</div>
          <SidebarItem icon={Brain} label="备课模块 (AI协同)" active={activeTab === 'prep'} onClick={() => setActiveTab('prep')} />
          <SidebarItem icon={PlayCircle} label="课堂模块 (互动分析)" active={activeTab === 'class'} onClick={() => setActiveTab('class')} />
          <SidebarItem icon={Users} label="教研模块 (共同体)" active={activeTab === 'research'} onClick={() => setActiveTab('research')} />
          <SidebarItem icon={Flag} label="思政模块 (价值辨析)" active={activeTab === 'ideological'} onClick={() => setActiveTab('ideological')} />
          
          <div className="text-xs font-semibold text-slate-500 mb-1 mt-4 px-2 uppercase tracking-wider">科技素养</div>
          <SidebarItem icon={Target} label="个性化模块 (强基拔尖)" active={activeTab === 'personalized'} onClick={() => setActiveTab('personalized')} />
          <SidebarItem icon={Cpu} label="科技素养模块 (PBL)" active={activeTab === 'tech'} onClick={() => setActiveTab('tech')} />

          <div className="text-xs font-semibold text-slate-500 mb-1 mt-4 px-2 uppercase tracking-wider">特色发展</div>
          <SidebarItem icon={Palette} label="美育模块 (沉浸体验)" active={activeTab === 'aesthetic'} onClick={() => setActiveTab('aesthetic')} />
          <SidebarItem icon={Activity} label="体质健康 (预警画像)" active={activeTab === 'health'} onClick={() => setActiveTab('health')} />
          <SidebarItem icon={Globe} label="未来学习中心 (元宇宙)" active={activeTab === 'future'} onClick={() => setActiveTab('future')} />
        </div>

        <div className="p-4 border-t border-white/5 mt-auto bg-[#030712]/80 backdrop-blur-md sticky bottom-0 z-10 shrink-0">
          <button onClick={navigateHome} className="w-full flex items-center justify-center gap-2 py-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> 返回主页
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-[#0a0a0a]">
        {/* Glow Effects */}
        <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
          <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]" />
        </div>

        <header className="h-20 flex items-center justify-between px-8 border-b border-white/5 bg-white/[0.01] backdrop-blur-md relative z-10 shrink-0">
          <h2 className="text-lg font-bold text-white flex items-center gap-3">
            {activeTab === 'prep' && <><Brain className="h-5 w-5 text-purple-400"/> 智能备课中心</>}
            {activeTab === 'class' && <><PlayCircle className="h-5 w-5 text-purple-400"/> 数字课堂大屏</>}
            {activeTab === 'research' && <><Users className="h-5 w-5 text-purple-400"/> 跨校教研共同体</>}
            {activeTab === 'ideological' && <><Flag className="h-5 w-5 text-purple-400"/> 情境大思政</>}
            {activeTab === 'personalized' && <><Target className="h-5 w-5 text-blue-400"/> 强基与学科竞赛追踪</>}
            {activeTab === 'tech' && <><Cpu className="h-5 w-5 text-cyan-400"/> PBL 项目式与机器人数智工坊</>}
            {activeTab === 'aesthetic' && <><Palette className="h-5 w-5 text-pink-400"/> AI 赋能美育空间</>}
            {activeTab === 'health' && <><Activity className="h-5 w-5 text-green-400"/> 体质画像与运动监测引擎</>}
            {activeTab === 'future' && <><Globe className="h-5 w-5 text-indigo-400"/> 元宇宙虚拟研学管控台</>}
          </h2>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
              班主任 / 数学组长
            </div>
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xs shadow-inner">
              T
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 relative z-10 custom-scrollbar">
          
          {/* TAB 1: PREP */}
          {activeTab === 'prep' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
              
              {/* STEP 1: 学情分析与 AI 诊断 */}
              {prepStep === 'analysis' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-in-up">
                  
                  {/* 学情诊断大盘 */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-end mb-2">
                       <div>
                         <h3 className="text-2xl font-bold text-white mb-1">《二次函数的图像与性质》备课诊断</h3>
                         <p className="text-slate-400 text-sm">基于 高一(3)班 昨日作业及上节课随堂数据生成</p>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Activity className="w-16 h-16"/></div>
                          <div className="text-slate-400 text-sm mb-2">上节课作业完成度</div>
                          <div className="text-3xl font-black text-white mb-2">92<span className="text-lg text-slate-500 font-normal">%</span></div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2"><div className="h-full bg-green-400 w-[92%] rounded-full shadow-[0_0_10px_#4ade80]"></div></div>
                          <div className="text-xs text-green-400 flex items-center gap-1"><TrendingUp className="w-3 h-3"/> 较前日提升 5%</div>
                       </div>
                       
                       <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 relative overflow-hidden group hover:border-red-500/30 transition-colors">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><AlertTriangle className="w-16 h-16 text-red-500"/></div>
                          <div className="text-slate-400 text-sm mb-2">核心知识点错误率报警</div>
                          <div className="text-3xl font-black text-red-400 mb-2">42<span className="text-lg text-red-500/50 font-normal">%</span></div>
                          <div className="text-sm text-white font-medium">考点：二次函数平移规律</div>
                          <div className="text-xs text-red-400/80 mt-1">集中错题：第7题、第12题</div>
                       </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                       <h4 className="font-semibold text-white mb-4 flex items-center gap-2"><MessageCircle className="w-4 h-4 text-purple-400"/> 上节课学生疑问热词云</h4>
                       <div className="flex flex-wrap gap-2">
                         <span className="px-3 py-1 bg-white/5 text-slate-300 rounded-lg text-sm border border-white/10">顶点坐标公式难记 (12人)</span>
                         <span className="px-3 py-1 bg-white/5 text-slate-300 rounded-lg text-sm border border-white/10">开口大小怎么判断 (8人)</span>
                         <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">平移规律：左加右减？ (25人)</span>
                       </div>
                    </div>
                  </div>

                  {/* AI 助教建议面板 */}
                  <div className="bg-gradient-to-br from-purple-900/20 to-[#030712] border border-purple-500/20 rounded-3xl p-6 relative flex flex-col shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                     <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-500/20">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                          <Brain className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <div className="text-white font-bold">AI 教学助理</div>
                          <div className="text-xs text-purple-400">深度诊断完毕，随时待命</div>
                        </div>
                     </div>
                     
                     <div className="flex-1 space-y-4 text-sm text-slate-300">
                        <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                           <span className="text-purple-400 font-bold">诊断结论：</span> 学生在基础代数计算上掌握良好，但对图像平移的几何直观理解薄弱。
                        </div>
                        <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                           <span className="text-blue-400 font-bold">AI 备课建议：</span>
                           <ul className="list-disc pl-4 mt-2 space-y-1 text-slate-400">
                             <li>增加<span className="text-white">《动态几何画板》</span>互动演示环节。</li>
                             <li>随堂练习需增加<span className="text-white">“数形结合”</span>变式题。</li>
                             <li>课前向学生推送讨论话题预热。</li>
                           </ul>
                        </div>
                     </div>

                     <button 
                       onClick={handleGenerateLesson}
                       className="mt-6 w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-purple-600/20 transition-all flex justify-center items-center gap-2 group"
                     >
                       <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform"/>
                       基于学情，一键生成教学包
                     </button>
                  </div>

                </div>
              )}

              {/* STEP 2: 生成动画 */}
              {prepStep === 'generating' && (
                 <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-fade-in">
                    <div className="relative w-32 h-32 mb-8">
                       <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full animate-[spin_3s_linear_infinite]"></div>
                       <div className="absolute inset-2 border-4 border-t-purple-500 border-r-transparent border-b-indigo-500 border-l-transparent rounded-full animate-[spin_2s_linear_infinite]"></div>
                       <div className="absolute inset-0 flex items-center justify-center"><Brain className="w-10 h-10 text-purple-400 animate-pulse" /></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI 正在深度重组教学资源...</h3>
                    <p className="text-slate-400 max-w-md mx-auto">
                      正在抽取历年真题库、匹配互动课件、生成 A/B/C 三级分层作业及课前预热话题
                    </p>
                 </div>
              )}

              {/* STEP 3: 备课大屏 (全域资源矩阵) */}
              {prepStep === 'dashboard' && (
                 <div className="space-y-6 animate-slide-in-up">
                    <div className="flex justify-between items-center mb-2 bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-2xl border border-purple-500/20">
                       <div>
                         <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">《二次函数的图像与性质》全案 <CheckCircle2 className="w-5 h-5 text-green-400"/></h3>
                         <p className="text-purple-400 text-sm font-medium">AI 已为您靶向匹配 4 大维度教学资源</p>
                       </div>
                       <button onClick={() => setPrepStep('analysis')} className="text-sm text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10">返回学情诊断</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       
                       {/* 1. 核心教学资源 */}
                       <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
                          <h4 className="font-bold text-white mb-4 flex items-center gap-2"><BookMarked className="w-5 h-5 text-blue-400"/> 核心教学课件</h4>
                          <div className="space-y-3">
                             <div className="flex items-center justify-between p-3 bg-black/40 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-3">
                                   <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><LayoutTemplate className="w-4 h-4"/></div>
                                   <div>
                                      <div className="text-white text-sm font-medium group-hover:text-blue-300">二次函数基础讲义.pptx</div>
                                      <div className="text-xs text-slate-500">已自动高亮“平移规律”重点</div>
                                   </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400" />
                             </div>
                             <div className="flex items-center justify-between p-3 bg-black/40 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-3">
                                   <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg"><PlayCircle className="w-4 h-4"/></div>
                                   <div>
                                      <div className="text-white text-sm font-medium group-hover:text-indigo-300">抛物线动态仿真实验.gsp</div>
                                      <div className="text-xs text-slate-500">几何画板高频互动文件</div>
                                   </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400" />
                             </div>
                          </div>
                       </div>

                       {/* 2. 靶向课堂练习 */}
                       <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
                          <h4 className="font-bold text-white mb-4 flex items-center gap-2"><Zap className="w-5 h-5 text-yellow-400"/> 靶向随堂练习</h4>
                          <p className="text-xs text-slate-400 mb-3">AI 专为突破“平移错误率 42%”生成的随堂测验</p>
                          <div className="space-y-3">
                             <div className="flex gap-3">
                                <div className="flex-1 bg-black/40 p-3 rounded-xl border border-white/5">
                                   <div className="text-white text-sm mb-1">Q1: 函数 y=x² 向上平移2个单位，向右...</div>
                                   <div className="flex gap-2 mt-2">
                                     <span className="px-2 py-0.5 bg-white/5 text-slate-400 text-[10px] rounded border border-white/10">选择题</span>
                                     <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-[10px] rounded border border-yellow-500/20">易错突击</span>
                                   </div>
                                </div>
                             </div>
                             <div className="flex gap-3">
                                <div className="flex-1 bg-black/40 p-3 rounded-xl border border-white/5">
                                   <div className="text-white text-sm mb-1">Q2: 下列哪个函数图像的顶点在第一象限...</div>
                                   <div className="flex gap-2 mt-2">
                                     <span className="px-2 py-0.5 bg-white/5 text-slate-400 text-[10px] rounded border border-white/10">综合题</span>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>

                       {/* 3. 分层作业池 */}
                       <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
                          <h4 className="font-bold text-white mb-4 flex items-center gap-2"><Layers className="w-5 h-5 text-orange-400"/> 智能分层作业</h4>
                          <div className="grid grid-cols-3 gap-3">
                             <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-xl text-center cursor-pointer hover:bg-green-500/20 transition-colors">
                               <div className="text-green-400 font-bold mb-1">基础巩固 A</div>
                               <div className="text-xs text-green-400/70">面向 12 名学生</div>
                               <div className="text-xs text-slate-400 mt-2">共 5 题</div>
                             </div>
                             <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl text-center cursor-pointer hover:bg-blue-500/20 transition-colors">
                               <div className="text-blue-400 font-bold mb-1">综合提升 B</div>
                               <div className="text-xs text-blue-400/70">面向 25 名学生</div>
                               <div className="text-xs text-slate-400 mt-2">共 8 题</div>
                             </div>
                             <div className="bg-purple-500/10 border border-purple-500/20 p-3 rounded-xl text-center cursor-pointer hover:bg-purple-500/20 transition-colors">
                               <div className="text-purple-400 font-bold mb-1">挑战探究 C</div>
                               <div className="text-xs text-purple-400/70">面向 8 名学生</div>
                               <div className="text-xs text-slate-400 mt-2">共 3 题</div>
                             </div>
                          </div>
                       </div>

                       {/* 4. 课前师生互动 */}
                       <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
                          <h4 className="font-bold text-white mb-4 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-pink-400"/> 课前预热与互动推流</h4>
                          <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                             <div className="flex items-start gap-3">
                                <div className="p-2 bg-pink-500/20 text-pink-400 rounded-lg shrink-0"><HelpCircle className="w-4 h-4"/></div>
                                <div>
                                   <div className="text-slate-300 text-sm mb-3 leading-relaxed">
                                     "同学们，你在生活中见过哪些类似抛物线的轨迹？试着用今天讲的函数开口方向和它们联系起来哦！"
                                   </div>
                                   <div className="flex gap-2">
                                     <button className="text-xs text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3 py-1.5 rounded-md hover:bg-pink-500/20 transition-colors">修改 AI 生成话题</button>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>

                    </div>

                    {/* Bottom Action */}
                    <div className="mt-8 flex justify-end">
                       <button onClick={() => navigateHome()} className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
                          <Send className="w-5 h-5"/> 确认采用并推送至全终端
                       </button>
                    </div>
                 </div>
              )}

            </div>
          )}

          {/* TAB 2: CLASS */}
          {activeTab === 'class' && (
            <div className="space-y-6 animate-fade-in h-full flex flex-col pb-10">
              {/* STEP 1: Waiting Phase */}
              {classState === 'waiting' && (
                 <div className="flex-1 flex flex-col items-center justify-center relative bg-gradient-to-b from-purple-900/10 to-[#030712] rounded-3xl border border-white/5 overflow-hidden shadow-2xl p-8 min-h-[600px]">
                    {/* Background decorations */}
                    <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                    
                    <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
                       <div className="w-24 h-24 bg-white/[0.02] border border-white/10 rounded-3xl flex items-center justify-center mb-8 shadow-inner relative">
                          <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl animate-ping opacity-50" />
                          <Cpu className="w-10 h-10 text-indigo-400 relative z-10" />
                       </div>
                       
                       <h3 className="text-3xl font-black text-white mb-2">等待课堂节点接入</h3>
                       <p className="text-slate-400 mb-10 text-center">系统正在自动连接全班终端与 AI 伴学模块，并挂载刚刚生成的备课教案与靶向练习。</p>
                       
                       <div className="w-full space-y-4 mb-10">
                          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-purple-400" />
                                <div>
                                   <div className="text-white font-medium">高一 (3) 班</div>
                                   <div className="text-xs text-slate-500">智能物理教室 101</div>
                                </div>
                             </div>
                             <div className="text-right">
                                <div className="text-green-400 font-bold font-mono">40/40</div>
                                <div className="text-xs text-slate-500">学生平板全部在线</div>
                             </div>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                <Database className="w-5 h-5 text-blue-400" />
                                <div>
                                   <div className="text-white font-medium">《二次函数的图像与性质》全案</div>
                                   <div className="text-xs text-slate-500">含 2 份课件，3 组随堂靶向练习</div>
                                </div>
                             </div>
                             <div className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3"/> 已就绪
                             </div>
                          </div>
                       </div>

                       <button onClick={() => setClassState('active')} className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all flex items-center justify-center gap-2 group">
                          <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" /> 开启全息动态课堂
                       </button>
                    </div>
                 </div>
              )}

              {/* STEP 2: Active Phase */}
              {classState === 'active' && (
                 <div className="flex-1 flex gap-6 h-full animate-slide-in-up min-h-[700px]">
                    {/* Left: Main Broadcast */}
                    <div className="flex-[3] bg-[#03050a] border border-white/10 rounded-3xl flex flex-col relative overflow-hidden shadow-2xl">
                       <div className="absolute top-4 left-6 flex items-center gap-3 z-20 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                          <div className="flex items-center gap-2 text-red-400 font-bold text-sm animate-pulse">
                             <div className="w-2.5 h-2.5 bg-red-500 rounded-full" /> 教学影像与行为实时捕捉中
                          </div>
                          <div className="w-[1px] h-4 bg-white/20"></div>
                          <span className="text-slate-300 text-sm font-mono">REC 00:24:12</span>
                       </div>

                       {/* Main Screen Content */}
                       <div className="flex-1 flex flex-col items-center justify-center relative p-8">
                          <h1 className="text-4xl font-black text-white mb-8 tracking-wider">《二次函数的图像与性质》</h1>
                          <div className="w-full max-w-2xl aspect-[21/9] bg-[#0c1222] border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden relative">
                             {/* Abstract graph representation */}
                             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                             <svg className="w-full h-full text-purple-500 opacity-60" viewBox="0 0 100 50" preserveAspectRatio="none">
                               <path d="M 10 10 Q 50 80 90 10" fill="none" stroke="currentColor" strokeWidth="2" />
                             </svg>
                             <div className="absolute bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-white font-mono text-sm shadow-xl">主屏课件实时镜像区 / 数字板书投影</div>
                          </div>
                       </div>

                       {/* AI Assistant Overlay */}
                       <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-purple-900/80 to-[#030712]/90 p-[1px] rounded-2xl overflow-hidden backdrop-blur-xl border border-purple-500/30">
                          <div className="bg-black/40 p-4 rounded-2xl flex items-center gap-4">
                             <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 shrink-0">
                                <Brain className="w-6 h-6 text-purple-400 animate-pulse" />
                             </div>
                             <div className="flex-1">
                                <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                                  AI 助教双向联动预警 <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] rounded border border-red-500/30">高优</span>
                                </div>
                                <div className="text-slate-300 text-sm">
                                  检测到 <span className="text-purple-400 font-bold">李四、王五</span> 等3位同学的平板伴学模块反馈“图像平移变化太快，未跟上思路”。建议立即打断演示，向全班推送备课库中的靶向练习。
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Right: Realtime Data & Control */}
                    <div className="flex-[2] flex flex-col gap-4">
                       
                       {/* Panel 1: Learning State */}
                       <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-5 shadow-lg flex flex-col">
                          <h4 className="font-bold text-white mb-4 flex items-center gap-2"><Activity className="w-4 h-4 text-green-400"/> 全班即时听课状态捕捉</h4>
                          <div className="grid grid-cols-2 gap-4 mb-4">
                             <div>
                                <div className="text-slate-400 text-xs mb-1">平均抬头率</div>
                                <div className="text-2xl font-black text-green-400 font-mono">94%</div>
                             </div>
                             <div>
                                <div className="text-slate-400 text-xs mb-1">心流专注人数</div>
                                <div className="text-2xl font-black text-blue-400 font-mono">32<span className="text-sm font-normal text-slate-500"> / 40</span></div>
                             </div>
                          </div>
                          
                          <div className="space-y-1">
                             <div className="flex justify-between text-xs text-slate-400 mb-1"><span>专注度区间分布</span></div>
                             <div className="h-3 w-full flex rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[70%]" title="高度专注"></div>
                                <div className="h-full bg-yellow-500 w-[20%]" title="偶尔走神"></div>
                                <div className="h-full bg-red-500 w-[10%]" title="走神警告"></div>
                             </div>
                             <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                                <span>高度 70%</span>
                                <span>偶尔 20%</span>
                                <span>警告 10% (包含上述3人)</span>
                             </div>
                          </div>
                       </div>

                       {/* Panel 2: Target Quiz Push */}
                       <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-5 shadow-lg flex flex-col border-t-4 border-t-purple-500/50">
                          <div className="flex justify-between items-center mb-4">
                             <h4 className="font-bold text-white flex items-center gap-2"><Send className="w-4 h-4 text-purple-400"/> 随堂靶向测验推送联动</h4>
                             <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20 rounded">备课库自动提取</span>
                          </div>
                          
                          <div className="bg-black/40 border border-white/5 p-4 rounded-xl mb-4">
                             <div className="text-white text-sm font-medium mb-2">平移靶向随堂题 01：</div>
                             <div className="text-slate-400 text-xs leading-relaxed">
                               若抛物线 y=x² 向左平移2个单位，再向下平移1个单位，得到的抛物线解析式是？
                             </div>
                          </div>

                          <div className="mt-auto space-y-4">
                             {/* Simulation of stats after pushing */}
                             <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl">
                                <div className="text-xs text-slate-400 mb-2">学生终端智能批改统计 (已回收 40/40)</div>
                                <div className="grid grid-cols-4 gap-1 text-center text-xs font-mono mb-2">
                                   <div className="bg-green-500/20 text-green-400 py-1.5 border border-green-500/20 rounded">A 78%</div>
                                   <div className="bg-white/5 text-slate-500 py-1.5 rounded">B 5%</div>
                                   <div className="bg-red-500/20 text-red-400 py-1.5 border border-red-500/20 rounded relative"><div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>C 15%</div>
                                   <div className="bg-white/5 text-slate-500 py-1.5 rounded">D 2%</div>
                                </div>
                                <p className="text-[10px] text-red-400 flex items-start gap-1">
                                  <AlertTriangle className="w-3 h-3 shrink-0 mt-0.5" />
                                  15% 选 C 的同学颠倒了左右平移的符号规则（左加右减），已自动标记至精准学情库。
                                </p>
                             </div>

                             <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-colors border border-white/10 flex items-center justify-center gap-2">
                                继续推题强化突破
                             </button>
                          </div>
                       </div>
                       
                       <button onClick={() => setClassState('evaluation')} className="w-full py-3.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold rounded-2xl transition-colors border border-red-500/20">
                          下课并生成学情画像评价
                       </button>
                    </div>
                 </div>
              )}

              {/* STEP 3: Evaluation Phase */}
              {classState === 'evaluation' && (
                 <div className="space-y-6 animate-fade-in max-w-5xl mx-auto w-full pt-4">
                    <div className="flex items-end justify-between mb-2">
                       <div>
                         <h2 className="text-3xl font-black text-white mb-2">全过程学情精准画像报告</h2>
                         <p className="text-slate-400">系统已自动汇总本节课的所有感知数据，为您描绘全班与个体的个性化学情画像。</p>
                       </div>
                       <button onClick={() => setClassState('waiting')} className="text-sm text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10">返回首页备课</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       
                       {/* Overall Metric */}
                       <div className="bg-gradient-to-br from-green-900/20 to-[#030712] border border-green-500/20 rounded-3xl p-6">
                          <div className="flex items-center gap-3 mb-4 text-green-400 font-bold">
                             <CheckCircle2 className="w-5 h-5"/> 班级综合达成评价
                          </div>
                          <div className="text-5xl font-black text-white mb-2 font-mono">A-</div>
                          <p className="text-sm text-green-400/80 mb-6">全班整体专注度处于本周高位，基础知识点达标率优秀。</p>
                          
                          <div className="space-y-3">
                             <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-1"><span>全课平均抬头时长占比</span> <span className="text-white font-mono">88%</span></div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-blue-400 w-[88%] shadow-[0_0_10px_#60a5fa]"></div></div>
                             </div>
                             <div>
                                <div className="flex justify-between text-xs text-slate-400 mb-1"><span>随堂作业智能全批正确率</span> <span className="text-white font-mono">82%</span></div>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-green-400 w-[82%] shadow-[0_0_10px_#4ade80]"></div></div>
                             </div>
                          </div>
                       </div>

                       {/* Abnormal Students Portrait */}
                       <div className="col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-6 relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-5"><Users className="w-32 h-32 text-purple-500"/></div>
                          <h4 className="font-bold text-white mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-purple-400"/> 薄弱学情精准画像名单 (需重点关注)</h4>
                          <p className="text-xs text-slate-400 mb-4">通过 AI 伴学微表情反馈与随堂错题双向交叉比对，筛选出未完全达标学生：</p>
                          
                          <div className="grid grid-cols-2 gap-3 mb-6">
                             <div className="bg-black/40 border border-red-500/20 rounded-xl p-3 flex gap-3 hover:border-red-500/40 transition-colors">
                                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center font-bold text-red-400">李四</div>
                                <div className="flex-1">
                                   <div className="text-sm text-white font-medium mb-1">连续错选平移变式题</div>
                                   <div className="text-[10px] text-slate-500 flex items-center gap-1"><Video className="w-3 h-3"/> 课堂后半段专注度骤降至 40%</div>
                                </div>
                             </div>
                             <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-3 flex gap-3 hover:border-yellow-500/40 transition-colors">
                                <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center font-bold text-yellow-400">王五</div>
                                <div className="flex-1">
                                   <div className="text-sm text-white font-medium mb-1">开口方向概念严重混淆</div>
                                   <div className="text-[10px] text-slate-500 flex items-center gap-1"><MessageCircle className="w-3 h-3"/> AI伴学端触发：提问了3次相同疑问</div>
                                </div>
                             </div>
                             <div className="bg-black/40 border border-red-500/20 rounded-xl p-3 flex gap-3 hover:border-red-500/40 transition-colors">
                                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center font-bold text-red-400">赵六</div>
                                <div className="flex-1">
                                   <div className="text-sm text-white font-medium mb-1">完全错选平移变式题01</div>
                                   <div className="text-[10px] text-slate-500 flex items-center gap-1"><Activity className="w-3 h-3"/> 测验响应时长超过班级平均值2倍</div>
                                </div>
                             </div>
                          </div>
                          
                          <div className="p-5 bg-gradient-to-r from-purple-900/40 to-transparent border border-purple-500/20 rounded-2xl flex items-center justify-between">
                             <div>
                                <div className="text-purple-400 font-bold mb-1 flex items-center gap-2"><Sparkles className="w-4 h-4"/> 智能学情研判与分层评价</div>
                                <div className="text-xs text-slate-300 max-w-sm leading-relaxed">系统已自动生成个性化评价表。为这 3 名同学降级匹配了【基础巩固 A 套作业】，其余同学自动派发【综合提升 B 套作业】。</div>
                             </div>
                             <button className="shrink-0 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-colors flex items-center gap-2">
                                <Layers className="w-5 h-5"/> 一键智能派发分层作业
                             </button>
                          </div>
                       </div>

                    </div>
                 </div>
              )}
            </div>
          )}

          {/* TAB 3: RESEARCH */}
          {activeTab === 'research' && (
            <div className="space-y-6 animate-fade-in h-[calc(100vh-10rem)] flex flex-col pb-10">
              
              {/* STEP 1: Dashboard (全域教研广场) */}
              {researchStep === 'dashboard' && (
                <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8 bg-gradient-to-r from-blue-900/40 to-emerald-900/20 p-8 rounded-3xl border border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30"><Network className="w-6 h-6 text-blue-400"/></div>
                        <h3 className="text-3xl font-black text-white">跨校教研共同体广场</h3>
                      </div>
                      <p className="text-slate-400 text-sm mt-2 max-w-xl leading-relaxed">打破地域与学段阻隔，依托 AI 智能教学分析引擎，实现名师课例的全域流转与沉浸式协同攻关。</p>
                    </div>
                    <div className="flex gap-6">
                       <div className="text-center">
                         <div className="text-3xl font-black text-blue-400 mb-1">45</div>
                         <div className="text-xs text-slate-500">已连接学校</div>
                       </div>
                       <div className="text-center">
                         <div className="text-3xl font-black text-emerald-400 mb-1">120+</div>
                         <div className="text-xs text-slate-500">活跃名师池</div>
                       </div>
                       <div className="text-center">
                         <div className="text-3xl font-black text-purple-400 mb-1">856</div>
                         <div className="text-xs text-slate-500">沉淀精品课例</div>
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 flex-1">
                    {/* Active Sessions */}
                    <div className="col-span-2 flex flex-col gap-4">
                       <h4 className="font-bold text-white flex items-center gap-2"><Webcam className="w-5 h-5 text-blue-400"/> 正在进行中的全域教研</h4>
                       
                       <div className="flex-1 bg-[#0c1222] border border-blue-500/20 rounded-3xl p-6 relative overflow-hidden group hover:border-blue-400/50 transition-colors flex flex-col justify-between shadow-2xl">
                          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px]"></div>
                          
                          <div>
                            <div className="flex justify-between items-start mb-6">
                              <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                                同课异构对比教研
                              </div>
                              <div className="flex -space-x-3">
                                {[1,2,3,4,5].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0c1222] bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white z-10">U{i}</div>)}
                                <div className="w-8 h-8 rounded-full border-2 border-[#0c1222] bg-blue-900 flex items-center justify-center text-[10px] font-bold text-blue-300 z-10">+324</div>
                              </div>
                            </div>
                            
                            <h5 className="text-2xl font-bold text-white mb-3">《二次函数的图像与性质》跨校对比</h5>
                            <div className="flex gap-6 text-sm text-slate-400 mb-6">
                              <span className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 联盟实验中学 vs 市第一初级中学</span>
                              <span className="flex items-center gap-2"><Users className="w-4 h-4"/> 初三数学大教研组</span>
                            </div>
                          </div>

                          <button onClick={() => setResearchStep('observation')} className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex justify-center items-center gap-2">
                             <GitMerge className="w-5 h-5"/> 进入沉浸式双屏对比实况
                          </button>
                       </div>

                       <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
                             <div className="text-xs text-emerald-400 bg-emerald-500/10 inline-block px-2 py-1 rounded mb-3 border border-emerald-500/20">线上专题研讨</div>
                             <h6 className="text-white font-bold mb-2">PBL 跨学科项目：从物理抛物线到数学函数</h6>
                             <p className="text-xs text-slate-500">主理：张教授工作室 | 参与：45人</p>
                          </div>
                          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer">
                             <div className="text-xs text-purple-400 bg-purple-500/10 inline-block px-2 py-1 rounded mb-3 border border-purple-500/20">远程听评课</div>
                             <h6 className="text-white font-bold mb-2">AI 教学辅助在英语大班授课中的应用实证</h6>
                             <p className="text-xs text-slate-500">主理：外国语附中 | 参与：112人</p>
                          </div>
                       </div>
                    </div>

                    {/* Resources & Rankings */}
                    <div className="col-span-1 flex flex-col gap-4">
                       <h4 className="font-bold text-white flex items-center gap-2"><Database className="w-5 h-5 text-emerald-400"/> 最新全域精品课例</h4>
                       <div className="flex-1 bg-white/[0.02] border border-white/10 rounded-3xl p-5">
                          <div className="space-y-4">
                             {[
                               { title: '《沁园春·雪》情境朗诵课', tag: '语文', score: '98.5' },
                               { title: '细胞分裂的 VR 微观探秘', tag: '生物', score: '97.2' },
                               { title: '基于大语言模型的英文写作批改', tag: '英语', score: '96.8' },
                               { title: '牛顿第一定律：太空舱失重实验', tag: '物理', score: '95.5' },
                             ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-white/5">
                                   <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center font-bold text-slate-400">{i+1}</div>
                                   <div className="flex-1">
                                      <div className="text-sm font-bold text-white mb-1 line-clamp-1">{item.title}</div>
                                      <div className="text-xs text-slate-500">{item.tag}学科精品流转</div>
                                   </div>
                                   <div className="text-emerald-400 font-mono text-sm bg-emerald-500/10 px-2 py-1 rounded">AI: {item.score}</div>
                                </div>
                             ))}
                          </div>
                          <button className="w-full mt-6 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 rounded-lg text-sm font-medium transition-colors">
                            浏览教研资料库总台
                          </button>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Observation (双屏对比实况) */}
              {researchStep === 'observation' && (
                <div className="flex-1 flex flex-col gap-4 h-full animate-slide-in-up max-w-[1600px] mx-auto w-full">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between bg-black/40 border border-white/10 rounded-2xl p-4 shrink-0">
                     <div className="flex items-center gap-4">
                        <div className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span> Live 听评课实况中
                        </div>
                        <h3 className="text-xl font-bold text-white">《二次函数的图像与性质》同课异构</h3>
                     </div>
                     <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-2"><Users className="w-4 h-4"/> 324 位教研员同时在线</span>
                        <button onClick={() => setResearchStep('achievement')} className="px-5 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold rounded-lg shadow-lg transition-all flex items-center gap-2">
                           结束听课并生成AI双盲报告
                        </button>
                     </div>
                  </div>

                  {/* Dual Screen & Chat */}
                  <div className="flex gap-4 flex-1 overflow-hidden">
                     {/* Left: Dual Video Feeds */}
                     <div className="flex-[3] flex flex-col gap-4">
                        <div className="flex gap-4 flex-1">
                           {/* Teacher A */}
                           <div className="flex-1 bg-[#1a1f2c] border border-blue-500/30 rounded-2xl relative overflow-hidden flex flex-col shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 z-10 flex flex-col">
                                 <span className="text-white font-bold text-sm">授课方 A：联盟实验中学（本校）</span>
                                 <span className="text-blue-300 text-xs">侧重：高频师生互动与启发式提问</span>
                              </div>
                              <div className="flex-1 bg-black/40 flex items-center justify-center">
                                 <Video className="w-20 h-20 text-slate-700/50" />
                                 {/* Mock Video Stream Area */}
                              </div>
                              {/* AI Realtime Stats Overlay */}
                              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 z-10 flex justify-between items-center">
                                 <div className="text-xs text-slate-300">当前教法：<span className="text-blue-400 font-bold">启发式问答</span> (已持续 4m 12s)</div>
                                 <div className="flex gap-3 text-xs">
                                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">T-S 互动率: 68%</span>
                                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">学生抬头率: 92%</span>
                                 </div>
                              </div>
                           </div>
                           
                           {/* Teacher B */}
                           <div className="flex-1 bg-[#1a1f2c] border border-emerald-500/30 rounded-2xl relative overflow-hidden flex flex-col shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 z-10 flex flex-col">
                                 <span className="text-white font-bold text-sm">授课方 B：市第一初级中学（名校）</span>
                                 <span className="text-emerald-300 text-xs">侧重：AI 动态几何画板深度演示</span>
                              </div>
                              <div className="flex-1 bg-black/40 flex items-center justify-center">
                                 <Video className="w-20 h-20 text-slate-700/50" />
                              </div>
                              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 z-10 flex justify-between items-center">
                                 <div className="text-xs text-slate-300">当前教法：<span className="text-emerald-400 font-bold">AI 工具演示</span> (已持续 8m 05s)</div>
                                 <div className="flex gap-3 text-xs">
                                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">T-S 互动率: 35%</span>
                                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">专注度曲线: 极高</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* AI Timeline Panel */}
                        <div className="h-32 bg-[#0c1222] border border-white/10 rounded-2xl p-4 shrink-0 flex flex-col justify-center relative overflow-hidden">
                           <h5 className="text-xs font-bold text-slate-400 mb-4 flex items-center gap-2"><Layers className="w-4 h-4"/> AI 双盲教学环节流比对切片</h5>
                           <div className="relative h-12 w-full">
                              {/* Teacher A Timeline */}
                              <div className="absolute top-0 w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                                 <div className="h-full w-[20%] bg-slate-600" title="情境引入"></div>
                                 <div className="h-full w-[45%] bg-blue-500" title="启发式问答"></div>
                                 <div className="h-full w-[15%] bg-yellow-500" title="随堂练习"></div>
                                 <div className="h-full w-[20%] bg-transparent relative"><div className="absolute left-0 top-0 h-full w-2 bg-white/50 animate-pulse"></div></div>
                              </div>
                              {/* Teacher B Timeline */}
                              <div className="absolute bottom-0 w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                                 <div className="h-full w-[10%] bg-slate-600" title="复习旧知"></div>
                                 <div className="h-full w-[65%] bg-emerald-500" title="AI 工具演示与探究"></div>
                                 <div className="h-full w-[5%] bg-purple-500" title="小组讨论"></div>
                                 <div className="h-full w-[20%] bg-transparent relative"><div className="absolute left-0 top-0 h-full w-2 bg-white/50 animate-pulse"></div></div>
                              </div>
                           </div>
                           <div className="absolute right-4 bottom-4 text-[10px] text-slate-500 flex flex-col gap-1">
                              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> A方：高频互动驱动</span>
                              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> B方：技术深度赋能</span>
                           </div>
                        </div>
                     </div>

                     {/* Right: Regional Chat & Review */}
                     <div className="flex-[1] bg-[#0c1222] border border-white/10 rounded-2xl flex flex-col overflow-hidden">
                        <div className="p-4 border-b border-white/5 bg-black/20 flex items-center gap-2 shrink-0">
                           <MessageSquare className="w-5 h-5 text-blue-400"/>
                           <h4 className="font-bold text-white text-sm">全域教研弹幕与点评流</h4>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4">
                           <div className="bg-white/5 p-3 rounded-xl rounded-tl-none">
                              <div className="text-xs text-slate-400 mb-1 flex justify-between"><span>教研员 - 王老师 (高新区)</span> <span>15:22</span></div>
                              <p className="text-sm text-slate-200">A 方老师这里的追问设计得很巧妙，完美抓住了学生的认知冲突点。</p>
                           </div>
                           <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl rounded-tr-none ml-6">
                              <div className="text-xs text-emerald-400 mb-1 flex justify-between"><span>骨干教师 - 李雷 (市一中)</span> <span>15:24</span></div>
                              <p className="text-sm text-emerald-100">B 方使用 AI 画板动态展示平移过程，这比我们以前在黑板上手画直观太多了，强烈建议全区推广这个课件！</p>
                           </div>
                           <div className="bg-white/5 p-3 rounded-xl rounded-tl-none">
                              <div className="text-xs text-slate-400 mb-1 flex justify-between"><span>青年教师 - 张敏</span> <span>15:25</span></div>
                              <p className="text-sm text-slate-200">确实，两种教法各有千秋，A方的课堂氛围更好，B方的技术效率更高。</p>
                           </div>
                        </div>
                        <div className="p-4 border-t border-white/5 bg-black/20 shrink-0">
                           <div className="relative">
                              <input type="text" placeholder="输入您的听评课意见..." className="w-full bg-white/5 border border-white/10 rounded-lg pl-3 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50" />
                              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-blue-400 hover:bg-blue-500/20 rounded-md transition-colors"><Send className="w-4 h-4"/></button>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Achievement (沉淀与流转) */}
              {researchStep === 'achievement' && (
                 <div className="space-y-6 animate-fade-in max-w-5xl mx-auto w-full pt-4">
                    <div className="flex items-end justify-between mb-6">
                       <div>
                         <h2 className="text-3xl font-black text-white mb-2">同课异构 AI 对比诊断报告</h2>
                         <p className="text-slate-400">教研已结束。系统已自动为您提炼双方教法亮点，并抽取了 2 份高光教学短片段，供流转共享。</p>
                       </div>
                       <button onClick={() => setResearchStep('dashboard')} className="text-sm text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10">返回教研广场</button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                       {/* Left: AI Diagnosis */}
                       <div className="bg-gradient-to-b from-[#0c1222] to-[#1a1f2c] border border-blue-500/20 rounded-3xl p-6 shadow-xl flex flex-col relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-6"><Brain className="w-20 h-20 text-blue-500/10"/></div>
                          <h4 className="font-bold text-blue-400 mb-6 flex items-center gap-2 text-lg"><Brain className="w-5 h-5"/> AI 双盲切片分析总结</h4>
                          
                          <div className="space-y-4 flex-1">
                             <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <h5 className="text-white font-bold mb-2 flex justify-between"><span>A 方：联盟实验中学</span> <span className="text-blue-400 text-sm">互动派</span></h5>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                   **亮点**：通过连续 12 次高频师生问答（T-S ratio 68%），极大地调动了班级沉浸感。
                                   **建议**：在复杂函数图像变换时，黑板板书稍显吃力，可适度借力数字工具。
                                </p>
                             </div>
                             <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <h5 className="text-white font-bold mb-2 flex justify-between"><span>B 方：市第一初级中学</span> <span className="text-emerald-400 text-sm">技术派</span></h5>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                   **亮点**：极其熟练地运用 AI 几何引擎，将抽象的函数平移具象化，学生认知效率极高。
                                   **建议**：中后段纯技术演示过长，导致个别后排学生专注度出现微小波动。
                                </p>
                             </div>
                          </div>
                       </div>

                       {/* Right: Highlighting Clips & Sharing */}
                       <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 flex flex-col relative">
                          <h4 className="font-bold text-white mb-6 flex items-center gap-2"><FolderDown className="w-5 h-5 text-emerald-400"/> AI 自动捕捉高光课例切片</h4>
                          
                          <div className="space-y-4 flex-1">
                             {/* Clip 1 */}
                             <div className="flex gap-4 p-3 bg-black/40 border border-white/5 rounded-xl items-center">
                                <div className="w-24 h-16 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center relative">
                                   <PlayCircle className="w-6 h-6 text-white/80"/>
                                   <div className="absolute bottom-1 right-1 text-[10px] bg-black/80 px-1 rounded text-white">03:15</div>
                                </div>
                                <div className="flex-1">
                                   <div className="text-sm font-bold text-white mb-1">A方 - 绝妙的认知冲突导入</div>
                                   <div className="text-xs text-slate-400">系统判定：情绪饱满，提问精准</div>
                                </div>
                             </div>

                             {/* Clip 2 */}
                             <div className="flex gap-4 p-3 bg-black/40 border border-emerald-500/20 rounded-xl items-center">
                                <div className="w-24 h-16 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center relative">
                                   <PlayCircle className="w-6 h-6 text-white/80"/>
                                   <div className="absolute bottom-1 right-1 text-[10px] bg-black/80 px-1 rounded text-white">08:42</div>
                                </div>
                                <div className="flex-1">
                                   <div className="text-sm font-bold text-white mb-1">B方 - AI 动态几何轨迹演示</div>
                                   <div className="text-xs text-emerald-400">系统判定：极高的视觉解释力，推荐入库</div>
                                </div>
                             </div>
                          </div>

                          <div className="mt-6 pt-6 border-t border-white/5 flex justify-end">
                             <button onClick={() => setResearchStep('dashboard')} className="w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-colors flex justify-center items-center gap-2">
                                <Share2 className="w-5 h-5"/> 合成双路对比短片，入库区级精品课例全域共享
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
            </div>
          )}

          {/* TAB 4: IDEOLOGICAL (思政) */}
          {activeTab === 'ideological' && (
            <div className="space-y-6 animate-fade-in h-[calc(100vh-10rem)] flex flex-col pb-10">
              
              {/* STEP 1: Dashboard (德育全景与增值大盘) */}
              {ideoStep === 'dashboard' && (
                <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full">
                  <div className="text-center max-w-2xl mx-auto mb-8">
                    <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/10 flex items-center justify-center mb-4 border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                      <Flag className="h-8 w-8 text-red-400" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-3">智能大思政与增值评价</h3>
                    <p className="text-slate-400 text-sm">摒弃唯分数论，融合情境模拟、价值辨析与行为实践，为每个学生描绘动态发展的德育成长曲线。</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 flex-1 min-h-[400px]">
                    {/* Value-added Evaluation Radar */}
                    <div className="col-span-1 bg-[#0c1222] border border-red-500/20 rounded-3xl p-6 relative overflow-hidden shadow-2xl flex flex-col">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[50px]"></div>
                      <h4 className="font-bold text-white mb-6 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-red-400"/> 本周班级德育增值大盘</h4>
                      
                      <div className="flex-1 flex flex-col justify-center gap-6">
                        <div className="p-4 bg-gradient-to-r from-red-500/10 to-transparent border-l-4 border-l-red-500 rounded-r-xl">
                          <div className="text-sm text-slate-300 mb-1">社会责任感提升</div>
                          <div className="text-2xl font-black text-red-400 flex items-baseline gap-2">+12% <span className="text-xs font-normal text-slate-500">环比上周</span></div>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-l-orange-500 rounded-r-xl">
                          <div className="text-sm text-slate-300 mb-1">道德判断与辨析力</div>
                          <div className="text-2xl font-black text-orange-400 flex items-baseline gap-2">+8.5% <span className="text-xs font-normal text-slate-500">环比上周</span></div>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-transparent border-l-4 border-l-yellow-500 rounded-r-xl">
                          <div className="text-sm text-slate-300 mb-1">行为实践达成度</div>
                          <div className="text-2xl font-black text-yellow-400 flex items-baseline gap-2">92% <span className="text-xs font-normal text-slate-500">全班均值</span></div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Engines */}
                    <div className="col-span-2 flex flex-col gap-6">
                      <h4 className="font-bold text-white flex items-center gap-2"><Cpu className="w-5 h-5 text-orange-400"/> 智能化德育互动引擎</h4>
                      
                      <div className="grid grid-cols-2 gap-4 flex-1">
                        {/* Option 1: AI Value Dialectics (The one we will click) */}
                        <div className="bg-gradient-to-br from-red-900/40 to-[#030712] border border-red-500/30 rounded-3xl p-6 flex flex-col group hover:border-red-400/50 transition-colors">
                          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4 border border-red-500/30 group-hover:scale-110 transition-transform">
                            <Scale className="w-6 h-6 text-red-400" />
                          </div>
                          <h5 className="text-xl font-bold text-white mb-2">AI 价值辨析局</h5>
                          <p className="text-xs text-red-200/60 mb-6 leading-relaxed flex-1">
                            本期议题：《人工智能时代的个人隐私让渡与伦理边界》
                          </p>
                          <button onClick={() => setIdeoStep('interactive')} className="w-full py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all flex items-center justify-center gap-2">
                            <PlayCircle className="w-5 h-5"/> 一键发起辨析互动
                          </button>
                        </div>

                        {/* Option 2: Scenario Simulation */}
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 flex flex-col hover:border-white/20 transition-colors">
                          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4">
                            <Video className="w-6 h-6 text-orange-400" />
                          </div>
                          <h5 className="text-xl font-bold text-white mb-2">VR 情境模拟舱</h5>
                          <p className="text-xs text-slate-400 mb-6 flex-1 leading-relaxed">
                            《百年风华：重走长征路》沉浸式党史体验，已分发至学生终端。
                          </p>
                          <button className="w-full py-3 bg-white/5 text-slate-300 rounded-xl font-medium border border-white/10 cursor-not-allowed">
                            昨日已完成
                          </button>
                        </div>
                        
                        {/* Option 3: Behavior Practice */}
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 col-span-2 flex items-center gap-6">
                           <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-500/20">
                             <Heart className="w-6 h-6 text-yellow-400" />
                           </div>
                           <div className="flex-1">
                             <h5 className="text-base font-bold text-white mb-1">班级日常行为实践打卡</h5>
                             <p className="text-xs text-slate-400">系统已自动收集本周社区环保清扫、班会服务等 42 条记录。</p>
                           </div>
                           <button className="px-6 py-2.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-lg text-sm font-bold hover:bg-yellow-500/20 transition-colors">
                             查看分析
                           </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Interactive Session (智能化互动现场) */}
              {ideoStep === 'interactive' && (
                <div className="flex-1 flex gap-6 h-full animate-slide-in-up min-h-[600px] max-w-[1400px] mx-auto w-full">
                  
                  {/* Left: Debate Screen */}
                  <div className="flex-[2] bg-gradient-to-b from-[#1a0f14] to-[#0c1222] border border-red-500/20 rounded-3xl flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.05)]">
                    <div className="p-8 border-b border-white/5 bg-black/20 flex flex-col items-center justify-center text-center">
                       <div className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30 mb-4 animate-pulse">
                          现场实况汇聚中
                       </div>
                       <h2 className="text-3xl font-black text-white mb-4 tracking-wider leading-snug">
                          《人工智能时代的个人隐私让渡与伦理边界》
                       </h2>
                       <div className="flex gap-4">
                         <div className="px-4 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-lg text-sm font-bold">正方: 适度让渡推动科技向善 (18人)</div>
                         <div className="px-4 py-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-lg text-sm font-bold">反方: 坚守隐私底线不可侵犯 (22人)</div>
                       </div>
                    </div>

                    <div className="flex-1 p-6 overflow-hidden relative">
                       <h4 className="text-sm font-bold text-slate-400 mb-4 flex items-center gap-2"><MessageCircle className="w-4 h-4"/> 实时学生观点流</h4>
                       <div className="space-y-4">
                          <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl w-[80%]">
                             <div className="flex items-center justify-between mb-2">
                               <span className="text-green-400 text-xs font-bold bg-green-500/10 px-2 py-0.5 rounded">正方代表 - 张明</span>
                               <span className="text-slate-500 text-xs">10:42:15</span>
                             </div>
                             <p className="text-slate-300 text-sm">如果没有海量的数据喂养，医疗 AI 就无法突破。为了全人类的健康，我愿意让出部分非核心脱敏数据。</p>
                          </div>
                          
                          <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl w-[80%] ml-auto">
                             <div className="flex items-center justify-between mb-2">
                               <span className="text-slate-500 text-xs">10:43:02</span>
                               <span className="text-orange-400 text-xs font-bold bg-orange-500/10 px-2 py-0.5 rounded">反方代表 - 李华</span>
                             </div>
                             <p className="text-slate-300 text-sm text-right">所谓脱敏常常是被破解的伪命题。一旦放开这个口子，资本就会无底线地窥探我们的生活。</p>
                          </div>

                          {/* AI Warning Injection */}
                          <div className="p-4 bg-red-900/40 border border-red-500/50 rounded-2xl w-[80%] ml-auto shadow-[0_0_15px_rgba(239,68,68,0.2)] animate-pulse">
                             <div className="flex items-center justify-between mb-2">
                               <span className="text-slate-400 text-xs">10:44:11</span>
                               <span className="text-orange-400 text-xs font-bold bg-orange-500/10 px-2 py-0.5 rounded">反方 - 赵六</span>
                             </div>
                             <p className="text-red-200 text-sm text-right">所有的 AI 公司都是恶毒的骗子，科技就不应该发展，就应该立刻封杀所有人工智能！</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Right: AI Analysis & Intervention */}
                  <div className="flex-[1] flex flex-col gap-6">
                    {/* Deviation Warning Panel */}
                    <div className="bg-[#1a0f14] border border-red-500/40 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4"><ShieldAlert className="w-16 h-16 text-red-500/20"/></div>
                       <h4 className="font-bold text-red-400 mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> AI 价值观偏差预警</h4>
                       <div className="bg-black/50 p-3 rounded-xl border border-red-500/20 mb-4">
                          <div className="text-sm text-white mb-2 font-medium">触发对象：赵六</div>
                          <p className="text-xs text-red-300/80 leading-relaxed">
                            系统检测到该发言充斥“绝对化、反智化”的极端情绪，缺乏辩证思维，存在一定的价值观偏激倾向。
                          </p>
                       </div>
                       <div className="space-y-3">
                          <button className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-sm font-bold shadow-lg transition-colors flex items-center justify-center gap-2">
                            <Brain className="w-4 h-4"/> 派遣 AI 伴学柔性私聊引导
                          </button>
                          <button className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 rounded-lg text-sm font-medium transition-colors">
                            教师亲自介入处理
                          </button>
                       </div>
                    </div>

                    {/* Class Thought Cloud */}
                    <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-3xl p-5 flex flex-col">
                       <h4 className="font-bold text-white mb-4">班级共识凝聚图谱</h4>
                       <div className="flex-1 border border-white/5 bg-black/40 rounded-xl flex items-center justify-center relative overflow-hidden p-4">
                         {/* Fake word cloud rendering */}
                         <div className="absolute text-green-400 text-2xl font-bold top-[20%] left-[10%] opacity-80">科技向善</div>
                         <div className="absolute text-orange-400 text-xl font-bold bottom-[30%] right-[15%] opacity-90">隐私底线</div>
                         <div className="absolute text-purple-400 text-3xl font-black top-[40%] left-[30%] shadow-[0_0_10px_rgba(168,85,247,0.5)]">法律监管规范</div>
                         <div className="absolute text-blue-400 text-lg font-bold bottom-[15%] left-[20%] opacity-70">数据脱敏</div>
                         <div className="absolute text-pink-400 text-lg font-bold top-[15%] right-[20%] opacity-60">知情同意权</div>
                       </div>
                    </div>

                    <button onClick={() => setIdeoStep('evaluation')} className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold rounded-2xl shadow-xl transition-all flex justify-center items-center gap-2">
                       结束辨析并生成过程评价
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Evaluation & Archive (生成评价画像与闭环) */}
              {ideoStep === 'evaluation' && (
                 <div className="space-y-6 animate-fade-in max-w-5xl mx-auto w-full pt-4">
                    <div className="flex items-end justify-between mb-4">
                       <div>
                         <h2 className="text-3xl font-black text-white mb-2">价值观辨析评价报告</h2>
                         <p className="text-slate-400">本次德育互动已完成。系统已基于过程性数据，为您生成了本场辨析的价值总结与增值学分派发清单。</p>
                       </div>
                       <button onClick={() => setIdeoStep('dashboard')} className="text-sm text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10">返回德育大盘</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       
                       {/* AI Summary */}
                       <div className="bg-gradient-to-b from-[#1a0f14] to-[#0c1222] border border-red-500/20 rounded-3xl p-6 shadow-xl flex flex-col">
                          <h4 className="font-bold text-red-400 mb-6 flex items-center gap-2 text-lg"><Brain className="w-5 h-5"/> AI 全景价值提炼</h4>
                          <div className="flex-1 space-y-4">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                               <div className="text-white font-bold mb-2">主流共识达成度：高</div>
                               <p className="text-xs text-slate-300 leading-relaxed">全班 85% 的同学在激烈辩论后达成共识：技术发展与隐私保护并非零和博弈，关键在于完善的**法律监管规范**与**技术脱敏手段**。</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                               <div className="text-orange-400 font-bold mb-2">辩证思维成长</div>
                               <p className="text-xs text-slate-300 leading-relaxed">对比学期初，全班在此次议题中展现出更强的逻辑自洽性，非黑即白的极端言论大幅度减少。</p>
                            </div>
                          </div>
                       </div>

                       {/* Points Distribution */}
                       <div className="col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-6 relative overflow-hidden flex flex-col">
                          <div className="absolute -top-10 -right-10"><Award className="w-48 h-48 text-yellow-500/5"/></div>
                          <h4 className="font-bold text-white mb-6 flex items-center gap-2"><Award className="w-5 h-5 text-yellow-400"/> 个性化德育增值学分派发清单</h4>
                          
                          <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar max-h-[300px]">
                             <div className="bg-black/40 border border-green-500/20 rounded-2xl p-4 flex gap-4 items-center">
                                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center font-bold text-green-400 text-lg">张明</div>
                                <div className="flex-1">
                                   <div className="text-sm text-white font-bold mb-1 flex justify-between">
                                     <span>论证极具公共视野</span>
                                     <span className="text-green-400 font-mono">+3 学分</span>
                                   </div>
                                   <div className="text-xs text-slate-400">AI 评语：能够跳出个人利益，从人类医疗发展的宏观角度看待数据共享，展现了强烈的社会责任感。</div>
                                </div>
                             </div>
                             
                             <div className="bg-black/40 border border-orange-500/20 rounded-2xl p-4 flex gap-4 items-center">
                                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center font-bold text-orange-400 text-lg">李华</div>
                                <div className="flex-1">
                                   <div className="text-sm text-white font-bold mb-1 flex justify-between">
                                     <span>法治边界意识清晰</span>
                                     <span className="text-orange-400 font-mono">+2 学分</span>
                                   </div>
                                   <div className="text-xs text-slate-400">AI 评语：敏锐指出资本无序扩张的潜在风险，体现了良好的底线思维和法治观念。</div>
                                </div>
                             </div>

                             <div className="bg-black/40 border border-red-500/20 rounded-2xl p-4 flex gap-4 items-center opacity-80">
                                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center font-bold text-red-400 text-lg">赵六</div>
                                <div className="flex-1">
                                   <div className="text-sm text-white font-bold mb-1 flex justify-between">
                                     <span className="text-red-300">情绪宣泄预警处置</span>
                                     <span className="text-slate-500 font-mono">0 学分</span>
                                   </div>
                                   <div className="text-xs text-slate-400">处置结果：已通过 AI 伴学柔性引导面板完成心理安抚，情绪已平复，待后续跟踪关注。</div>
                                </div>
                             </div>
                          </div>
                          
                          <div className="mt-6 pt-6 border-t border-white/5 flex justify-end">
                             <button onClick={() => setIdeoStep('dashboard')} className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-colors flex items-center gap-2">
                                <FileText className="w-5 h-5"/> 一键派发增值学分并归档入袋
                             </button>
                          </div>
                       </div>

                    </div>
                 </div>
              )}
            </div>
          )}

          {/* TAB 5: PERSONALIZED (个性化) */}
          {activeTab === 'personalized' && (
            <div className="space-y-6 animate-fade-in h-[calc(100vh-10rem)] flex flex-col pb-10 font-sans">
              
              {/* STEP 1: Dashboard (强基与竞赛双层架构) */}
              {personalizedStep === 'dashboard' && (
                <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full">
                  <div className="flex items-center justify-between mb-8 bg-gradient-to-r from-blue-900/40 to-amber-900/20 p-8 rounded-3xl border border-blue-500/20 shadow-[0_0_40px_rgba(30,58,138,0.15)]">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30"><Trophy className="w-6 h-6 text-amber-400"/></div>
                        <h3 className="text-3xl font-black text-white">强基计划与拔尖人才培养</h3>
                      </div>
                      <p className="text-slate-400 text-sm mt-2 max-w-2xl leading-relaxed">对接五大学科竞赛，依托 AI 伴学实现精准化、自适应辅导，为“两班三计划”提供专属升学通道支持。</p>
                    </div>
                  </div>

                  {/* Architecture Diagram */}
                  <div className="bg-[#0c1222] border border-blue-500/30 rounded-3xl p-8 mb-8 flex flex-col relative shadow-xl overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px]"></div>
                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
                     
                     <h4 className="text-center font-bold text-lg text-white mb-6 tracking-widest flex items-center justify-center gap-2">
                        <Milestone className="w-5 h-5 text-amber-400"/> 五大学科竞赛与强基转化架构
                     </h4>

                     {/* Top: Olympiads */}
                     <div className="flex justify-between gap-4 z-10">
                        {['数学竞赛', '物理竞赛', '化学竞赛', '生物竞赛', '信息学竞赛'].map((sub, i) => (
                           <div key={i} className="flex-1 bg-gradient-to-b from-blue-600 to-blue-800 rounded-xl p-4 text-center border border-blue-400/30 shadow-[0_5px_15px_rgba(30,58,138,0.4)]">
                              <div className="text-white font-bold mb-1">{sub}</div>
                              <div className="text-xs text-blue-200">苗子: {Math.floor(Math.random() * 20 + 5)} 人</div>
                           </div>
                        ))}
                     </div>

                     {/* Middle: Transfer */}
                     <div className="flex flex-col items-center my-6 z-10 relative">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                        <div className="bg-[#0c1222] px-6 py-2 border border-amber-500/30 rounded-full text-amber-400 text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.15)] z-10">
                           竞赛成果转化为培养资源 <ArrowDownToLine className="w-4 h-4"/>
                        </div>
                     </div>

                     {/* Bottom: Strong Base */}
                     <div className="flex justify-between gap-4 z-10">
                        {[
                          {n: '学科基础培养', icon: BookOpen}, 
                          {n: '科研能力训练', icon: Microscope}, 
                          {n: '学术导师指导', icon: Users}, 
                          {n: '升学通道支持', icon: GraduationCap}
                        ].map((item, i) => (
                           <div key={i} className="flex-1 bg-[#1e293b] rounded-xl p-4 text-center border border-slate-600 hover:border-amber-500/50 transition-colors group cursor-pointer">
                              <item.icon className="w-6 h-6 mx-auto text-slate-400 mb-2 group-hover:text-amber-400 transition-colors"/>
                              <div className="text-white font-medium text-sm">{item.n}</div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 flex-1">
                     {/* Dynamic Talent Pool */}
                     <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                           <h4 className="font-bold text-white flex items-center gap-2"><Target className="w-5 h-5 text-blue-400"/> “两班三计划”强基人才池</h4>
                           <span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded border border-amber-500/20 font-bold animate-pulse">待关注优生 2 名</span>
                        </div>

                        <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-2">
                           {/* Student 1 */}
                           <div onClick={() => setPersonalizedStep('learning_path')} className="bg-[#0f172a] border border-blue-500/30 rounded-2xl p-4 cursor-pointer hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all group">
                              <div className="flex items-center justify-between mb-2">
                                 <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-inner border border-white/20">王</div>
                                    <div>
                                       <h5 className="text-white font-bold group-hover:text-amber-400 transition-colors">王一博</h5>
                                       <div className="text-xs text-slate-400">高二 (1) 班 | 强基预备班</div>
                                    </div>
                                 </div>
                                 <div className="px-2 py-1 bg-amber-500/20 text-amber-300 text-[10px] font-bold rounded border border-amber-500/30">
                                    数学奥赛省一 / 强基拔尖
                                 </div>
                              </div>
                              <div className="flex justify-between items-center text-xs mt-3 pt-3 border-t border-white/5">
                                 <span className="text-slate-400">当前学案：<span className="text-blue-300 font-medium">大学微积分先修 - 泰勒展开</span></span>
                                 <span className="text-blue-400 group-hover:translate-x-1 transition-transform">进入自适应空间 &rarr;</span>
                              </div>
                           </div>
                           
                           {/* Student 2 */}
                           <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-4 cursor-pointer hover:border-blue-500/50 transition-all opacity-80">
                              <div className="flex items-center justify-between mb-2">
                                 <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold shadow-inner">陈</div>
                                    <div>
                                       <h5 className="text-white font-bold">陈思维</h5>
                                       <div className="text-xs text-slate-400">高一 (3) 班 | 拔尖创新班</div>
                                    </div>
                                 </div>
                                 <div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded border border-emerald-500/20">
                                    信奥普及组 / 强基培养
                                 </div>
                              </div>
                              <div className="flex justify-between items-center text-xs mt-3 pt-3 border-t border-white/5">
                                 <span className="text-slate-400">当前学案：<span className="text-slate-300 font-medium">数据结构与算法分析 - 图论基础</span></span>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* University Prep Courses */}
                     <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                           <h4 className="font-bold text-white flex items-center gap-2"><BookOpen className="w-5 h-5 text-blue-400"/> 校本选修与大学先修矩阵</h4>
                        </div>
                        <div className="space-y-6">
                           <div>
                              <div className="flex justify-between text-sm mb-2"><span className="text-white font-bold">《微积分基础》</span><span className="text-blue-400 font-mono">24 人参与</span></div>
                              <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[60%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" /></div>
                           </div>
                           <div>
                              <div className="flex justify-between text-sm mb-2"><span className="text-white font-bold">《普通物理（力学）》</span><span className="text-blue-400 font-mono">12 人参与</span></div>
                              <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 w-[35%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" /></div>
                           </div>
                           <div>
                              <div className="flex justify-between text-sm mb-2"><span className="text-white font-bold">《C++与高级算法竞赛》</span><span className="text-blue-400 font-mono">8 人参与</span></div>
                              <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[80%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Learning Path (AI自适应辅导) */}
              {personalizedStep === 'learning_path' && (
                <div className="flex-1 flex flex-col max-w-[1600px] mx-auto w-full gap-6 animate-slide-in-up">
                  {/* Top Bar - Transformation Bridge */}
                  <div className="flex items-center justify-between bg-gradient-to-r from-[#0c1222] to-[#1e293b] border border-blue-500/30 rounded-2xl p-4 shrink-0 shadow-lg relative overflow-hidden">
                     <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none"></div>
                     <div className="flex items-center gap-6 z-10">
                        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                           <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">王</div>
                           <div>
                              <div className="text-sm font-bold text-white">王一博</div>
                              <div className="text-[10px] text-blue-300">数学奥赛省一</div>
                           </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-500" />
                        <div className="flex flex-col">
                           <div className="text-[10px] text-amber-400 font-bold uppercase tracking-widest mb-0.5">AI 竞赛转化资源流</div>
                           <div className="text-sm font-bold text-white">正在学习: 《大学微积分先修 - 泰勒展开式及其应用》</div>
                        </div>
                     </div>
                     <button onClick={() => setPersonalizedStep('evaluation')} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2 z-10 border border-blue-400">
                        <CheckSquare className="w-4 h-4"/> 结束本周期自学并生成强基推演画像
                     </button>
                  </div>

                  <div className="flex gap-6 flex-1 overflow-hidden relative">
                     {/* Left: Challenge Workspace */}
                     <div className="flex-[3] bg-white text-slate-800 rounded-3xl p-8 flex flex-col relative overflow-y-auto custom-scrollbar shadow-2xl">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                           <h4 className="font-bold text-xl text-slate-800 flex items-center gap-2">
                              <Compass className="w-6 h-6 text-blue-600"/> 进阶挑战：泰勒展开式的综合应用
                           </h4>
                           <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full border border-red-200">难度系数: 4.8 / 5.0 (C9 强基水准)</span>
                        </div>

                        <div className="space-y-6 max-w-3xl">
                           <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm text-lg leading-relaxed font-serif">
                              <p className="mb-4"><strong>题目：</strong> 设函数 <span className="italic">f(x) = ln(1+x)</span>。</p>
                              <p className="mb-4">(1) 写出 <span className="italic">f(x)</span> 在 <span className="italic">x = 0</span> 处的带皮亚诺余项的 <span className="italic">n</span> 阶泰勒展开式。</p>
                              <p className="mb-2">(2) 利用上述展开式，证明当 <span className="italic">x &gt; 0</span> 时：</p>
                              <p className="italic text-center text-xl font-bold">x - x²/2 &lt; ln(1+x) &lt; x</p>
                           </div>

                           <div className="pl-4 border-l-4 border-blue-500">
                              <div className="text-sm text-slate-500 mb-2">学生实时推演过程 (手写板同步输入中...)</div>
                              <div className="bg-slate-100 p-4 rounded-xl font-mono text-slate-700 min-h-[150px] relative">
                                 <p className="mb-2">解(1)：</p>
                                 <p className="mb-2">f(x) = ln(1+x), f'(x) = 1/(1+x), f''(x) = -1/(1+x)^2 ...</p>
                                 <p className="mb-2">f(0) = 0, f'(0) = 1, f''(0) = -1 ...</p>
                                 <p className="mb-4">所以 ln(1+x) = x - x^2/2 + x^3/3 - ... + (-1)^(n-1) * x^n/n + o(x^n)</p>
                                 <p className="mb-2">解(2)：</p>
                                 <p className="text-red-500">已知展开式，但对于如何严格证明不等式卡住了。考虑使用拉格朗日余项？<span className="animate-pulse">|</span></p>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Right: AI Tutor & Mentor Override */}
                     <div className="flex-[2] flex flex-col gap-6">
                        {/* AI Tutor Adaptive Flow */}
                        <div className="flex-1 bg-[#0c1222] border border-blue-500/30 rounded-3xl p-6 flex flex-col relative shadow-xl">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none"></div>
                           <h4 className="font-bold text-blue-400 mb-6 flex items-center gap-2"><BrainCircuit className="w-5 h-5"/> AI 自适应伴学 (因材施教)</h4>
                           
                           <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar pr-2">
                              {/* AI Analysis */}
                              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                                 <div className="text-xs text-slate-400 mb-2 flex justify-between">
                                    <span>AI 诊断引擎</span>
                                    <span className="text-blue-400">停顿超 3 分钟</span>
                                 </div>
                                 <p className="text-sm text-white leading-relaxed">
                                    检测到学生在第(2)问的证明中遇到瓶颈。学生试图使用拉格朗日余项，但此题若利用导数的单调性构造辅助函数，会更加简便。
                                 </p>
                              </div>

                              {/* Adaptive Action */}
                              <div className="bg-blue-900/20 border border-blue-500/40 rounded-2xl p-4 relative overflow-hidden">
                                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                                 <div className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wide">自适应降级提示推送中...</div>
                                 <div className="bg-black/40 p-3 rounded-lg text-sm text-blue-100 font-serif border border-blue-500/20">
                                    "提示：不妨尝试构造辅助函数 g(x) = ln(1+x) - (x - x²/2)，并对其求导，观察其在 x &gt; 0 时的单调性。"
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Mentor Override */}
                        <div className="h-48 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-slate-600 rounded-3xl p-6 flex flex-col shadow-xl">
                           <h4 className="font-bold text-white mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-slate-400"/> 学术导师介入 (您)</h4>
                           <p className="text-xs text-slate-400 mb-4 leading-relaxed">AI 已根据学情下发提示。作为导师，您可随时下发科研能力训练任务或进阶微课。</p>
                           <div className="flex gap-3 mt-auto">
                              <button className="flex-1 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-xl transition-colors">
                                 推送《单调性与极值微课》
                              </button>
                              <button className="flex-1 py-2.5 bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 text-sm font-bold border border-amber-500/30 rounded-xl transition-colors">
                                 派发强基科研小课题
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Evaluation (强基升学与科研画像) */}
              {personalizedStep === 'evaluation' && (
                 <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full pt-4 font-sans animate-fade-in">
                    <div className="flex items-end justify-between mb-8">
                       <div>
                         <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-3">
                            <GraduationCap className="w-8 h-8 text-amber-400"/> 强基拔尖能力全息画像
                         </h2>
                         <p className="text-slate-400">基于阶段性自学习数据、导师评价与赛事成绩生成。为升学通道提供量化支撑。</p>
                       </div>
                       <button onClick={() => setPersonalizedStep('dashboard')} className="text-sm text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10">返回大盘</button>
                    </div>

                    <div className="grid grid-cols-2 gap-8 flex-1">
                       {/* Left: Four-Axis Evaluation */}
                       <div className="bg-[#0c1222] border border-blue-500/30 rounded-3xl p-8 flex flex-col shadow-[0_0_30px_rgba(30,58,138,0.2)]">
                          <h4 className="font-bold text-white mb-8 flex items-center gap-2 text-lg"><Radar className="w-6 h-6 text-blue-400"/> 四维强基评价指标 (王一博)</h4>
                          
                          <div className="space-y-8 flex-1">
                             {[
                               {name: '学科基础培养', score: 98, color: 'blue', desc: '微积分先修极优'},
                               {name: '科研能力训练', score: 85, color: 'emerald', desc: '具备独立课题建模能力'},
                               {name: '学术导师指导', score: 92, color: 'purple', desc: '导师评定等级：A+'},
                               {name: '升学通道支持', score: 90, color: 'amber', desc: '满足 C9 破格条件'}
                             ].map((axis, i) => (
                                <div key={i}>
                                   <div className="flex justify-between items-end mb-2">
                                      <span className="text-sm font-bold text-white">{axis.name}</span>
                                      <span className={`text-xs font-bold text-${axis.color}-400`}>{axis.score} 分</span>
                                   </div>
                                   <div className="h-2.5 bg-white/5 rounded-full overflow-hidden mb-1">
                                      <div className={`h-full bg-${axis.color}-500 rounded-full shadow-[0_0_10px_currentColor]`} style={{ width: `${axis.score}%` }}></div>
                                   </div>
                                   <div className="text-[10px] text-slate-500 text-right">{axis.desc}</div>
                                </div>
                             ))}
                          </div>
                       </div>

                       {/* Right: Admission Forecast */}
                       <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-amber-500/30 rounded-3xl p-8 flex flex-col relative shadow-xl overflow-hidden">
                          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                          
                          <h4 className="font-bold text-amber-400 mb-6 flex items-center gap-2 text-lg"><Trophy className="w-6 h-6"/> 升学通道与破格入围预测</h4>
                          
                          <div className="flex-1 space-y-4">
                             <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="text-xs text-slate-400 mb-1">核心加分项</div>
                                <div className="text-white font-bold mb-1">全国高中数学联赛一等奖 (省级赛区)</div>
                                <div className="text-white font-bold">完成 2 门大学先修课程 (成绩优秀)</div>
                             </div>
                             
                             <div className="p-6 bg-gradient-to-r from-amber-900/40 to-transparent border border-amber-500/40 rounded-2xl">
                                <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">AI 升学推演结论</div>
                                <div className="text-2xl font-black text-amber-400 mb-2">破格入围 C9 高校强基计划极大概率</div>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                   建议下一阶段重点突破《大学物理》，补充科研能力中实验论证环节的履历，以备战强基高校校测环节的笔试与面试。
                                </p>
                             </div>
                          </div>

                          <div className="mt-8 pt-6 border-t border-white/10">
                             <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex justify-center items-center gap-2 text-lg">
                                <BookMarked className="w-5 h-5"/> 生成数字化学术档案，发送至高校升学系统
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
            </div>
          )}

          {/* TAB 6: TECH (科技素养) */}
          {activeTab === 'tech' && (
            <div className="space-y-6 animate-fade-in h-[calc(100vh-10rem)] flex flex-col pb-10">
              
              {/* STEP 1: Dashboard (科创菁英大本营) */}
              {techStep === 'dashboard' && (
                <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full">
                  <div className="flex items-center justify-between mb-8 bg-gradient-to-r from-cyan-900/40 to-blue-900/20 p-8 rounded-3xl border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30"><Cpu className="w-6 h-6 text-cyan-400"/></div>
                        <h3 className="text-3xl font-black text-white">科技素养与创客大本营</h3>
                      </div>
                      <p className="text-slate-400 text-sm mt-2 max-w-2xl leading-relaxed">融合 PBL 探究、具身智能编程与真实社会痛点解决，全方位打造硬核科技体验，全面提升科学思维与创新实践能力。</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-6 flex-1">
                    {/* Featured Engines: 翱翔 & 雏鹰 */}
                    <div className="col-span-1 flex flex-col gap-6">
                       <h4 className="font-bold text-white flex items-center gap-2"><Rocket className="w-5 h-5 text-cyan-400"/> 特色育人双驱引擎</h4>
                       
                       <div className="bg-gradient-to-b from-[#0c1222] to-[#121828] border border-blue-500/30 rounded-3xl p-6 flex flex-col hover:border-blue-400/50 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.1)] relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-[40px]"></div>
                          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                            <Rocket className="w-6 h-6 text-blue-400" />
                          </div>
                          <h5 className="text-xl font-bold text-white mb-2">翱翔计划</h5>
                          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                            北京市拔尖创新人才培养。基于高校重点实验室的跨学段科研探究。
                          </p>
                          <div className="mt-auto">
                            <div className="text-sm font-bold text-blue-400 bg-blue-500/10 px-3 py-2 rounded-lg border border-blue-500/20 text-center">本校 3 人入选市级</div>
                          </div>
                       </div>

                       <div className="bg-gradient-to-b from-[#0c1222] to-[#121828] border border-emerald-500/30 rounded-3xl p-6 flex flex-col hover:border-emerald-400/50 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.1)] relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-[40px]"></div>
                          <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 border border-emerald-500/30">
                            <Radar className="w-6 h-6 text-emerald-400" />
                          </div>
                          <h5 className="text-xl font-bold text-white mb-2">雏鹰建言</h5>
                          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                            社会实践与痛点调研。引导学生关注身边问题，用科技建言献策。
                          </p>
                          <div className="mt-auto">
                            <div className="text-sm font-bold text-emerald-400 bg-emerald-500/10 px-3 py-2 rounded-lg border border-emerald-500/20 text-center">本周新增 12 份调研提案</div>
                          </div>
                       </div>
                    </div>

                    {/* PBL Project Matrix */}
                    <div className="col-span-3 flex flex-col gap-6">
                       <h4 className="font-bold text-white flex items-center gap-2"><Layers className="w-5 h-5 text-cyan-400"/> PBL 项目探究矩阵</h4>
                       
                       <div className="grid grid-cols-2 gap-4 flex-1">
                          {/* Project 1 (Interactive) */}
                          <div className="bg-[#0f172a] border border-cyan-500/30 rounded-3xl p-6 flex flex-col group relative overflow-hidden">
                             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBoMjBWMEgwem0xOSAxSDFWMWgxOHYxOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] pointer-events-none"></div>
                             
                             <div className="flex justify-between items-start mb-6 z-10">
                                <div className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/30 flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>具身智能硬件
                                </div>
                                <div className="text-xs text-slate-500">高二创客社团</div>
                             </div>
                             
                             <h5 className="text-2xl font-bold text-white mb-3 z-10">校园巡回安防机器人设计</h5>
                             <p className="text-sm text-slate-400 mb-6 z-10">基于 ROS 系统与计算机视觉，设计可在夜间自动巡航、识别人脸与异常温度的智能巡逻车。</p>
                             
                             <div className="mt-auto z-10">
                                <button onClick={() => setTechStep('workspace')} className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex justify-center items-center gap-2">
                                   <Terminal className="w-5 h-5"/> 进入智造空间与研发终端
                                </button>
                             </div>
                          </div>

                          {/* Other Projects */}
                          <div className="flex flex-col gap-4 z-10">
                             <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer flex-1 flex flex-col justify-center">
                                <div className="text-xs text-purple-400 bg-purple-500/10 inline-block px-2 py-1 rounded mb-3 border border-purple-500/20 self-start">Python 软编程</div>
                                <h6 className="text-white font-bold mb-2">基于大数据的区域气象预测模型</h6>
                                <p className="text-xs text-slate-500">阶段：模型训练中 | 关联：雏鹰建言行动</p>
                             </div>
                             <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer flex-1 flex flex-col justify-center">
                                <div className="text-xs text-orange-400 bg-orange-500/10 inline-block px-2 py-1 rounded mb-3 border border-orange-500/20 self-start">物联网 IoT</div>
                                <h6 className="text-white font-bold mb-2">温室大棚自动化灌溉系统搭建</h6>
                                <p className="text-xs text-slate-500">阶段：硬件采购验证 | 关联：劳动教育融合</p>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Workspace (PBL 智造终端) */}
              {techStep === 'workspace' && (
                <div className="flex-1 flex flex-col gap-6 h-full animate-slide-in-up max-w-[1600px] mx-auto w-full font-mono">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between bg-[#0f172a] border border-cyan-500/20 rounded-2xl p-4 shrink-0 font-sans">
                     <div className="flex items-center gap-4">
                        <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20">
                           <Terminal className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-white leading-tight">校园安防机器人研发终端</h3>
                           <div className="text-xs text-slate-400">Environment: ROS2 Humble | Kernel: Linux 6.2 | AI: DeepSeek-Coder-V2</div>
                        </div>
                     </div>
                     <button onClick={() => setTechStep('evaluation')} className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2">
                        <CheckSquare className="w-4 h-4"/> 提交阶段测试并生成素养画像
                     </button>
                  </div>

                  {/* Dual Pane: Hardware & Software */}
                  <div className="flex gap-6 flex-1 overflow-hidden">
                     
                     {/* Left: Embodied AI Simulator */}
                     <div className="flex-[2] bg-[#0c1222] border border-blue-500/20 rounded-3xl flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBoMjBWMEgwem0xOSAxSDFWMWgxOHYxOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] pointer-events-none"></div>
                        <div className="p-4 border-b border-white/5 bg-black/40 flex items-center justify-between z-10">
                           <h4 className="text-sm font-bold text-blue-400 flex items-center gap-2"><Radar className="w-4 h-4"/> 具身智能探测反馈流 (Real-time)</h4>
                           <div className="flex gap-2">
                              <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[10px] rounded border border-green-500/20">LiDAR 正常</span>
                              <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-[10px] rounded border border-yellow-500/20">电机扭矩警告</span>
                           </div>
                        </div>

                        <div className="flex-1 p-6 relative z-10 flex flex-col justify-center items-center">
                           {/* Radar Mock UI */}
                           <div className="w-64 h-64 border-2 border-blue-500/30 rounded-full relative flex items-center justify-center">
                              <div className="absolute inset-4 border border-cyan-500/20 rounded-full"></div>
                              <div className="absolute inset-12 border border-blue-500/10 rounded-full"></div>
                              <div className="w-[50%] h-0.5 bg-gradient-to-r from-cyan-400 to-transparent absolute top-1/2 left-1/2 origin-left animate-[spin_4s_linear_infinite]"></div>
                              <div className="absolute w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red] top-[30%] left-[60%] animate-ping"></div>
                              <div className="absolute w-2 h-2 bg-green-500 rounded-full top-[70%] left-[40%]"></div>
                           </div>
                           
                           <div className="absolute bottom-6 left-6 text-xs text-blue-300 bg-black/60 p-3 rounded-lg border border-blue-500/20 backdrop-blur-md">
                              <div><span className="text-slate-500">Pose:</span> [12.4, 45.2, 0.0]</div>
                              <div><span className="text-slate-500">Vel:</span> 0.5 m/s</div>
                              <div><span className="text-slate-500">Battery:</span> 42%</div>
                           </div>
                        </div>
                     </div>

                     {/* Right: AI Coding IDE */}
                     <div className="flex-[3] bg-[#1e1e1e] border border-cyan-500/30 rounded-3xl flex flex-col overflow-hidden shadow-2xl relative">
                        <div className="p-3 bg-[#2d2d2d] flex items-center gap-4 text-xs text-slate-400 border-b border-black">
                           <div className="flex gap-1.5">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                           </div>
                           <div className="flex gap-4">
                              <span className="text-cyan-400 font-bold border-b border-cyan-400 pb-1">vision_nav.py</span>
                              <span>motor_ctrl.cpp</span>
                           </div>
                        </div>
                        
                        <div className="flex-1 p-6 text-sm text-slate-300 leading-relaxed overflow-y-auto relative custom-scrollbar">
<pre><code><span className="text-purple-400">import</span> cv2
<span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np
<span className="text-purple-400">from</span> rclpy.node <span className="text-purple-400">import</span> Node

<span className="text-purple-400">class</span> <span className="text-yellow-200">VisionNav</span>(Node):
    <span className="text-purple-400">def</span> <span className="text-blue-300">__init__</span>(self):
        super().<span className="text-blue-300">__init__</span>(<span className="text-green-300">'vision_navigator'</span>)
        self.camera = cv2.VideoCapture(0)
        
    <span className="text-purple-400">def</span> <span className="text-blue-300">detect_obstacle</span>(self, frame):
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        <span className="text-slate-500"># TODO: Implement YOLO object detection here</span>
        edges = cv2.Canny(gray, 50, 150)
        
        <span className="bg-red-500/20 border-b border-red-500 text-red-200">if len(edges) &gt; 100:</span>
            self.stop_motors()
            
    <span className="text-purple-400">def</span> <span className="text-blue-300">stop_motors</span>(self):
        <span className="text-slate-500"># Sends halt signal to motor controllers</span>
        <span className="text-purple-400">pass</span>
</code></pre>
                           
                           {/* AI Assistant Overlay */}
                           <div className="absolute right-6 top-24 w-80 bg-[#252526] border border-cyan-500/40 rounded-xl shadow-2xl p-4 animate-pulse-slow">
                              <div className="flex items-center justify-between mb-3">
                                 <h5 className="text-xs font-bold text-cyan-400 flex items-center gap-1"><Sparkles className="w-4 h-4"/> AI 代码伴学纠错</h5>
                                 <Bug className="w-4 h-4 text-red-400"/>
                              </div>
                              <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                                 第 13 行的逻辑存在漏洞：单纯依赖 Canny 边缘检测的数量 (`len(edges) &gt; 100`) 会导致机器人在复杂纹理地面（如砖块地）误判停机。
                              </p>
                              <button className="w-full py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-xs transition-colors">
                                 应用 YOLOv5 深度学习优化方案
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Bottom: Task Driven Kanban */}
                  <div className="h-40 bg-[#0f172a] border border-cyan-500/20 rounded-2xl shrink-0 p-5 flex flex-col font-sans">
                     <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><CheckSquare className="w-4 h-4 text-cyan-400"/> Sprint 3 任务驱动看板 (本周)</h4>
                     <div className="flex gap-4 flex-1">
                        <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col justify-between opacity-50">
                           <div className="text-xs text-slate-300 line-through">1. 组装底盘测距超声波雷达</div>
                           <div className="text-[10px] text-green-400 text-right font-bold">已完成</div>
                        </div>
                        <div className="flex-1 bg-cyan-500/10 rounded-xl border border-cyan-500/30 p-3 flex flex-col justify-between">
                           <div className="text-xs text-white font-medium">2. 编写视觉识别避障核心逻辑 (进行中)</div>
                           <div className="text-[10px] text-cyan-400 text-right animate-pulse">Debuging...</div>
                        </div>
                        <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col justify-between">
                           <div className="text-xs text-slate-400">3. 联调电机 PWM 驱动器</div>
                           <div className="text-[10px] text-slate-500 text-right">待认领</div>
                        </div>
                        <div className="flex-1 bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col justify-between">
                           <div className="text-xs text-slate-400">4. 撰写《雏鹰建言：校园夜间安防报告》</div>
                           <div className="text-[10px] text-slate-500 text-right">待开始</div>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Evaluation (成果与素养画像) */}
              {techStep === 'evaluation' && (
                 <div className="space-y-6 animate-fade-in max-w-5xl mx-auto w-full pt-4 font-sans">
                    <div className="flex items-end justify-between mb-6">
                       <div>
                         <h2 className="text-3xl font-black text-white mb-2">PBL 结题与素养评价</h2>
                         <p className="text-slate-400">本项目阶段测试已结束。基于过程中的代码量、Debug 数据与团队协作，系统已为您生成综合科技素养画像。</p>
                       </div>
                       <button onClick={() => setTechStep('dashboard')} className="text-sm text-slate-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10">返回创客大本营</button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                       {/* Left: Project Summary */}
                       <div className="bg-gradient-to-b from-[#0f172a] to-[#0c1222] border border-cyan-500/20 rounded-3xl p-6 shadow-xl flex flex-col relative overflow-hidden">
                          <h4 className="font-bold text-cyan-400 mb-6 flex items-center gap-2 text-lg"><FileText className="w-5 h-5"/> 项目成果路演摘要</h4>
                          
                          <div className="space-y-4 flex-1">
                             <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <h5 className="text-white font-bold mb-2">代码质量与系统运行状态</h5>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                   团队共提交 Python/C++ 代码 **1,240 行**。在 AI 伴学辅助下修复了 14 处逻辑死锁。最终 ROS 节点通讯正常，视觉避障成功率达 94%。
                                </p>
                             </div>
                             <div className="p-4 bg-white/5 rounded-2xl border border-emerald-500/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-2"><Radar className="w-12 h-12 text-emerald-500/10"/></div>
                                <h5 className="text-emerald-400 font-bold mb-2">雏鹰建言社会价值评估</h5>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                   团队产出的《校园死角夜间安防调研与机器人巡航方案》，兼具技术落地可行性与社会公共价值，评定为**校级优秀实践报告**。
                                </p>
                             </div>
                          </div>
                       </div>

                       {/* Right: Radar Chart & Badges */}
                       <div className="bg-[#0c1222] border border-blue-500/20 rounded-3xl p-6 flex flex-col relative">
                          <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Target className="w-5 h-5 text-blue-400"/> 五维科技素养画像 (张明)</h4>
                          <p className="text-xs text-slate-400 mb-6">AI 基于探究过程中的海量交互数据自动化生成</p>

                          <div className="flex-1 flex items-center justify-center relative min-h-[250px]">
                             {/* CSS Mock of a Radar Chart */}
                             <div className="relative w-48 h-48">
                                {/* Base Polygon (Background grids) */}
                                <svg className="absolute inset-0 w-full h-full text-blue-500/20" viewBox="0 0 100 100">
                                   <polygon points="50,5 95,35 78,90 22,90 5,35" fill="none" stroke="currentColor" strokeWidth="1"/>
                                   <polygon points="50,20 80,42 68,80 32,80 20,42" fill="none" stroke="currentColor" strokeWidth="1"/>
                                   <polygon points="50,35 65,50 58,65 42,65 35,50" fill="none" stroke="currentColor" strokeWidth="1"/>
                                   {/* Axes */}
                                   <line x1="50" y1="50" x2="50" y2="5" stroke="currentColor" strokeWidth="1" />
                                   <line x1="50" y1="50" x2="95" y2="35" stroke="currentColor" strokeWidth="1" />
                                   <line x1="50" y1="50" x2="78" y2="90" stroke="currentColor" strokeWidth="1" />
                                   <line x1="50" y1="50" x2="22" y2="90" stroke="currentColor" strokeWidth="1" />
                                   <line x1="50" y1="50" x2="5" y2="35" stroke="currentColor" strokeWidth="1" />
                                </svg>
                                {/* Data Polygon */}
                                <svg className="absolute inset-0 w-full h-full text-cyan-400/50 fill-cyan-500/20" viewBox="0 0 100 100">
                                   <polygon points="50,15 85,38 70,75 25,85 15,40" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                                   <circle cx="50" cy="15" r="2" fill="currentColor" />
                                   <circle cx="85" cy="38" r="2" fill="currentColor" />
                                   <circle cx="70" cy="75" r="2" fill="currentColor" />
                                   <circle cx="25" cy="85" r="2" fill="currentColor" />
                                   <circle cx="15" cy="40" r="2" fill="currentColor" />
                                </svg>
                                {/* Labels */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white font-bold whitespace-nowrap">科学思维 (95)</div>
                                <div className="absolute top-1/4 -right-12 text-[10px] text-white font-bold whitespace-nowrap">创新意识 (88)</div>
                                <div className="absolute bottom-[-15px] -right-4 text-[10px] text-white font-bold whitespace-nowrap">实践动手 (82)</div>
                                <div className="absolute bottom-[-15px] -left-4 text-[10px] text-white font-bold whitespace-nowrap">团队协同 (90)</div>
                                <div className="absolute top-1/4 -left-12 text-[10px] text-white font-bold whitespace-nowrap">社会责任 (98)</div>
                             </div>
                          </div>

                          <div className="mt-6 pt-6 border-t border-white/5 flex justify-end">
                             <button onClick={() => setTechStep('dashboard')} className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-colors flex justify-center items-center gap-2">
                                <ShieldCheck className="w-5 h-5"/> 颁发卓越创客勋章，归档至综合评价档案袋
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
            </div>
          )}

          {/* TAB 7: AESTHETIC (美育) */}
          {activeTab === 'aesthetic' && (
            <div className="space-y-6 animate-fade-in h-[calc(100vh-10rem)] flex flex-col pb-10 font-sans">
              
              {/* STEP 1: Perception (感知与沉浸) */}
              {aestheticStep === 'perception' && (
                <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full relative">
                  {/* Decorative background */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                     <div className="absolute top-10 left-10 w-96 h-96 bg-pink-600 rounded-full blur-[120px]"></div>
                     <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
                  </div>

                  <div className="flex items-center justify-between mb-8 backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-pink-500/20 shadow-[0_0_50px_rgba(236,72,153,0.1)] z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-pink-500/20 rounded-lg border border-pink-500/30"><Palette className="w-6 h-6 text-pink-400"/></div>
                        <h3 className="text-3xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">智慧美育感知中枢</h3>
                      </div>
                      <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
                        基于全息渲染与动捕技术，打造虚拟美术画廊、声学大厅与舞蹈空间，为每位学生提供差异化的艺术感知入口。
                      </p>
                    </div>
                  </div>

                  {/* Portals */}
                  <div className="grid grid-cols-3 gap-8 z-10 flex-1">
                     {/* Art Portal */}
                     <div className="bg-gradient-to-b from-[#1a0b1c] to-[#0c0410] border border-pink-500/30 rounded-3xl p-6 flex flex-col relative overflow-hidden group hover:border-pink-400/60 transition-all cursor-pointer shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-[40px] group-hover:bg-pink-500/40 transition-all"></div>
                        <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-6 border border-pink-500/30">
                           <Glasses className="w-8 h-8 text-pink-400"/>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">VR 虚拟美术画廊</h4>
                        <p className="text-sm text-slate-400 flex-1">沉浸式浏览世界名画 3D 重构，鉴赏学生数字雕塑作品展。</p>
                        <div className="flex justify-between items-center mt-6 pt-4 border-t border-pink-500/20">
                           <span className="text-xs text-pink-300">在线鉴赏: 45 人</span>
                           <span className="text-pink-400 group-hover:translate-x-2 transition-transform">&rarr;</span>
                        </div>
                     </div>

                     {/* Music Portal */}
                     <div className="bg-gradient-to-b from-[#0f0b24] to-[#080514] border border-indigo-500/30 rounded-3xl p-6 flex flex-col relative overflow-hidden group hover:border-indigo-400/60 transition-all cursor-pointer shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-[40px] group-hover:bg-indigo-500/40 transition-all"></div>
                        <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 border border-indigo-500/30">
                           <Speaker className="w-8 h-8 text-indigo-400"/>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">全息声学大厅</h4>
                        <p className="text-sm text-slate-400 flex-1">支持声部实时音准分析、乐器协同演奏反馈与多轨录音。</p>
                        <div className="flex justify-between items-center mt-6 pt-4 border-t border-indigo-500/20">
                           <span className="text-xs text-indigo-300">在线声部: 12 人</span>
                           <span className="text-indigo-400 group-hover:translate-x-2 transition-transform">&rarr;</span>
                        </div>
                     </div>

                     {/* Dance Portal */}
                     <div className="bg-gradient-to-b from-[#1c0f1c] to-[#0c050c] border border-fuchsia-500/30 rounded-3xl p-6 flex flex-col relative overflow-hidden group hover:border-fuchsia-400/60 transition-all shadow-2xl cursor-pointer" onClick={() => setAestheticStep('creation')}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-[40px] group-hover:bg-fuchsia-500/40 transition-all"></div>
                        <div className="w-16 h-16 rounded-2xl bg-fuchsia-500/20 flex items-center justify-center mb-6 border border-fuchsia-500/30">
                           <Move className="w-8 h-8 text-fuchsia-400"/>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">AI 动捕排练工坊</h4>
                        <p className="text-sm text-slate-400 flex-1">基于视觉的骨骼节点追踪，支持舞蹈动作比对与编舞创作。</p>
                        <div className="flex justify-between items-center mt-6 pt-4 border-t border-fuchsia-500/20">
                           <span className="text-xs text-fuchsia-300">创作流派: 古典/现代</span>
                           <span className="text-fuchsia-400 font-bold group-hover:translate-x-2 transition-transform animate-pulse">进入工坊 &rarr;</span>
                        </div>
                     </div>
                  </div>

                  {/* Daily AI Recommendation */}
                  <div className="mt-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 z-10 flex items-center gap-6">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg"><Star className="w-6 h-6 text-white"/></div>
                     <div className="flex-1">
                        <div className="text-xs font-bold text-pink-400 mb-1 tracking-widest">AI 差异化审美推荐</div>
                        <div className="text-white font-medium text-sm">基于近期高一 (3) 班的色彩偏好，系统已自动向学生端推送《莫奈：光与影的印象》VR 观展体验。</div>
                     </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Creation (表达与创造) */}
              {aestheticStep === 'creation' && (
                <div className="flex-1 flex flex-col max-w-[1600px] mx-auto w-full gap-6 animate-slide-in-up">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between backdrop-blur-xl bg-white/5 border border-fuchsia-500/30 rounded-2xl p-4 shrink-0 shadow-lg relative overflow-hidden z-10">
                     <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-fuchsia-500/10 to-transparent pointer-events-none"></div>
                     <div className="flex items-center gap-4">
                        <button onClick={() => setAestheticStep('perception')} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-300"><ArrowLeft className="w-5 h-5"/></button>
                        <div className="flex items-center gap-3">
                           <Wand2 className="w-6 h-6 text-fuchsia-400"/>
                           <h3 className="text-xl font-bold text-white">AI 协同艺术工坊 <span className="text-sm font-normal text-slate-400 ml-2">正在辅助创作：李思彤 (画作渲染) / 张伟 (舞蹈骨骼)</span></h3>
                        </div>
                     </div>
                     <button onClick={() => setAestheticStep('appreciation')} className="px-6 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(192,38,211,0.4)] transition-all flex items-center gap-2 border border-fuchsia-400">
                        <Camera className="w-4 h-4"/> 封装作品，送至数字画廊展出
                     </button>
                  </div>

                  <div className="flex gap-6 flex-1 overflow-hidden relative z-10">
                     {/* Left: AI Art Creation (Image) */}
                     <div className="flex-[1] bg-[#0c0510] border border-pink-500/30 rounded-3xl flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-pink-500/20 bg-pink-900/10 flex justify-between items-center">
                           <h4 className="font-bold text-white flex items-center gap-2"><Image className="w-5 h-5 text-pink-400"/> 视觉美术共创</h4>
                           <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded">赛博朋克流派渲染中</span>
                        </div>
                        <div className="flex-1 p-6 flex flex-col gap-4">
                           {/* Sketch */}
                           <div className="flex-1 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                              <div className="text-slate-500 font-mono text-sm z-10">学生手绘草图信号接入</div>
                              <div className="absolute inset-0 border border-pink-500/20 m-4 rounded-xl opacity-20 bg-pink-900/20"></div>
                           </div>
                           <div className="flex justify-center"><ArrowDownToLine className="w-6 h-6 text-pink-500 animate-bounce"/></div>
                           {/* AI Rendered */}
                           <div className="flex-1 bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-2xl border border-pink-500/40 flex items-center justify-center relative overflow-hidden group">
                              <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay"></div>
                              <div className="text-pink-200 font-bold tracking-widest text-lg z-10 group-hover:scale-110 transition-transform text-center">
                                 AI 拓补渲染完成<br/>
                                 <span className="text-xs text-pink-400 font-normal mt-2 block">色彩张力评估: 优秀</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Center: Motion Capture (Dance) */}
                     <div className="flex-[1.5] bg-[#050b14] border border-fuchsia-500/30 rounded-3xl flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-fuchsia-500/20 bg-fuchsia-900/10 flex justify-between items-center">
                           <h4 className="font-bold text-white flex items-center gap-2"><Move className="w-5 h-5 text-fuchsia-400"/> 舞蹈姿态动捕反馈</h4>
                           <span className="text-xs px-2 py-1 bg-fuchsia-500/20 text-fuchsia-300 rounded flex items-center gap-1"><Mic className="w-3 h-3 animate-pulse"/> 动作捕捉解析中</span>
                        </div>
                        <div className="flex-1 p-8 relative flex items-center justify-center">
                           {/* Virtual Skeleton Visualization */}
                           <div className="absolute w-48 h-64 border border-fuchsia-500/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(192,38,211,0.2)] bg-black/40 backdrop-blur-md">
                              <div className="w-32 h-48 border border-white/10 relative">
                                 {/* Head */}
                                 <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-fuchsia-400 shadow-[0_0_10px_#e879f9]"></div>
                                 {/* Spine */}
                                 <div className="absolute top-8 left-1/2 -translate-x-1/2 w-1 h-20 bg-fuchsia-400 shadow-[0_0_10px_#e879f9]"></div>
                                 {/* Arms */}
                                 <div className="absolute top-10 left-4 w-24 h-1 bg-fuchsia-400 -rotate-12 origin-left shadow-[0_0_10px_#e879f9]"></div>
                                 {/* Legs */}
                                 <div className="absolute bottom-8 left-8 w-1 h-20 bg-red-400 rotate-12 shadow-[0_0_10px_#f87171]"></div>
                                 <div className="absolute bottom-8 right-8 w-1 h-20 bg-fuchsia-400 -rotate-12 shadow-[0_0_10px_#e879f9]"></div>
                              </div>
                           </div>
                           
                           <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-fuchsia-500/30 flex justify-between items-center z-20">
                              <div>
                                 <div className="text-white font-bold text-sm">左侧核心发力不足 (当前偏离角 15°)</div>
                                 <div className="text-xs text-fuchsia-300 mt-1">AI 伴随反馈：建议腰部更舒展，注意发力点的转换。</div>
                              </div>
                              <button className="px-4 py-2 bg-fuchsia-600 text-white text-xs font-bold rounded-lg hover:bg-fuchsia-500 transition-colors shadow-lg">发送纠正语音</button>
                           </div>
                        </div>
                     </div>

                     {/* Right: Music Composing */}
                     <div className="flex-[1] bg-[#06061c] border border-indigo-500/30 rounded-3xl flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-indigo-500/20 bg-indigo-900/10 flex justify-between items-center">
                           <h4 className="font-bold text-white flex items-center gap-2"><Music className="w-5 h-5 text-indigo-400"/> 情感编曲生成</h4>
                           <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded">生成交响组曲</span>
                        </div>
                        <div className="flex-1 p-6 flex flex-col gap-4">
                           <div className="bg-white/5 border border-white/10 rounded-2xl p-4 shadow-inner">
                              <div className="text-xs text-slate-400 mb-2">学生意境描述输入：</div>
                              <div className="text-sm text-white italic">"星空下的孤独舞者，寻找光芒..."</div>
                           </div>
                           <div className="flex justify-center"><Sparkles className="w-6 h-6 text-indigo-500 animate-spin-slow"/></div>
                           <div className="flex-1 bg-indigo-900/20 border border-indigo-500/30 rounded-2xl p-4 flex flex-col justify-center gap-4 relative overflow-hidden">
                              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                              <div className="flex items-center justify-center gap-1.5 h-16 z-10">
                                 {[1,2,3,4,5,6,7,8,9,10].map(i => (
                                    <div key={i} className="w-2 bg-indigo-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.8)]" style={{height: `${Math.random() * 80 + 20}%`, animationDelay: `${i * 0.15}s`}}></div>
                                 ))}
                              </div>
                              <div className="flex justify-center gap-4 z-10 mt-2">
                                 <button className="p-3 bg-indigo-600 rounded-full text-white shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:bg-indigo-500 transition-colors"><PlayCircle className="w-6 h-6"/></button>
                                 <button className="p-3 bg-white/10 rounded-full text-indigo-300 hover:bg-white/20 transition-colors"><Waves className="w-6 h-6"/></button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Appreciation (鉴赏与评价) */}
              {aestheticStep === 'appreciation' && (
                 <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full pt-4 font-sans animate-fade-in relative z-10">
                    <div className="flex items-end justify-between mb-8 backdrop-blur-xl bg-white/5 p-6 rounded-3xl border border-white/10">
                       <div>
                         <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-3">
                            <Palette className="w-8 h-8 text-pink-400"/> 美育鉴赏与全息数字档案
                         </h2>
                         <p className="text-slate-400 text-sm">将艺术创作固化为可流转的数字资产，生成全方位审美评价雷达与云端鉴赏墙。</p>
                       </div>
                       <button onClick={() => setAestheticStep('perception')} className="text-sm text-slate-300 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 font-medium">返回感知大厅</button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 flex-1">
                       {/* Left: 3D Exhibition */}
                       <div className="col-span-1 bg-[#0c0510] border border-pink-500/30 rounded-3xl p-6 flex flex-col shadow-[0_0_30px_rgba(236,72,153,0.15)] relative overflow-hidden">
                          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-[50px]"></div>
                          <h4 className="font-bold text-white mb-6 flex items-center gap-2 z-10"><Image className="w-5 h-5 text-pink-400"/> 数字展柜</h4>
                          
                          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-4 relative z-10 overflow-hidden">
                             <div className="w-full h-56 border-8 border-[#3d2b1f] shadow-2xl relative bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center group">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30"></div>
                                <div className="text-white font-serif text-center z-10 group-hover:scale-105 transition-transform duration-500">
                                   <div className="text-2xl mb-2 font-bold tracking-wider text-pink-100">《赛博黎明》</div>
                                   <div className="text-xs text-pink-300">作者：李思彤</div>
                                </div>
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-100/20 blur-[15px]"></div>
                             </div>
                          </div>
                       </div>

                       {/* Center: Aesthetic Radar */}
                       <div className="col-span-1 bg-[#080514] border border-purple-500/30 rounded-3xl p-6 flex flex-col shadow-xl">
                          <h4 className="font-bold text-white mb-6 flex items-center gap-2"><Radar className="w-5 h-5 text-purple-400"/> 审美素养雷达</h4>
                          
                          <div className="flex-1 flex flex-col justify-center space-y-8">
                             {[
                               {name: '色彩感知力', score: 92, color: 'pink'},
                               {name: '空间构建力', score: 85, color: 'purple'},
                               {name: '节奏韵律感', score: 88, color: 'indigo'},
                               {name: '创新想象力', score: 96, color: 'fuchsia'}
                             ].map((axis, i) => (
                                <div key={i}>
                                   <div className="flex justify-between items-end mb-2">
                                      <span className="text-sm font-bold text-slate-300">{axis.name}</span>
                                      <span className={`text-sm font-bold text-${axis.color}-400`}>{axis.score}</span>
                                   </div>
                                   <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                                      <div className={`h-full bg-${axis.color}-500 rounded-full shadow-[0_0_12px_currentColor]`} style={{ width: `${axis.score}%` }}></div>
                                   </div>
                                </div>
                             ))}
                          </div>
                       </div>

                       {/* Right: Cloud Appreciation Wall */}
                       <div className="col-span-1 bg-[#05020a] border border-indigo-500/30 rounded-3xl p-6 flex flex-col shadow-xl relative overflow-hidden">
                          <h4 className="font-bold text-white mb-6 flex items-center gap-2 z-10"><MessageCircle className="w-5 h-5 text-indigo-400"/> 云端弹幕鉴赏</h4>
                          
                          <div className="flex-1 space-y-5 overflow-y-auto custom-scrollbar relative z-10 pr-2">
                             <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/5 backdrop-blur-sm">
                                <div className="text-xs text-pink-300 mb-1 font-bold">同学 A</div>
                                <div className="text-sm text-white/90">色彩的冲撞感太棒了！很有未来感，感觉像漫步在宇宙边缘。</div>
                             </div>
                             <div className="bg-indigo-500/20 p-4 rounded-2xl rounded-tr-none border border-indigo-500/30 ml-6 backdrop-blur-sm">
                                <div className="text-xs text-indigo-300 mb-1 font-bold">美术导师 (您)</div>
                                <div className="text-sm text-white/90">构图突破了传统的透视，AI 渲染极好地保留了你的原始情感，生动且充满张力！</div>
                             </div>
                             <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/5 backdrop-blur-sm">
                                <div className="text-xs text-purple-300 mb-1 font-bold">同学 B</div>
                                <div className="text-sm text-white/90">编曲的旋律很绝，结合画作看非常有代入感。</div>
                             </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-white/10 z-10 flex gap-3">
                             <input type="text" placeholder="输入鉴赏点评..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white outline-none focus:border-indigo-500 transition-colors" />
                             <button className="px-4 bg-indigo-600 rounded-xl text-white hover:bg-indigo-500 shadow-lg"><Send className="w-5 h-5"/></button>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
            </div>
          )}

          {/* TAB 8: HEALTH (体质) */}
          {/* TAB 8: HEALTH (体质) */}
          {activeTab === 'health' && (
            <div className="space-y-6 animate-fade-in h-[calc(100vh-10rem)] flex flex-col pb-10 font-sans">
              
              {/* STEP 1: Collection (数据采集与动态追踪) */}
              {healthStep === 'collection' && (
                <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full relative">
                  {/* Decorative background */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                     <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]"></div>
                     <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600 rounded-full blur-[120px]"></div>
                  </div>

                  <div className="flex items-center justify-between mb-8 backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)] z-10">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30"><Activity className="w-6 h-6 text-emerald-400"/></div>
                        <h3 className="text-3xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">AI 物联网体质监控大盘</h3>
                      </div>
                      <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
                        通过智能终端实时采集班级运动负荷，实现秒级心率追踪与 AI 运动风险预警保护。
                      </p>
                    </div>
                    <button onClick={() => setHealthStep('evaluation')} className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2 border border-emerald-400">
                       <Database className="w-5 h-5"/> 结算数据，生成体质评估
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-6 z-10 flex-1">
                     {/* Live Heart Rate Dashboard (Left 3 columns) */}
                     <div className="col-span-3 bg-[#02120d] border border-emerald-500/30 rounded-3xl p-6 flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px]"></div>
                        <div className="flex justify-between items-center mb-6 z-10">
                           <h4 className="text-xl font-bold text-white flex items-center gap-2"><Watch className="w-5 h-5 text-emerald-400"/> 高一(3)班 实况心率池</h4>
                           <div className="flex items-center gap-4 text-xs font-bold">
                              <span className="flex items-center gap-1 text-emerald-400"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div> 安全负荷 (110-150)</span>
                              <span className="flex items-center gap-1 text-yellow-400"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> 临界负荷 (151-170)</span>
                              <span className="flex items-center gap-1 text-red-400"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> 超限警报 (&gt;170)</span>
                           </div>
                        </div>

                        <div className="grid grid-cols-6 gap-3 flex-1 z-10">
                           {/* Normal Students */}
                           {Array.from({length: 17}).map((_, i) => (
                              <div key={i} className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-3 flex flex-col items-center justify-center relative overflow-hidden group">
                                 <Activity className="w-4 h-4 text-emerald-500/30 absolute bottom-2 right-2"/>
                                 <div className="text-xs text-slate-300 mb-1">学号 {101 + i}</div>
                                 <div className="text-xl font-mono text-emerald-400 font-bold">{115 + Math.floor(Math.random() * 25)}</div>
                              </div>
                           ))}
                           
                           {/* Critical Student (Li Hua) */}
                           <div className="bg-red-900/40 border border-red-500/50 rounded-xl p-3 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse">
                              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 mix-blend-overlay"></div>
                              <div className="text-xs text-red-200 mb-1 font-bold z-10">李华 (学号 118)</div>
                              <div className="text-2xl font-mono text-red-400 font-black z-10 flex items-center gap-1">182 <TrendingUp className="w-4 h-4"/></div>
                           </div>

                           {/* More Normal Students */}
                           {Array.from({length: 6}).map((_, i) => (
                              <div key={i+18} className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-3 flex flex-col items-center justify-center relative overflow-hidden">
                                 <div className="text-xs text-slate-300 mb-1">学号 {119 + i}</div>
                                 <div className="text-xl font-mono text-emerald-400 font-bold">{120 + Math.floor(Math.random() * 20)}</div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Risk Warning Panel (Right 1 column) */}
                     <div className="col-span-1 bg-gradient-to-b from-[#1a0505] to-[#0a0202] border border-red-500/40 rounded-3xl p-6 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.15)]">
                        <div className="flex items-center gap-2 mb-6">
                           <div className="p-2 bg-red-500/20 rounded-lg"><ShieldAlert className="w-5 h-5 text-red-500"/></div>
                           <h4 className="text-lg font-bold text-red-400">AI 预警干预</h4>
                        </div>
                        
                        <div className="flex-1 flex flex-col gap-4">
                           <div className="bg-red-950/50 border border-red-500/30 rounded-2xl p-4 relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-2"><HeartPulse className="w-8 h-8 text-red-500/20"/></div>
                              <div className="text-sm font-bold text-white mb-1">目标：李华 (男生)</div>
                              <div className="text-xs text-red-300 mb-3">状态：最高心率飙升至 182bpm，且 1 分钟恢复率低于 10%。</div>
                              <div className="h-10 w-full flex items-end gap-1 opacity-70 mb-4">
                                 {/* Mock heart rate spike graph */}
                                 {[2,3,4,3,5,6,9,12,14,18,17,18,19,18,18].map((h, i) => (
                                    <div key={i} className={`flex-1 bg-red-500 rounded-t-sm`} style={{height: `${h*5}%`}}></div>
                                 ))}
                              </div>
                              <button className="w-full py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-red-500/30">
                                 向手环发送强制休息指令
                              </button>
                           </div>

                           <div className="bg-yellow-950/30 border border-yellow-500/20 rounded-2xl p-4">
                              <div className="text-sm font-bold text-white mb-1">目标：张伟 (男生)</div>
                              <div className="text-xs text-yellow-300">状态：配速过快，处于临界负荷 165bpm。</div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Evaluation (智能评估与全息体质画像) */}
              {healthStep === 'evaluation' && (
                <div className="flex-1 flex flex-col max-w-[1400px] mx-auto w-full gap-6 animate-slide-in-up">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between backdrop-blur-xl bg-white/5 border border-cyan-500/30 rounded-2xl p-4 shrink-0 shadow-lg relative overflow-hidden z-10">
                     <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none"></div>
                     <div className="flex items-center gap-4">
                        <button onClick={() => setHealthStep('collection')} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-300"><ArrowLeft className="w-5 h-5"/></button>
                        <div className="flex items-center gap-3">
                           <BarChart2 className="w-6 h-6 text-cyan-400"/>
                           <h3 className="text-xl font-bold text-white">全息体质评估大盘 <span className="text-sm font-normal text-slate-400 ml-2">高一 (3) 班月度分析</span></h3>
                        </div>
                     </div>
                     <button onClick={() => setHealthStep('intervention')} className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 border border-cyan-400">
                        <Dumbbell className="w-4 h-4"/> 为薄弱群体生成精准运动处方
                     </button>
                  </div>

                  <div className="flex gap-6 flex-1 overflow-hidden relative z-10">
                     {/* Left: Radar & Class Overview */}
                     <div className="flex-[1.2] bg-[#020b12] border border-cyan-500/30 rounded-3xl flex flex-col relative overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-cyan-500/20 bg-cyan-900/10 flex justify-between items-center">
                           <h4 className="font-bold text-white flex items-center gap-2"><Radar className="w-5 h-5 text-cyan-400"/> 班级体能多维雷达</h4>
                           <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">AI 测算完成</span>
                        </div>
                        <div className="flex-1 p-8 flex flex-col items-center justify-center relative">
                           {/* Decorative rings for radar */}
                           <div className="absolute w-64 h-64 border border-cyan-500/10 rounded-full flex items-center justify-center">
                              <div className="w-48 h-48 border border-cyan-500/20 rounded-full flex items-center justify-center">
                                 <div className="w-32 h-32 border border-cyan-500/30 rounded-full flex items-center justify-center bg-cyan-900/10"></div>
                              </div>
                           </div>
                           
                           {/* Pseudo Radar Chart */}
                           <div className="relative w-64 h-64 z-10">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-xs font-bold text-cyan-300">心肺耐力 (82)</div>
                              <div className="absolute bottom-4 right-0 translate-x-4 text-xs font-bold text-cyan-300">柔韧性 (65)</div>
                              <div className="absolute bottom-4 left-0 -translate-x-4 text-xs font-bold text-cyan-300">协调性 (88)</div>
                              <div className="absolute top-1/2 right-0 translate-x-8 -translate-y-1/2 text-xs font-bold text-emerald-400">BMI 指标 (优)</div>
                              <div className="absolute top-1/2 left-0 -translate-x-8 -translate-y-1/2 text-xs font-bold text-cyan-300">爆发力 (90)</div>
                              
                              {/* Polygon overlay */}
                              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                 <polygon points="50,15 85,50 75,85 25,85 10,50" fill="rgba(6,182,212,0.2)" stroke="#22d3ee" strokeWidth="2" />
                                 {/* Dots */}
                                 <circle cx="50" cy="15" r="3" fill="#22d3ee" />
                                 <circle cx="85" cy="50" r="3" fill="#22d3ee" />
                                 <circle cx="75" cy="85" r="3" fill="#22d3ee" />
                                 <circle cx="25" cy="85" r="3" fill="#22d3ee" />
                                 <circle cx="10" cy="50" r="3" fill="#22d3ee" />
                              </svg>
                           </div>
                        </div>
                     </div>

                     {/* Right: Trend & Weakness Analysis */}
                     <div className="flex-[1.5] flex flex-col gap-6">
                        {/* Longitudinal Tracking */}
                        <div className="flex-1 bg-[#020b12] border border-emerald-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px]"></div>
                           <h4 className="font-bold text-white mb-6 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-emerald-400"/> 体质纵向追踪与增值评价</h4>
                           <div className="space-y-6">
                              <div>
                                 <div className="flex justify-between text-sm mb-2"><span className="text-slate-300">全班平均 800/1000m 成绩趋势</span><span className="text-emerald-400 font-bold">+12% (提升)</span></div>
                                 <div className="h-16 flex items-end gap-2">
                                    {[30, 40, 35, 50, 65, 75, 80].map((h, i) => (
                                       <div key={i} className="flex-1 bg-gradient-to-t from-emerald-900/50 to-emerald-400/80 rounded-t-sm relative group">
                                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity">月{i+1}</div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Weakness Deep Dive */}
                        <div className="flex-1 bg-[#0f0714] border border-purple-500/30 rounded-3xl p-6 shadow-2xl">
                           <h4 className="font-bold text-white mb-6 flex items-center gap-2"><Target className="w-5 h-5 text-purple-400"/> AI 劣势项下钻挖掘</h4>
                           <div className="grid grid-cols-2 gap-4">
                              <div className="bg-purple-900/20 border border-purple-500/30 rounded-2xl p-4">
                                 <div className="text-xs font-bold text-purple-300 mb-2">柔韧性高危预警 (7人)</div>
                                 <div className="text-sm text-white mb-2">体前屈成绩位于班级后 15%，且近三周无改善。</div>
                                 <div className="text-xs text-slate-400">标签：<span className="text-purple-200 bg-purple-500/20 px-1 py-0.5 rounded">男生偏多</span> <span className="text-purple-200 bg-purple-500/20 px-1 py-0.5 rounded">爆发力强</span></div>
                              </div>
                              <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-2xl p-4">
                                 <div className="text-xs font-bold text-cyan-300 mb-2">超重趋势群体 (4人)</div>
                                 <div className="text-sm text-white mb-2">BMI 曲线持续上扬，伴随心肺耐力下降。</div>
                                 <div className="text-xs text-slate-400">需定向下发有氧燃脂干预处方。</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Intervention (精准干预与运动处方) */}
              {healthStep === 'intervention' && (
                 <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full pt-4 font-sans animate-fade-in relative z-10">
                    <div className="flex items-end justify-between mb-8 backdrop-blur-xl bg-white/5 p-6 rounded-3xl border border-white/10">
                       <div>
                         <h2 className="text-3xl font-black text-white mb-2 flex items-center gap-3">
                            <ClipboardList className="w-8 h-8 text-emerald-400"/> 千人千方：AI 运动处方
                         </h2>
                         <p className="text-slate-400 text-sm">基于个体的生理差异与体能短板，自动生成并下发专属干预方案，家校联动打通最后一公里。</p>
                       </div>
                       <button onClick={() => setHealthStep('collection')} className="text-sm text-slate-300 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 font-medium">结束监控，返回大厅</button>
                    </div>

                    <div className="grid grid-cols-2 gap-8 flex-1">
                       {/* Prescription Card 1 */}
                       <div className="bg-[#020b12] border border-cyan-500/30 rounded-3xl p-6 flex flex-col shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px]"></div>
                          <div className="flex justify-between items-start mb-6 z-10">
                             <div>
                                <h4 className="font-bold text-white text-lg">柔韧性专项提升处方</h4>
                                <div className="text-xs text-cyan-300 mt-1">适用对象：体前屈薄弱群体 (7人)</div>
                             </div>
                             <div className="p-2 bg-cyan-500/20 rounded-lg"><Activity className="w-5 h-5 text-cyan-400"/></div>
                          </div>
                          
                          <div className="flex-1 space-y-4 z-10">
                             <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4 items-center">
                                {/* 3D mockup placeholder */}
                                <div className="w-16 h-16 bg-cyan-900/40 rounded-lg border border-cyan-500/30 flex flex-col items-center justify-center">
                                   <div className="w-4 h-4 rounded-full border border-cyan-400 mb-1"></div>
                                   <div className="w-8 h-1 bg-cyan-400 rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                   <div className="text-sm font-bold text-white">腘绳肌 PNF 拉伸指南</div>
                                   <div className="text-xs text-slate-400 mt-1">每天 3 组，每组保持 30 秒，包含 3D 骨骼发力演示。</div>
                                </div>
                             </div>
                             <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="text-sm font-bold text-white mb-2">安全预警参数：</div>
                                <div className="text-xs text-slate-300 flex items-center gap-2"><HeartPulse className="w-3 h-3 text-red-400"/> 最大心率控制在 120bpm 以内</div>
                             </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-cyan-500/20 flex gap-3 z-10">
                             <button className="flex-1 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2">
                                <Send className="w-4 h-4"/> 下发至学生终端
                             </button>
                             <button className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-cyan-300 text-sm font-bold rounded-xl transition-colors border border-cyan-500/30">
                                同步家长端
                             </button>
                          </div>
                       </div>

                       {/* Prescription Card 2 */}
                       <div className="bg-[#02120d] border border-emerald-500/30 rounded-3xl p-6 flex flex-col shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px]"></div>
                          <div className="flex justify-between items-start mb-6 z-10">
                             <div>
                                <h4 className="font-bold text-white text-lg">循序渐进有氧燃脂处方</h4>
                                <div className="text-xs text-emerald-300 mt-1">适用对象：BMI 超标群体 (4人)</div>
                             </div>
                             <div className="p-2 bg-emerald-500/20 rounded-lg"><Timer className="w-5 h-5 text-emerald-400"/></div>
                          </div>
                          
                          <div className="flex-1 space-y-4 z-10">
                             <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-4 items-center">
                                <div className="w-16 h-16 bg-emerald-900/40 rounded-lg border border-emerald-500/30 flex items-center justify-center text-xl font-bold text-emerald-400 font-mono">
                                   6'30"
                                </div>
                                <div className="flex-1">
                                   <div className="text-sm font-bold text-white">定制化操场跑配速</div>
                                   <div className="text-xs text-slate-400 mt-1">严禁初期过快，首周要求以 6分30秒/公里的配速完成 2km 慢跑。</div>
                                </div>
                             </div>
                             <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="text-sm font-bold text-white mb-2">手环联机策略：</div>
                                <div className="text-xs text-slate-300 flex items-center gap-2"><Watch className="w-3 h-3 text-emerald-400"/> 心率超 160bpm 终端震动并强制降速</div>
                             </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-emerald-500/20 flex gap-3 z-10">
                             <button className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2">
                                <Send className="w-4 h-4"/> 下发至学生终端
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
            </div>
          )}

          {/* TAB 9: FUTURE (未来学习中心) */}
          {/* TAB 9: FUTURE (未来学习中心) */}
          {activeTab === 'future' && (
            <div className="space-y-6 animate-fade-in h-[calc(100vh-10rem)] flex flex-col max-w-6xl mx-auto font-sans">
              
              {/* --- HUB STATE --- */}
              {futureStep === 'hub' && (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">元宇宙场景调度大厅</h3>
                      <p className="text-slate-400 mt-2 text-sm">选择沉浸式学科资源，一键下发至全校/跨校 VR 终端，开启时空穿梭教学。</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 flex-1">
                    {[
                      { id: 'chinese', title: '《桃花源记》古风秘境', subject: '语文', icon: Flower2, color: 'text-pink-400', border: 'border-pink-500/30', bg: 'bg-pink-500/10', glow: 'shadow-[0_0_30px_rgba(244,114,182,0.1)] hover:shadow-[0_0_50px_rgba(244,114,182,0.2)]', desc: '实景还原武陵人捕鱼路线，沉浸式体验“芳草鲜美，落英缤纷”，支持全班联机诵读打卡。' },
                      { id: 'history', title: '《赤壁之战》全景推演', subject: '历史', icon: Flame, color: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/10', glow: 'shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:shadow-[0_0_50px_rgba(249,115,22,0.2)]', desc: '上帝视角沙盘推演与士兵第一视角无缝切换，动态演算风向、水流对战局走向的影响。' },
                      { id: 'science', title: '高危化学反应堆 (防爆舱)', subject: '科学', icon: FlaskConical, color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:shadow-[0_0_50px_rgba(6,182,212,0.2)]', desc: '零物理风险进行剧烈氧化、金属钠水反应，精准模拟分子级爆炸参数与热力学变化。' },
                      { id: 'physics', title: '天宫空间站 (零重力)', subject: '物理', icon: Satellite, color: 'text-indigo-400', border: 'border-indigo-500/30', bg: 'bg-indigo-500/10', glow: 'shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]', desc: '完全失重环境下的力学实验与太空舱内漫游，对接国家航天局真实轨道数据。' }
                    ].map((scene) => (
                      <div 
                        key={scene.id}
                        className={`relative rounded-3xl border ${scene.border} bg-[#0a0f1d] p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] ${scene.glow} group`}
                        onClick={() => { setSelectedScene(scene.id); setFutureStep('control'); }}
                      >
                        <div className={`absolute top-0 right-0 w-48 h-48 ${scene.bg} rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700`}></div>
                        
                        <div className="flex justify-between items-start mb-6 relative z-10">
                           <div className={`p-4 rounded-2xl ${scene.bg} backdrop-blur-md border ${scene.border}`}>
                             <scene.icon className={`h-8 w-8 ${scene.color}`} />
                           </div>
                           <span className={`text-xs font-bold px-3 py-1 rounded-full border ${scene.border} ${scene.color} ${scene.bg}`}>
                             {scene.subject} · 3D
                           </span>
                        </div>
                        
                        <div className="relative z-10">
                          <h4 className="text-xl font-bold text-white mb-2">{scene.title}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{scene.desc}</p>
                        </div>
                        
                        <div className="mt-6 flex items-center justify-between text-sm relative z-10">
                           <div className="flex -space-x-2">
                             <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#0a0f1d]"></div>
                             <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#0a0f1d]"></div>
                             <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#0a0f1d] flex items-center justify-center text-[10px] text-white font-bold">+12班</div>
                           </div>
                           <span className={`font-bold ${scene.color} flex items-center gap-1 group-hover:translate-x-1 transition-transform`}>
                             启动场景 <ArrowRight className="w-4 h-4" />
                           </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* --- CONTROL ROOM STATE --- */}
              {futureStep === 'control' && selectedScene && (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setFutureStep('hub')}
                        className="p-2 hover:bg-white/10 rounded-xl text-slate-400 transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                          沉浸式全息管控舱 
                          <span className="text-xs font-mono bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-1 rounded flex items-center gap-1">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div> Live
                          </span>
                        </h3>
                        <p className="text-slate-400 mt-1 text-sm">
                          当前场景：
                          {selectedScene === 'chinese' && '语文《桃花源记》古风秘境'}
                          {selectedScene === 'history' && '历史《赤壁之战》全景推演'}
                          {selectedScene === 'science' && '科学·高危化学反应堆 (防爆舱)'}
                          {selectedScene === 'physics' && '物理·天宫空间站 (零重力)'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-300 text-sm">
                        <Network className="w-4 h-4"/>
                        <span>跨校云端连线: 实验中学 / 阳光三小</span>
                      </div>
                      <button className="px-5 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-sm font-bold transition-colors shadow-lg flex items-center gap-2">
                        <ZapOff className="w-4 h-4" /> 结束全息投射
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 flex gap-6 overflow-hidden">
                    {/* Left: Holographic Viewport */}
                    <div className={`flex-1 border ${selectedScene === 'chinese' ? 'border-pink-500/20' : selectedScene === 'history' ? 'border-orange-500/20' : selectedScene === 'science' ? 'border-cyan-500/20' : 'border-indigo-500/20'} bg-[#060913] rounded-3xl overflow-hidden flex flex-col relative`}>
                       {/* Background Theme */}
                       <div className="absolute inset-0 z-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBoMjBWMEgwem0xOSAxSDFWMWgxOHYxOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')]"></div>
                       
                       <div className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[100px] z-0 ${selectedScene === 'chinese' ? 'bg-pink-600/20' : selectedScene === 'history' ? 'bg-orange-600/20' : selectedScene === 'science' ? 'bg-cyan-600/20' : 'bg-indigo-600/20'}`}></div>
                       
                       {/* Center Hologram Element */}
                       <div className="flex-1 flex items-center justify-center z-10 relative">
                         <div className={`w-80 h-80 rounded-full flex items-center justify-center relative ${selectedScene === 'chinese' ? 'shadow-[0_0_100px_rgba(244,114,182,0.1)]' : selectedScene === 'history' ? 'shadow-[0_0_100px_rgba(249,115,22,0.1)]' : selectedScene === 'science' ? 'shadow-[0_0_100px_rgba(6,182,212,0.1)]' : 'shadow-[0_0_100px_rgba(99,102,241,0.1)]'}`}>
                            {/* Rings */}
                            <div className={`absolute inset-0 border ${selectedScene === 'chinese' ? 'border-pink-500/30' : selectedScene === 'history' ? 'border-orange-500/30' : selectedScene === 'science' ? 'border-cyan-500/30' : 'border-indigo-500/30'} rounded-full animate-[spin_12s_linear_infinite]`} style={{ borderStyle: 'dashed' }}></div>
                            <div className={`absolute inset-8 border ${selectedScene === 'chinese' ? 'border-purple-500/30' : selectedScene === 'history' ? 'border-red-500/30' : selectedScene === 'science' ? 'border-blue-500/30' : 'border-purple-500/30'} rounded-full animate-[spin_20s_linear_infinite_reverse]`} style={{ borderStyle: 'dotted', borderWidth: '2px' }}></div>
                            
                            {/* Icon based on scene */}
                            {selectedScene === 'chinese' && <Flower2 className="w-24 h-24 text-pink-300 drop-shadow-[0_0_15px_rgba(244,114,182,0.8)] animate-pulse" />}
                            {selectedScene === 'history' && <Flame className="w-24 h-24 text-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)] animate-pulse" />}
                            {selectedScene === 'science' && <FlaskConical className="w-24 h-24 text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-pulse" />}
                            {selectedScene === 'physics' && <Satellite className="w-24 h-24 text-indigo-300 drop-shadow-[0_0_15px_rgba(99,102,241,0.8)] animate-pulse" />}
                         </div>

                         {/* Mock Heatmap Nodes */}
                         <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80] animate-ping"></div>
                         <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]"></div>
                         <div className="absolute bottom-[20%] left-[40%] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15]"></div>
                       </div>

                       {/* Bottom Controls Bar */}
                       <div className="h-24 bg-black/40 backdrop-blur-xl border-t border-white/10 z-10 px-8 flex items-center justify-center gap-6">
                         
                         {/* Dynamic Controls based on Scene */}
                         {selectedScene === 'chinese' && (
                           <>
                             <button className="flex flex-col items-center gap-1 text-slate-300 hover:text-pink-400 transition-colors group">
                                <div className="p-3 bg-white/5 group-hover:bg-pink-500/20 rounded-xl border border-white/10 group-hover:border-pink-500/30 transition-colors"><CloudLightning className="w-5 h-5"/></div>
                                <span className="text-xs">切换晨雾天气</span>
                             </button>
                             <button className="flex flex-col items-center gap-1 text-slate-300 hover:text-pink-400 transition-colors group">
                                <div className="p-3 bg-white/5 group-hover:bg-pink-500/20 rounded-xl border border-white/10 group-hover:border-pink-500/30 transition-colors"><Music className="w-5 h-5"/></div>
                                <span className="text-xs">播放古琴BGM</span>
                             </button>
                             <div className="w-px h-10 bg-white/10 mx-2"></div>
                             <button className="px-6 py-2.5 bg-pink-600 hover:bg-pink-500 text-white rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(219,39,119,0.4)] flex items-center gap-2 transition-all">
                               <MapPin className="w-4 h-4"/> 召集至桃花林入口
                             </button>
                           </>
                         )}

                         {selectedScene === 'history' && (
                           <>
                             <button className="flex flex-col items-center gap-1 text-slate-300 hover:text-orange-400 transition-colors group">
                                <div className="p-3 bg-white/5 group-hover:bg-orange-500/20 rounded-xl border border-white/10 group-hover:border-orange-500/30 transition-colors"><Wind className="w-5 h-5"/></div>
                                <span className="text-xs">刮起东南风</span>
                             </button>
                             <button className="flex flex-col items-center gap-1 text-slate-300 hover:text-orange-400 transition-colors group">
                                <div className="p-3 bg-white/5 group-hover:bg-orange-500/20 rounded-xl border border-white/10 group-hover:border-orange-500/30 transition-colors"><ShieldAlert className="w-5 h-5"/></div>
                                <span className="text-xs">切换战船视角</span>
                             </button>
                             <div className="w-px h-10 bg-white/10 mx-2"></div>
                             <button className="px-6 py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(234,88,12,0.4)] flex items-center gap-2 transition-all">
                               <Flame className="w-4 h-4"/> 触发火烧连环船
                             </button>
                           </>
                         )}

                         {selectedScene === 'science' && (
                           <>
                             <button className="flex flex-col items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors group">
                                <div className="p-3 bg-white/5 group-hover:bg-cyan-500/20 rounded-xl border border-white/10 group-hover:border-cyan-500/30 transition-colors"><Thermometer className="w-5 h-5"/></div>
                                <span className="text-xs">调节环境温度</span>
                             </button>
                             <button className="flex flex-col items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors group">
                                <div className="p-3 bg-white/5 group-hover:bg-cyan-500/20 rounded-xl border border-white/10 group-hover:border-cyan-500/30 transition-colors"><TestTube className="w-5 h-5"/></div>
                                <span className="text-xs">注入催化剂</span>
                             </button>
                             <div className="w-px h-10 bg-white/10 mx-2"></div>
                             <button className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(8,145,178,0.4)] flex items-center gap-2 transition-all">
                               <ShieldCheck className="w-4 h-4"/> 强制全员佩戴护目镜
                             </button>
                           </>
                         )}

                         {selectedScene === 'physics' && (
                           <>
                             <button className="flex flex-col items-center gap-1 text-slate-300 hover:text-indigo-400 transition-colors group">
                                <div className="p-3 bg-white/5 group-hover:bg-indigo-500/20 rounded-xl border border-white/10 group-hover:border-indigo-500/30 transition-colors"><Move className="w-5 h-5"/></div>
                                <span className="text-xs">重力参数 0G</span>
                             </button>
                             <button className="flex flex-col items-center gap-1 text-slate-300 hover:text-indigo-400 transition-colors group">
                                <div className="p-3 bg-white/5 group-hover:bg-indigo-500/20 rounded-xl border border-white/10 group-hover:border-indigo-500/30 transition-colors"><Box className="w-5 h-5"/></div>
                                <span className="text-xs">释放实验物资舱</span>
                             </button>
                             <div className="w-px h-10 bg-white/10 mx-2"></div>
                             <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(79,70,229,0.4)] flex items-center gap-2 transition-all">
                               <Rocket className="w-4 h-4"/> 开启舱外漫游模式
                             </button>
                           </>
                         )}
                       </div>
                    </div>

                    {/* Right: Telemetry Panel */}
                    <div className="w-80 bg-[#0a0f1d] border border-white/10 rounded-3xl p-6 flex flex-col relative z-10 shadow-2xl">
                      <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                        <Activity className="h-5 w-5 text-green-400" /> 生理与行为遥测
                      </h4>
                      
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
                        <div className="text-xs text-slate-400 mb-1">VR 终端晕眩防呆指数</div>
                        <div className="flex items-end gap-2">
                          <span className="text-2xl font-black text-green-400">优良</span>
                          <span className="text-xs text-slate-500 mb-1">无需干预</span>
                        </div>
                        <div className="h-1.5 w-full bg-black/50 rounded-full mt-3 overflow-hidden flex">
                          <div className="h-full bg-green-400 w-[80%]"></div>
                          <div className="h-full bg-yellow-400 w-[15%]"></div>
                          <div className="h-full bg-red-400 w-[5%]"></div>
                        </div>
                      </div>

                      <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">学生舱位动态 (Top)</h5>
                      <div className="space-y-3 overflow-y-auto custom-scrollbar flex-1 pr-2">
                        {[
                          { user: '高一(3)班 李华', status: '探索桃花林深处', color: 'text-pink-300', icon: MapPin },
                          { user: '高一(3)班 王伟', status: '心率偏高 (110bpm)', color: 'text-yellow-400', icon: HeartPulse },
                          { user: '实验中学 张强', status: '已脱离安全实验区！', color: 'text-red-400', icon: AlertTriangle },
                          { user: '高一(3)班 刘洋', status: '正在录制漫游视频', color: 'text-indigo-300', icon: Camera },
                          { user: '阳光三小 陈明', status: '请求教师帮助...', color: 'text-blue-400', icon: HelpCircle },
                        ].map((c, i) => (
                          <div key={i} className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <div className="text-xs font-bold text-slate-200 mb-1.5 flex justify-between items-center">
                               {c.user}
                               <c.icon className={`w-3 h-3 ${c.color}`} />
                            </div>
                            <div className={`text-[11px] ${c.color}`}>{c.status}</div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10 mt-4">
                        <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-bold transition-colors border border-white/10">
                          全域系统广播
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}

            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default TeacherApp;
