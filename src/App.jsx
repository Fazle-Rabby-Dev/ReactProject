
import './App.css'
import Agenc from './Components/Agenc/Agenc'
import Design from './Components/Design/Design'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Navbar/Banner/Banner'
import Nav from './Components/Navbar/Nav'
import Reviews from './Components/Reviews/Reviews'
import Services from './Components/Services/Services'
import Success from './Components/Success/Success'
import Work from './Components/Work/Work'

function App() {

  return (
    <>
       <Nav></Nav> 
       <Banner></Banner>
       <Success/>
       <Services/>
       <Work/>
       <Agenc/>
       <Reviews/>
       <Design/>
       <Footer/>
    </>
  )
}

export default App
