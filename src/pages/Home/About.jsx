import React from 'react'
import SectionTitle from '../../components/SectionTitle'

const About = () => {
  const skills = [
    "JavaScript",
    "Html & CSS",
    "React",
    "Node",
    "Next",
    "Express",
    "MongoDB",
    "MySql",
    "Mern Stack",
    "Bootstrap",
    "Tailwind",
    "Firebase",
    "Redux",
    "Github",
  ]
  return (
   
    <div className='sm:mt-10'>
        <SectionTitle title="About" id="about"></SectionTitle>

        <div className="flex sm:flex-col w-full items-center">
          <div className='h-[70vh] w-1/2 sm:w-full'>
            <lottie-player
            src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
            background="transparent"
            speed="1" 
            autoplay
            >
            </lottie-player>
          </div>
          <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
               <p className="text-white">My name is Sandip Bibe, and I am a dedicated Full Stack Developer based in Pune. With one year of hands-on experience, I have honed my skills in creating dynamic and responsive web applications. I have had the opportunity to work on three significant projects, where I leveraged my expertise in HTML, CSS, JavaScript, React.js, Node.js, Next.js, Redux, MongoDB, MySQL, Firebase, and AWS to deliver comprehensive and scalable solutions.</p>
               <p className="text-white">I am passionate about both front-end and back-end development, ensuring that every application I work on is both user-friendly and robust. My experience includes developing intuitive interfaces, managing complex databases, and deploying applications on the cloud. I am always eager to learn and collaborate, continually enhancing my skills to drive innovation and build impactful web solutions.</p>
          </div>
        </div>

        <div className='py-5'>
          <h1 className="text-tertiary text-xl">Here  are few technologies Ive been working recently: </h1>
          <div className='flex flex-wrap gap-10 mt-5'>
          {skills.map((skill , i) => (
              <div className='border border-tertiary py-3 px-10 rounded'>
                <h1 className='text-tertiary'>{skill}</h1>
                </div>
         ))}
          </div>
       
        </div>
    </div>
  )
}

export default About