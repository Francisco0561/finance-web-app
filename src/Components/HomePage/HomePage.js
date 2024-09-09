import Logo from "../../Assests/FinisLogo.svg";


const HomePage = () =>{
    return (
        <div className="flex-grow flex flex-col items-center justify-top">
            <img src={Logo} alt="Finis Logo"/>
            <p className="text-mainBlue text-6xl font-bold font-sans"> Budgeting done easy.</p>
        </div>
    )
}

export default HomePage;