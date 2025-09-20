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
import Registration from './components/Registration/Registration.jsx';
import { Contract } from './components/Contract/Contract.jsx';

function App() {
  const [companys,setCompanys] = useState([])
  const [users,setUsers] = useState([])
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
      <Registration users={users} setUsers={setUsers}/>
    </>
  )
};


export default App
