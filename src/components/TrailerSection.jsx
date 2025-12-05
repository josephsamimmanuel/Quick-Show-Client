import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets';
import ReactPlayer from 'react-player';
import BlurCircle from './BlurCircle';
import { PlayCircleIcon } from 'lucide-react';

function TrailerSection() {
    const[currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-24 overflow-hidden py-10'>
      <p className='text-lg font-medium text-gray-300 max-w-[960px] mx-auto mb-6'>Trailers</p>
      <div className='relative mt-6 max-w-[960px] mx-auto'>
        <BlurCircle top="-100px" right="-100px" />
        <div className='relative w-full' style={{ paddingTop: '56.25%' }}>
          <div className='absolute inset-0 w-full h-full'>
            <ReactPlayer
              src={currentTrailer?.videoUrl}
              controls={true}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-6 sm:mt-8 max-w-3xl mx-auto px-4 sm:px-0'>
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer?.videoUrl}
            className='relative group hover:-translate-y-1.5 duration-300 transition cursor-pointer'
            onClick={() => setCurrentTrailer(trailer)}
          >
              <img
                src={trailer?.image}
                alt={trailer?.title || 'Trailer thumbnail'}
                className='w-full h-auto object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-80'
              />
                <PlayCircleIcon className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrailerSection
