
import cover from './assets/cover.jpg';
import cover2 from './assets/cover2.jpg';
import cover3 from './assets/cover3.jpg';
import cover4 from './assets/cover4.jpg';
import cover5 from './assets/cover5.jpg';
import cover6 from './assets/cover6.jpg';
import cover7 from './assets/cover7.jpg';
import cover8 from './assets/cover8.jpg';

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';




import Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';



const HomeCarousel = () => {
  return (
    <div className="w-full h-64 ">
        <div className="lg:w-3/4 lg:px-0  px-6 w-full h-full mx-auto">
            <Carousel autoplay={true}  pause={false} wrap={true} indicators={false} slide={true} controls={false} className='h-full'>

                    <Carousel.Item  className='w-full h-[30rem] '>
                        <div className='md:flex md:gap-x-6 w-full'>
                         <img src={cover} alt="" className='rounded-3xl w-full  md:w-1/3 h-[30rem]'/>
                         <img  src={cover2} alt="" className='rounded-3xl w-full  md:w-1/3 h-[30rem]'/>
                         <img src={cover3} alt="" className='rounded-3xl  w-full  md:w-1/3 h-[30rem]'/>
                        </div>
                            
                    </Carousel.Item>


                    <Carousel.Item  className='w-full h-[30rem] '>
                        <div className='md:flex md:gap-x-6 w-full'>
                        <img src={cover4} alt="" className='rounded-3xl w-full  md:w-1/3 h-[30rem]'/>
                        <img src={cover5} alt="" className=' rounded-3xl w-full  md:w-1/3 h-[30rem]'/>
                        <img src={cover6} alt="" className='rounded-3xl  w-full  md:w-1/3 h-[30rem]'/>
                        </div>
                    
                    </Carousel.Item>



                    <Carousel.Item  className='w-full h-[30rem] '>
                        <div className='md:flex md:gap-x-6 w-full'>
                        <img src={cover7} alt="" className=' rounded-3xl  w-full  md:w-1/3 h-[30rem]'/>
                        <img src={cover8} alt="" className='rounded-3xl  w-full  md:w-1/3 h-[30rem]'/>
                        </div>
                    
                    </Carousel.Item>


                    <Carousel.Item  className='w-full h-[30rem]'>
                        <div className='flex'>
                        
                        </div>
                    </Carousel.Item>

            </Carousel>
 
         </div>
     </div> 
  );
    
}

export default HomeCarousel























// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 3
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };
// return (
// <div className="w-full h-[30rem] ">
// <div className="lg:w-3/4 w-full h-full mx-auto  ">
// <Carousel 
//     responsive={responsive}
//     autoPlay={true}
//     autoPlaySpeed={3000}
//     infinite={true}
//     pauseOnHover={false}
//     showDots={false}
//     className='h-full py-6 '
//   >
   
      
//           <img src={cover} alt="" className=' rounded-3xl  min-w-full max-h-[28rem] '/>
//           <img src={cover2} alt="" className='rounded-3xl  min-w-full max-h-[28rem]'/>
//           <img src={cover3} alt="" className='rounded-3xl  min-w-full max-h-[28rem]  '/>
//           <img src={cover4} alt="" className='rounded-3xl  min-w-full max-h-[28rem] '/>
//           <img src={cover5} alt="" className=' rounded-3xl min-w-full max-h-[28rem]' />
//           <img src={cover6} alt="" className='rounded-3xl  min-w-full max-h-[28rem]'/>
//           <img src={cover7} alt="" className='rounded-3xl  min-w-full max-h-[28rem]  ' />
//           <img src={cover8} alt="" className='rounded-3xl  min-w-full max-h-[28rem]'  />
  

   

//   </Carousel>
// </div>
// </div>
// )
// }