import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return(
    <Router>
      <div>
      <Navbar />
    <Switch>
        <Route  exact path="/" component={Home} />
        <Route  exact path="/home" component={Home} />
        <Route  exact path="/contact" component={Contact} />
        <Route  exact path="/portfolio" component={Portfolio} />
      </Switch>
  
      <Footer />
      </div>
    </Router>
  );
}

export default App;