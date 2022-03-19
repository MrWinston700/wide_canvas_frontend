import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return ( 
   
    <div className="App">
       <Router>
      </Router>
      <div id="app_head">
        <p id="catch_phrase">Have a blast with us</p>
        <p id="call_us">call for inquiry: 977-777-9787</p>
        <button id="quick_button">Quick booking</button>
      </div>

      <div id="app_body">
        <p>this is body</p>
      </div>

      <div id="app_foot">
        <p>this is footer</p>
      </div>
    </div>
  );
}

export default App;