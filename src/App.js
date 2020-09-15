import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import CategoryDetail from "./Components/CategoryDetail/CategoryDetail";
import Login from "./Components/Login/Login";
import DeliveryDetails from "./Components/DeliveryDetails/DeliveryDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/food/category/:id" component={CategoryDetail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/delivery/details" component={DeliveryDetails} />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
