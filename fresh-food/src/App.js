
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NavbarSmallScreen from './components/NavbarSmallScreen';
import MainRoutes from './pages/MainRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{backgroundColor:"GhostWhite"}}>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
      <NavbarSmallScreen/>
    </div>
  );
}

export default App;
