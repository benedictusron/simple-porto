import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import Dataimage from '../data'

const Footer = () => {
    return (
        <div className='mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center'>
            {/* <h1 className='text-2xl font-bold'>Porto</h1> */}
            {/* <img src={Dataimage.logo} alt="Logo" className="" /> */}
            <a href="#Home" className="sm:text-lg  text-base font-medium">
                <img src={Dataimage.logo} alt="Logo" className="" href="#Home" />
            </a>
            <div className='flex gap-7'>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Project">Project</a>

            </div>
            <div className='flex items-center gap-4'>
                <a href="https://github.com/benedictusron" className="">
                    <i><FaGithub size={28} /></i>

                </a>
                <a href="https://www.linkedin.com/in/benediktusronyagungk/" className="">
                    <i><FaLinkedinIn size={28} /></i>
                </a>
                <a href="mailto:benediktusronyagungk@gmail.com" className="">
                    <i><IoMail size={28} /></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;