import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Example from './components/navbar';
import Header from './components/header';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
    <Example /><br />
    {/* <img src={ Back } /> */}

      </header>
    <Switch>
      <Route exact path="/">
    <Header />
    </Route>

  
    </Switch>
    </div>
    </Router>
  );
}

export default App;
