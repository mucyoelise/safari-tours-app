import { footerConfig } from "../config/footer";

export default function Footer(){
    return (
        <footer className="bg-dark text-white py-5">
            <section className="container text-center">
                <div className="row row-gap-3">
                    <div className="col-md-6">
                        <h2>{footerConfig.connect.title}</h2>
                        {Object.entries(footerConfig.connect.links).map(([_, details]) => (
                            <a href={details.href} className="btn btn-light mx-2"><i className={`${details.icon} px-3`}></i></a>
                        ))}
                    </div>
                    <div className="col-md-6 ms-auto">
                        <h2 className="fw-5">{footerConfig.footer.title}</h2>
                        <small>{footerConfig.footer.copyright.replace("{year}", new Date().getFullYear())}</small>
                    </div>
                </div>
            </section>
        </footer>
    )
}