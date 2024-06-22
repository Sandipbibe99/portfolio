import React from 'react'
import SectionTitle from '../../components/SectionTitle'

const Contact = () => {

    const developer = {
        name: "Sandip bibe",
        contact: "+91 7822043493",
        email: "sbibe01@gmail.com",
        age: "24",
        gender: "Male",
        country: "India"

    }

    

    return (
        <div>
            <SectionTitle title="Say , hello" id="contact" />

            <div className='flex sm:flex-col items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-white text-sm'>{'{'}</h1>
                    {Object.keys(developer).map((key) => (
                        <h1 className='text-tertiary text-sm ml-1'>
                            <span >"{key}"</span> : <span >"{developer[key]}"</span>
                        </h1>
                    ))}
                    <h1 className='text-white'>{'}'}</h1>
                    <button class="inline-flex items-center justify-center mt-4 w-40 px-4 py-2 mb-2 text-MD text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                        Get CV
                        <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className='h-[400px] flex flex-col items-center gap-7 mt-10'>

                    <input type='text' placeholder='Name' className='w-[500px] sm:w-[270px] py-1 text-white px-3 outline-none rounded bg-[#262626]'></input>
                    <input type='number' placeholder='Contact' className='w-[500px] sm:w-[270px] text-white py-1 px-3 outline-none rounded bg-[#262626]'></input>
                    <textarea placeholder='message' className='w-[500px] sm:w-[270px] h-32 sm:h-20 py-1 text-white px-3 outline-none rounded bg-[#262626]'></textarea>

                    <button class="inline-flex items-center ml-auto sm:ml-0  justify-center mt-4 w-40 px-4 py-2 mb-2 text-MD text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" >Submit</button>

                    {/* <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json"
            background="transparent"
            speed="1" 
            autoplay
            >
            </lottie-player> */}
                </div>
            </div>
        </div>
    )
}

export default Contact