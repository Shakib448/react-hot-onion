import React, { createContext, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import CategoryDetail from "./Components/CategoryDetail/CategoryDetail";
import Login from "./Components/Login/Login";
import DeliveryDetails from "./Components/DeliveryDetails/DeliveryDetails";
import Contact from "./Components/Contact/Contact";
import ThankYou from "./Components/ThankYou/ThankYou";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserLoggedIn = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <UserLoggedIn.Provider value={[loggedIn, setLoggedIn]}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/food/category/:id" component={CategoryDetail} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/delivery/details/">
              <DeliveryDetails />
            </PrivateRoute>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/thankyou" component={ThankYou} />
            <Route exact path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </UserLoggedIn.Provider>
  );
}

export default App;
