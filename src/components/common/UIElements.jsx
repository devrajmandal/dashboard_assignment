import React from 'react';

export const Avatar = ({ name, color, textColor = "text-white" }) => (
  <div className={`w-8 h-8 rounded-full border-2 border-white ${color} flex items-center justify-center text-[10px] font-bold ${textColor} shadow-sm`}>
    {name}
  </div>
);

export const MetricBadge = ({ label, color }) => (
  <div className={`px-3 py-1.5 ${color} rounded-full text-[9px] font-bold shadow-sm cursor-default whitespace-nowrap`}>
    {label}
  </div>
);

export const StatBox = ({ label, value, trend, highlighted }) => (
  <div className={`bg-white rounded-[24px] p-4 shadow-sm border ${highlighted ? 'border-pink-500' : 'border-white'} flex flex-col items-center justify-center`}>
    <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${highlighted ? 'text-pink-500' : 'text-slate-300'}`}>{label}</div>
    <div className={`text-2xl font-bold ${highlighted ? 'text-pink-500' : 'text-slate-400'}`}>{value}</div>
    <div className={`text-[10px] font-bold ${highlighted ? 'text-pink-500' : 'text-slate-400'}`}>{trend}</div>
  </div>
);