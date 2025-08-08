export default function Button(props){
    let styles = props.otherStyles ? props.otherStyles : ""
    return (
        <button className={`btn btn-primary ${styles}`} data-bs-toggle="modal" data-bs-target="#booking-modal">Book a Tour</button>
    )
}