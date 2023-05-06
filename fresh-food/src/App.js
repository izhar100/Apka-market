
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NavbarSmallScreen from './components/NavbarSmallScreen';
import MainRoutes from './pages/MainRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/LoginSignUpPage/Login';
import SplaceScreen from './pages/splaceScreen/SplaceScreen';

function App() {
  // const isAuth=useSelector((store)=>store.AuthReducer.isAuth)
  // if(isAuth==false){
  //   return (
  //     <div className="App" style={{backgroundColor:"GhostWhite"}}>
  //       <SplaceScreen/>
  //     </div>
  //   )
  // }
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
