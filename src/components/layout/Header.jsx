import React from 'react';
import { Search, Plus } from 'lucide-react';
import { Avatar } from '../common/UIElements';

const Header = () => (
  <header className="flex items-center justify-between mb-8">
    {/* Global Search Bar */}
    <div className="flex-1 max-w-xl relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
      <input 
        type="text" 
        placeholder="Try searching 'insights'" 
        className="w-full pl-12 pr-4 py-2.5 bg-white rounded-full border border-gray-100 shadow-sm focus:outline-none text-sm" 
      />
    </div>

    {/* Top Right Avatar & Action Group */}
    <div className="flex items-center gap-4">
      <div className="flex -space-x-2">
        <Avatar name="AA" color="bg-yellow-400" />
        <Avatar name="EY" color="bg-orange-400" />
        <Avatar name="MA" color="bg-cyan-400" />
        <Avatar name="C" color="bg-black" />
      </div>
      <button className="w-8 h-8 rounded-full border border-gray-100 bg-white flex items-center justify-center text-gray-400 hover:bg-gray-50 shadow-sm">
        <Plus size={18} />
      </button>
      <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-xs shadow-md border-2 border-white cursor-pointer">
        US
      </div>
    </div>
  </header>
);

export default Header;