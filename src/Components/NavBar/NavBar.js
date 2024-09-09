import DesktopNavigation from "./DesktopNavigation";
import logo from '../../Assests/FinishLogo.svg';

const NavBar = () =>{
    return(
        <div className="conatiner bg-zinc-800 justify-between pr-10 sticky top-0">
            <DesktopNavigation />
        </div>
    )
}

export default NavBar;