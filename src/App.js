import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
  //   <div>
  // {/* <Navbar/> */}
  // <Home/>
  //   </div>
  <Router>
    <Routes>
      <Route path='/elite-care' element={<Home/>}/>
    </Routes>
  </Router>
  );
}

export default App;
