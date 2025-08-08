import { carouselConfig } from "../config/carousel";
import Button from "./Booking";
export default function Carousel(){
    return (
        <section id="carouselExampleIndicators" className="carousel slide">
        
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            
    
            <div className="carousel-inner">

                {carouselConfig.map(carousel=>(
                    <div className= {!carousel.id ? "carousel-item c-item active" : "carousel-item c-item"}>

                        <img src={carousel.img.src} className="d-block w-100 c-img" alt={carousel.img.alt}/>
                    
                        <div className="carousel-caption top-0 mt-5">
                            <p className="fs-3 mt-5 pt-5 text-uppercase">{carousel.title}</p>
                            <h3 className="display-1 fw-bolder">{carousel.body}</h3>
                            <Button otherStyles = "px-4 py-3 fs-4 mt-4"/>
                        </div>
                
                    </div>    
                ))}

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
        </section>
    )
}