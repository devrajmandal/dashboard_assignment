import React from 'react';
import { Menu, Filter } from 'lucide-react';

const ReferrerList = () => {
  const platforms = [
    { name: 'Dribbble', amount: '$227,459', share: '43%', color: 'bg-pink-100 text-pink-500', icon: 'D' },
    { name: 'Instagram', amount: '$142,823', share: '27%', color: 'bg-pink-100 text-pink-500', icon: 'I' },
    { name: 'Behance', amount: '$89,935', share: '11%', color: 'bg-blue-50 text-blue-500', icon: 'B' },
    { name: 'Google', amount: '$37,028', share: '7%', color: 'bg-slate-100 text-slate-500', icon: 'G' },
  ];

  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-white">
      <div className="flex items-center justify-between mb-6">
        <Menu size={18} className="text-gray-300" />
        <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-100 transition-colors">
          Filters <Filter size={14}/>
        </button>
      </div>
      <div className="space-y-5">
        {platforms.map((platform) => (
          <div key={platform.name} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-xl ${platform.color} flex items-center justify-center font-bold text-xs`}>
                {platform.icon}
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-gray-700 transition-colors">
                {platform.name}
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-700">{platform.amount}</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                {platform.share}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferrerList;