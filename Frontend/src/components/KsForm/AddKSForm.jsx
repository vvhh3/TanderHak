import React, { useState } from "react";
import axios from "axios";
import './ksForm.css'

const AddKSForm = () => {
  const [ksList, setKsList] = useState([]);
  const [ksForm, setKsForm] = useState({
    name: "",
    customerName: "",
    customerINN: "",
    supplierName: "",
    supplierINN: "",
    amount: "",
    startDate: "",
    endDate: "",
    category: "",
    legalBasis: ""
  });
  //   useEffect(() => {
  //   const fetchKS = async () => {
  //     try {
  //       const res = await axios.get("http://45.150.8.176:8080/api/ks"); // тут твоя ручка
  //       setKsList(res.data); // сервер должен вернуть массив КС
  //     } catch (err) {
  //       console.error("Ошибка при загрузке КС:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchKS();
  // }, []);
  const saveKS = async () => {
    try {
      const payload = { ...ksForm, amount: Number(ksForm.amount) || 0 };

      // const res = await axios.post("http://45.150.8.176:8080/api/chat", payload);
      // setKsList([...ksList, res.data]);

      const newKS = { id: Date.now(), ...payload };
      setKsList([...ksList, newKS]);
      console.log("newKS:", newKS);
      console.log("ksList:", ksList);
      console.log("ksForm:", ksForm);
      // Сброс формы
      setKsForm({
        name: "",
        customerName: "",
        customerINN: "",
        supplierName: "",
        supplierINN: "",
        amount: 0,
        startDate: "",
        endDate: "",
        category: "",
        legalBasis: ""
      });
    } catch (err) {
      console.error("Ошибка при сохранении КС:", err);
      alert("Ошибка при сохранении КС");
    }
  };

  return (
      <div className="blockContractConteiner">
        <div className="blockContract"> 
            <div className="hContract">
                <header>Создание контракта</header>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Название КС</label>
                <input className='searchInput' placeholder="Название КС" value={ksForm.name} onChange={e => setKsForm({ ...ksForm, name: e.target.value })}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Сумма КС</label>
                <input className='searchInput' placeholder="Сумма КС" type="number" value={ksForm.amount} onChange={e => setKsForm({ ...ksForm, amount: e.target.value })}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Категория ПП</label>
                <input className='searchInput' placeholder="Категория ПП" value={ksForm.category} onChange={e => setKsForm({ ...ksForm, category: e.target.value })}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Имя заказчика </label>
                <input className='searchInput' placeholder="Имя заказчика" value={ksForm.customerName} onChange={e => setKsForm({ ...ksForm, customerName: e.target.value })}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">ИНН заказчика </label>
                <input className='searchInput'  placeholder="ИНН заказчика" type="number" value={ksForm.customerINN} onChange={e => setKsForm({ ...ksForm, customerINN: e.target.value })} ></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Имя поставщика   </label>
                <input className='searchInput' placeholder="Имя поставщика" value={ksForm.supplierName} onChange={e => setKsForm({ ...ksForm, supplierName: e.target.value })} ></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">ИНН поставщика</label>
                <input className='searchInput' placeholder="ИНН поставщика" type="number" value={ksForm.supplierINN} onChange={e => setKsForm({ ...ksForm, supplierINN: e.target.value })}></input>
            </div>
            <div className='searchInputBlock'> 
              <label className="labelBlock">Закон основания</label>
                <select value={ksForm.legalBasis} onChange={(e) => setKsForm({...ksForm,legalBasis:e.target.value})}>
                  <option value={1}>ФЗ №223</option>
                  <option value={2}>ФЗ №44</option>
                </select>
            </div>
            <div className="buttonBlock">
                <button className="buttonCancel">Отмена</button>
                <button className="buttonAccept" onClick={saveKS}>Создать</button>
            </div>
        </div>
    </div>
  );
};

export default AddKSForm;