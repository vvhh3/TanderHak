import { useState } from 'react'
import Fuse from "fuse.js";
import './App.css'
import axios from 'axios';

import AddKsForm from './components/KsForm/AddKSForm.jsx';
import { MainPage } from './components/MainPage/MainPage.jsx';
import { Contract } from './components/Contract/Contract.jsx';

function App() {
    return (
      <>
      <MainPage />
      <AddKsForm />
      <Contract></Contract>
    </>
  )
};


export default App
