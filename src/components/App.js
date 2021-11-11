import logo from './logo.svg';
import {HashRouter as Router, Route} from "react-router-dom";
import LandingPage from '../components/views/MainPage/LandingPage'
import './App.css';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
        <div className="Container" style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)', zIndex:-1 }}>
          <Route exact path="/" component={ LandingPage } />
        </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
