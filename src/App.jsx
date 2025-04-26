import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobsListings from './components/JobListings';
import VIewAllJobs from './components/VIewAllJobs';

const App = () => {
  return (
  <>
  
  <Navbar />
  <Hero />
  <HomeCards />
  <JobsListings />
  <VIewAllJobs />

</>
  );
};

export default App
