import React from 'react';

export default function ActionButtons(  ) {
  return  (
    <div className="flex justify-between items-center w-full mb-4">
      <h2 className="text-xl font-bold">Popular</h2>
      <div className="flex items-center gap-[5px]">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-lg">
          ▶️
        </button>
        <button className="border border-white px-4 py-2 rounded-full">
          Follow
        </button>
        <button className="text-xl">🔄</button>
      </div>
    </div>
  );
}
