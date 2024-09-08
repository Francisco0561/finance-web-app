import './NavBar.css'

const NavLinks = () =>{
    return(
        <nav className="container flex  NavLinks">
            <ul className="container flex flex-row justify-between">
                <li>
                    <a  className="text-amber-500 font-mono text-2xl" href="/">Home</a>
                </li>

                <li>
                    <a class ="text-amber-50" href="/#services">services</a>
                </li>

                <li>
                    <a class ="text-amber-50" href="/#about">About Us</a>
                </li>

                <li>
                    <a class ="text-amber-50" href="/#contact">Contact US</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks;