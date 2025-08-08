import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from "./components/Navbar"
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Modal from './components/Modal'
import "./App.css"

export default function Hello (){
    return(
        <>
            <Modal />
            <Navbar />
            <Carousel />
            <Hero />
            <Explore />
            <Faqs />
            <Footer />
        </>
    )
}