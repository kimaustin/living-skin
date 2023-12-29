import { BrowserRouter as Router, Switch, Route, useLocation, Routes } from 'react-router-dom';
import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from './Components/About';
import Calendar from './Components/About';
import Blog from './Components/Blog';
import Manifesto from './Components/Manifesto';
import Reset from './Components/Reset';
import Contact from './Components/Contact';
import PPAFTE from './Components/PPAFTE';
import Space from './Components/Space';
import Events from './Components/Events';
import Archive from './Components/Archive';
import Close from './Components/Close';
import { BackgroundDissolve } from './Components/BackgroundDissolve';
import QuickNav from './Components/QuickNav';

function App() {

  const [about, setAbout] = useState(false);
  const toggleAbout = () => {
    // console.log("mobile nav toggled", about);
    setAbout(!about);
    setReset(true);
    console.log("turn BG reset on");
  };

  const [manifesto, setManifesto] = useState(false);
  const toggleManifesto = () => {
    setManifesto(!manifesto);
    setReset(true);
  };

  const [space, setSpace] = useState(false);
  const toggleSpace = () => {
    setReset(true);
    setSpace(!space);
  };

  const [events, setEvents] = useState(false);
  const toggleEvents = () => {
      // console.log("drawer toggled to", versionDrawer);
      setEvents(!events);
      setReset(true);
    };

  const [contact, setContact] = useState(false);
  const toggleContact = (currPage) => {
      setContact(!contact);
      setReset(true);
    }

  const [archive, setArchive] = useState(false);
  const toggleArchive = (currPage) => {
      setArchive(!archive);
      setReset(true);
    }

  const [reset, setReset] = useState(false);
  const closePortals = () => {
    console.log("portals should close");
    setAbout(false);
    setManifesto(false);
    setSpace(false);
    setEvents(false);
    setContact(false);
    setArchive(false);
    setReset(false);
  }

  // const location = useLocation();
  // let currPage = location.pathname.split("/").pop();

  // if (currPage == "manifesto") {
  //   setManifesto(true);
  // } else if (currPage == "about") {
  //   setAbout(true);
  // } else if (currPage == "contact") {
  //   setContact(true);
  // } else if (currPage == "space") {
  //   setSpace(true);
  // } else if (currPage == "events") {
  //   setEvents(true);
  // } else if (currPage == "showcase") {
  //   setShowcase(true);
  // } else {
  //   closePortals();
  // }

  return (
    <Router>
    {/* <ThemeProvider theme={light ? lightTheme : darkTheme}> */}
      {/* <Navigation /> */}
      {/* <About showAbout={about} /> */}
      {/* <Contact showContact={contact} /> */}
      {/* <Manifesto showManifesto={manifesto} /> */}
      {/* <PPAFTE /> */}
      <BackgroundDissolve />
      <Home 
          aboutToggle={toggleAbout} 
          showAbout={about} 
          manifestoToggle={toggleManifesto}
          showManifesto={manifesto}
          spaceToggle={toggleSpace}
          showSpace={space}
          eventsToggle={toggleEvents}
          showEvents={events}
          contactToggle={toggleContact}
          showContact={contact}
          archiveToggle={toggleArchive}
          showArchive={archive}
          closePortals={closePortals}
      />
      {/* <QuickNav/> */}
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/manifesto" element={<Manifesto closePortals={closePortals} />} />
        <Route path="/about" element={<About closePortals={closePortals} />} />
        <Route path="/contact" element={<Contact closePortals={closePortals} />} />
        <Route path="/space" element={<Space closePortals={closePortals} />} />
        <Route path="/events" element={<Events closePortals={closePortals} />} />
        <Route path="/archive" element={<Archive closePortals={closePortals} />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/manifesto" element={<Manifesto />} /> */}
      </Routes>
      {/* <Reset showReset={reset} closePortals={closePortals} />
      <Close showReset={reset} closePortals={closePortals} /> */}
    {/* </ThemeProvider> */}
  </Router>
  );
}

export default App;
