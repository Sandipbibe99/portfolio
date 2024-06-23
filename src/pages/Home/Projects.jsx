import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { projects } from '../../resources/projects'

const Projects = () => {
    const [activeItem , setActiveItem] = useState(0)
  return (
    <div>
        <SectionTitle title='Projects' id="projects"/>

        
        <div className='flex py-10 gap-20 sm:flex-col items-center'>
            <div className='flex flex-col gap-10 border-l-2 border-[#3a7c4c] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                {projects.map((project , index) => (
                 <div onClick={() => setActiveItem(index)} className='cursor-pointer'>
                      <h1 className={`text-xl px-5 -ml-[3px] ${activeItem === index ? 'text-tertiary border-tertiary py-2 border-l-4 bg-[#80c5ab31]' : 'text-white'}`}>{project.title}</h1> 
                 </div>

                ))}
            </div>
            <img src={projects[activeItem].image} alt='hi' className='h-60 w-72'></img>
            <div className='flex flex-col gap-5'>
              <h1 className='text-secondary text-xl'>{projects[activeItem].title}</h1>
              <h1 className='text-tertiary text-xl'>{projects[activeItem].technologies}</h1>
               <p className='text-white'>{projects[activeItem].responsibilities}</p>
            </div>
        </div>
    </div>
  )
}

export default Projects