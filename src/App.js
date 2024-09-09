import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Logo from './Assests/FinisLogo.svg'
import HomePage from "./Components/HomePage/HomePage";


function App() {
  return (

      <div className="flex flex-col bg-zinc-800 min-h-screen">
          <NavBar />
          <HomePage />
      </div>
  );
}

export default App;
