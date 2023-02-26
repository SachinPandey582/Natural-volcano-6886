

import PrivateRoute from './AllRoutes/PrivateRoute';
import AllRoutes from './AllRoutes/Routes';
import Footer from './components/HomePage/Footer/Footer';
import Navbar from './components/HomePage/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <div className="App">
    <Navbar/>
    <AllRoutes/>
    <ToastContainer/>
    
    {/* <Footer/> */}
     
    </div>
  );
}

export default App;
