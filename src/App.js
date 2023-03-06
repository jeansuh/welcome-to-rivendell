import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import Attractions from './Attractions'


import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = {<HomeLayout />}>
          <Route index element = {<HomeLayout />} />
        </Route>
        <Route  path = "/attractions" element = {<AttractionsLayout />}>
          <Route index element = {<AttractionsLayout />} />
        </Route>
        {/*<Route path = "celebrities" element = {<celebrities />} />
        <Route path = "accomodations" element = {<accomodations />} />
        <Route path = "directions" element = {<directions />} />
        <Route path = "*" element = {<NoMatch />} />*/}
      </Routes>

    </div>
  );
}

function HomeLayout(){
  return (
    <div>
      <Header />
      <Home />
    </div>

    );
}

function AttractionsLayout(){
  return(
    <div>
      <Header />
      <Attractions />
    </div>
  )
}

function NoMatch(){
  return(
    <div>404 : Not Found!</div>
  );
}