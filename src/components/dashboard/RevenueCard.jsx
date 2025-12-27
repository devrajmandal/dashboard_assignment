import React from 'react';
import { TrendingUp, ChevronDown } from 'lucide-react';

const TeamStat = ({ name, amount, percentage, bg }) => (
  <div className="flex items-center gap-2">
    <div className={`w-6 h-6 rounded-full ${bg} flex items-center justify-center text-[8px] font-bold text-white shadow-sm`}>{name}</div>
    <div className="flex flex-col">
      <span className="text-[11px] font-bold leading-none tracking-tighter">{amount}</span>
      <span className="text-[9px] text-gray-400 font-semibold">{percentage}</span>
    </div>
  </div>
);

const RevenueCard = () => (
  <div className="col-span-5 bg-white rounded-[32px] p-8 shadow-sm border border-white">
    <div className="text-sm font-bold text-slate-800 mb-2">Revenue</div>
    <div className="flex items-baseline gap-2 mb-1">
      <span className="text-5xl font-bold tracking-tight">$528,976</span>
      <span className="text-3xl text-slate-300 font-medium tracking-tight">.82</span>
      <div className="flex items-center gap-1 bg-pink-500 text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold ml-2">
        <TrendingUp size={10} /> 7.9%
      </div>
      <div className="bg-[#FF4D80] text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold">$27,335.09</div>
    </div>
    <div className="text-xs text-gray-400 mb-8 flex items-center gap-1">
      vs prev. $501,641.73 <span className="font-semibold text-slate-700">Jun 1 - Aug 31, 2023</span> <ChevronDown size={14} />
    </div>
    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
      <TeamStat name="A" amount="$209,633" percentage="39.63%" bg="bg-orange-300" />
      <TeamStat name="M" amount="$156,841" percentage="29.65%" bg="bg-cyan-300" />
      <TeamStat name="E" amount="$117,115" percentage="22.14%" bg="bg-orange-400" />
      <button className="px-5 py-2 bg-black text-white text-xs font-bold rounded-xl hover:bg-slate-800">Details</button>
    </div>
  </div>
);

export default RevenueCard;