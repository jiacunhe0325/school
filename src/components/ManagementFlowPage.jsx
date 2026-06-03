import React, { useState } from 'react';
import { 
  Building2, LineChart, ShieldCheck, Lock,
  Briefcase, Wrench, ArrowLeft,
  LayoutDashboard, AlertTriangle, FileText, CheckCircle2,
  XCircle, Clock, Search, Bell,
  UserCog, GraduationCap, Users, Shield, Megaphone, Settings,
  Plus, Edit2, Trash2, MoreVertical, Key, Download, Cpu,
  Home, Zap, Package, Bug, Server, GitPullRequest,
  HeartHandshake, Orbit, Star, Network, Database,
  Sparkles, Brain, PenTool, TrendingUp, Bot, ThumbsUp,
  Award, Calendar, Library, Activity, MessageSquare, HeartPulse, Stethoscope, FileSearch, PieChart
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-lg' 
        : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
    }`}
  >
    <Icon className="h-4 w-4 shrink-0" />
    <span className="font-medium text-sm text-left line-clamp-1">{label}</span>
  </button>
);

// Generic Button Component for Tables
const ActionButton = ({ icon: Icon, label, variant = 'primary' }) => {
  const styles = {
    primary: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/30",
    danger: "bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20",
    ghost: "bg-transparent text-slate-400 border-transparent hover:bg-white/5 hover:text-white"
  };
  return (
    <button className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${styles[variant]}`}>
      <Icon className="h-4 w-4" /> {label && <span>{label}</span>}
    </button>
  );
}

const ManagementFlowPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard'); // Default to dashboard

  // --- MOCK STATES FOR WORKFLOWS --- //
  
  // OA 审批
  const [oaTasks, setOaTasks] = useState([
    { id: 'OA-2024-0501', applicant: '李明 (数学组)', type: '请假申请', date: '2024-05-15', duration: '2天', status: 'pending', reason: '参加省级教学研讨会', aiScore: 98, aiAdvice: '历史请假率极低，代课安排无冲突，建议一键同意。', aiTags: ['代课已安排', '考勤优良'] },
    { id: 'OA-2024-0503', applicant: '王芳 (后勤处)', type: '经费报销', date: '2024-05-15', duration: '3500元', status: 'pending', reason: '高三摸底考试试卷印刷费', aiScore: 85, aiAdvice: '金额在月度预算(5000元)范围内，但发票开具抬头需人工复核。', aiTags: ['预算内', '需核实发票'] },
    { id: 'OA-2024-0502', applicant: '张华 (物理组)', type: '资产领用', date: '2024-05-14', duration: '-', status: 'approved', reason: '领用物理实验仪器一套', aiScore: 100, aiAdvice: '库存余量充足，领用频次正常。', aiTags: ['自动通过'] },
  ]);
  const [selectedOA, setSelectedOA] = useState(null);

  // --- ACTIONS --- //
  const handleApproveOA = (id, isApproved) => {
    setOaTasks(oaTasks.map(t => t.id === id ? { ...t, status: isApproved ? 'approved' : 'rejected' } : t));
    setSelectedOA(null);
  };

  // 学业质量大盘
  const [academicGradeFilter, setAcademicGradeFilter] = useState('高一');
  const [academicSubjectFilter, setAcademicSubjectFilter] = useState('全部');
  const [selectedAcademicRisk, setSelectedAcademicRisk] = useState(null);

  const navigateHome = () => {
    if (window.navigateToPage) window.navigateToPage('home');
    else window.location.pathname = '/';
  };

  return (
    <div className="flex h-screen bg-[#030712] font-sans selection:bg-indigo-500/30 overflow-hidden text-slate-300">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 border-r border-white/5 bg-white/[0.02] flex flex-col z-20 shrink-0 overflow-y-auto custom-scrollbar">
        <div className="h-20 flex items-center px-6 border-b border-white/5 shrink-0 sticky top-0 bg-[#030712]/80 backdrop-blur-md z-10">
          <div className="flex items-center gap-2 cursor-pointer" onClick={navigateHome}>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
              <Building2 className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-white tracking-tight text-lg">平台管理端</span>
          </div>
        </div>
        
        <div className="p-4 flex flex-col gap-1.5 pb-24">
          <div className="text-xs font-semibold text-slate-500 mb-1 mt-2 px-2 uppercase tracking-wider">核心质量中枢</div>
          <SidebarItem icon={LayoutDashboard} label="全局质量驾驶舱" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <SidebarItem icon={Award} label="综合素质档案归档" active={activeTab === 'quality-eval'} onClick={() => setActiveTab('quality-eval')} />
          <SidebarItem icon={PieChart} label="学业质量大盘" active={activeTab === 'academic'} onClick={() => setActiveTab('academic')} />
          
          <div className="text-xs font-semibold text-teal-500/70 mb-1 mt-4 px-2 uppercase tracking-wider">教育教学管理</div>
          <SidebarItem icon={Calendar} label="AI 智能排课引擎" active={activeTab === 'ai-scheduling'} onClick={() => setActiveTab('ai-scheduling')} />
          <SidebarItem icon={Library} label="校本题库与资源审核" active={activeTab === 'resources'} onClick={() => setActiveTab('resources')} />
          <SidebarItem icon={Star} label="科体美特色项目统筹" active={activeTab === 'tech-aesthetic'} onClick={() => setActiveTab('tech-aesthetic')} />
          <SidebarItem icon={Building2} label="基础学校管理" active={activeTab === 'school-mgmt'} onClick={() => setActiveTab('school-mgmt')} />

          <div className="text-xs font-semibold text-purple-400/70 mb-1 mt-4 px-2 uppercase tracking-wider">协同与行政保障</div>
          <SidebarItem icon={Briefcase} label="智慧行政 (OA)" active={activeTab === 'oa'} onClick={() => setActiveTab('oa')} />
          <SidebarItem icon={HeartPulse} label="心理与健康预警中枢" active={activeTab === 'health-warning'} onClick={() => setActiveTab('health-warning')} />
          <SidebarItem icon={MessageSquare} label="家校沟通监管与审计" active={activeTab === 'homeschool'} onClick={() => setActiveTab('homeschool')} />

          <div className="text-xs font-semibold text-indigo-400/70 mb-1 mt-4 px-2 uppercase tracking-wider">系统底座与数据</div>
          <SidebarItem icon={Cpu} label="设备与安全管理" active={activeTab === 'tech-support'} onClick={() => setActiveTab('tech-support')} />
          <SidebarItem icon={UserCog} label="教师管理" active={activeTab === 'teachers'} onClick={() => setActiveTab('teachers')} />
          <SidebarItem icon={GraduationCap} label="学生管理" active={activeTab === 'students'} onClick={() => setActiveTab('students')} />
          <SidebarItem icon={Users} label="班级管理" active={activeTab === 'classes'} onClick={() => setActiveTab('classes')} />
          <SidebarItem icon={Shield} label="角色权限配置" active={activeTab === 'roles'} onClick={() => setActiveTab('roles')} />
          <SidebarItem icon={Megaphone} label="通知管理" active={activeTab === 'notices'} onClick={() => setActiveTab('notices')} />
          <SidebarItem icon={Settings} label="平台系统设置" active={activeTab === 'system'} onClick={() => setActiveTab('system')} />
        </div>

        <div className="p-4 border-t border-white/5 mt-auto bg-[#030712]/80 backdrop-blur-md sticky bottom-0 z-10 shrink-0">
          <button onClick={navigateHome} className="w-full flex items-center justify-center gap-2 py-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> 返回主页
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
        </div>

        {/* Header */}
        <header className="h-20 flex items-center justify-between px-8 border-b border-white/5 bg-white/[0.01] backdrop-blur-md relative z-10 shrink-0">
          <h2 className="text-lg font-bold text-white flex items-center gap-3">
            {/* Core Quality */}
            {activeTab === 'dashboard' && <><LayoutDashboard className="h-5 w-5 text-slate-400"/> 全局质量驾驶舱 (Dashboard)</>}
            {activeTab === 'quality-eval' && <><Award className="h-5 w-5 text-yellow-400"/> 综合素质评价与归档中心</>}
            {activeTab === 'academic' && <><PieChart className="h-5 w-5 text-blue-400"/> 跨学段学业质量追踪大盘</>}
            
            {/* Education Management */}
            {activeTab === 'ai-scheduling' && <><Calendar className="h-5 w-5 text-teal-400"/> AI 智能排课与算力调度引擎</>}
            {activeTab === 'resources' && <><Library className="h-5 w-5 text-teal-400"/> 校本题库与生成式课件审核</>}
            {activeTab === 'tech-aesthetic' && <><Star className="h-5 w-5 text-teal-400"/> 科体美特色项目与资产统筹</>}
            {activeTab === 'school-mgmt' && <><Building2 className="h-5 w-5 text-teal-400"/> 基础学校设施与物资管理</>}
            
            {/* Collaboration & Support */}
            {activeTab === 'oa' && <><Briefcase className="h-5 w-5 text-purple-400"/> 智慧行政 - 审批流转与协同</>}
            {activeTab === 'health-warning' && <><HeartPulse className="h-5 w-5 text-purple-400"/> 心理普测与体质健康预警中枢</>}
            {activeTab === 'homeschool' && <><MessageSquare className="h-5 w-5 text-purple-400"/> 家校通讯合规与舆情满意度审计</>}

            {/* Base & Admin */}
            {activeTab === 'tech-support' && <><Cpu className="h-5 w-5 text-indigo-400"/> 设备与安全管理</>}
            {activeTab === 'teachers' && <><UserCog className="h-5 w-5 text-indigo-400"/> 教职工基础数据管理</>}
            {activeTab === 'students' && <><GraduationCap className="h-5 w-5 text-indigo-400"/> 学生学籍与家庭数据库</>}
            {activeTab === 'classes' && <><Users className="h-5 w-5 text-indigo-400"/> 年级与班级编制管理</>}
            {activeTab === 'roles' && <><Shield className="h-5 w-5 text-indigo-400"/> RBAC 平台角色权限矩阵</>}
            {activeTab === 'notices' && <><Megaphone className="h-5 w-5 text-indigo-400"/> 全校通告与大屏广播中心</>}
            {activeTab === 'system' && <><Settings className="h-5 w-5 text-indigo-400"/> 系统参数与运行环境配置</>}
          </h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="h-5 w-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="搜索功能..." className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm focus:outline-none focus:border-indigo-500/50 transition-colors w-64" />
            </div>
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs shadow-inner">
              AD
            </div>
          </div>
        </header>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-8 relative z-10 custom-scrollbar">
          
          {/* TAB: SCHOOL MANAGEMENT (New) */}
          {activeTab === 'school-mgmt' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
              <p className="text-slate-400 text-sm mb-6">基于学校的安全、住宿、学生到校、用电、物品管理等全方位的模块中心。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                 {/* 学生到校模块 */}
                 <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-colors">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="p-2.5 bg-blue-500/20 rounded-xl"><GraduationCap className="h-5 w-5 text-blue-400" /></div>
                     <h3 className="font-bold text-white text-lg">学生到校监测</h3>
                   </div>
                   <div className="flex items-end gap-2 mb-2">
                     <span className="text-4xl font-black text-white">98.5</span>
                     <span className="text-slate-400 mb-1">%</span>
                   </div>
                   <p className="text-sm text-slate-400 mb-4">今日应到 4250 人，实到 4186 人</p>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[98.5%] rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                   </div>
                 </div>

                 {/* 住宿管理模块 */}
                 <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-colors">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="p-2.5 bg-purple-500/20 rounded-xl"><Home className="h-5 w-5 text-purple-400" /></div>
                     <h3 className="font-bold text-white text-lg">住宿归寝管理</h3>
                   </div>
                   <div className="space-y-4">
                     <div className="flex justify-between items-center">
                       <span className="text-sm text-slate-400">男生宿舍区归寝率</span>
                       <span className="text-sm font-bold text-white">100%</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-sm text-slate-400">女生宿舍区归寝率</span>
                       <span className="text-sm font-bold text-orange-400">99.8% (缺寝 2 人)</span>
                     </div>
                   </div>
                   <button className="mt-6 w-full py-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-lg text-sm font-medium hover:bg-purple-500/20 transition-colors">查看查寝日志</button>
                 </div>

                 {/* 安防告警模块 */}
                 <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-teal-500/30 transition-colors">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="p-2.5 bg-red-500/20 rounded-xl"><ShieldCheck className="h-5 w-5 text-red-400" /></div>
                     <h3 className="font-bold text-white text-lg">校园安全天眼</h3>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-red-500/5 border border-red-500/10 rounded-xl mb-3">
                     <div className="flex items-center gap-3">
                       <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                       <span className="text-sm text-red-400 font-medium">周界越线告警 (南门)</span>
                     </div>
                     <span className="text-xs text-slate-500">10:23 AM</span>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-xl">
                     <div className="flex items-center gap-3">
                       <div className="h-2 w-2 rounded-full bg-green-500"></div>
                       <span className="text-sm text-slate-300 font-medium">食堂明火检测 (正常)</span>
                     </div>
                     <span className="text-xs text-slate-500">10:24 AM</span>
                   </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* 全校用电模块 */}
                 <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-yellow-500/20 rounded-xl"><Zap className="h-5 w-5 text-yellow-400" /></div>
                        <h3 className="font-bold text-white text-lg">智能用电管控</h3>
                      </div>
                      <span className="text-sm font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full">能耗正常</span>
                    </div>
                    <div className="h-48 border-b border-l border-white/10 relative mt-4">
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path d="M0,100 C50,80 150,120 200,60 C250,0 350,90 400,30" stroke="#eab308" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" />
                        <path d="M0,100 C50,80 150,120 200,60 C250,0 350,90 400,30 L400,200 L0,200 Z" fill="url(#gradYellow)" opacity="0.2" />
                        <defs>
                          <linearGradient id="gradYellow" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#eab308" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex justify-between mt-4 text-sm text-slate-400">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                    </div>
                 </div>

                 {/* 物品资产流转 */}
                 <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                   <div className="flex items-center gap-3 mb-6">
                     <div className="p-2.5 bg-indigo-500/20 rounded-xl"><Package className="h-5 w-5 text-indigo-400" /></div>
                     <h3 className="font-bold text-white text-lg">资产与物品流转管理</h3>
                   </div>
                   <div className="space-y-4">
                     {[
                       { id: 'AST-8901', name: '化学实验室显微镜批次', action: '入库', time: '今天 09:15', status: '完成' },
                       { id: 'AST-8902', name: '高三(1)班多媒体终端', action: '报修', time: '昨天 16:30', status: '处理中' },
                       { id: 'AST-8903', name: '体育馆篮网耗材领用', action: '出库', time: '昨天 10:00', status: '完成' },
                     ].map((item, i) => (
                       <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                         <div>
                           <div className="text-white font-medium text-sm mb-1">{item.name}</div>
                           <div className="text-xs text-slate-500 font-mono">{item.id}</div>
                         </div>
                         <div className="text-right">
                           <div className={`text-xs font-bold px-2 py-1 rounded mb-1 inline-block ${item.action === '报修' ? 'bg-orange-500/20 text-orange-400' : 'bg-slate-500/20 text-slate-300'}`}>{item.action}</div>
                           <div className="text-xs text-slate-500 block">{item.time}</div>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          )}

          {/* TAB: TECH SUPPORT & R&D (New) */}
          {activeTab === 'tech-support' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
              <p className="text-slate-400 text-sm mb-6">负责设备全生命周期管理、数据安全防护体系构建、技术咨询与故障响应，并以技术研发为引擎，支撑各功能区的迭代优化与创新升级。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 {/* 设备全生命周期与故障响应 */}
                 <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                   <div className="flex justify-between items-center mb-6">
                     <div className="flex items-center gap-3">
                       <div className="p-2.5 bg-blue-500/20 rounded-xl"><Server className="h-5 w-5 text-blue-400" /></div>
                       <h3 className="font-bold text-white text-lg">设备全生命周期与响应</h3>
                     </div>
                     <span className="text-xs font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">工单台</span>
                   </div>
                   <div className="space-y-3">
                     {[
                       { device: '核心交换机 SW-Core-01', event: '固件漏洞升级 (维保期内)', type: '技术咨询', status: '待响应' },
                       { device: '南门人脸识别闸机 Gate-A', event: '镜头模组老化识别率下降', type: '故障响应', status: '维修中' },
                       { device: '数据中心存储节点 Node-3', event: '硬盘坏道预警 (触发自动迁移)', type: '生命周期维护', status: '已闭环' },
                     ].map((item, i) => (
                       <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors group cursor-pointer">
                         <div className="flex justify-between items-start mb-2">
                           <span className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">{item.device}</span>
                           <span className={`text-xs px-2 py-0.5 rounded ${item.status === '已闭环' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>{item.status}</span>
                         </div>
                         <div className="text-sm text-slate-400 mb-2">{item.event}</div>
                         <div className="text-xs text-slate-500 font-mono inline-block bg-black/20 px-2 py-1 rounded">{item.type}</div>
                       </div>
                     ))}
                   </div>
                 </div>

                 {/* 数据安全防护体系 */}
                 <div className="bg-[#0f172a] border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
                   <div className="flex justify-between items-center mb-6 relative z-10">
                     <div className="flex items-center gap-3">
                       <div className="p-2.5 bg-indigo-500/20 rounded-xl"><Shield className="h-5 w-5 text-indigo-400" /></div>
                       <h3 className="font-bold text-white text-lg">数据安全防护体系 (WAF)</h3>
                     </div>
                     <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
                       <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" /> 堡垒机已开启
                     </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4 relative z-10">
                     <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                       <div className="text-slate-400 text-xs mb-1">今日拦截恶意嗅探</div>
                       <div className="text-3xl font-black text-white">1,402 <span className="text-sm text-slate-500 font-normal">次</span></div>
                     </div>
                     <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                       <div className="text-slate-400 text-xs mb-1">数据库审计评级</div>
                       <div className="text-3xl font-black text-indigo-400">A+ <span className="text-sm text-slate-500 font-normal">无越权行为</span></div>
                     </div>
                   </div>
                   <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                     <h4 className="text-sm font-medium text-slate-300 mb-3">实时威胁态势日志</h4>
                     <div className="font-mono text-xs text-slate-500 space-y-2 h-24 overflow-y-auto custom-scrollbar">
                       <div><span className="text-red-400">[Block]</span> SQL Injection attempt from IP 114.xxx.xx.xx</div>
                       <div><span className="text-blue-400">[Audit]</span> Admin exported Teacher Data Archive.</div>
                       <div><span className="text-green-400">[Allow]</span> Syncing telemetry with City Education Bureau.</div>
                       <div><span className="text-red-400">[Block]</span> Brute force login blocked (Student Portal).</div>
                     </div>
                   </div>
                 </div>
              </div>

              {/* 技术研发支撑迭代 */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-purple-500/20 rounded-xl"><GitPullRequest className="h-5 w-5 text-purple-400" /></div>
                  <h3 className="font-bold text-white text-lg">技术研发引擎：系统迭代优化</h3>
                </div>
                <div className="flex gap-8 relative">
                  {/* Timeline track */}
                  <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-white/10"></div>
                  
                  <div className="space-y-8 w-full">
                    {/* Iteration 1 */}
                    <div className="flex gap-6 relative">
                      <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_#a855f7]">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="font-bold text-white">v1.2.0 - 教师工作台大满贯重构</span>
                          <span className="text-xs text-slate-500">已发布 (5月10日)</span>
                        </div>
                        <p className="text-sm text-slate-400">完成 9 大功能模块接入，新增思政、美育、体质健康模块，提升教师端使用体验深度。</p>
                      </div>
                    </div>
                    {/* Iteration 2 */}
                    <div className="flex gap-6 relative">
                      <div className="h-6 w-6 rounded-full border-2 border-indigo-500 bg-[#0a0a0a] flex items-center justify-center shrink-0 z-10">
                        <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></div>
                      </div>
                      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="font-bold text-indigo-300">Sprint 15 - AI 错题本自适应推荐算法优化</span>
                          <span className="text-xs text-indigo-400 font-medium">研发中 (进度 75%)</span>
                        </div>
                        <p className="text-sm text-indigo-200/70">针对高三学生的自适应算法引入新的知识图谱关联计算，预计提升推题准确率 20%。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: QUALITY EVALUATION */}
          {activeTab === 'quality-eval' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
               <div className="flex justify-between items-end mb-6">
                 <div>
                   <h3 className="text-2xl font-black text-white flex items-center gap-2"><Award className="text-yellow-400"/> 综合素质档案归档中心</h3>
                   <p className="text-slate-400 mt-1">汇总多维发展数据，期末一键生成全校学生综素报告单，对接市级教育局接口。</p>
                 </div>
                 <button className="px-4 py-2 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-xl hover:bg-yellow-500/30 transition-colors font-bold">
                   一键封卷归档 (本学期)
                 </button>
               </div>
               <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-16 text-center text-slate-500">
                 <Award className="w-16 h-16 mx-auto mb-4 text-white/10" />
                 本学期各年级“德智体美劳”五育评分计算中... <br/> 进度：高一年级 (92%), 高二年级 (85%)
               </div>
            </div>
          )}

          {/* TAB: ACADEMIC */}
          {activeTab === 'academic' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10 relative">
               <div className="flex justify-between items-end mb-6">
                 <div>
                   <h3 className="text-2xl font-black text-white flex items-center gap-2"><PieChart className="text-blue-400"/> 跨学段学业质量追踪大盘</h3>
                   <p className="text-slate-400 mt-1">脱离单一算分，AI 多维网络分析薄弱知识点及拔尖苗子长效追踪。</p>
                 </div>
                 <div className="flex gap-3">
                   <select 
                     className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500/50"
                     value={academicGradeFilter}
                     onChange={(e) => setAcademicGradeFilter(e.target.value)}
                   >
                     <option value="全校">全校</option>
                     <option value="高一">高一年级</option>
                     <option value="高二">高二年级</option>
                     <option value="高三">高三年级</option>
                   </select>
                   <select 
                     className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500/50"
                     value={academicSubjectFilter}
                     onChange={(e) => setAcademicSubjectFilter(e.target.value)}
                   >
                     <option value="全部">全部学科</option>
                     <option value="语文">语文</option>
                     <option value="数学">数学</option>
                     <option value="英语">英语</option>
                     <option value="物理">物理</option>
                   </select>
                 </div>
               </div>

               {/* Overview Cards */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                 <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-6">
                   <div className="text-sm font-medium text-blue-300 mb-2">年级均分趋势 (较上月)</div>
                   <div className="flex items-end gap-3">
                     <span className="text-4xl font-black text-white">82.5</span>
                     <span className="text-sm font-bold text-green-400 flex items-center"><TrendingUp className="w-4 h-4 mr-1"/>+2.3%</span>
                   </div>
                   <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[82.5%]"></div>
                   </div>
                 </div>
                 <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                   <div className="text-sm font-medium text-slate-400 mb-2">知识网络健康度</div>
                   <div className="flex items-end gap-3">
                     <span className="text-4xl font-black text-white">94</span>
                     <span className="text-sm text-slate-500 mb-1">/ 100</span>
                   </div>
                   <p className="text-xs text-slate-500 mt-3">全校共覆盖 2,450 个主干知识点</p>
                 </div>
                 <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-6">
                   <div className="text-sm font-medium text-rose-300 mb-2">急需关注的高危知识点</div>
                   <div className="flex items-end gap-3">
                     <span className="text-4xl font-black text-rose-400">3</span>
                     <span className="text-sm text-slate-500 mb-1">个班级触发预警</span>
                   </div>
                   <p className="text-xs text-rose-300/70 mt-3">主要集中在理科逻辑推演维度</p>
                 </div>
               </div>

               {/* Weak Points Alert List */}
               <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                 <AlertTriangle className="w-5 h-5 text-orange-400"/> AI 薄弱知识点预警
               </h4>
               <div className="grid gap-4">
                 {[
                   { id: 1, class: '高一(1)班', subject: '数学', point: '应用题步骤表达', issue: '题干信息整理与列式顺序判断不稳定', impact: '影响该班 45% 学生', level: 'high' },
                   { id: 2, class: '高一(4)班', subject: '物理', point: '牛顿第二定律综合', issue: '对多体系统受力分析缺乏整体隔离法思维', impact: '影响该班 38% 学生', level: 'high' },
                   { id: 3, class: '高二(3)班', subject: '英语', point: '完形填空长难句', issue: '非谓语动词作定语/状语判断失误率极高', impact: '影响该班 60% 学生', level: 'medium' },
                 ].map(risk => (
                   <div 
                     key={risk.id}
                     onClick={() => setSelectedAcademicRisk(risk)}
                     className="flex items-center justify-between p-5 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-blue-500/30 hover:bg-white/[0.05] transition-all cursor-pointer group"
                   >
                     <div className="flex items-center gap-5">
                       <div className={`w-2 h-12 rounded-full ${risk.level === 'high' ? 'bg-rose-500' : 'bg-orange-400'}`}></div>
                       <div>
                         <div className="flex items-center gap-3 mb-1">
                           <span className="font-bold text-white">{risk.class}</span>
                           <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">{risk.subject}</span>
                           <span className="text-sm font-medium text-slate-300">{risk.point}</span>
                         </div>
                         <div className="text-sm text-slate-400">{risk.issue}</div>
                       </div>
                     </div>
                     <div className="flex items-center gap-6">
                       <span className="text-sm text-slate-500">{risk.impact}</span>
                       <button className="flex items-center gap-1 text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                         查看归因 <ArrowRight className="w-4 h-4"/>
                       </button>
                     </div>
                   </div>
                 ))}
               </div>

               {/* Drill-down Modal/Slide-over */}
               {selectedAcademicRisk && (
                 <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                   <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedAcademicRisk(null)}></div>
                   <div className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-700 rounded-3xl p-8 shadow-2xl shadow-blue-900/20 animate-fade-in">
                     <button 
                       onClick={() => setSelectedAcademicRisk(null)}
                       className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-white/5 rounded-full transition-colors"
                     >
                       <XCircle className="w-6 h-6"/>
                     </button>
                     
                     <div className="flex items-center gap-3 mb-6">
                       <div className="p-3 bg-rose-500/20 rounded-2xl border border-rose-500/30">
                         <Activity className="w-6 h-6 text-rose-400"/>
                       </div>
                       <div>
                         <h3 className="text-2xl font-black text-white">{selectedAcademicRisk.point}</h3>
                         <div className="text-sm text-slate-400 mt-1">{selectedAcademicRisk.class} · {selectedAcademicRisk.subject}</div>
                       </div>
                     </div>

                     <div className="space-y-6">
                       <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                         <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2"><Brain className="w-4 h-4 text-purple-400"/> AI 深度归因</h4>
                         <p className="text-sm text-slate-300 leading-relaxed">
                           该知识点得分率显著低于同层次班级（偏差值 -12%）。<br/>
                           经大模型分析学生历次作业轨迹：<span className="text-white font-medium">{selectedAcademicRisk.issue}</span>。<br/>
                           这并非计算能力不足，而是阅读理解与数学符号转译的衔接环节存在集体性方法缺失。
                         </p>
                       </div>

                       <div>
                         <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2"><Network className="w-4 h-4 text-blue-400"/> 跨角色干预流转状态</h4>
                         <div className="space-y-3">
                           <div className="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                             <CheckCircle2 className="w-5 h-5 text-blue-400"/>
                             <div className="flex-1">
                               <div className="text-sm font-bold text-blue-100">已推送给授课教师</div>
                               <div className="text-xs text-blue-300/70 mt-0.5">提供专属变式训练题包及备课教案补充建议。</div>
                             </div>
                           </div>
                           <div className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                             <CheckCircle2 className="w-5 h-5 text-purple-400"/>
                             <div className="flex-1">
                               <div className="text-sm font-bold text-purple-100">已调度至学生端「自适应任务流」</div>
                               <div className="text-xs text-purple-300/70 mt-0.5">插入了 2 道前置引导性概念题，暂缓直接进行拔高训练。</div>
                             </div>
                           </div>
                           <div className="flex items-center gap-3 p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                             <Clock className="w-5 h-5 text-orange-400"/>
                             <div className="flex-1">
                               <div className="text-sm font-bold text-orange-100">待推送至家长端沟通建议</div>
                               <div className="text-xs text-orange-300/70 mt-0.5">建议家长本周关注孩子应用题步骤表达，是否一键发送话术？</div>
                             </div>
                             <button className="px-3 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-lg shadow-md hover:bg-orange-400">一键发送</button>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               )}
            </div>
          )}

          {/* TAB: AI SCHEDULING (Detail) */}
          {activeTab === 'ai-scheduling' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10 font-sans">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300 mb-2">AI 智能排课与算力调度引擎</h3>
                  <p className="text-slate-400">基于教师约束、场地限制与选课走班需求，进行全并发冲突检测与最优算力调度排课。</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border border-white/10 rounded-xl text-slate-300 hover:text-white bg-white/5 transition-colors">导出课表</button>
                  <button className="px-6 py-2 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(20,184,166,0.3)] flex items-center gap-2">
                    <Sparkles className="w-4 h-4"/> 启动新学期 AI 排课算法
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 bg-[#02120d] border border-teal-500/30 rounded-3xl p-6 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[60px]"></div>
                  <h4 className="font-bold text-white mb-6 flex items-center gap-2"><Cpu className="text-teal-400"/> 排课算力与规则引擎状态</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                     <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                        <div className="text-xs text-slate-400 mb-1">硬约束规则匹配率</div>
                        <div className="text-3xl font-black text-teal-400">100%</div>
                        <div className="text-xs text-slate-500 mt-1">无场地/时间冲突</div>
                     </div>
                     <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                        <div className="text-xs text-slate-400 mb-1">教师软约束满足度</div>
                        <div className="text-3xl font-black text-white">92.4%</div>
                        <div className="text-xs text-slate-500 mt-1">例：不排周五下午最后一节</div>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="bg-teal-900/20 border border-teal-500/20 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-sm font-bold text-teal-300">走班制排课进度 (高二年级)</span>
                           <span className="text-xs bg-teal-500/20 text-teal-200 px-2 py-1 rounded">正在回溯解空间</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-teal-400 w-[65%] rounded-full shadow-[0_0_10px_#2dd4bf]"></div>
                        </div>
                     </div>
                     
                     <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-4">
                        <div className="text-sm font-bold text-yellow-400 mb-1 flex items-center gap-2"><AlertTriangle className="w-4 h-4"/> 调度冲突预警 (需人工介入)</div>
                        <p className="text-xs text-slate-300">生物实验室A 容量不足，周二下午第 3 节有 3 个走班组合同时申请该场地。AI 建议：将组合 B 平移至周三上午第 1 节。</p>
                        <button className="mt-3 px-3 py-1.5 bg-yellow-500/20 text-yellow-300 text-xs border border-yellow-500/30 rounded-lg hover:bg-yellow-500/30">采纳 AI 建议并重算</button>
                     </div>
                  </div>
                </div>

                <div className="col-span-1 flex flex-col gap-6">
                   <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex-1">
                      <h4 className="font-bold text-white mb-4">代课临时调度流转</h4>
                      <div className="space-y-3">
                         <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                            <div className="text-xs font-bold text-red-400 mb-1">张伟 (数学) - 突发病假</div>
                            <div className="text-xs text-slate-300 mb-2">今日第 4 节 (高一3班)</div>
                            <button className="w-full py-1.5 bg-red-500/20 text-red-300 rounded text-xs border border-red-500/30">AI 一键指派同组代课</button>
                         </div>
                         <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                            <div className="text-xs font-bold text-slate-300 mb-1">李华 (英语) - 外出教研</div>
                            <div className="text-xs text-slate-400 mb-2">明日第 1,2 节调课至周四</div>
                            <div className="text-xs text-green-400">已自动通知学生与家长端</div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: RESOURCES */}
          {activeTab === 'resources' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
               <div className="flex justify-between items-end mb-6">
                 <div>
                   <h3 className="text-2xl font-black text-white flex items-center gap-2"><Library className="text-teal-400"/> 校本题库与生成式课件审核</h3>
                   <p className="text-slate-400 mt-1">对全校教师使用 AI 生成的课件、题库进行版权与合规审核，沉淀学校数字教研资产。</p>
                 </div>
               </div>
               <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-16 text-center text-slate-500">
                 <Library className="w-16 h-16 mx-auto mb-4 text-white/10" />
                 待审核的 AI 生成课件列表 (空)
               </div>
            </div>
          )}

          {/* TAB: TECH & AESTHETIC */}
          {activeTab === 'tech-aesthetic' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
               <div className="flex justify-between items-end mb-6">
                 <div>
                   <h3 className="text-2xl font-black text-white flex items-center gap-2"><Star className="text-teal-400"/> 科体美特色项目统筹管理</h3>
                   <p className="text-slate-400 mt-1">校园创客节项目资金审批、数字美术展馆资产统筹、特色课程选课容量大盘。</p>
                 </div>
               </div>
               <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-16 text-center text-slate-500">
                 <Star className="w-16 h-16 mx-auto mb-4 text-white/10" />
                 模块统筹加载中...
               </div>
            </div>
          )}

          {/* TAB: HEALTH WARNING (Detail) */}
          {activeTab === 'health-warning' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10 font-sans">
               <div className="flex justify-between items-end mb-6">
                 <div>
                   <h3 className="text-3xl font-black text-white mb-2 flex items-center gap-3">
                     <HeartPulse className="text-rose-400"/> 心理普测与体质健康预警中枢
                   </h3>
                   <p className="text-slate-400">联动学校医务室与心理辅导室，实现体质高危拦截与心理状态长效预警。</p>
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-6">
                  {/* 心理预警 */}
                  <div className="bg-[#1a0f14] border border-rose-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-[50px]"></div>
                     <div className="flex justify-between items-center mb-6 z-10 relative">
                        <h4 className="font-bold text-white text-lg flex items-center gap-2"><Brain className="w-5 h-5 text-rose-400"/> 心理健康普测态势大盘</h4>
                        <span className="text-xs bg-rose-500/20 text-rose-300 px-2 py-1 rounded">春季普测已完成 98%</span>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4 mb-6 z-10 relative">
                        <div className="bg-rose-950/40 border border-rose-500/20 rounded-xl p-4 text-center">
                           <div className="text-3xl font-black text-rose-400 mb-1">12</div>
                           <div className="text-xs text-rose-200">一级红色预警 (需紧急干预)</div>
                        </div>
                        <div className="bg-orange-950/40 border border-orange-500/20 rounded-xl p-4 text-center">
                           <div className="text-3xl font-black text-orange-400 mb-1">45</div>
                           <div className="text-xs text-orange-200">二级橙色预警 (需持续关注)</div>
                        </div>
                     </div>

                     <div className="bg-white/5 border border-white/10 rounded-xl p-4 z-10 relative">
                        <h5 className="text-sm font-bold text-white mb-3">AI 异常动向捕捉 (家校/班主任上报)</h5>
                        <ul className="space-y-3">
                           <li className="flex justify-between items-center border-b border-white/5 pb-2">
                              <div>
                                 <div className="text-sm text-slate-200">高二(4)班 王某某</div>
                                 <div className="text-xs text-slate-400">近一周频繁无故缺勤，家校沟通拒回。</div>
                              </div>
                              <button className="text-xs bg-rose-600 hover:bg-rose-500 text-white px-3 py-1.5 rounded-lg transition-colors">建档跟踪</button>
                           </li>
                           <li className="flex justify-between items-center">
                              <div>
                                 <div className="text-sm text-slate-200">初三(1)班 群体状态</div>
                                 <div className="text-xs text-slate-400">模拟考后整体焦虑指数环比上升 24%。</div>
                              </div>
                              <button className="text-xs bg-white/10 hover:bg-white/20 text-slate-300 px-3 py-1.5 rounded-lg transition-colors border border-white/10">指派团辅</button>
                           </li>
                        </ul>
                     </div>
                  </div>

                  {/* 体质医疗流转 */}
                  <div className="bg-[#0f1715] border border-emerald-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[50px]"></div>
                     <div className="flex justify-between items-center mb-6 z-10 relative">
                        <h4 className="font-bold text-white text-lg flex items-center gap-2"><Stethoscope className="w-5 h-5 text-emerald-400"/> 校医室与体质高危拦截</h4>
                        <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">实时联机中</span>
                     </div>
                     
                     <div className="space-y-4 z-10 relative">
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex gap-4">
                           <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                              <Activity className="w-6 h-6 text-red-500 animate-pulse"/>
                           </div>
                           <div className="flex-1">
                              <div className="flex justify-between items-start">
                                 <div className="text-sm font-bold text-red-400">心率超限紧急告警！</div>
                                 <span className="text-xs text-slate-500">刚刚</span>
                              </div>
                              <div className="text-xs text-white mt-1">高一(3)班 李华 (体育课中)，心率突破 182bpm。</div>
                              <div className="mt-3 flex gap-2">
                                 <button className="text-xs bg-red-600 text-white px-3 py-1.5 rounded-lg">呼叫校医室</button>
                                 <button className="text-xs bg-red-500/20 text-red-300 border border-red-500/30 px-3 py-1.5 rounded-lg">锁定位置</button>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                           <h5 className="text-sm font-bold text-slate-300 mb-2">免修体育名单审批 (特异体质库)</h5>
                           <div className="flex justify-between items-center text-sm py-1">
                              <span className="text-slate-300">初二(2)班 刘某 (先心病术后)</span>
                              <span className="text-emerald-400 font-bold">已入库</span>
                           </div>
                           <div className="flex justify-between items-center text-sm py-1 border-t border-white/5 mt-1 pt-2">
                              <span className="text-slate-300">高一(5)班 赵某 (腿部骨折)</span>
                              <button className="text-xs text-indigo-300 bg-indigo-500/20 px-2 py-1 rounded border border-indigo-500/30">待核实病历</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          )}

          {/* TAB: HOMESCHOOL */}
          {activeTab === 'homeschool' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
               <div className="flex justify-between items-end mb-6">
                 <div>
                   <h3 className="text-2xl font-black text-white flex items-center gap-2"><MessageSquare className="text-purple-400"/> 家校通讯合规与舆情满意度审计</h3>
                   <p className="text-slate-400 mt-1">监控家校沟通频次，预防过度打扰或沟通盲区；一键下发问卷并由 AI 汇总满意度报告。</p>
                 </div>
               </div>
               <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-16 text-center text-slate-500">
                 <MessageSquare className="w-16 h-16 mx-auto mb-4 text-white/10" />
                 家校消息网关合规审计大盘...
               </div>
            </div>
          )}

          {/* TAB: DASHBOARD */}
          {activeTab === 'dashboard' && (
             <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
               {/* --- 1. 顶层核心指标 (Top Metrics) --- */}
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { label: '全域终端活跃', val: '4,102', unit: '端', icon: Building2, color: 'text-blue-400', bg: 'bg-blue-500/10', desc: '师/生/家长并发' },
                    { label: '课堂互动覆盖', val: '92.5', unit: '%', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/10', desc: '随堂测验/抢答' },
                    { label: 'AI消灭薄弱点', val: '1.2', unit: '万个', icon: Zap, color: 'text-indigo-400', bg: 'bg-indigo-500/10', desc: '知识图谱补漏' },
                    { label: '智能教案库产出', val: '348', unit: '份', icon: FileText, color: 'text-orange-400', bg: 'bg-orange-500/10', desc: '本周自动生成' },
                    { label: '家校共育指数', val: '98', unit: '分', icon: HeartHandshake, color: 'text-rose-400', bg: 'bg-rose-500/10', desc: '报告阅览率 99%' },
                    { label: '底层大模型算力', val: '42', unit: 'TFlops', icon: Cpu, color: 'text-teal-400', bg: 'bg-teal-500/10', desc: '多模态并发健康' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 hover:bg-white/[0.05] transition-colors flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                          <stat.icon className="h-4 w-4" />
                        </div>
                        <span className="text-slate-400 text-xs font-medium whitespace-nowrap">{stat.label}</span>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-white">{stat.val} <span className="text-xs text-slate-500 font-normal">{stat.unit}</span></div>
                        <div className="text-[10px] text-slate-500 mt-1">{stat.desc}</div>
                      </div>
                    </div>
                  ))}
               </div>

               {/* --- 2. 宏观图表与大面板区 --- */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 
                 {/* 【学生群像】五育发展全景雷达 */}
                 <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Orbit className="h-24 w-24 text-indigo-400" /></div>
                    <h3 className="font-bold text-white text-lg mb-1 flex items-center gap-2"><Star className="h-5 w-5 text-indigo-400"/> 五育发展全景画像</h3>
                    <p className="text-xs text-slate-400 mb-6">全校初/高中部综合素养模型</p>
                    
                    <div className="relative w-full aspect-square max-w-[240px] mx-auto mt-4">
                       {/* 模拟的雷达图 SVG */}
                       <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                         <polygon points="50,10 90,40 75,90 25,90 10,40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                         <polygon points="50,25 75,45 65,75 35,75 25,45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                         <polygon points="50,40 60,50 55,60 45,60 40,50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                         
                         {/* 实际数据多边形 */}
                         <polygon points="50,15 85,35 80,85 30,75 15,35" fill="rgba(99, 102, 241, 0.2)" stroke="#818cf8" strokeWidth="2" className="animate-pulse-slow" />
                         
                         {/* 轴线 */}
                         <line x1="50" y1="50" x2="50" y2="10" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                         <line x1="50" y1="50" x2="90" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                         <line x1="50" y1="50" x2="75" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                         <line x1="50" y1="50" x2="25" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                         <line x1="50" y1="50" x2="10" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                         
                         {/* 标签 */}
                         <text x="50" y="5" fill="#94a3b8" fontSize="6" textAnchor="middle">智育(学科)</text>
                         <text x="95" y="40" fill="#94a3b8" fontSize="6" textAnchor="start">科技素养</text>
                         <text x="75" y="98" fill="#94a3b8" fontSize="6" textAnchor="middle">体育健康</text>
                         <text x="25" y="98" fill="#94a3b8" fontSize="6" textAnchor="middle">美育(艺术)</text>
                         <text x="5" y="40" fill="#94a3b8" fontSize="6" textAnchor="end">德育(思政)</text>
                       </svg>
                    </div>
                 </div>

                 {/* 【教学质量】智能作业与评估追踪 */}
                 <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:col-span-2">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="font-bold text-white text-lg mb-1 flex items-center gap-2"><LineChart className="h-5 w-5 text-purple-400"/> 教学质量双轨评估</h3>
                        <p className="text-xs text-slate-400">智能作业布置量 vs 知识点平均掌握率</p>
                      </div>
                      <div className="flex gap-4">
                         <div className="flex items-center gap-2 text-xs text-slate-400"><div className="h-2 w-4 rounded bg-indigo-500/40 border border-indigo-400"></div> 智能作业总数</div>
                         <div className="flex items-center gap-2 text-xs text-slate-400"><div className="h-2 w-2 rounded-full bg-orange-400"></div> 平均掌握率</div>
                      </div>
                    </div>
                    
                    <div className="h-48 border-b border-l border-white/10 relative mt-4">
                       {/* SVG 双曲线与柱状图复合图表 */}
                       <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                         {/* 柱状图 (作业布置量) */}
                         {[10, 30, 50, 70, 90].map((x, i) => {
                            const heights = [40, 60, 45, 80, 50];
                            return (
                              <rect key={i} x={`${x}%`} y={`${100 - heights[i]}%`} width="5%" height={`${heights[i]}%`} fill="rgba(99, 102, 241, 0.2)" rx="2" className="hover:fill-indigo-500/40 transition-colors cursor-pointer" />
                            );
                         })}
                         
                         {/* 折线图 (掌握率) */}
                         <path d="M12.5,40 L32.5,30 L52.5,45 L72.5,15 L92.5,25" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                         
                         {/* 折线数据点 */}
                         {[
                           { x: '12.5%', y: '40%' },
                           { x: '32.5%', y: '30%' },
                           { x: '52.5%', y: '45%' },
                           { x: '72.5%', y: '15%' },
                           { x: '92.5%', y: '25%' },
                         ].map((pos, i) => (
                           <circle key={i} cx={pos.x} cy={pos.y} r="3" fill="#fb923c" className="animate-pulse" />
                         ))}
                       </svg>
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-slate-500 px-6">
                      <span>周一</span><span>周二</span><span>周三</span><span>周四</span><span>周五</span>
                    </div>
                 </div>

                 {/* 【平台生态】四端并发矩阵 */}
                 <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:col-span-2">
                   <h3 className="font-bold text-white text-lg mb-1 flex items-center gap-2"><Network className="h-5 w-5 text-blue-400"/> 平台多端生态活跃矩阵</h3>
                   <p className="text-xs text-slate-400 mb-6">各角色终端实时在线热力与行为监控</p>
                   
                   <div className="space-y-4">
                     {[
                       { role: '学生伴学端', count: '2,845', rate: '85%', color: 'bg-blue-500', activeState: '在线答题中' },
                       { role: '教师工作台', count: '142', rate: '95%', color: 'bg-purple-500', activeState: '智能备课/改卷' },
                       { role: '家长移动端', count: '1,104', rate: '42%', color: 'bg-orange-500', activeState: '查阅学情报告' },
                       { role: '管理指挥舱', count: '11', rate: '100%', color: 'bg-teal-500', activeState: '系统巡查中' }
                     ].map((t, i) => (
                       <div key={i} className="flex items-center gap-4">
                         <div className="w-24 text-sm font-medium text-slate-300">{t.role}</div>
                         <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden flex">
                           <div className={`h-full ${t.color}`} style={{ width: t.rate }}></div>
                         </div>
                         <div className="w-16 text-right font-mono text-sm text-slate-200">{t.count}</div>
                         <div className="w-24 text-right text-xs text-slate-500 truncate">{t.activeState}</div>
                       </div>
                     ))}
                   </div>
                 </div>

                 {/* 【资源沉淀】校本知识图谱 */}
                 <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-indigo-500/20 rounded-2xl p-6">
                   <h3 className="font-bold text-indigo-300 text-lg mb-1 flex items-center gap-2"><Database className="h-5 w-5"/> 数字校本沉淀池</h3>
                   <p className="text-xs text-indigo-200/50 mb-6">日常教与学行为自动转化为学校资产</p>
                   
                   <div className="space-y-5 mt-4">
                     <div>
                       <div className="flex justify-between text-xs text-slate-300 mb-1">
                         <span>AI 微课视频库</span>
                         <span className="font-mono text-indigo-400">1,204 课时</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full"><div className="h-full bg-indigo-400 w-[60%] rounded-full shadow-[0_0_8px_#818cf8]"></div></div>
                     </div>
                     <div>
                       <div className="flex justify-between text-xs text-slate-300 mb-1">
                         <span>高精校本题库</span>
                         <span className="font-mono text-purple-400">45,800 题</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full"><div className="h-full bg-purple-400 w-[85%] rounded-full shadow-[0_0_8px_#c084fc]"></div></div>
                     </div>
                     <div>
                       <div className="flex justify-between text-xs text-slate-300 mb-1">
                         <span>优质智能教案</span>
                         <span className="font-mono text-rose-400">890 份</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full"><div className="h-full bg-rose-400 w-[40%] rounded-full shadow-[0_0_8px_#fb7185]"></div></div>
                     </div>
                   </div>
                   <button className="mt-8 w-full py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg text-xs font-bold transition-colors border border-indigo-500/30">
                     进入资产资源库
                   </button>
                 </div>

               </div>
            </div>
          )}

          {/* TAB: OA */}
          {activeTab === 'oa' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 rounded-2xl">
                 <div className="p-2 bg-indigo-500/20 rounded-xl"><Brain className="h-6 w-6 text-indigo-400" /></div>
                 <div>
                   <h3 className="font-bold text-white text-lg flex items-center gap-2">AI 行政副校长 <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/30">在线运行中</span></h3>
                   <p className="text-xs text-indigo-200/70">已接入《校园规章大模型库》，为您提供智能审批辅助与决策参考。</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 左栏：AI 辅助智能审批流 */}
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="font-bold text-slate-300 mb-2 flex items-center gap-2"><Sparkles className="h-4 w-4 text-yellow-400"/> 智能辅助审批待办</h4>
                  {oaTasks.map(t => (
                    <div key={t.id} className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-indigo-500/30 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-4">
                           <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold border border-white/10">{t.applicant[0]}</div>
                           <div>
                             <h5 className="font-bold text-white">{t.applicant} <span className="text-sm font-normal text-slate-400 mx-2">申请</span> <span className="text-sm text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">{t.type}</span></h5>
                             <div className="text-xs text-slate-500 mt-1 font-mono">{t.id} | {t.date}</div>
                           </div>
                        </div>
                        <div>
                          {t.status === 'pending' && <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs"><Clock className="h-3 w-3 inline mr-1"/>待您审批</span>}
                          {t.status === 'approved' && <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs"><CheckCircle2 className="h-3 w-3 inline mr-1"/>已通过</span>}
                          {t.status === 'rejected' && <span className="px-3 py-1 rounded-full bg-slate-500/10 text-slate-400 border border-slate-500/20 text-xs"><XCircle className="h-3 w-3 inline mr-1"/>已驳回</span>}
                        </div>
                      </div>
                      
                      <div className="mb-4 text-sm text-slate-300 bg-black/20 p-3 rounded-xl border border-white/5">
                        <span className="text-slate-500">申请事由：</span>{t.reason}
                        {t.duration !== '-' && <span className="ml-4"><span className="text-slate-500">时长/金额：</span>{t.duration}</span>}
                      </div>

                      {/* AI 大模型辅助分析面板 */}
                      <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-4 relative overflow-hidden mb-4">
                         <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                         <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center justify-center bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-2 min-w-[60px]">
                               <div className="text-xs text-indigo-300 mb-1">合规度</div>
                               <div className={`text-xl font-black ${t.aiScore >= 90 ? 'text-green-400' : 'text-orange-400'}`}>{t.aiScore}</div>
                            </div>
                            <div className="flex-1">
                               <div className="flex items-center gap-2 mb-1">
                                  <Bot className="h-4 w-4 text-indigo-400" />
                                  <span className="text-sm font-bold text-indigo-300">AI 审核意见</span>
                                  <div className="flex gap-2 ml-2">
                                     {t.aiTags?.map((tag, idx) => <span key={idx} className="text-[10px] px-1.5 py-0.5 bg-indigo-500/20 text-indigo-200 rounded">{tag}</span>)}
                                  </div>
                               </div>
                               <p className="text-xs text-indigo-200/80 leading-relaxed">{t.aiAdvice}</p>
                            </div>
                         </div>
                      </div>

                      <div className="flex justify-end gap-3 pt-3 border-t border-white/5">
                        {t.status === 'pending' ? (
                          <>
                            <button onClick={() => handleApproveOA(t.id, false)} className="px-4 py-2 text-xs font-medium text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors">驳回申请</button>
                            <button onClick={() => handleApproveOA(t.id, true)} className="px-4 py-2 text-xs font-medium text-indigo-900 bg-indigo-400 border border-indigo-400 rounded-lg hover:bg-indigo-300 transition-colors flex items-center gap-1"><ThumbsUp className="h-3 w-3"/> 一键同意</button>
                          </>
                        ) : (
                          <span className="text-xs text-slate-500">已处理完毕</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 右栏：智能公文与预测 */}
                <div className="space-y-6">
                  
                  {/* 智能公文起草 */}
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                     <h4 className="font-bold text-slate-300 mb-4 flex items-center gap-2"><PenTool className="h-4 w-4 text-orange-400"/> 一键起草公文</h4>
                     <textarea 
                       placeholder="例如：输入“下周一下午2点全校消防演练”，AI将自动生成标准红头文件草稿..." 
                       className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-orange-500/50 resize-none h-24 mb-3"
                     ></textarea>
                     <button className="w-full py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 rounded-xl text-sm font-medium hover:from-orange-500/30 hover:to-red-500/30 transition-colors flex items-center justify-center gap-2">
                       <Sparkles className="h-4 w-4" /> 生成标准公文
                     </button>
                  </div>

                  {/* AI 会议纪要提炼 */}
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                     <h4 className="font-bold text-slate-300 mb-4 flex items-center gap-2"><FileText className="h-4 w-4 text-blue-400"/> 最新会议 AI 纪要</h4>
                     <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-4">
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-sm font-bold text-white">周一行政例会</span>
                         <span className="text-xs text-slate-500">昨天 10:00</span>
                       </div>
                       <p className="text-xs text-slate-400 mb-3 border-b border-white/5 pb-3">AI 提炼核心决议：1. 严抓高三晚自习纪律；2. 审批通过物理组仪器采购预算；3. 筹备下周校运会报名。</p>
                       <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                             <span className="text-slate-300 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> 校运会筹备</span>
                             <span className="text-slate-500">责任人: 体艺组</span>
                          </div>
                          <div className="flex justify-between text-xs">
                             <span className="text-slate-300 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> 物理仪器采购</span>
                             <span className="text-slate-500">责任人: 后勤处</span>
                          </div>
                       </div>
                       <button className="mt-4 w-full py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-medium hover:bg-blue-500/20 transition-colors">查看完整速记</button>
                     </div>
                  </div>

                  {/* 资源智能预测 */}
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                     <h4 className="font-bold text-slate-300 mb-4 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-green-400"/> 下月办公耗材预测</h4>
                     <div className="space-y-3">
                        <div className="flex justify-between items-center bg-black/20 p-2.5 rounded-lg border border-white/5">
                           <div className="flex items-center gap-3">
                             <div className="p-1.5 bg-red-500/20 rounded text-red-400"><AlertTriangle className="h-3 w-3"/></div>
                             <div>
                               <div className="text-sm text-white">A4 打印纸</div>
                               <div className="text-[10px] text-slate-500">近期考试频繁消耗剧增</div>
                             </div>
                           </div>
                           <div className="text-right">
                              <div className="text-xs text-red-400 font-bold">缺口 ~25箱</div>
                           </div>
                        </div>
                        <div className="flex justify-between items-center bg-black/20 p-2.5 rounded-lg border border-white/5">
                           <div className="flex items-center gap-3">
                             <div className="p-1.5 bg-yellow-500/20 rounded text-yellow-400"><Package className="h-3 w-3"/></div>
                             <div>
                               <div className="text-sm text-white">白板笔/马克笔</div>
                               <div className="text-[10px] text-slate-500">按往年同期趋势</div>
                             </div>
                           </div>
                           <div className="text-right">
                              <div className="text-xs text-yellow-400 font-bold">缺口 ~10盒</div>
                           </div>
                        </div>
                     </div>
                     <button className="mt-4 w-full py-2 bg-green-500/10 text-green-400 border border-green-500/20 rounded-xl text-sm font-medium hover:bg-green-500/20 transition-colors flex justify-center items-center gap-2">
                       <Plus className="h-4 w-4" /> 一键生成采购清单
                     </button>
                  </div>

                </div>
              </div>

            </div>
          )}

          {/* --- ADMIN BACKEND TABS --- */}

          {/* ADMIN: TEACHERS */}
          {activeTab === 'teachers' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
              <div className="flex items-center justify-between">
                 <div className="flex gap-4">
                    <div className="relative">
                      <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input type="text" placeholder="按姓名/工号搜索" className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:border-indigo-500/50 w-64 text-white" />
                    </div>
                    <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-slate-300 focus:outline-none">
                      <option>所有学科</option>
                      <option>语文</option>
                      <option>数学</option>
                      <option>英语</option>
                    </select>
                 </div>
                 <div className="flex gap-3">
                   <ActionButton icon={Download} label="导出" variant="ghost" />
                   <ActionButton icon={Plus} label="新增教职工" variant="primary" />
                 </div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="px-6 py-4 text-slate-400 font-medium">工号</th>
                      <th className="px-6 py-4 text-slate-400 font-medium">姓名</th>
                      <th className="px-6 py-4 text-slate-400 font-medium">学科 / 职务</th>
                      <th className="px-6 py-4 text-slate-400 font-medium">联系方式</th>
                      <th className="px-6 py-4 text-slate-400 font-medium">账号状态</th>
                      <th className="px-6 py-4 text-slate-400 font-medium text-right">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 'T202401', name: '王建国', role: '数学 / 组长', phone: '138****1234', active: true },
                      { id: 'T202402', name: '李红', role: '英语 / 教师', phone: '139****5678', active: true },
                      { id: 'T202403', name: '张强', role: '物理 / 教师', phone: '137****9012', active: false },
                    ].map(u => (
                      <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4 font-mono text-slate-400">{u.id}</td>
                        <td className="px-6 py-4 font-bold text-white flex items-center gap-3">
                          <div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center text-xs">{u.name[0]}</div>
                          {u.name}
                        </td>
                        <td className="px-6 py-4 text-slate-300">{u.role}</td>
                        <td className="px-6 py-4 text-slate-400 font-mono text-xs">{u.phone}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-md text-xs font-medium border ${u.active ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                            {u.active ? '正常' : '已禁用'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ActionButton icon={Key} variant="ghost" />
                            <ActionButton icon={Edit2} variant="ghost" />
                            <ActionButton icon={Trash2} variant="danger" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ADMIN: STUDENTS */}
          {activeTab === 'students' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
               <div className="flex items-center justify-between">
                 <div className="flex gap-4">
                    <div className="relative">
                      <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input type="text" placeholder="按姓名/学号搜索" className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:border-indigo-500/50 w-64 text-white" />
                    </div>
                    <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-slate-300 focus:outline-none">
                      <option>高一年级</option>
                      <option>高二年级</option>
                    </select>
                 </div>
                 <div className="flex gap-3">
                   <ActionButton icon={Plus} label="新增学生" variant="primary" />
                 </div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="px-6 py-4 text-slate-400 font-medium">学号</th>
                      <th className="px-6 py-4 text-slate-400 font-medium">姓名</th>
                      <th className="px-6 py-4 text-slate-400 font-medium">班级</th>
                      <th className="px-6 py-4 text-slate-400 font-medium">监护人 (家长端)</th>
                      <th className="px-6 py-4 text-slate-400 font-medium text-right">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 'S2026001', name: '李小明', class: '高一(3)班', parent: '李建国 (父亲)', bind: true },
                      { id: 'S2026002', name: '张思思', class: '高一(3)班', parent: '王红 (母亲)', bind: true },
                      { id: 'S2026003', name: '刘浩宇', class: '高一(2)班', parent: '未绑定', bind: false },
                    ].map(u => (
                      <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4 font-mono text-slate-400">{u.id}</td>
                        <td className="px-6 py-4 font-bold text-white">{u.name}</td>
                        <td className="px-6 py-4 text-slate-300">{u.class}</td>
                        <td className="px-6 py-4">
                          <span className={`text-xs ${u.bind ? 'text-slate-300' : 'text-orange-400'}`}>{u.parent}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ActionButton icon={Edit2} variant="ghost" />
                            <ActionButton icon={MoreVertical} variant="ghost" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ADMIN: CLASSES */}
          {activeTab === 'classes' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
               <div className="flex justify-end mb-6"><ActionButton icon={Plus} label="新增班级编制" variant="primary" /></div>
               <div className="grid grid-cols-3 gap-6">
                 {[
                   { name: '高一(1)班', type: '强基班', master: '张老师', count: 42 },
                   { name: '高一(2)班', type: '平行班', master: '王老师', count: 45 },
                   { name: '高一(3)班', type: '平行班', master: '李老师', count: 44 },
                 ].map((c, i) => (
                   <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
                     <div className="flex justify-between items-start mb-4">
                       <h3 className="text-xl font-bold text-white">{c.name}</h3>
                       <span className="text-xs px-2 py-1 bg-white/10 rounded-md text-slate-300">{c.type}</span>
                     </div>
                     <div className="space-y-3 mb-6 border-b border-white/5 pb-6">
                       <div className="flex justify-between text-sm"><span className="text-slate-500">班主任</span><span className="text-slate-300">{c.master}</span></div>
                       <div className="flex justify-between text-sm"><span className="text-slate-500">在册人数</span><span className="text-slate-300 font-mono">{c.count} 人</span></div>
                     </div>
                     <div className="flex justify-between gap-2">
                       <button className="flex-1 py-2 text-xs font-medium text-slate-400 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">学生名单</button>
                       <button className="flex-1 py-2 text-xs font-medium text-slate-400 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">课表配置</button>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* ADMIN: ROLES (RBAC) */}
          {activeTab === 'roles' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
               <p className="text-slate-400 mb-6 text-sm">配置不同角色对模块的访问与操作权限 (RBAC 矩阵)。</p>
               <div className="flex gap-6 items-start">
                 <div className="w-64 space-y-2">
                    {['超级管理员', '校领导', '年级组长', '普通教师', '学生', '家长'].map((r, i) => (
                      <div key={i} className={`px-4 py-3 rounded-xl border cursor-pointer font-medium text-sm transition-colors ${i===2 ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300' : 'bg-white/[0.02] border-white/5 text-slate-400 hover:bg-white/10'}`}>
                        {r}
                      </div>
                    ))}
                 </div>
                 <div className="flex-1 bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                   <h3 className="text-lg font-bold text-white mb-6">年级组长 - 权限分配矩阵</h3>
                   <div className="space-y-6">
                     {[
                       { mod: '全局质量驾驶舱', read: true, write: false, del: false },
                       { mod: '智慧行政 (OA)', read: true, write: true, del: false },
                       { mod: '学校管理模块', read: true, write: false, del: false },
                       { mod: '师生基础数据', read: true, write: false, del: false },
                     ].map((row, i) => (
                       <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                         <span className="font-medium text-slate-200">{row.mod}</span>
                         <div className="flex gap-8">
                           <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer"><input type="checkbox" checked={row.read} readOnly className="accent-indigo-500 w-4 h-4 rounded" /> 查看</label>
                           <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer"><input type="checkbox" checked={row.write} readOnly className="accent-indigo-500 w-4 h-4 rounded" /> 编辑</label>
                           <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer"><input type="checkbox" checked={row.del} readOnly className="accent-indigo-500 w-4 h-4 rounded" /> 删除</label>
                         </div>
                       </div>
                     ))}
                   </div>
                   <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                      <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg shadow-lg transition-colors">保存权限变更</button>
                   </div>
                 </div>
               </div>
            </div>
          )}

          {/* ADMIN: NOTICES */}
          {activeTab === 'notices' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
               <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">全校广播与通告</h3>
                  <ActionButton icon={Plus} label="发布新广播" variant="primary" />
               </div>
               <div className="space-y-4">
                 {[
                   { title: '关于本周五开展“数字课堂”观摩课的通知', target: '全体教师', date: '2024-05-18', read: '142/150' },
                   { title: '校园安全演练紧急疏散指南', target: '全体师生', date: '2024-05-10', read: '3900/4250' },
                 ].map((n, i) => (
                   <div key={i} className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl flex justify-between items-center hover:bg-white/[0.05] transition-colors cursor-pointer group">
                     <div>
                       <div className="flex items-center gap-3 mb-2">
                         <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs rounded">接收方: {n.target}</span>
                         <span className="text-xs text-slate-500">{n.date}</span>
                       </div>
                       <h4 className="text-white font-medium text-lg group-hover:text-indigo-400 transition-colors">{n.title}</h4>
                     </div>
                     <div className="text-right">
                       <div className="text-xs text-slate-400 mb-1">触达/阅读率</div>
                       <div className="font-mono text-lg font-bold text-indigo-400">{n.read}</div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

          {/* ADMIN: SYSTEM */}
          {activeTab === 'system' && (
            <div className="space-y-6 animate-fade-in max-w-6xl mx-auto pb-10">
              <div className="grid grid-cols-2 gap-8">
                
                {/* Basic Settings */}
                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">平台基础参数配置</h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">平台名称 (Title)</label>
                      <input type="text" value="AI+全域智慧教育融合平台" readOnly className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">当前学年学期</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none">
                        <option>2025-2026学年 春季学期</option>
                        <option>2025-2026学年 秋季学期</option>
                      </select>
                    </div>
                    <div className="pt-4 flex items-center justify-between border-t border-white/5">
                       <div>
                         <div className="text-sm font-medium text-white mb-1">全局多语言支持</div>
                         <div className="text-xs text-slate-500">开启后各终端支持中/英切换</div>
                       </div>
                       <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer shadow-inner">
                         <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full shadow-md" />
                       </div>
                    </div>
                    <div className="mt-8 pt-6">
                      <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold w-full transition-colors shadow-lg">保存基础配置</button>
                    </div>
                  </div>
                </div>

                {/* DB & Logs */}
                <div className="space-y-8">
                  <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white mb-1">云端数据备份</h4>
                      <p className="text-xs text-slate-400">上次自动备份: 今日 03:00 AM</p>
                    </div>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium border border-white/10 transition-colors">立即手动备份</button>
                  </div>
                  
                  <div className="bg-black/40 border border-white/5 rounded-3xl p-6 font-mono text-xs">
                    <h4 className="font-bold text-slate-300 mb-4 pb-2 border-b border-white/10 uppercase tracking-widest font-sans">System Operation Logs</h4>
                    <div className="space-y-2 text-slate-500">
                      <div><span className="text-green-500">[2024-05-15 10:24:12]</span> INFO: User[Admin] updated RBAC policy.</div>
                      <div><span className="text-green-500">[2024-05-15 09:12:00]</span> INFO: Batch imported 42 students to Class(1).</div>
                      <div><span className="text-yellow-500">[2024-05-15 08:00:01]</span> WARN: High CPU usage on Node(IoT-Gateway).</div>
                      <div><span className="text-green-500">[2024-05-15 03:00:00]</span> INFO: Daily Database Backup completed.</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>

      {/* --- MODALS --- */}
      {selectedOA && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
          <div className="w-full max-w-md bg-[#0f172a] border border-white/10 rounded-3xl p-8 shadow-2xl animate-slide-in-up">
            <div className="flex items-center gap-3 mb-6 text-indigo-400">
              <FileText className="h-6 w-6" />
              <h3 className="text-xl font-bold text-white">OA 事项审批</h3>
            </div>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-sm text-slate-400 mb-2">申请人: <span className="text-white font-medium">{selectedOA.applicant}</span></p>
                <p className="text-sm text-slate-400 mt-4 pt-4 border-t border-white/5 italic">"{selectedOA.reason}"</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setSelectedOA(null)} className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-medium transition-colors">取消</button>
              <button onClick={() => handleApproveOA(selectedOA.id, false)} className="flex-1 py-3 bg-red-500/20 text-red-400 rounded-xl text-sm font-medium transition-colors">驳回</button>
              <button onClick={() => handleApproveOA(selectedOA.id, true)} className="flex-1 py-3 bg-green-500/20 text-green-400 rounded-xl text-sm font-medium transition-colors">同意</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagementFlowPage;
