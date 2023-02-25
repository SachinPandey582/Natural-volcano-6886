import AllRoutes from './AllRoutes/Routes';

import './App.css';

import Footer from './components/HomePage/Footer/Footer';
import Navbar from './components/HomePage/Navbar/Navbar';

function App() {
  return (
    <div >
   
    <AllRoutes/>
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
