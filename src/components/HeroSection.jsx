import React from 'react'
import { assets } from '../assets/assets'
import { Calendar, Clock, MoveRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
      <img src={assets.marvelLogo} alt="marvel logo" className='w-36 h-auto' />
      <h1 className='text-white text-4xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Guardians <br/> of the Galaxy</h1>
      <div className='flex flex-col items-start justify-center gap-5'>
      <div className='flex items-start justify-center gap-4 text-sm md:text-base text-gray-200'>
        <span>Action | Adventure | Sci-Fi</span>
        <span className='flex items-center gap-2'><Calendar /> Calander 2025 </span>
        <span className='flex items-center gap-2'><Clock /> 1h 56m</span>
      </div>
      <p className='text-sm md:text-base max-w-110 text-gray-200'>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop conspiracy</p>
      <div className='flex items-start justify-center gap-4'>
        <button onClick={() => navigate('/movies')} className='bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2'>Explore Movies<MoveRight /></button>
      </div>
      </div>
    </div>
  )
}

export default HeroSection
