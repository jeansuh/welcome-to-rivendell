import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1> welcome to Rivendell! </h1>
      <Routes>
        <Route path ="/" element = {<Layout />}>
          <Route index element = {<Home />} />
{/*          <Route  path = "lodging" element = {<Lodging />} />
          <Route path = "food" element = {<Food />} />
          <Route path = "attractions" element = {<attractions />} />

          <Route path = "*" element = {<NoMatch />} />*/}
        </Route>
      </Routes>

    </div>
  );
}

function Layout(){
  return (
    <div>
      <Link to = "/">Home</Link>
    </div>

    );
}

