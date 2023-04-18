import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Router,Route} from 'react-router-dom'
import { Routes as Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
    <Switch>
      <Route path= "/" exact />
      </Switch>
      </Router>
      </>
  );
}

export default App;
