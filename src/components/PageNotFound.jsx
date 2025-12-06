import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-4 sm:py-6 md:py-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
        {/* Image - Responsive sizing with max height constraints */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[560px] 2xl:max-w-[640px] shrink-0">
          <img 
            src={assets.pageNotFound} 
            alt="page not found" 
            className="w-full h-auto object-contain max-h-[40vh] sm:max-h-[45vh] md:max-h-[50vh] lg:max-h-[55vh]"
          />
        </div>
        
        <p className="absolute top-110 left-120 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400 text-center max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-2">
          The page you are looking for does not exist.
        </p>
        
        <button 
          onClick={() => navigate('/')} 
          className="bg-primary hover:bg-primary-dull text-white px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 lg:px-4 lg:py-1.5 text-xs sm:text-sm md:text-base lg:text-lg rounded-full mt-2 sm:mt-3 md:mt-4 cursor-pointer transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default PageNotFound
