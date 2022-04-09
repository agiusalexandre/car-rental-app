import logo from './logo.svg';
import './App.css';
import { NavBar } from "./ui-components";


function App() {
  const navbarOverrides = {
    "Flex.Flex[0].Image[0]": {
      src: "https://img.icons8.com/color/50/000000/car--v1.png", // app logo
    },
    "Flex.Flex[2].Image[0]": {
      src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png", // profile image
    },
  };

  return (
    <div className="App">
      <NavBar overrides={navbarOverrides} width={"100%"} />
      <header className="App-header">
        <h1>Car Rental App</h1>
      </header>
    </div>
  );
}

export default App;
