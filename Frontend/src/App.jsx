import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddKsForm from './components/KsForm/AddKSForm.jsx';
import { MainPage } from './components/MainPage/MainPage.jsx';
import MainLaout from './Laouts/MainLaout.jsx';
import FormCompany from './components/AddFormCompany/FormCompany.jsx';
import Registration from './components/Registration/Registration.jsx';
// import { Contract } from './components/Contract/Contract.jsx';
// import { Table } from './components/Table/Table.jsx';
import Cookies from 'js-cookie'
import { ContractTable } from './components/ContractTable/ContractTable.jsx';
import { GeneralInformation } from './components/ContractTable/GeneralInformation.jsx';
import { Customer } from './components/ContractTable/Customer.jsx';
import { Executor } from './components/ContractTable/Executor.jsx';
import { Price } from './components/ContractTable/Price.jsx';

function App() {

  const [companys,setCompanys] = useState([])
  const [users,setUsers] = useState([])

  useEffect(() =>{
    const cookie_user = Cookies.get('user')
    if(cookie_user){
      const lastUser = JSON.parse(cookie_user);
      setUsers([lastUser]);
    }
    else{
      
    }
  },[]) 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLaout />}>
            <Route path="/" element={<MainPage />} />
      
            <Route path="/create" element={<AddKsForm />} />
            <Route path="/company" element={<FormCompany  companys={companys} setCompanys={setCompanys}/>} />
            {/* <Route path="/Table" element={<Table />} /> */}
            <Route path='/Registration' element={<Registration onLogin={setUsers} users={users} setUsers={setUsers}/>}/>
            <Route path="/ContractTable" element={<ContractTable />}>
            <Route path="/ContractTable/GeneralInformation" element={<GeneralInformation />} />
            <Route path="/ContractTable/Customer" element={<Customer />} />
            <Route path="/ContractTable/Executor" element={<Executor />} />
            <Route path="/ContractTable/Price" element={<Price />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};


export default App
