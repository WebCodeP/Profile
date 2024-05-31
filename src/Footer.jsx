

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="lg:w-3/4 w-full px-6 lg:px-0 mx-auto h-[30rem] flex flex-col md:flex-row justify-between items-center">
         <div className="grid md:grid-cols-1 grid-cols-2 gap-6 text-white">
            <span>Home</span>
            <span>Project</span>
            <span>Skills</span>
            <span>Features</span>
            <span>More</span>
            <span>About As</span>
         </div>
         <div className="grid md:grid-cols-1 gap-6 grid-cols-2 text-white">
            <span>Home</span>
            <span>Project</span>
            <span>Skills</span>
            <span>Features</span>
            <span>More</span>
            <span>About As</span>
         </div>
          {/* social media */}
         <div className='flex items-center justify-center gap-x-6 justify-items-end'>
           <span className='p-2 flex items-center justify-center bg-purple-700 rounded-lg'><FontAwesomeIcon icon={faFacebook} className='text-white'/></span>
           <span className='p-2 flex items-center justify-center bg-purple-700 rounded-lg'><FontAwesomeIcon icon={faFacebookMessenger}  className='text-white'/></span>
           <span className='p-2 flex items-center justify-center bg-purple-700 rounded-lg'><FontAwesomeIcon icon={faLinkedin}  className='text-white'/></span>
           <span className='p-2 flex items-center justify-center bg-purple-700 rounded-lg'><FontAwesomeIcon icon={faWhatsapp}  className='text-white'/></span>
           <span className='p-2 flex items-center justify-center bg-purple-700 rounded-lg'><FontAwesomeIcon icon={faTwitter}  className='text-white'/></span>
         </div>

      </div>

         <div className="w-full">
          <span className='block w-3/4 mx-auto my-4 h-1 text-gradient-b rounded-lg'></span>
         </div>
         <div className="w-full py-6">
          <div className='w-3/4 mx-auto flex md:flex-row flex-col items-center justify-between '>
            <span className="text-white items-start  block w-full">by JAFFAR AL-HORANI</span>
            <span className="text-white items-start  block w-full">ALL RIGHT REVERSED</span>
            <span className="text-white gap-x-4  w-full flex items-center md:justify-center justify-between">
            <span className='px-2 py-1 cursor-pointer bg-purple-700 rounded-lg'><FontAwesomeIcon icon={faPhone}  className='text-white'/></span>
            +963980 329 517 
            </span>
          </div>
         </div>


    </div>
  )
}

export default Footer
