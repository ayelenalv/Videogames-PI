import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Card from './components/Card/card';
import Nav from './components/Nav/nav';
import InputSearch from './components/Nav/InputSearch';
import LandingPage from './components/LandingPage/LandingPage';
import Order from './components/Order/order'
import Detail from './components/Details/details';
import Create from './components/Create/create'

// import Home from './components/home/home.js';
// import Form from './components/form/form.js';
// import CardDetail from './components/cardDetail/cardDetail.js';

function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
      <div className="App">
      <Route path= '/app/' component={Nav}/> 
      <Route path= '/app/home' component={Order}/>
        {/* <Switch> */}
        {/* <Route exact path= '/app/home' component={Card,InputSearch} /> */}
        <Route exact path= '/app/home'>
          <InputSearch />
          <Card />
        </Route>
          <Route exact path= '/' component={LandingPage}/>
          <Route path='/app/create' component={Create}/>
          <Route path='/app/:id' component={Detail}/>


        {/* </Switch> */}
      </div>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
