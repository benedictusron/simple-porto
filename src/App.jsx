import { useState } from 'react'
import './App.css'
import DataImage from './data'
import { listTools, listProject } from './data'

function App() {
  return (
    <>
      <div className='hero grid md:grid-cols-2 items-center pt-10 xl-gap-0 gap-6 grid-cols-1 '>
        <div className='animate__animated animate__fadeInUp animate__delay-3s'>
          {/* <div className='flex items-center gap-3 mb-6 bg-zinc-100 w-fit p-4 rounded-2xl'>
            <img src={DataImage.hero1} alt="Hero Image" className='w-10 rounded-10' loading='lazy' />
            <q>Tesing adalah jalan ninjaku 🤺</q>
          </div> */}
          <h1 className='text-4xl/tight font-black mb-6 '>Hi 👋, I'm</h1>
          <h1 className='text-6xl/tight font-black mb-6  bg-gradient-to-r from-fuchsia-500 via-violet-500 to-pink-500 bg-clip-text text-transparent'>Benediktus Rony</h1>
          <p className='text-base/loose mb-6'>
          I'm a self-taught developer with a focus on practical application and hands-on experience. Based in Indonesia, I'm exploring various technologies and honing my skills. 
          My journey in coding is fueled by curiosity and a love for problem-solving.
          </p>
          <div className='flex items-center sm:gap-4 gap-2'>
            <a href="" className="bg-gradient-to-r from-fuchsia-500 to-violet-500 to-pink-500 p-4 rounded-full  text-white font-medium">Download CV</a>
            {/* <a href="" className="bg-violet-700 p-4 rounded-full hover:bg-violet-600 text-white">Download CV</a> */}
            <a href="#Project" className="bg-white border-4 font-medium border-gray-600 p-4 rounded-full hover:bg-gray-600 hover:text-white ">Lihat Project</a>
          </div>
        </div >
        <img src={DataImage.hero1} alt="Hero Image" className='w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s' />
      </div>

      {/* about */}
      <div className='tentang mt-32 py-10' id='About'>
        <div className='xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-100/50  backdrop-blur-md rounded-lg' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.hero1} alt="Hero Image" className='w-12 rounded-md mb-6 sm:hidden hidden' loading='lazy'  />
          {/* <p className='text-base/loose mb-10 text-justify'> */}
          <p className='text-base leading-relaxed mb-10 text-center sm:text-justify'>
            A Bachelor of Informatics Engineering graduate with a strong interest in Full-Stack Development (HTML, CSS, JavaScript, React.js, Node.js) 
            and the creation of scalable web applications. Possesses 2 years of prior experience as an IT Staff with expertise in troubleshooting, system administration, and hardware/software management. 
            Seeking a full-time role to merge a comprehensive technical background with a dedication to innovative software development. 
            Currently seeking opportunities as a Front-End or Full-Stack Developer to apply and expand my skills in modern web development.
          </p>
          <div className='flex items-center justify-between'>
            <img src={DataImage.hero1} alt="Hero Image" className='w-12 rounded-md sm:block hidden' loading='lazy' />
            <div className='flex items-center justify-center gap-6'>
              {/* <div>
                <h1 className='text-4xl mb-1'>4 <span className='bg-gradient-to-r from-fuchsia-500 via-violet-500 to-pink-500 bg-clip-text text-transparent'>+</span></h1>
                <p>Project Completed</p>
              </div> */}
              <div>
                <h1 className='text-4xl mb-1'>2<span className='bg-gradient-to-r from-fuchsia-500 to-violet-500 to-pink-500 bg-clip-text text-transparent'>+</span></h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
        {/* Tools */}
        <div className='tech mt-32' >
          <h1 className='text-4xl/snug font-bold mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools</h1>
          <p className='xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Here are some tools that I usually use for website creation or design</p>
          <div className='tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4'>

            {listTools.map((tool) => (
              <div className='flex items-center gap-2 p-3 border border-zinc-300 rounded-md group' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image " className='w-14 bg-zinc-50 p-1 group-hover:bg-zinc-100' loading='lazy' />
                <div>
                  <h4>{tool.nama}</h4>
                  <p>{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* about */}

      {/* Project */}
      <div className='project mt-32 py-10' id='Project' >
        <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className='text-center text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Below are some projects that I have created</p>
        <div className='project-box mt-14 grid lg:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1'>
          {listProject.map((Project) => (
            <div key={Project.id} className='p-4 bg-zinc-100/50  backdrop-blur-md rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={Project.dad} data-aos-once="true">
              <img src={Project.gambar} alt="Project Image" loading='lazy' className='rounded-md' />
              <div>
                <h1 className='text-2xl font-bold my-4'>{Project.nama}</h1>
                <p className='text-sm/loose mb-4'>{Project.desk}</p>
                <div className='flex flex-wrap gap-2'>
                  {Project.tools.map((tool, index) => (
                    <p className='py-1 px-3 border  border-zinc-300 rounded-md font-semibold bg-zinc-50' key={index}>{tool}</p>
                  ))}
                </div>
                <div className='mt-8 text-center'>
                  {/* <a href="#" className='text-white bg-violet-700 p-3 rounded-lg block border border-zinc-700 hover:bg-violet-600 w-full'>Lihat Website</a> */}
                  <a href={Project.links} className='text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 to-pink-500 p-3 rounded-lg block w-full'>Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project */}

      {/* Contact */}
      <div className='project mt-32 py-10 ' id='Contact'>
        <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</h1>
        <p className='text-center text-base/loose opacity-50' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Let's connect with me</p>
          <form action="https://formsubmit.co/benedictusron99@gmail.com" method="POST" className='bg-white p-10 sm:w-fit mx-auto rounded-md border border-zinc-300 ' 
          autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' >Full Name</label>
              <input type="text" name="FullName" placeholder="Input Your Full Name" required  className='border border-zinc-300 p-2 rounded-md'/>
            </div>
            <div className='flex flex-col gap-2'>
              <label  className='font-semibold' >Email</label>
              <input type="email" name="Email" placeholder="Input Your Email" required className='border border-zinc-300 p-2 rounded-md' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='pesan'  className='font-semibold'>Message</label>
              <textarea type="text" id='pesan' name="Pesan" placeholder="Message ... " cols="45" rows="7" className='border border-zinc-300 p-2 rounded-md'/>
            </div>
            <div className='flex flex-col gap-2'>
            <button type="submit" className="bg-gradient-to-r from-fuchsia-500 to-violet-500 to-pink-500 p-4 rounded-full  text-white">Send</button>
            </div>
          </div>
          </form>
      </div>
      {/* Contact */}
    </>

  )
}

export default App
