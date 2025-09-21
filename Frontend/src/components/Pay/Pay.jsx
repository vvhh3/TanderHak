import "./Pay.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Pay() {
    const [ksList, setKsList] = useState([]);
    const [payForm, setPayForm] = useState({
        name: "",
        customerName: "",// заказчик
        customerINN: "",
        supplierName: "",// поставщик
        supplierINN: "",
        amount: "",
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
            const payload = { ...payForm, amount: Number(payForm.amount) || 0 };

            // const res = await axios.post("http://45.150.8.176:8080/api/chat", payload);
            // setKsList([...ksList, res.data]);

            //   const newKS = { id: Date.now(), ...payload };
            //   setKsList([...ksList, newKS]);
            //   console.log("newKS:", newKS);
            //   console.log("ksList:", ksList);
            //   console.log("ksForm:", B2B);
            // Сброс формы
            setPayForm({
                name: "",
                customerName: "",// заказчик
                customerINN: "",
                supplierName: "",// поставщик
                supplierINN: "",
                amount: "",
                legalBasis: ""
            });
        } catch (err) {
            console.error("Ошибка при сохранении КС:", err);
            alert("Ошибка при сохранении КС");
        }
    };
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/')
    }
    return (
        <div className="blockContractConteiner">
            <div className="blockContract">
                <div className="hContract">
                    <header>Создание контракта</header>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Название КС</label>
                    <input className='searchInput' placeholder="Название КС" value={payForm.name} onChange={e => setPayForm({ ...payForm, name: e.target.value })}></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Сумма КС</label>
                    <input className='searchInput' placeholder="Сумма КС" type="number" value={payForm.amount} onChange={e => setPayForm({ ...payForm, amount: e.target.value })}></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Имя заказчика </label>
                    <input className='searchInput' placeholder="Имя заказчика" value={payForm.customerName} onChange={e => setPayForm({ ...payForm, customerName: e.target.value })}></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">ИНН заказчика </label>
                    <input className='searchInput' placeholder="ИНН заказчика" type="number" value={payForm.customerINN} onChange={e => setPayForm({ ...payForm, customerINN: e.target.value })} ></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Имя поставщика   </label>
                    <input className='searchInput' placeholder="Имя поставщика" value={payForm.supplierName} onChange={e => setPayForm({ ...payForm, supplierName: e.target.value })} ></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">ИНН поставщика</label>
                    <input className='searchInput' placeholder="ИНН поставщика" type="number" value={payForm.supplierINN} onChange={e => setPayForm({ ...payForm, supplierINN: e.target.value })}></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Закон основания</label>
                    <select value={payForm.legalBasis} onChange={(e) => setPayForm({ ...payForm, legalBasis: e.target.value })}>
                        <option value={1}>ФЗ №223</option>
                        <option value={2}>ФЗ №44</option>
                    </select>
                </div>
                <div className="buttonBlock">
                    <button className="buttonCancel" onClick={handleClose}>Отмена</button>
                    <button className="buttonAccept" onClick={saveKS}>Создать</button>
                </div>
            </div>
        </div>
    )
}
export default Pay;