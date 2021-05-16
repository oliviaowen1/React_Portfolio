import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbo from "./components/Jumbo";
import About from "./components/About";
import Cards from "./components/Cards"
import Footer from "./components/Footer";

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
      <About />
      <Cards />
      <Footer />
    </Router>
  );
}

export default App;