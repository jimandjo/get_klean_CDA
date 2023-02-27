import React from 'react';
import Home from './Home';
import Welcome from './Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from './Reviews';

import AboutUs from './AboutUs';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>

          <Route index element={<Welcome />}/>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="reviews" element={<Reviews />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
