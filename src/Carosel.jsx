

import Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carosel() {
  return (
    <div className="w-full h-64 py-1  mt-32">
        <div className="lg:w-3/4 w-full h-full mx-auto">
            <Carousel autoplay={true}  pause={false} wrap={true} indicators={false} slide={true} controls={false} className='h-full'>

                    <Carousel.Item  className='w-full h-52 '>
                        <Carousel.Caption >
                            <h1 className='text-gradient lg:text-4xl text-2xl font-medium mb-3'>Responsive Design</h1>
                            <p className='text-white leading-6'>is a web design approach to make web pages render well on all screen sizes and resolutions while ensuring good usability</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item  className='w-full h-52'>
                        <Carousel.Caption>
                             <h1 className='text-gradient text-2xl lg:text-4xl font-medium mb-3'>Speed and Quality</h1>
                             <p className='text-white'>Speed in work and ensuring delivery to custiomer with high reliability in addition to delivering the same quality to everyone</p>
                        </Carousel.Caption>
                    </Carousel.Item>



                    <Carousel.Item  className='w-full h-52 '>
                        <Carousel.Caption>
                             <h1 className='text-gradient text-2xl lg:text-4xl font-medium mb-3'>High Reliability</h1>
                             <p className='text-white'>consistent excellence in quality and safety across all services maintained over long periods of timeThis high level of performance</p>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item  className='w-full h-52 '>
                        <Carousel.Caption >
                            <h1 className='text-gradient text-2xl lg:text-4xl font-medium mb-3'>Better Performance</h1>
                            <p className='text-white' >Ensuring the best performance in core and product evaualtion and amending it at any time in addition to many womderful design features.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

            </Carousel>
 
         </div>
     </div> 
  );
}

export default Carosel;