
import Carosel from "./Carosel";
import Navbar from "./Navbar";
import Home from "./Home";
import HomeCarousel from "./HomeCarousel";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Linebar from "./Linebar";

const  App =() => {
 

  return (
    <div className="backgound-b">
       <Navbar/>
       <Carosel/>
       <Home/>
       <HomeCarousel/>
       <Skills/>
       <Contact/>
       <Footer/>
       <Linebar/>
    </div>
  )
}

export default App
