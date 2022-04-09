import logo from './logo.svg';
import './App.css';
import { NavBar, NewCars } from "./ui-components";


function App() {
  const navbarOverrides = {
    "imagezzp": {
      src: "https://img.icons8.com/color/50/000000/car--v1.png", // app logo
    },
    "imageqat": {
      src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png", // profile image
    },
  };

  return (
    <div className="App">
      <NavBar overrides={navbarOverrides} width={"100%"} />
      <header className="App-header">
        <NewCars/>
      </header>
    </div>
  );
}

export default App;
