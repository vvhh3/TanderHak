import React, { useState } from "react";
import axios from "axios";
import '../KsForm/KsForm.css'
import { useNavigate } from "react-router-dom";
const B2Bpurchases = () => {
  const [ksList, setKsList] = useState([]);
  const [B2B, setB2B] = useState({
    name: "",
    customerName: "",
    customerINN: "",
    supplierName: "",
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
      const payload = { ...B2B, amount: Number(B2B.amount) || 0 };

      // const res = await axios.post("http://45.150.8.176:8080/api/chat", payload);
      // setKsList([...ksList, res.data]);

      const newKS = { id: Date.now(), ...payload };
      setKsList([...ksList, newKS]);
      console.log("newKS:", newKS);
      console.log("ksList:", ksList);
      console.log("ksForm:", B2B);
      // Сброс формы
      setB2B({
        name: "",
        customerName: "",
        customerINN: "",
        supplierName: "",
      });
    } catch (err) {
      console.error("Ошибка при сохранении КС:", err);
      alert("Ошибка при сохранении КС");
    }
  };
      const navigate = useNavigate();
    const handleClose = () =>{
        navigate('/')
    }
  return (
      <div className="blockContractConteiner">
        <div className="blockContract"> 
            <div className="hContract">
                <header>Создание B2B закукпи</header>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Название B2B закупки</label>
                <input className='searchInput' placeholder="Название" value={B2B.name} onChange={e => setB2B({ ...B2B, name: e.target.value })}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Сумма B2B закукпи</label>
                <input className='searchInput' placeholder="начальная сумма" type="number" value={B2B.supplierName} onChange={e => setB2B({ ...B2B, supplierName: e.target.value })}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Имя заказчика </label>
                <input className='searchInput' placeholder="Имя заказчика" value={B2B.customerName} onChange={e => setB2B({ ...B2B, customerName: e.target.value })}></input>
            </div>
            <div className='searchInputBlock'> 
                <label className="labelBlock">Реестровый номер</label>
                <input className='searchInput'  placeholder="Реестровый номер"  value={B2B.customerINN} onChange={e => setB2B({ ...B2B, customerINN: e.target.value })} ></input>
            </div>
            <div className="buttonBlock">
                <button className="buttonCancel" onClick={handleClose}>Отмена</button>
                <button className="buttonAccept" onClick={saveKS}>Создать</button>
            </div>
        </div>
    </div>
  );
};

export default B2Bpurchases;