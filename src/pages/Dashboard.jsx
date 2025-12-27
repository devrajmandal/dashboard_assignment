import React from 'react';
import { 
  Search, Plus, Bell, HelpCircle, Settings, Star, RotateCcw, 
  ChevronDown, ChevronUp, ChevronRight, Link2, TrendingUp, 
  Sliders, Download, Share2, Menu, Filter, LayoutDashboard, BarChart3
} from 'lucide-react';

// --- ATOMIC COMPONENTS ---
const Avatar = ({ name, color, textColor = "text-white" }) => (
  <div className={`w-8 h-8 rounded-full border-2 border-white ${color} flex items-center justify-center text-[10px] font-bold ${textColor} shadow-sm uppercase`}>
    {name.split(' ').map(n => n[0]).join('')}
  </div>
);

const MetricBadge = ({ label, color }) => (
  <div className={`px-3 py-1 ${color} rounded-full text-[10px] font-bold shadow-sm whitespace-nowrap`}>
    {label}
  </div>
);

// --- SIDEBAR TREE LOGIC ---
const TreeItem = ({ label, children, hasBadge, badgeCount, isPink, isHeader }) => (
  <div className="relative">
    <div className={`group flex items-center justify-between py-1 px-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors relative ${isHeader ? 'mt-2' : ''}`}>
      {!isHeader && <div className="absolute left-[-13px] top-[14px] w-3 h-[1px] bg-gray-200" />}
      <span className={`text-[13px] ${isPink ? 'text-pink-500 font-medium' : isHeader ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>{label}</span>
      {hasBadge && <span className="bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">{badgeCount}</span>}
      {isHeader && <Plus size={14} className="text-gray-400 opacity-0 group-hover:opacity-100" />}
    </div>
    {children && <div className="ml-4 border-l border-gray-200 pl-3 my-0.5 relative">{children}</div>}
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#FDFCFD] overflow-hidden font-sans antialiased text-slate-900">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col flex-shrink-0">
        <div className="p-4 flex items-center gap-2 border-b border-gray-50">
          <div className="w-7 h-7 bg-black rounded flex items-center justify-center text-white text-xs font-bold">C</div>
          <span className="font-bold text-sm">Codename.com</span>
          <ChevronDown size={14} className="ml-auto text-gray-400" />
        </div>
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <div className="space-y-1 mb-6">
            <div className="flex items-center gap-3 px-2 py-1.5 text-gray-400 hover:bg-gray-50 rounded-md cursor-pointer"><Star size={16} /><span className="text-sm font-medium">Starred</span></div>
            <div className="flex items-center gap-3 px-2 py-1.5 text-gray-400 hover:bg-gray-50 rounded-md cursor-pointer mb-2"><RotateCcw size={16} /><span className="text-sm font-medium">Recent</span></div>
            <div className="px-2 py-1.5 text-[13px] text-gray-600 font-medium">Sales list</div>
            <div className="px-2 py-1.5 text-[13px] text-gray-600 font-medium mb-4">Goals</div>
            <TreeItem label="Dashboard" isHeader>
              <TreeItem label="Codename" />
              <div className="relative">
                <div className="flex items-center justify-between py-1 px-2 hover:bg-gray-50 rounded-md">
                   <div className="absolute left-[-13px] top-[14px] w-3 h-[1px] bg-gray-200" />
                   <span className="text-[13px] text-gray-500 font-medium">Shared with me</span>
                   <ChevronUp size={14} className="text-gray-400" />
                </div>
                <div className="ml-4 border-l border-gray-200 pl-3 mt-1">
                  <TreeItem label="Cargo2go" />
                  <TreeItem label="Cloudz3r" hasBadge badgeCount="2" />
                  <TreeItem label="Idioma" />
                  <TreeItem label="Syllables" />
                  <TreeItem label="x-0b" />
                </div>
              </div>
            </TreeItem>
            <TreeItem label="Reports" isHeader>
              <div className="relative">
                <div className="flex items-center justify-between py-1 px-2 hover:bg-gray-50 rounded-md">
                   <div className="absolute left-[-13px] top-[14px] w-3 h-[1px] bg-gray-200" />
                   <span className="text-[13px] text-gray-500 font-medium">My reports</span>
                   <ChevronUp size={14} className="text-gray-400" />
                </div>
                <div className="ml-4 border-l border-gray-200 pl-3 mt-1">
                   <TreeItem label="Emails received" />
                   <TreeItem label="Deal duration" />
                   <TreeItem label="New report" isPink />
                   <TreeItem label="Analytics" hasBadge badgeCount="7" />
                </div>
              </div>
            </TreeItem>
          </div>
          <div className="mt-4 flex items-center gap-2 px-2 text-xs text-gray-400 hover:text-gray-600 cursor-pointer"><Link2 size={14} /><span>Manage folders</span></div>
        </nav>
        <div className="p-4 border-t border-gray-100 flex justify-between text-gray-400">
          <div className="relative"><Bell size={18} /><span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-pink-500 rounded-full border-2 border-white" /></div>
          <HelpCircle size={18} /><Settings size={18} />
        </div>
      </aside>

      {/* --- MAIN PANEL --- */}
      <main className="flex-1 overflow-auto bg-[#F8F9FB] p-8">
        
        {/* GLOBAL HEADER */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input type="text" placeholder="Try searching 'insights'" className="w-full pl-12 pr-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm focus:outline-none text-sm" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <Avatar name="Armin A" color="bg-yellow-400" />
              <Avatar name="Eren Y" color="bg-orange-400" />
              <Avatar name="Mikasa A" color="bg-cyan-400" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-black flex items-center justify-center text-[10px] text-white font-bold">C</div>
            </div>
            <button className="p-2 bg-white rounded-full border border-gray-100 shadow-sm hover:bg-gray-50"><Plus size={18} /></button>
            <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-[10px] shadow-md border-2 border-white cursor-pointer uppercase">US</div>
          </div>
        </header>

        {/* REPORT TITLE BAR */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-5xl font-bold text-slate-300 tracking-tight">New report</h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 text-gray-400">
               <button className="p-2 hover:bg-gray-100 rounded-lg"><Sliders size={18} /></button>
               <button className="p-2 hover:bg-gray-100 rounded-lg"><Download size={18} /></button>
               <button className="p-2 hover:bg-gray-100 rounded-lg"><Share2 size={18} /></button>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-3">
                <div className="w-10 h-5 bg-slate-800 rounded-full p-1 cursor-pointer"><div className="w-3 h-3 bg-white rounded-full ml-auto shadow-sm" /></div>
                <span className="text-gray-600">Timeframe</span>
              </div>
              <div className="px-5 py-2 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 cursor-pointer">
                <span className="text-gray-700">Sep 1 - Nov 30, 2023</span><ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* TOP CARDS ROW */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-5 bg-white rounded-[32px] p-8 shadow-sm border border-white">
            <div className="text-sm font-bold text-slate-800 mb-2">Revenue</div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-bold tracking-tight">$528,976</span>
              <span className="text-3xl text-slate-300 font-medium tracking-tight">.82</span>
              <div className="flex items-center gap-1 bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold ml-2"><TrendingUp size={10} /> 7.9%</div>
              <div className="bg-[#FF4D80] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">$27,335.09</div>
            </div>
            <div className="text-xs text-gray-400 mb-8">vs prev. $501,641.73 <span className="font-semibold text-slate-700">Jun 1 - Aug 31, 2023</span></div>
            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
              <div className="flex items-center gap-4">
                <Avatar name="A" color="bg-orange-300" /><Avatar name="M" color="bg-cyan-300" /><Avatar name="E" color="bg-orange-400" />
              </div>
              <button className="px-5 py-2 bg-black text-white text-xs font-bold rounded-xl">Details</button>
            </div>
          </div>

          <div className="col-span-2 bg-white rounded-[32px] p-8 shadow-sm border border-white flex flex-col justify-between group cursor-pointer">
            <div className="text-sm font-bold text-slate-400">Top sales</div>
            <div className="flex items-center justify-between"><span className="text-4xl font-bold">72</span><ChevronRight size={24} className="text-gray-300" /></div>
            <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-cyan-400 shadow-sm" /><span className="text-xs font-bold text-gray-600">Mikasa</span></div>
          </div>

          <div className="col-span-2 bg-black rounded-[32px] p-8 shadow-xl text-white relative overflow-hidden">
            <Star className="absolute top-6 right-6 text-white/30" size={18} /><div className="text-sm font-medium text-white/50 mb-6">Best deal</div>
            <div className="text-3xl font-bold mb-1">$42,300</div><div className="text-xs text-white/50">Rolf Inc.</div>
            <div className="absolute bottom-8 right-8 w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center"><ChevronRight size={20} /></div>
          </div>

          <div className="col-span-3 grid grid-cols-2 gap-5">
            <div className="bg-white rounded-[24px] p-4 flex flex-col items-center justify-center border border-white shadow-sm">
               <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Deals</span>
               <span className="text-2xl font-bold text-slate-400">256</span>
               <span className="text-[10px] text-slate-300">↓ 5</span>
            </div>
            <div className="bg-white rounded-[24px] p-4 flex flex-col items-center justify-center border border-pink-500 shadow-sm text-pink-500">
               <span className="text-[10px] font-bold uppercase tracking-widest">Value</span>
               <span className="text-2xl font-bold">528k</span>
               <span className="text-[10px] font-bold">↑ 7.9%</span>
            </div>
            <div className="bg-white rounded-[32px] p-4 border border-white flex flex-col items-center justify-center col-span-2 shadow-sm">
              <span className="text-[10px] font-bold text-slate-300 uppercase mb-1">Win rate</span>
              <div className="flex items-center gap-2"><span className="text-2xl font-bold text-slate-300">44%</span><span className="text-[11px] font-bold text-slate-400">↑ 1.2%</span></div>
            </div>
          </div>
        </div>

        {/* BOTTOM MAIN GRID */}
        <div className="grid grid-cols-12 gap-8 items-start">
          
          {/* LEFT: REFERRER & PLATFORM VALUE */}
          <div className="col-span-3 space-y-6">
            <div className="bg-white rounded-[32px] p-6 border border-white shadow-sm">
              <div className="flex justify-between mb-6 text-gray-300"><Menu size={18} /><Filter size={18} /></div>
              <div className="space-y-5">
                 {['Dribbble', 'Instagram', 'Behance', 'Google'].map((p, i) => (
                   <div key={p} className="flex justify-between items-center group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-pink-50 text-pink-500 font-bold flex items-center justify-center text-xs">{p[0]}</div>
                        <span className="text-sm text-gray-400 font-medium group-hover:text-gray-700">{p}</span>
                      </div>
                      <div className="text-right"><div className="text-sm font-bold text-gray-700">${[227, 142, 89, 37][i]}k</div><div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{[43, 27, 11, 7][i]}%</div></div>
                   </div>
                 ))}
              </div>
            </div>
            <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-white flex h-48">
                <div className="bg-[#D81B60] p-6 text-white w-2/5 flex flex-col justify-center">
                  <div className="text-[9px] font-bold opacity-60 mb-2 uppercase tracking-tighter">Average monthly</div>
                  <div className="text-xl font-bold mb-4">$18,552</div>
                  <div className="text-[13px] font-bold">373 <span className="opacity-50 font-medium text-[11px]">97/276</span></div>
                  <div className="text-[13px] font-bold">16% <span className="opacity-50 font-medium text-[11px]">51/318</span></div>
                </div>
                <div className="w-3/5 p-6 flex flex-col justify-end gap-3 bg-gray-50/30">
                   <div className="h-24 flex items-end gap-1.5 px-1">
                      <div className="w-full bg-pink-100 rounded-t-sm h-12" /><div className="w-full bg-slate-200 rounded-t-sm h-16" /><div className="w-full bg-slate-300 rounded-t-sm h-24" />
                   </div>
                   <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase"><span>Sep</span><span>Oct</span><span>Nov</span></div>
                </div>
            </div>
          </div>

          {/* MIDDLE: BAR CHART */}
          <div className="col-span-5 bg-white rounded-[32px] p-8 shadow-sm border border-white h-full">
            <div className="flex justify-between mb-8"><BarChart3 size={20} className="text-gray-300" /><Filter size={18} className="text-gray-300" /></div>
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-12">Deals amount <br/> by referrer category</div>
            <div className="h-48 flex items-end justify-between px-10 pb-4 border-b border-gray-100 relative">
               <div className="flex flex-col items-center gap-3 w-16 group">
                  <div className="opacity-0 group-hover:opacity-100 text-[10px] font-bold text-pink-500 bg-white px-2.5 py-1.5 shadow-md rounded-lg absolute bottom-full mb-3 whitespace-nowrap">$6,901</div>
                  <div className="w-full rounded-2xl bg-slate-100 h-16 group-hover:bg-slate-200 transition-all" /><span className="text-[10px] font-bold text-gray-300 uppercase">Sep</span>
               </div>
               <div className="flex flex-col items-center gap-3 w-16 group">
                  <div className="text-[10px] font-bold text-pink-500 bg-white px-2.5 py-1.5 shadow-md rounded-lg absolute bottom-full mb-3 whitespace-nowrap">$11,035</div>
                  <div className="w-full rounded-2xl bg-slate-200 h-36" /><span className="text-[10px] font-bold text-gray-300 uppercase">Oct</span>
               </div>
               <div className="flex flex-col items-center gap-3 w-16 group">
                  <div className="opacity-0 group-hover:opacity-100 text-[10px] font-bold text-pink-500 bg-white px-2.5 py-1.5 shadow-md rounded-lg absolute bottom-full mb-3 whitespace-nowrap">$9,288</div>
                  <div className="w-full rounded-2xl bg-slate-100 h-28 group-hover:bg-slate-200 transition-all" /><span className="text-[10px] font-bold text-gray-300 uppercase">Nov</span>
               </div>
            </div>
          </div>

          {/* RIGHT: EXPANDED PERFORMANCE SECTION */}
          <div className="col-span-4 space-y-4">
             <div className="flex justify-between text-[10px] font-bold text-gray-300 uppercase tracking-widest px-4 mb-4">
                 <span className="w-32">Sales</span><span className="w-20">Revenue</span><span className="w-12 text-center">Leads</span><span>KPI</span><span>W/L</span>
             </div>
             
             {/* ARMIN ROW */}
             <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-3 w-32"><Avatar name="AA" color="bg-yellow-400" /><span className="text-xs font-bold text-gray-600 truncate">Armin A.</span></div>
                <div className="text-xs font-bold text-slate-800 w-20 tracking-tighter">$209,633</div>
                <div className="flex items-center gap-1.5 w-12 text-center"><span className="text-[10px] font-bold text-white bg-slate-800 px-2 py-0.5 rounded-full">41</span><span className="text-[10px] font-bold text-gray-300">118</span></div>
                <span className="text-xs font-bold text-gray-400 w-10 text-center">0.84</span>
                <div className="flex items-center gap-1.5"><span className="text-[10px] font-bold text-gray-400">31%</span><div className="w-5 h-5 rounded-full bg-pink-500 text-white text-[10px] flex items-center justify-center font-bold">12</div><span className="text-[10px] font-bold text-gray-400">29</span></div>
             </div>

             {/* MIKASA EXPANDED */}
             <div className="bg-gradient-to-b from-white to-pink-50/20 rounded-[40px] p-4 shadow-sm border border-pink-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 w-32"><Avatar name="MA" color="bg-cyan-400" /><span className="text-xs font-bold text-gray-600">Mikasa A.</span></div>
                  <div className="text-xs font-bold text-slate-800 w-20 tracking-tighter">$156,841</div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white"><ChevronUp size={18} /></div>
                </div>
                <div className="flex gap-2 mb-6 ml-2">
                  <MetricBadge label="Top sales 💪" color="bg-white text-yellow-600 border border-yellow-100" />
                  <MetricBadge label="Sales streak 🔥" color="bg-white text-orange-600 border border-orange-100" />
                </div>
                <div className="text-[12px] font-bold text-gray-800 uppercase px-2 mb-4">Work with platforms</div>
                <div className="grid grid-cols-2 gap-4 px-2 mb-8">
                  <div className="bg-white rounded-3xl p-5 border border-gray-50 shadow-sm relative overflow-hidden h-36 flex flex-col justify-between">
                    <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 text-[10px] font-bold">D</div><span className="text-[11px] font-bold text-gray-400">Dribbble</span></div>
                    <div className="flex items-baseline gap-1"><span className="text-2xl font-bold text-slate-800">45.3%</span><span className="text-[14px] font-bold text-gray-300">$71,048</span></div>
                    <div className="absolute top-0 right-0 h-full w-14 bg-slate-50/40 rounded-r-3xl border-l border-gray-50 flex flex-col items-center justify-center gap-1.5">
                       <div className="w-1.5 h-6 bg-pink-100 rounded-full" /><div className="w-1.5 h-12 bg-pink-200 rounded-full" /><div className="w-1.5 h-9 bg-pink-100 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl p-3 border border-gray-50 shadow-sm flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded-lg bg-orange-50 text-orange-500 text-[10px] font-bold flex items-center justify-center">I</div><span className="text-[11px] font-bold text-gray-400">Instagram</span></div><div className="text-right text-[11px] font-bold text-gray-700">28.1%</div></div>
                    <div className="bg-white rounded-2xl p-3 border border-gray-50 shadow-sm flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-500 text-[10px] font-bold flex items-center justify-center">G</div><span className="text-[11px] font-bold text-gray-400">Google</span></div><div className="text-right text-[11px] font-bold text-gray-700">14.1%</div></div>
                  </div>
                </div>
                <div className="px-2 pb-6">
                  <div className="flex items-center justify-between mb-6"><span className="text-[12px] font-bold text-gray-800 uppercase">Sales dynamic</span><TrendingUp size={16} className="text-gray-300" /></div>
                  <div className="h-28 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                      <path d="M0 35 Q 15 35, 25 22 T 45 28 T 65 12 T 85 18 T 100 8" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="100" cy="8" r="3" fill="#ec4899" stroke="white" strokeWidth="1.5" />
                    </svg>
                    <div className="absolute -top-8 right-0 p-1.5 bg-pink-100 rounded-full shadow-sm"><Plus size={14} className="text-pink-500"/></div>
                  </div>
                </div>
             </div>

             {/* EREN ROW */}
             <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-3 w-32"><Avatar name="EY" color="bg-orange-400" /><span className="text-xs font-bold text-gray-600 truncate">Eren Y.</span></div>
                <div className="text-xs font-bold text-slate-800 w-20 tracking-tighter">$117,115</div>
                <div className="flex items-center gap-1.5 w-12 text-center"><span className="text-[10px] font-bold text-white bg-slate-800 px-2 py-0.5 rounded-full">22</span><span className="text-[10px] font-bold text-gray-300">84</span></div>
                <span className="text-xs font-bold text-gray-400 w-10 text-center">0.79</span>
                <div className="flex items-center gap-1.5"><span className="text-[10px] font-bold text-gray-400">32%</span><div className="w-5 h-5 rounded-full bg-pink-500 text-white text-[10px] flex items-center justify-center font-bold">7</div><span className="text-[10px] font-bold text-gray-400">15</span></div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;