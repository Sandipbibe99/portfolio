import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { experiences } from '../../resources/experiences'

const Experiences = () => {
    const [activeItem , setActiveItem] = useState(0)
  return (
    <div>
        <SectionTitle title='Experience'id="experience" />

        <div className='flex py-10 gap-20 sm:flex-col'>
            <div className='flex flex-col gap-10 border-l-2 border-[#3a7c4c] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                {experiences.map((experience , index) => (
                 <div onClick={() => setActiveItem(index)} className='cursor-pointer'>
                      <h1 className={`text-xl px-5 -ml-[3px] ${activeItem === index ? 'text-tertiary border-tertiary py-2 border-l-4 bg-[#80c5ab31]' : 'text-white'}`}>{experience.period}</h1> 
                 </div>

                ))}
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='text-secondary text-xl'>{experiences[activeItem].role}</h1>
              <h1 className='text-tertiary text-xl'>{experiences[activeItem].company}</h1>
               <p className='text-white'>{experiences[activeItem].description}</p>
            </div>
        </div>
    </div>
  )
}

export default Experiences