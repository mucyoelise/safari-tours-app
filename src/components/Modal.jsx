import { exploreConfig } from "../config/explore"
export default function Modal(){
    return (
        <section class="modal" tabindex="-1" id="booking-modal">
            <div class="modal-dialog custom-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Book a tour</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="#">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-floating mb-3">
                                        <select id="selectInput" class="form-select">
                                            {exploreConfig.parks.map(park=>(
                                                <option value="">{`${park.location}, ${park.name} - ${park.price}`}</option>
                                            ))}
                                        </select>
                                        <label for="SelectInput">Pick a tour</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Checkout</button>
                    </div>
                </div>
            </div>
        </section>

    )
}