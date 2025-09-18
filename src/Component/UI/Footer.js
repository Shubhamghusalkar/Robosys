import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 text-sm py-10 md:py-10 lg:py-20 px-10 lg:px-20">

        <div className="space-y-4 flex flex-col justify-between col-span-3 md:col-span-4 lg:col-span-2">
          <h1 className="text-2xl font-bold">ROBOSYS.</h1>
          <div className="space-y-4 flex flex-col justify-between">
            
          </div>
          <p className="text-gray-400 text-lg hidden lg:block">@Copyright ROBOSYS 2025</p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-2 lg:col-span-3 gap-12 md:col-span-2 col-span-2">
          <div className="space-y-2">
            <h2 className="font-semibold mb-2 text-xl">Company</h2>
            <div className='flex flex-col gap-3'>
              <Link to={'/about-us'} className="text-gray-400 hover:text-white cursor-pointer text-lg">About</Link>
              <Link to={'/products'} className="text-gray-400 hover:text-white cursor-pointer text-lg">Products</Link>
              <Link to={'/kits'} className="text-gray-400 hover:text-white cursor-pointer text-lg">Kits</Link>
            </div>
          </div>


          <div className="space-y-2">
            <h2 className="font-semibold mb-2 text-xl">Info</h2>
            <div className='flex flex-col gap-3'>
              <Link to={'/'} className="text-gray-400 hover:text-white cursor-pointer text-lg">Blog</Link>
              <Link to={'/contact'} className="text-gray-400 hover:text-white cursor-pointer text-lg">Contacts</Link>
              <Link to={'/'} className="text-gray-400 hover:text-white cursor-pointer text-lg">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:col-span-2 lg:col-span-3 col-span-2  ">
          <p className="text-gray-300 text-lg pr-4">
            Curious about new development and updates? Sign up for our newsletter!
          </p>
          <a href="mailto:robotics@sysinsightsolutions.com" className="text-gray-300 text-lg flex gap-3 items-center hover:text-white cursor-pointer">
            <span><CiMail className='' size={26} /></span> <span>robotics@sysinsightsolutions.com</span>
          </a>
          <a href="/" className="text-gray-300 text-lg flex gap-3 items-center hover:text-white cursor-pointer">
            <span><IoCallOutline className='' size={23}  /></span> <span>1234567890</span>
          </a>
          <div className="flex space-x-4 text-lg">
            <a href="#"><FaFacebookF className="text-gray-300 hover:text-white cursor-pointer" /></a>
            <a href="#"><FaLinkedinIn className="text-gray-300 hover:text-white cursor-pointer" /></a>
            <a href="#"><FaInstagram className="text-gray-300 hover:text-white cursor-pointer" /></a>
            <a href="#"><FaXTwitter className="text-gray-300 hover:text-white cursor-pointer" /></a>
          </div>
        </div>

      </div>
      <p className="text-gray-400 text-lg block lg:hidden py-5 text-center border-t border-t-slate-700">@Copyright ROBOSYS 2025</p>
    </footer>
  );
};

export default Footer;
