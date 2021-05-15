import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return(
    <Router>
      <div>
        <Navbar />
        {/* <Route  exact path="/" component={Home} />
        <Route  exact path="/contact" component={Contact} />
        <Route  exact path="/portfolio" component={Portfolio} /> */}
      </div>
    </Router>
  );
}

export default App;