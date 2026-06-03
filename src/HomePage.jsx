import React, { useEffect, useState } from 'react';
import {
  ArrowRight, BookOpen, Brain, Building2, GraduationCap, HeartHandshake,
  Library, Orbit, ShieldCheck, Sparkles, Zap, Globe, LineChart, Users,
  MessageCircle, FileText, ChevronDown, CheckCircle2, Navigation, Award, Focus, Hexagon,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expandedGuarantee, setExpandedGuarantee] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const navigateTo = (page, fallbackPath) => {
    if (window.navigateToPage) {
      window.navigateToPage(page);
    } else {
      window.location.pathname = fallbackPath;
    }
  };

  const guarantees = [
    { title: '组织体系', desc: '成立由专家、骨干、专职人员组成的专项小组，实施一把手工程，确保高效协同。' },
    { title: '人才梯队', desc: '建立战略与系统培训队伍，应对日常维护和突发故障，提供专业运营保障。' },
    { title: '资金投入', desc: '采用专项资金与社会资本结合的多元投入机制，确保长效发展与成本可控。' },
    { title: '运营机制', desc: '制定详尽的制度规范，组建专业运营团队，负责用户维护与活动策划。' },
    { title: '资源统筹', desc: '汇聚多方教育资源，对接市级平台，建立校园生态社区与成果转化机制。' }
  ];

  return (
    <div className="dark-hero-bg min-h-screen font-sans selection:bg-indigo-500/30">
      <div className="mesh-gradient animate-mesh" />

      {/* Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">AI+全域智慧教育融合平台</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#vision" className="hover:text-white transition-colors">核心定位</a>
            <a href="#roles" className="hover:text-white transition-colors">平台入口</a>
            <a href="#modules" className="hover:text-white transition-colors">核心矩阵</a>
            <a href="#values" className="hover:text-white transition-colors">平台价值</a>
            <button onClick={() => navigateTo('teacher-app', '/teacher-app')} className="btn-premium btn-premium-primary !px-6 !py-2.5">
              进入体验
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24">
        
        {/* HERO CAROUSEL */}
        <section className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-10 pb-16 overflow-hidden">
          <div className="relative rounded-3xl overflow-hidden group">
            
            {/* Carousel Track */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              
              {/* SLIDE 1: Original Hero */}
              <div className="w-full shrink-0">
                <div className="max-w-4xl py-6 md:py-12">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-indigo-300 backdrop-blur-md mb-8">
                    <Sparkles className="h-4 w-4" />
                    <span>新一代 AI 智慧教育建设方案演示环境</span>
                  </div>
                  
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white">
                    打破孤岛，构建<br />
                    <span className="text-gradient-purple">会进化的教育生态体。</span>
                  </h1>
                  
                  <p className="mt-8 max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed font-light">
                    突破传统系统边界，将 AI 深度融入教、学、伴、管的每一个毛细血管。从被动工具向主动进化的智慧大脑跃迁。
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4 pb-12">
                    <button onClick={() => navigateTo('school-dashboard', '/school-dashboard')} className="btn-premium btn-premium-primary">
                      全域智慧教育融合平台
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <button onClick={() => navigateTo('teacher-app', '/teacher-app')} className="btn-premium">
                      体验教师工作流
                    </button>
                  </div>
                </div>
              </div>

              {/* SLIDE 2: Strategic Vision Banner */}
              <div className="w-full shrink-0">
                <div className="relative py-6 md:py-12 h-full mb-12">
                  <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
                  
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5 space-y-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-bold text-indigo-300">
                        <Globe className="h-3.5 w-3.5" /> 响应《教育强国建设规划纲要(2024—2035)》
                      </div>
                      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-white">
                        数字开局，构建<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">全域协同育人新生态。</span>
                      </h2>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                        以教育数字化开辟发展新赛道，破解区域教育不平衡问题，通过 AI 实现优质资源覆盖，打造<span className="text-indigo-400 font-semibold">“校-师-生-家-机”</span>五位一体的创新人才培养实践范式。
                      </p>
                    </div>
                    
                    <div className="lg:col-span-7 bg-white/[0.02] rounded-2xl p-6 md:p-8 backdrop-blur-md">
                       <div className="flex items-center gap-3 mb-6">
                         <div className="h-10 w-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                           <Brain className="h-5 w-5 text-purple-400" />
                         </div>
                         <h3 className="text-xl font-bold text-white">AI赋能的全域智慧教育融合平台</h3>
                       </div>
                       <p className="text-slate-400 text-sm leading-relaxed mb-6">
                         聚焦学校、学生、教师、家长四大核心群体，通过科技化场景搭建与沉浸式体验，实现教学效率提升、学习成效优化、家校协同升级。
                       </p>
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                         {['备课', '教学', '学习', '教研', '评价', '管理'].map((item, i) => (
                           <div key={i} className="flex items-center gap-2 text-sm text-slate-300 bg-white/[0.02] rounded-lg px-3 py-2 whitespace-nowrap">
                             <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0" /> 聚焦{item}
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Carousel Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
               <button 
                 onClick={() => setCurrentSlide(0)} 
                 className="p-2 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 transition-colors pointer-events-auto"
               >
                 <ChevronLeft className="h-6 w-6" />
               </button>
               <button 
                 onClick={() => setCurrentSlide(1)} 
                 className="p-2 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 transition-colors pointer-events-auto"
               >
                 <ChevronRight className="h-6 w-6" />
               </button>
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
              {[0, 1].map((idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${currentSlide === idx ? 'w-8 h-2 bg-indigo-500' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: 核心定位与愿景 (Marquee) */}
        <section id="vision" className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden mb-16">
          <div className="flex w-[200%] animate-marquee">
            <div className="flex w-1/2 items-center justify-around">
              {['AI 赋能', '全域覆盖', '家-校-师-生-社协同', '闭环生态', '能力重塑'].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-2xl font-black tracking-widest text-slate-700/60 uppercase">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">{text}</span>
                  <Hexagon className="h-6 w-6 text-indigo-500/30" />
                </div>
              ))}
            </div>
            <div className="flex w-1/2 items-center justify-around">
              {['AI 赋能', '全域覆盖', '家-校-师-生-社协同', '闭环生态', '能力重塑'].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-2xl font-black tracking-widest text-slate-700/60 uppercase">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">{text}</span>
                  <Hexagon className="h-6 w-6 text-indigo-500/30" />
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center mt-12 px-6">
            <p className="text-lg text-slate-400 leading-relaxed font-light">
              不仅仅是信息化系统的堆砌，而是构建以 <span className="text-indigo-400 font-medium">“学校-教师-学生-家庭”</span> 为核心的数据驱动命运共同体。
              打造真正可感、可知、可进化的全生命周期教育中枢。
            </p>
          </div>
        </section>

        {/* ROLES - Bento Grid */}
        <section id="roles" className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">四大专属终端</h2>
              <p className="mt-3 text-slate-400">分角色场景化入口，实现教、学、伴、管无缝协同。</p>
            </div>
          </div>

          <div className="bento-grid">
            
            {/* Student */}
            <div onClick={() => navigateTo('student-app', '/student-app')} className="bento-card bento-large group cursor-pointer">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                <GraduationCap className="h-48 w-48 text-indigo-400" strokeWidth={1} />
              </div>
              <div className="relative h-full flex flex-col justify-between z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div className="mt-12">
                  <h3 className="text-3xl font-bold text-white group-hover:text-indigo-300 transition-colors">学生端</h3>
                  <p className="mt-4 text-lg text-slate-300 max-w-md leading-relaxed">
                    AI 伴学、自适应任务流与未来学习中心。让探索有方向，让练习有反馈。
                  </p>
                  <ul className="mt-6 space-y-3">
                    {['今日智能编排任务流', '知识图谱薄弱点诊断', '个性化素养成长地图'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                        <Zap className="h-4 w-4 text-indigo-500" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:gap-3 transition-all">
                    启动终端 <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher */}
            <div onClick={() => navigateTo('teacher-app', '/teacher-app')} className="bento-card bento-wide group cursor-pointer bg-gradient-to-br from-purple-500/5 to-transparent">
              <div className="relative h-full flex flex-col justify-between z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">教师工作台</h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">
                    从精准备课、课堂互动到自动阅卷评价，释放低效劳动，回归育人本质。
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-purple-400">
                    进入工作台 <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Parent */}
            <div onClick={() => navigateTo('parent-app', '/parent-app')} className="bento-card bento-square group cursor-pointer bg-gradient-to-bl from-orange-500/5 to-transparent">
              <div className="flex flex-col h-full justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white">家长端</h3>
                  <p className="mt-2 text-sm text-slate-400">学情可视，家校同频。看得懂的成长轨迹。</p>
                </div>
              </div>
            </div>

            {/* School */}
            <div onClick={() => navigateTo('school-dashboard', '/school-dashboard')} className="bento-card bento-square group cursor-pointer">
               <div className="flex flex-col h-full justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
                  <Building2 className="h-6 w-6" />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white">平台管理端</h3>
                  <p className="mt-2 text-sm text-slate-400">全局质量驾驶舱，校园治理与保障中枢。</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: 六大核心价值 (Values Grid) */}
        <section id="values" className="mx-auto max-w-7xl px-6 lg:px-8 py-20 relative">
          <div className="text-center mb-16">
            <div className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-3">Core Values</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">六大核心价值主张</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">超越工具属性，深度重塑教育全链条生产力与生产关系。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Navigation, title: '响应国家战略', desc: '紧跟数字化转型要求，为区域教育高质量发展提供落地范式。' },
              { icon: Focus, title: '教学模式创新', desc: '破除传统灌输式壁垒，建立以能力模型为核心的探究式课堂。' },
              { icon: Award, title: '师生能力跃迁', desc: '教师专业化发展提效，学生向复合型创新人才高速进化。' },
              { icon: Globe, title: '示范辐射效应', desc: '沉淀本校数据底座与应用模型，成为区域数字化标杆示范校。' },
              { icon: Zap, title: '产业生态带动', desc: '产学研深度融合，拉动上下游教育科技产业资源联动。' },
              { icon: HeartHandshake, title: '普惠多元教育', desc: '以 AI 缩小教育鸿沟，提供低成本、高效率的优质教育供给。' }
            ].map((value, i) => (
              <div key={i} className="value-card group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-8xl font-black text-indigo-500">0{i + 1}</span>
                </div>
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="p-3 rounded-xl bg-white/5 text-indigo-400 border border-white/10 group-hover:bg-indigo-500/20 transition-colors">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{value.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm relative z-10">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* MODULES - Masonry / Unconventional Grid */}
        <section id="modules" className="mx-auto max-w-7xl px-6 lg:px-8 py-20 relative border-t border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">十一大核心系统矩阵</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">底层数据全息连通，能力集群化支撑真实场景。</p>
          </div>

          <div className="module-masonry relative z-10">
            {/* Group 1 */}
            <div className="module-item group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white/5 text-indigo-400 border border-white/10 group-hover:bg-indigo-500/20 transition-colors">
                  <Library className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">教育教学基座</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">全流程教学支撑，构建知识与智慧双循环。</p>
              <div className="space-y-4">
                {[
                  { icon: FileText, label: '备课模块', desc: 'AI 协同教案生成' },
                  { icon: Users, label: '课堂模块', desc: '高频互动学情捕捉' },
                  { icon: Globe, label: '思政模块', desc: '特色大思政课程' },
                  { icon: MessageCircle, label: '教研模块', desc: '循证教研智库沉淀' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <item.icon className="h-4 w-4 text-slate-300 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-200">{item.label}</div>
                      <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group 2 */}
            <div className="module-item group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white/5 text-purple-400 border border-white/10 group-hover:bg-purple-500/20 transition-colors">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">五育个性成长</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">全面发展的立体数字画像，让天分被看见。</p>
              <div className="space-y-4">
                {['个性化模块', '科技素养模块', '美育模块', '体质健康模块'].map((label, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-sm font-medium text-slate-200">{label}</span>
                    <ArrowRight className="h-3 w-3 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Group 3 & 4 */}
            <div className="module-item group bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Orbit className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">未来学习中心</h3>
              </div>
              <p className="text-sm text-indigo-200/70 mb-4">打破教室物理边界的泛在学习空间，大模型加持的无限探究秘境。</p>
            </div>

            <div className="module-item group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-white/5 text-orange-400 border border-white/10 group-hover:bg-orange-500/20 transition-colors">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">智能治理底座</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-2">
                    <LineChart className="h-4 w-4 text-orange-400" /> 学校管理模块
                  </div>
                  <div className="text-xs text-slate-500">贯通人事、教务的数字中枢</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-2">
                    <Building2 className="h-4 w-4 text-orange-400" /> 技术支持中心
                  </div>
                  <div className="text-xs text-slate-500">统一身份与数据安全堡垒</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: 生态与保障 (Ecology & Guarantee) */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* 多维生态矩阵 */}
            <div>
              <div className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-3">Ecosystem</div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-8">产学研全链条生态体系</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-[24px] bg-gradient-to-r from-white/5 to-transparent border border-white/5">
                  <div className="flex items-center gap-3 mb-4 text-indigo-300">
                    <Brain className="h-5 w-5" />
                    <span className="font-semibold text-lg">顶尖学术指导单位</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    联动国家级教育研究院、顶尖师范大学资源。通过联合实验室课题、国家级课程标准，确保项目教育理论的先进性与合法性。
                  </p>
                </div>
                <div className="p-6 rounded-[24px] bg-gradient-to-r from-white/5 to-transparent border border-white/5">
                  <div className="flex items-center gap-3 mb-4 text-purple-300">
                    <Orbit className="h-5 w-5" />
                    <span className="font-semibold text-lg">硬核科技支撑底座</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    携手头部科技企业提供大模型算力、数据脱敏、网络安全保障。构建高可用、高并发、可信赖的底层系统架构。
                  </p>
                </div>
              </div>
            </div>

            {/* 五大实施保障 (Accordion) */}
            <div>
              <div className="text-orange-400 font-semibold tracking-wider text-sm uppercase mb-3">Implementation</div>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-8">长效可靠的五大实施保障</h2>
              
              <div className="space-y-3">
                {guarantees.map((item, i) => (
                  <div 
                    key={i} 
                    className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-all duration-300"
                  >
                    <button 
                      onClick={() => setExpandedGuarantee(expandedGuarantee === i ? -1 : i)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-black ${expandedGuarantee === i ? 'text-indigo-400' : 'text-slate-600'}`}>
                          0{i + 1}
                        </span>
                        <span className={`font-semibold ${expandedGuarantee === i ? 'text-white' : 'text-slate-300'}`}>
                          {item.title}保障
                        </span>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${expandedGuarantee === i ? 'rotate-180 text-indigo-400' : ''}`} />
                    </button>
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${expandedGuarantee === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="pt-2 text-sm text-slate-400 leading-relaxed pl-9">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-white/10 bg-[#030712]/50 backdrop-blur-lg pt-16 pb-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-6 w-6 text-indigo-400" />
                  <span className="text-xl font-bold text-white">AI+全域智慧教育融合平台</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  让 AI 进入真实教学、学习与治理场景，构建智能进化的未来教育生态。
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">快速入口</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><button onClick={() => navigateTo('student-app', '/student-app')} className="hover:text-indigo-400 transition-colors">学生端 - AI伴学</button></li>
                  <li><button onClick={() => navigateTo('teacher-app', '/teacher-app')} className="hover:text-indigo-400 transition-colors">教师端 - 智能工作台</button></li>
                  <li><button onClick={() => navigateTo('parent-app', '/parent-app')} className="hover:text-indigo-400 transition-colors">家长端 - 学情视窗</button></li>
                  <li><button onClick={() => navigateTo('school-dashboard', '/school-dashboard')} className="hover:text-indigo-400 transition-colors">学校端 - 质量驾驶舱</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-4">核心模块</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><span className="hover:text-indigo-400 transition-colors cursor-pointer">教育教学基座</span></li>
                  <li><span className="hover:text-indigo-400 transition-colors cursor-pointer">五育个性成长</span></li>
                  <li><span className="hover:text-indigo-400 transition-colors cursor-pointer">未来学习中心</span></li>
                  <li><span className="hover:text-indigo-400 transition-colors cursor-pointer">智能治理底座</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-4">生态合作</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li>全国实验校接入：400-800-xxxx</li>
                  <li>产学研合作邮箱：coop@ai-edu.com</li>
                  <li>地址：未来教育创新中心 8 楼</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-500">
                &copy; {new Date().getFullYear()} AI+全域智慧教育融合平台. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-xs text-slate-500">
                <span className="hover:text-slate-300 cursor-pointer transition-colors">隐私政策</span>
                <span className="hover:text-slate-300 cursor-pointer transition-colors">服务条款</span>
                <span className="hover:text-slate-300 cursor-pointer transition-colors">安全合规</span>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default HomePage;
