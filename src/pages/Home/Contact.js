import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import axios from 'axios'

const Contact = () => {

    const developer = {
        name: "Sandip bibe",
        contact: "+91 7822043493",
        email: "sbibe01@gmail.com",
        age: "24",
        gender: "Male",
        country: "India"

    }

    const user = {
        name : '',
        contact : '',
        email : '',
        message : ''
    }

    const [formData , setFormData] = useState(user)

    const handleInputchange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

  const [toast , setToast] = useState(false)
  const [toastMessage , setToastMessage] = useState(false)

 const handlesubmit = async(e) => {
    e.preventDefault()
     console.log(formData)
    await axios.post("https://port-backend-s9qj.onrender.com/api/add" , formData)
    .then((response) => {
        console.log(response.data.msg)
        setToastMessage(response.data.msg)
        setToast(true)

        setFormData({
            name : '',
            contact : '',
            email : '',
            message : ''
        })
        setTimeout(() => {
            setToast(false)
        }, 5000 );
    })
    .catch((error) => {
        console.log(error)
    })
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
                    <a href='/sandipbiberesume.pdf' download='sandipbiberesume.pdf'>
                    <button class="inline-flex items-center justify-center mt-4 w-40 px-4 py-2 mb-2 text-MD text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                        Get CV
                        <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    </a>
                </div>
                <div className='h-[400px] flex flex-col items-center gap-7 mt-10'>

                    <input onChange={handleInputchange} value={formData.name} name='name'  type='text' placeholder='Name' className='w-[500px] sm:w-[270px] py-1 text-white px-3 outline-none rounded bg-[#262626]'></input>
                    <input onChange={handleInputchange} value={formData.contact} name='contact'   type='number' placeholder='Contact' className='w-[500px] sm:w-[270px] text-white py-1 px-3 outline-none rounded bg-[#262626]'></input>
                    <input onChange={handleInputchange} value={formData.email} name='email'   type='text' placeholder='E mail' className='w-[500px] sm:w-[270px] text-white py-1 px-3 outline-none rounded bg-[#262626]'></input>
                    <textarea onChange={handleInputchange} value={formData.message} name='message'   placeholder='message' className='w-[500px] sm:w-[270px] h-32 sm:h-20 py-1 text-white px-3 outline-none rounded bg-[#262626]'></textarea>

                    <button onClick={handlesubmit} class="inline-flex items-center ml-auto sm:ml-0  justify-center mt-4 w-40 px-4 py-2 mb-2 text-MD text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" >Submit</button>

            
                </div>
                <div className='flex sm:block xl:hidden  '>
                   <a rel="noreferrer" href='https://www.facebook.com/share/bYmZn5fHAuc3aMyz/?mibextid=qi2Omg' target='_blank'> <i class="ri-facebook-circle-line text-gray-400 text-xl mr-3"></i> </a>
                   <a rel="noreferrer" href='mailto:sbibe01@gmail.com' target='_blank'>  <i class="ri-mail-unread-line text-gray-400 text-xl mr-3"></i> </a>
                   <a rel="noreferrer" href='https://www.instagram.com/its_sandy_ssr?igsh=cGFneWRudzNybThz' target='_blank'> <i class="ri-instagram-line text-gray-400 text-xl mr-3"></i> </a>
                   <a rel="noreferrer" href='https://www.linkedin.com/in/sandip-bibe-961a10211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'> <i class="ri-linkedin-fill  text-gray-400 text-xl "></i> </a>
                   

                </div>
                

{ toast && <div id="toast-message-cta" class="w-full fixed top-2 right-1 max-w-xs p-4  text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400" role="alert">
    <div class="flex">
        <img class="w-8 h-8 rounded-full" src="/sandyy.jpg" alt="sandip"/>
        <div class="ms-3 text-sm font-normal">
          
            <div class="mb-2  text-sm font-medium">{toastMessage}</div> 
         
        </div>
        <button onClick={() => setToast(false)} type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
        </button>
    </div>
</div>}

            </div>
        </div>
    )
}

export default Contact