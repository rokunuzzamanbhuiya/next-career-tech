import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
// import ServiceSingle from "./components/ServiceSingle/ServiceSingle";
// import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
          </Route>
          <Route exact path="/about">
              <About></About>
          </Route>
          <Route exact path="/contact">
              <Contact></Contact>
          </Route>
          <Route path="*">
              <Error></Error>
        </Route>
        </Switch>
        
        </Router>
    </div>
  );
}

export default App;
