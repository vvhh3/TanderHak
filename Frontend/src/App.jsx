import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddKsForm from './components/KsForm/AddKSForm.jsx';
import { MainPage } from './components/MainPage/MainPage.jsx';
import MainLaout from './Laouts/MainLaout.jsx';
import FormCompany from './components/AddFormCompany/FormCompany.jsx';
import Registration from './components/Registration/Registration.jsx';
import Cookies from 'js-cookie'
import { ContractTable } from './components/ContractTable/ContractTable.jsx';
import { GeneralInformation } from './components/ContractTable/GeneralInformation.jsx';
import { Customer } from './components/ContractTable/Customer.jsx';
import { Executor } from './components/ContractTable/Executor.jsx';
import { Price } from './components/ContractTable/Price.jsx';

import { GeneralInformationQuotationSessiTable } from './components/QuotationSessiTable/GeneralInformationQuotationSessiTable.jsx';
import { QuotationSessiTable } from './components/QuotationSessiTable/QuotationSessiTable.jsx';
import { CustomerQuotationSessiTable } from './components/QuotationSessiTable/CustomerQuotationSessiTable.jsx';
import { ExecutorQuotationSessiTable } from './components/QuotationSessiTable/ExecutorQuotationSessiTable.jsx';
import { PriseQuotationSessiTable } from './components/QuotationSessiTable/PriseQuotationSessiTable.jsx';
import { ProductCard } from './components/ProductCard/ProductCard.jsx';
import { AddProduct } from './components/AddProduct/AddProduct.jsx';
import { Contract } from './components/contract/Contract.jsx';
import B2Bpurchases from './components/B2Bpurchases/B2Bpurchases.jsx';
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
            
            <Route path='/Registration' element={<Registration onLogin={setUsers} users={users} setUsers={setUsers}/>}/>\

            <Route path="/ContractTable" element={<ContractTable />}>
            <Route path="/ContractTable/GeneralInformation" element={<GeneralInformation />} />
            <Route path="/ContractTable/Customer" element={<Customer />} />
            <Route path="/ContractTable/Executor" element={<Executor />} />
            <Route path="/ContractTable/Price" element={<Price />} />
            </Route>

            <Route path='/QuotationSessiTable'element={<QuotationSessiTable/>}>
            <Route path='/QuotationSessiTable/GeneralInformation' element={<GeneralInformationQuotationSessiTable/>}/>
            <Route path='/QuotationSessiTable/Customer' element={<CustomerQuotationSessiTable/>}/>
            <Route path='/QuotationSessiTable/Executor' element={<ExecutorQuotationSessiTable/>}/>
            <Route path='/QuotationSessiTable/Price' element={<PriseQuotationSessiTable/>}/>
            </Route>

              <Route path='/ProductCard' element={<ProductCard/>}/>

              <Route path='/AddProduct' element={<AddProduct/>}/>
              <Route path='/AddContract' element={<Contract/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};


export default App

