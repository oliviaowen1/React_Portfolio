import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbo from "./components/Jumbo";

function App() {
  return(
    <Router>
      <div>
        <Navbar />
        {/* <Route  exact path="/" component={Home} />
        <Route  exact path="/contact" component={Contact} />
        <Route  exact path="/portfolio" component={Portfolio} /> */}
      </div>
      <Jumbo />
    </Router>
  );
}

export default App;