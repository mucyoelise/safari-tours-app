import { faqsConfig } from "../config/faqs";

export default function Faqs(){
    return (
        <section id="faqs">
            <h2 className="my-5 text-center">{faqsConfig.title} <hr/></h2>
            <div className="container">
                <div className="accordion mx-auto my-5 w-75" id="accordionExample">                    
                    {faqsConfig.faqInfo.map(faq=>(
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target= {`#collapse${faq.id+1}`} aria-expanded={!faq.id} aria-controls={`collapse${faq.id+1}`}>
                                    {faq.question}
                                </button>
                            </h2>
                            <div id={`collapse${faq.id+1}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}