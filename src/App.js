import React from 'react'
import AboutUs from './AboutUs'
import Home from './Home'
import Welcome from './Welcome';
import AppPage from './Welcome1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from './Reviews';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Welcome />}/>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="welcome1" element={<AppPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
