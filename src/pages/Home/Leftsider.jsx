import React from 'react'

const Leftsider = () => {
    return (
        <div className='fixed left-0 bottom-0 px-10'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-3 '>
                   <a rel="noreferrer" href='https://www.facebook.com/share/bYmZn5fHAuc3aMyz/?mibextid=qi2Omg' target='_blank'> <i class="ri-facebook-circle-line text-gray-400 text-xl "></i> </a>
                   <a rel="noreferrer" href='mailto:sbibe01@gmail.com' target='_blank'>  <i class="ri-mail-unread-line text-gray-400 text-xl "></i> </a>
                   <a rel="noreferrer" href='https://www.instagram.com/its_sandy_ssr?igsh=cGFneWRudzNybThz' target='_blank'> <i class="ri-instagram-line text-gray-400 text-xl "></i> </a>
                   <a rel="noreferrer" href='https://www.linkedin.com/in/sandip-bibe-961a10211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'> <i class="ri-linkedin-fill text-gray-400 text-xl "></i> </a>
                   {/* <a href='https://www.facebook.com/share/bYmZn5fHAuc3aMyz/?mibextid=qi2Omg' target='_blank'>  <i class="ri-github-fill text-gray-400 text-xl "></i> </a> */}

                </div>
                <div  className='w-[1px] block sm:none h-32 bg-[#1a5599]'></div>
            </div>
        </div>
    )
}

export default Leftsider