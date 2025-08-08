import { heroConfig } from "../config/hero";

export default function HeroOverviewConfig (){
    return (
        <section class="overview py-5 bg-secondary">
            <div class="container h-100 d-flex align-items-center">
                <div class="row w-100 text-center fs-3">

                    {heroConfig.map(item =>(
                        <div className="col-xl-4">
                            <i className= {item.icon}></i>
                            {item.descriptions}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}