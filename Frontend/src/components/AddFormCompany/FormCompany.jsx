import { useState } from "react";
import './FormCompany.css'
import axios from "axios";
const FormCompany = ({companys,setCompanys}) => {
    const [company, setCompany] = useState({ title: '', type_organiz: '', region: '', kpp: '', ogrn: '', inn: '', description: '' })
    const saveCompany = async () => {
        try {
            const payload = {
                title: company.title,
                type_organiz: company.type_organiz,
                region: company.region,
                kpp: company.kpp,
                ogrn: company.ogrn,
                inn: company.inn,
                description: company.description
            }
            console.log(payload)
            // const res = await axios.post("http://45.150.8.176:8080/api/chat", payload)
            // setCompanys(...companys,res.data);
            setCompany({
                title:"",
                type_organiz:"",
                region:"",
                kpp:"",
                ogrn:"",
                inn:"",
                description:""
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="blockContractConteiner">
            <div className="blockContract">
                <div className="hContract">
                    <header>Создание компании</header>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Название комапнии</label>
                    <input className='searchInput' placeholder="Название компании" value={company.title} onChange={e => setCompany({ ...company, title: e.target.value })}></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Тип организации</label>
                    <input className='searchInput' placeholder="Тип организации" value={company.type_organiz} onChange={e => setCompany({ ...company, type_organiz: e.target.value })}></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">регион</label>
                    <input className='searchInput' placeholder="регион" value={company.region} onChange={e => setCompany({ ...company, region: e.target.value })}></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">ККП</label>
                    <input className='searchInput' placeholder="ККП" type="number" value={company.kpp} onChange={e => setCompany({ ...company, kpp: e.target.value })}></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">ОГРН</label>
                    <input className='searchInput' placeholder="ОГРН" type="number" value={company.ogrn} onChange={e => setCompany({ ...company, ogrn: e.target.value })} ></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">ИНН</label>
                    <input className='searchInput' placeholder="ИНН" type="number" value={company.inn} onChange={e => setCompany({ ...company, inn: e.target.value })} ></input>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Описание</label>
                    <input className='searchInput' placeholder="Описание" value={company.description} onChange={e => setCompany({ ...company, description: e.target.value })}></input>
                </div>
                <div className="buttonBlock">
                    <button className="buttonCancel">Отмена</button>
                    <button className="buttonAccept" onClick={saveCompany}>Создать</button>
                </div>
            </div>
            {/* {companys.map(c =>{
                <div key={c.id}>
                    {c.title} -{c.type_organiz}-{c.region}-{c.kpp}-{c.ogrn}-{c.inn}-{c.description}
                </div>
            })} */}
        </div>

    )
}
export default FormCompany;