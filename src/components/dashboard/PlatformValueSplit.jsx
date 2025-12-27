import React from 'react';
import { LayoutDashboard, ChevronDown } from 'lucide-react';

const PlatformValueSplit = () => (
  <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-white">
    <div className="p-6 pb-2 flex items-center justify-between">
       <div className="flex items-center gap-2">
         <div className="w-6 h-6 rounded bg-pink-50 flex items-center justify-center text-pink-500"><LayoutDashboard size={14}/></div>
         <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Platform value</span>
       </div>
       <ChevronDown size={14} className="text-gray-300" />
    </div>
    <div className="flex h-48">
      <div className="bg-[#D81B60] p-6 text-white w-2/5 flex flex-col justify-center">
        <div className="text-[9px] font-bold opacity-60 mb-2 uppercase tracking-tighter">Average monthly</div>
        <div className="text-xl font-bold mb-4">$18,552</div>
        <div className="text-[13px] font-bold mb-4">373 <span className="opacity-50 font-medium text-[11px]">97/276</span></div>
        <div className="text-[13px] font-bold">16% <span className="opacity-50 font-medium text-[11px]">51/318</span></div>
      </div>
      <div className="w-3/5 p-6 flex flex-col justify-end gap-3 bg-gray-50/30">
         <div className="h-24 flex items-end gap-1.5 px-1">
            <div className="w-full bg-pink-100 rounded-t-sm h-12"></div>
            <div className="w-full bg-slate-200 rounded-t-sm h-16"></div>
            <div className="w-full bg-slate-300 rounded-t-sm h-24"></div>
         </div>
         <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase"><span>Sep</span><span>Oct</span><span>Nov</span></div>
      </div>
    </div>
  </div>
);

export default PlatformValueSplit;