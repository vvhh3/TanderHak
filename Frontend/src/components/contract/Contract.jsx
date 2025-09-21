import "./Contract.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Contract(){
     const [cotract, setContract] = useState({ title: '', amount: '',  category: '',customerINN: "",    supplierName: "",supplierINN: "" })
      const saveCompany = async () => {
        try {
            const payload = {
                title: cotract.title,
                amount: cotract.amount,
                category: cotract.category,
                customerINN: cotract.customerINN,
                supplierName: cotract.supplierName,
                supplierINN :cotract.supplierINN
            }
            console.log(payload)
            // const res = await axios.post("http://45.150.8.176:8080/api/chat", payload)
            // setCompanys(...companys,res.data);
            setContract({title: '', amount: '',  category: '',customerINN: "",    supplierName: "",supplierINN: ""})
        } catch (error) {
            console.log(error)
        }
    } 
     const navigate = useNavigate();
    const handleClose = () =>{
        navigate('/')
    }
    return(
    <>
   
    <div className="blockContractConteiner">
        <div className="blockContract"> 
            <div className="hContract">
                <header>Создание контракта</header>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Наименование контракта</label>
                <input className='searchInput' value={cotract.title} onChange={(e) => setContract({...cotract,title:e.target.value})}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Сумма контракта</label>
                <input className='searchInput' value={cotract.amount} onChange={(e) => setContract({...cotract,amount:e.target.value})}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Категория ПП первой позиции спецификации </label>
                <input className='searchInput' value={cotract.category} onChange={(e) => setContract({...cotract,category:e.target.value})}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">ИНН заказчика </label>
                <input className='searchInput' value={cotract.customerINN} onChange={(e) => setContract({...cotract,customerINN:e.target.value})}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Наименование поставщика </label>
                <input className='searchInput' value={cotract.supplierName} onChange={(e) => setContract({...cotract,supplierName:e.target.value})}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">ИНН поставщика </label>
                <input className='searchInput' value={cotract.supplierINN} onChange={(e) => setContract({...cotract,supplierINN:e.target.value})}></input>
            </div>
            <div className="buttonBlock">
                <button className="buttonCancel" onClick={handleClose}>Отмена</button>
                <button className="buttonAccept" onClick={saveCompany}>Создать</button>
            </div>
        </div>
    </div>
    </>
    )
}
export default Contract;