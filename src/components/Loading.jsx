
import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-4 sm:py-6 md:py-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8"  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className="w-10 h-10 border-t-6 border-b-6 border-red-500 rounded-full animate-spin"></div>
        <p className=" text-2xl font-bold animate-pulse text-white ">Loading...</p>
      </div>
    </div>
  );
}
export default Loading;
