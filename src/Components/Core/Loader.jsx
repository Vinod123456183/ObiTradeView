import React from "react";

const Loader = () => {
  return (
    <div className="w-[100%]  gap-2  flex h-full items-center justify-center">
      <div className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.1s]">
        <div className="w-1 h-6 bg-green-500" />
        <div className="w-3 h-12 bg-green-500 rounded-sm" />
        <div className="w-1 h-6 bg-green-500" />
      </div>
      <div className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.2s]">
        <div className="w-1 h-6 bg-red-500" />
        <div className="w-3 h-12 bg-red-500 rounded-sm" />
        <div className="w-1 h-6 bg-red-500" />
      </div>
      <div className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.1s]">
        <div className="w-1 h-6 bg-green-500" />
        <div className="w-3 h-12 bg-green-500 rounded-sm" />
        <div className="w-1 h-6 bg-green-500" />
      </div>
    </div>
  );
};

export default Loader;
