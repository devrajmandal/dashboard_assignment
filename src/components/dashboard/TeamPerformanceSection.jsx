import React from 'react';
import { TrendingUp, ChevronUp, Plus } from 'lucide-react';
import { Avatar, MetricBadge } from '../common/UIElements';

const TeamRow = ({ name, amount, leads, leadsTotal, kpi, wl, badge, total, color }) => (
  <div className="flex items-center justify-between w-full">
    <div className="flex items-center gap-3 w-36">
      <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white text-[10px] font-bold shadow-sm`}>{name[0]}</div>
      <span className="text-[13px] font-bold text-gray-700 truncate">{name}</span>
    </div>
    <div className="text-[13px] font-bold text-slate-800 w-24 tracking-tighter">{amount}</div>
    <div className="flex items-center gap-1.5 w-14">
      <span className="text-[10px] font-bold text-white bg-slate-800 px-2 py-0.5 rounded-full">{leads}</span>
      <span className="text-[10px] font-bold text-gray-300">{leadsTotal}</span>
    </div>
    <div className="text-[13px] font-bold text-gray-400 w-12 text-center">{kpi}</div>
    <div className="flex items-center gap-2">
      <span className="text-[11px] font-bold text-gray-400">{wl}</span>
      <div className="w-5 h-5 rounded-full bg-pink-500 text-white text-[10px] flex items-center justify-center font-bold shadow-sm">{badge}</div>
      <span className="text-[11px] font-bold text-gray-400">{total}</span>
    </div>
  </div>
);

const TeamPerformanceSection = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-50">
        <TeamRow name="Armin A." amount="$209,633" leads="41" leadsTotal="118" kpi="0.84" wl="31%" badge="12" total="29" color="bg-yellow-400" />
      </div>

      <div className="bg-gradient-to-b from-white to-pink-50/20 rounded-[40px] p-1 shadow-sm border border-pink-100">
        <div className="p-4">
           <div className="flex items-center justify-between mb-5">
              <TeamRow name="Mikasa A." amount="$156,841" leads="54" leadsTotal="103" kpi="0.89" wl="39%" badge="21" total="33" color="bg-cyan-400" />
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white"><ChevronUp size={18}/></div>
           </div>
           
           <div className="flex gap-2 mb-8 ml-2">
              <MetricBadge label="Top sales 💪" color="bg-white text-yellow-600 border border-yellow-100" />
              <MetricBadge label="Sales streak 🔥" color="bg-white text-orange-600 border border-orange-100" />
              <MetricBadge label="Top review 👍" color="bg-white text-yellow-600 border border-yellow-100" />
           </div>

           <div className="text-[12px] font-bold text-gray-800 mb-4 px-2 uppercase">Work with platforms</div>
           
           <div className="grid grid-cols-2 gap-4 px-2 mb-8">
              <div className="bg-white rounded-3xl p-5 border border-gray-50 shadow-sm relative h-36 flex flex-col justify-between">
                <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 text-[10px] font-bold">D</div><span className="text-[11px] font-bold text-gray-400">Dribbble</span></div>
                <div className="flex items-baseline gap-1"><span className="text-2xl font-bold text-slate-800">45.3%</span><span className="text-[14px] font-bold text-gray-300">$71,048</span></div>
                <div className="absolute top-0 right-0 h-full w-14 bg-slate-50/40 rounded-r-3xl border-l border-gray-50 flex flex-col items-center justify-center gap-1.5">
                   <div className="w-1.5 h-6 bg-pink-100 rounded-full"></div><div className="w-1.5 h-12 bg-pink-200 rounded-full"></div><div className="w-1.5 h-9 bg-pink-100 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-4">
                 <div className="bg-white rounded-2xl p-3 border border-gray-50 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-lg bg-orange-50 text-orange-500 text-[10px] font-bold flex items-center justify-center">I</div><span className="text-[11px] font-bold text-gray-400">Instagram</span></div>
                    <div className="text-right text-[11px] font-bold text-gray-700 tracking-tighter">28.1% <br/> <span className="text-gray-300 text-[10px]">$44,072</span></div>
                 </div>
                 <div className="bg-white rounded-2xl p-3 border border-gray-50 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-500 text-[10px] font-bold flex items-center justify-center">G</div><span className="text-[11px] font-bold text-gray-400">Google</span></div>
                    <div className="text-right text-[11px] font-bold text-gray-700 tracking-tighter">14.1% <br/> <span className="text-gray-300 text-[10px]">$22,114</span></div>
                 </div>
              </div>
           </div>

           <div className="px-2 pb-6">
              <div className="flex items-center justify-between mb-6"><span className="text-[12px] font-bold text-gray-800 uppercase">Sales dynamic</span><TrendingUp size={16} className="text-gray-300" /></div>
              <div className="h-28 w-full relative">
                 <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                   <path d="M0 35 Q 15 35, 25 22 T 45 28 T 65 12 T 85 18 T 100 8" fill="none" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" />
                   <path d="M0 38 Q 15 38, 25 26 T 45 32 T 65 16 T 85 22 T 100 12" fill="none" stroke="#f1f5f9" strokeWidth="1.5" strokeLinecap="round" />
                   <circle cx="100" cy="8" r="3" fill="#ec4899" stroke="white" strokeWidth="1.5" />
                 </svg>
                 <div className="absolute -top-8 right-0 p-1.5 bg-pink-100 rounded-full"><Plus size={14} className="text-pink-500"/></div>
              </div>
           </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-50">
        <TeamRow name="Eren Y." amount="$117,115" leads="22" leadsTotal="84" kpi="0.79" wl="32%" badge="7" total="15" color="bg-orange-400" />
      </div>
    </div>
  );
};

export default TeamPerformanceSection;