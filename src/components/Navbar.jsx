import {navbarConfig} from '../config/navbar'


export default function Navbar (){
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container"> 
                <a class="navbar-brand" href="#">{navbarConfig.title}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                        {navbarConfig.nav_items.map(item=>(
                        <li class="nav-item">
                            <a class="nav-link" href={`#${item}`}>{item}</a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}