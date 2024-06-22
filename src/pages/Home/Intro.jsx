import React from 'react'

const Intro = () => {
    return (
        <div className='h-[80vh] bg-primary flex flex-col items-start justify-center py-10 sm:mt-2  gap-8'>
            <h1 className='text-white'>Hii , I am</h1>
            <h1 className='text-7xl sm:text-3xl  text-secondary font-semibold'>Sandip Bibe</h1>
            <h1 className='text-6xl sm:text-3xl  text-white font-semibold'>Full Stack Developer</h1>
            <p className='text-white w-2/3'>As a passionate and skilled Full Stack Developer with one year of professional experience,
                                        I have a proven track record of delivering high-quality web applications. My expertise lies in both front-end
                                        and back-end development.  I have worked on three major projects where I utilized technologies such as HTML, 
                                        CSS, JavaScript, React.js, Node.js, Next.js, Redux, MongoDB, MySQL, Firebase, and AWS.
                                        </p>
           <button className='border-2 border-tertiary text-tertiary  px-10 py-3 rounded'>Get Started</button>
        </div>

    )
}

export default Intro