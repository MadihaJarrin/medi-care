import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Account from './Component/Account/Account';
import Login from './Component/Account/Login';
import Register from './Component/Account/Register';
import Blog from './Component/Blog/Blog';
import Carsouls from './Component/carsoule/Carsouls';
import Contact from './Component/Contact/Contact';
import AuthProvider from './Component/Context/AuthProvider';
import Details from './Component/Details/Details';
import Error from './Component/Error/Error';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Service from './Component/Service/Service';
import Team from './Component/Team/Team';




function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Carsouls></Carsouls>
            </Route>
            <Route exact path="/home">
              <Carsouls></Carsouls>
            </Route>
            <Route path="/service">
              <Service></Service>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/account">
              <Account></Account>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/team">
              <Team></Team>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
