import "./App.css";

import Navbar from "./components/Navbar";
import NavbarSmallScreen from "./components/NavbarSmallScreen";
import MainRoutes from "./pages/MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "GhostWhite" }}>
      <Navbar />
      <MainRoutes />
      <NavbarSmallScreen />
    </div>
  );
}

export default App;
