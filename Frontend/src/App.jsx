import { useState } from 'react'
import Fuse from "fuse.js";
import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddKsForm from './components/KsForm/AddKSForm.jsx';
import { MainPage } from './components/MainPage/MainPage.jsx';
// import MainLayouts from "./Layouts/MainLayout.jsx";
import MainLaout from './Laouts/MainLaout.jsx';
import { Contract } from './components/Contract/Contract.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLaout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/create" element={<AddKsForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};


export default App
