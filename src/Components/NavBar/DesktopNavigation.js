import NavLinks from "./NavLinks";
import './NavBar.css';
import logo from '../../Assests/FinishLogo.svg';

const DesktopNavigation = () =>{
    return (

        <div className="flex flex-row items-center justify-between">
            <img className="" src={logo} alt="Finish logo" />
            <NavLinks />
        </div>

    )
}

// NavBar.css and NavLinks.js are imported here
export default DesktopNavigation;