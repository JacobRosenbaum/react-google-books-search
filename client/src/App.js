
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";


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
  