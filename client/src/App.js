import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Card from './components/Card/card';
import Nav from './components/Nav/nav';
import LandingPage from './components/LandingPage/LandingPage';
import Detail from './components/Details/details';
import Create from './components/Create/create'
import Home from './components/Home/home'


function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
      <div className="App">
      <Route path= '/app/' component={Nav}/> 
        {/* <Switch> */}
        <Route exact path= '/app/home'>
          <Home />
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
