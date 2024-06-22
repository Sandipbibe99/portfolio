import React from 'react'


const SectionTitle = ({title , id}) => {
  return (
    <div id={id} className='flex gap-10 items-center py-10'>
  <h1 className='text-3xl sm:text-2xl text-secondary font-semibold'>{title}</h1>
  <div className='w-60 h-[1px] bg-tertiary'></div>
 
    </div>
  )
}

export default SectionTitle