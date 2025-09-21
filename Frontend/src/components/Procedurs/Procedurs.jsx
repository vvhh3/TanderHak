import "./Procedurs.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Procedurs() {
    const [ksList, setKsList] = useState([]);
    const [proc, setProc] = useState({
        name: "",
        customerName: "",// заказчик
        customerINN: "",
        supplierName: "",// поставщик
        supplierINN: "",
        amount: "",
        startDate: "",
        legalBasis: ""
    });
    const navigate = useNavigate();
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
    const save = async () => {
        try {
            const payload = { ...proc, amount: Number(proc.amount) || 0 };

            // const res = await axios.post("http://45.150.8.176:8080/api/chat", payload);
            // setKsList([...ksList, res.data]);

            // const newKS = { id: Date.now(), ...payload };
            // setKsList([...ksList, newKS]);
            // console.log("newKS:", newKS);
            // console.log("ksList:", ksList);
            // console.log("ksForm:", ksForm);
            // Сброс формы
            setProc({
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
        } catch (err) {
            console.error("Ошибка при сохранении КС:", err);
            alert("Ошибка при сохранении КС");
        }
    };
    const handleClose = () => {
        navigate("/")
    }
    return (
        <>

            <div className="blockContractConteiner">
                <div className="blockContract">
                    <div className="hContract">
                        <header>Создание контракта</header>
                    </div>
                    <div className='searchInputBlock'>
                        <label className="labelBlock">Название</label>
                        <input className='searchInput' placeholder="Название КС" value={proc.name} onChange={e => setProc({ ...proc, name: e.target.value })}></input>
                    </div>
                    <div className='searchInputBlock'>
                        <label className="labelBlock">Сумма</label>
                        <input className='searchInput' placeholder="Сумма" type="number" value={proc.amount} onChange={e => setProc({ ...proc, amount: e.target.value })}></input>
                    </div>
                    <div className='searchInputBlock'>
                        <label className="labelBlock">Имя заказчика </label>
                        <input className='searchInput' placeholder="Имя заказчика" value={proc.customerName} onChange={e => setProc({ ...proc, customerName: e.target.value })}></input>
                    </div>
                    <div className='searchInputBlock'>
                        <label className="labelBlock">ИНН заказчика </label>
                        <input className='searchInput' placeholder="ИНН заказчика" type="number" value={proc.customerINN} onChange={e => setProc({ ...proc, customerINN: e.target.value })} ></input>
                    </div>
                    <div className='searchInputBlock'>
                        <label className="labelBlock">Имя поставщика   </label>
                        <input className='searchInput' placeholder="Имя поставщика" value={proc.supplierName} onChange={e => setProc({ ...proc, supplierName: e.target.value })} ></input>
                    </div>
                    <div className='searchInputBlock'>
                        <label className="labelBlock">ИНН поставщика</label>
                        <input className='searchInput' placeholder="ИНН поставщика" type="number" value={proc.supplierINN} onChange={e => setProc({ ...proc, supplierINN: e.target.value })}></input>
                    </div>
                    <div className='searchInputBlock'>
                        <label className="labelBlock">Закон основания</label>
                        <select value={proc.legalBasis} onChange={(e) => setProc({ ...proc, legalBasis: e.target.value })}>
                            <option value={1}>ФЗ №223</option>
                            <option value={2}>ФЗ №44</option>
                        </select>
                    </div>
                    <div className="buttonBlock">
                        <button className="buttonCancel" onClick={handleClose}>Отмена</button>
                        <button className="buttonAccept" onClick={save}>Создать</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Procedurs;