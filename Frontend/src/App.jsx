import { useState } from 'react'
import Fuse from "fuse.js";
import './App.css'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddKsForm from './components/KsForm/AddKSForm.jsx';
import { MainPage } from './components/MainPage/MainPage.jsx';
// import MainLayouts from "./Layouts/MainLayout.jsx";
import MainLaout from './Laouts/MainLaout.jsx';
import FormCompany from './components/AddFormCompany/FormCompany.jsx';
import { Contract } from './components/Contract/Contract.jsx';
import { ContractTable } from './components/ContractTable/ContractTable.jsx';
import { GeneralInformation } from './components/ContractTable/GeneralInformation.jsx';
import { Customer } from './components/ContractTable/Customer.jsx';
import { Executor } from './components/ContractTable/Executor.jsx';
import { Price } from './components/ContractTable/Price.jsx';
function App() {
  const [companys,setCompanys] = useState([])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLaout />}>
            <Route path="/" element={<MainPage />} />
      
            <Route path="/create" element={<AddKsForm />} />
            <Route path="/company" element={<FormCompany  companys={companys} setCompanys={setCompanys}/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};


export default App
