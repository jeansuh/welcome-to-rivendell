import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import Attractions from './Attractions'
import Celebrities from './Celebrities'
import Accommodations from './Accommodations'
import Directions from './Directions'


import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path ="/" element = {<Home />}>
          <Route index element = {<Home />} />
        </Route>
        <Route  path = "/attractions" element = {<Attractions />}>
          <Route index element = {<Attractions />} />
        </Route>
        <Route path = "celebrities" element = {<Celebrities />} >
          <Route index element = {<Celebrities />} />
        </Route>
        <Route path = "accomodations" element = {<Accommodations />}>
          <Route index element = {<Accommodations />} />
        </Route>
        <Route path = "directions" element = {<Directions />}>
          <Route index element = {<Directions />} />
        </Route>
        <Route path = "*" element = {<NoMatch />} />
      </Routes>

    </div>
  );
}

function NoMatch(){
  return(
    <div>404 : Not Found!</div>
  );
}