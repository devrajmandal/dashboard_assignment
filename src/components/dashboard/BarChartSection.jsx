import React from 'react';
import { BarChart3, ChevronDown, Filter } from 'lucide-react';

const Bar = ({ height, value, label, active }) => (
  <div className="flex flex-col items-center justify-end h-full gap-3 w-16 relative group">
    <div className={`text-[10px] font-bold text-pink-500 bg-white px-2.5 py-1.5 shadow-md rounded-lg absolute transition-all bottom-full mb-3 whitespace-nowrap ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
      {value}
    </div>
    <div className={`w-full rounded-2xl transition-all ${active ? 'bg-slate-200' : 'bg-slate-100 hover:bg-slate-200'} ${height}`}></div>
    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{label}</span>
  </div>
);

const BarChartSection = () => (
  <div className="col-span-5 bg-white rounded-[32px] p-8 shadow-sm border border-white">
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-1 text-gray-300"><BarChart3 size={20}/><ChevronDown size={14}/></div>
      <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-bold text-gray-500">
        Filters <Filter size={14}/>
      </button>
    </div>
    <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-12">
      Deals amount <br/> by referrer category
    </div>
    <div className="h-48 flex items-end justify-between px-10 pb-4 border-b border-gray-100">
       <Bar height="h-[60px]" value="$6,901" label="Sep" />
       <Bar height="h-[120px]" value="$11,035" label="Oct" active />
       <Bar height="h-[90px]" value="$9,288" label="Nov" />
    </div>
  </div>
);

export default BarChartSection;