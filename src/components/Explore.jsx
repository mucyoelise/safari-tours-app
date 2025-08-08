import { exploreConfig } from "../config/explore";
import Button from "./Booking";

export default function Explore(){
    return (
        <section id="packages" className="pt-5">
            <h2 className="text-center my-5">{exploreConfig.title}<hr/></h2>
            <div className="container">
                <div className="row row-gap-5">

                    {exploreConfig.parks.map(park=>(
                        <div className="col-lg">
                            <div className="card" style={{width: "100%"}}>
                                <img src={park.img.src} className="card-img-top" alt={park.img.alt}/>
                                <div className="card-body">
                                    <h5 className="card-title">{`${park.location}, ${park.name} - ${park.price}`}</h5>
                                    <p className="card-text">{park.description}</p>
                                    <Button />
                                </div>
                          </div>
                    </div>
                    ))}

                </div>
            </div>
        </section>
    )
}