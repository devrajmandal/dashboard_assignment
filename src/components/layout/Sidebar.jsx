import React from 'react';
import { Star, RotateCcw, ChevronDown, ChevronUp, Plus, Link2, Bell, HelpCircle, Settings } from 'lucide-react';

const TreeItem = ({ label, children, hasBadge, badgeCount, isPink, isHeader }) => (
  <div className="relative">
    <div className={`group flex items-center justify-between py-1 px-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors relative ${isHeader ? 'mt-2' : ''}`}>
      {!isHeader && <div className="absolute left-[-13px] top-[14px] w-3 h-[1px] bg-gray-200" />}
      <div className="flex items-center gap-2">
        <span className={`text-[13px] ${isPink ? 'text-pink-500 font-medium' : isHeader ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>{label}</span>
      </div>
      {hasBadge && <span className="bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">{badgeCount}</span>}
      {isHeader && <Plus size={14} className="text-gray-400 opacity-0 group-hover:opacity-100" />}
    </div>
    {children && <div className="ml-4 border-l border-gray-200 pl-3 my-0.5 relative">{children}</div>}
  </div>
);

const Sidebar = () => (
  <aside className="w-64 bg-white border-r border-gray-100 flex flex-col flex-shrink-0 h-screen">
    <div className="p-4 flex items-center gap-2">
      <div className="w-7 h-7 bg-black rounded flex items-center justify-center"><span className="text-white text-xs font-bold">C</span></div>
      <span className="font-bold text-sm tracking-tight">Codename.com</span>
      <ChevronDown size={14} className="ml-auto text-gray-400" />
    </div>
    <nav className="flex-1 px-3 py-2 overflow-y-auto">
      <div className="space-y-0.5">
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
              <TreeItem label="Cargo2go" /><TreeItem label="Cloudz3r" hasBadge badgeCount="2" /><TreeItem label="Idioma" /><TreeItem label="Syllables" /><TreeItem label="x-0b" />
            </div>
          </div>
        </TreeItem>
        <TreeItem label="Reports" isHeader>
          <div className="relative"><div className="flex items-center justify-between py-1 px-2 hover:bg-gray-50 rounded-md"><div className="absolute left-[-13px] top-[14px] w-3 h-[1px] bg-gray-200" /><span className="text-[13px] text-gray-500 font-medium">My reports</span><ChevronUp size={14} className="text-gray-400" /></div>
            <div className="ml-4 border-l border-gray-200 pl-3 mt-1"><TreeItem label="Emails received" /><TreeItem label="Deal duration" /><TreeItem label="New report" isPink /><TreeItem label="Analytics" hasBadge badgeCount="7" /></div>
          </div>
        </TreeItem>
        <div className="mt-4 flex items-center gap-2 py-2 px-2 text-xs text-gray-400 hover:text-gray-600 cursor-pointer"><Link2 size={14} /> <span>Manage folders</span></div>
      </div>
    </nav>
    <div className="p-4 border-t border-gray-100 flex items-center justify-between text-gray-400">
      <div className="relative cursor-pointer"><Bell size={18} /><span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-pink-500 rounded-full border-2 border-white" /></div>
      <HelpCircle size={18} /><Settings size={18} />
    </div>
  </aside>
);

export default Sidebar;