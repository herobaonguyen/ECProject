import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import "./sass/Main.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainTemplate from './templates/main/MainTemplate';
import { Home } from './pages/main/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainTemplate/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
