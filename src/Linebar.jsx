
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
const Linebar = () => {
  return (
    <div className="md:w-12 md:h-screen md:fixed md:left-6 md:top-12
     z-20 flex  md:flex-col items-center justify-between flex-row w-full h-12 top-[20rem]">
      <span className="md:w-[2px] w-1/3 h-[2px] z-50  text-gradient-b md:h-1/3 rounded-lg"></span>
      <span  className='p-2 flex items-center justify-center text-white text-fiter'><FontAwesomeIcon icon={faCode} className='text-2xl text-fiter' /></span>
      <span className="md:w-[2px] w-1/3 h-[2px]  text-gradient-b md:h-1/3 rounded-lg"></span>
      <span  className='p-2 flex items-center justify-center text-white text-fiter'><FontAwesomeIcon icon={faCodeFork}  className='text-2xl text-fiter'/></span>
      <span className="md:w-[2px] w-1/3 h-[2px] text-gradient-b md:h-1/3 rounded-lg"></span>
    </div>
  )
}

export default Linebar
