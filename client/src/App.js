
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Header/Header"
import SearchBox from "../src/components/SearchBox/SearchBox";
import Search from "../src/components/pages/Search/Search";
import Saved from "../src/components/pages/Saved/Saved"


function App() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
      </div>
    );
  }
  
  export default App;
  