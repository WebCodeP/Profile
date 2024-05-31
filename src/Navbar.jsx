


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {

  return (
    <div  className="w-full h-12 fixed top-0 left-0 z-50 ">
      <div className="lg:w-3/4 w-full lg:px-0 px-6 mx-auto  h-full flex items-center justify-between">
         <div>
            <span className='text-white'>Logo</span>
         </div>
         <ul className="hidden lg:flex lg:items-center lg:justify-center lg:gap-x-12">
            <li className='text-white text-sm cursor-pointer'>Home</li>
            <li className='text-white text-sm cursor-pointer'>Project</li>
            <li className='text-white text-sm cursor-pointer'>About</li>
            <li className='text-white text-sm cursor-pointer'>More</li>
         </ul>
         <div className='flex items-center justify-center gap-x-4 text-white'>
            <div className='hidden rounded-lg cursor-pointer  '><FontAwesomeIcon icon={faBars} className='text-lg' /></div>
            <div><FontAwesomeIcon icon={faXmark} className='hidden text-lg' /></div>
            <div><FontAwesomeIcon icon={faSun} className='text-lg cursor-pointer text-purple-700' /></div>
         </div>


         {/* end content */}
      </div>
    </div>
  )
}

export default Navbar
