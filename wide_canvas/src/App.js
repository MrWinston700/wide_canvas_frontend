import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/navBar';
import J from './images/j.jpg';
import K from './images/k.jpg';
import O from './images/o.jpg';
import Ortho from './images/ortho.jpg';
import P from './images/p.jpg';
import Pipa from './images/pipa.jpg';
import R from './images/r.jpg'






function App() {
  return ( 
   
    <div className="App">

      <div id="app_head">
        <Router>
          <Navbar/>
        </Router>
      </div>

      <div id="app_body">
        <div className='card'>
          <div className='bug'>$20</div>
          <img src={J} className="safety_imgs" alt="photograph of pilot"></img>
        </div>
        <div className='card'>        
        <img src={K} className="safety_imgs" alt="photograph of pilot"></img>
        </div>
        <div className='card'>
        <img src={O} className="safety_imgs" alt="photograph of pilot"></img>

        </div>
        <div className='card'>
        <img src={Ortho} className="safety_imgs" alt="photograph of pilot"></img>

        </div>
        <div className='card'>
        <img src={P} className="safety_imgs" alt="photograph of pilot"></img>

        </div>
        <div className='card'>
        <img src={Pipa} className="safety_imgs" alt="photograph of pilot"></img>

        </div>
        <div className='card'>
        <img src={R} className="safety_imgs" alt="photograph of pilot"></img>

        </div>
        <div className='card'>
        <img src={J} className="safety_imgs" alt="photograph of pilot"></img>

        </div>
        <div className='card'>
        <img src={O} className="safety_imgs" alt="photograph of pilot"></img>

        </div>
        <div className='card'>
        <img src={K} className="safety_imgs" alt="photograph of pilot"></img>
        </div>

      </div>

      <div id="app_foot">
        <p>this is footer</p>
      </div>
    </div>
  );
}

export default App;