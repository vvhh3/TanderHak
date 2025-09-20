import axios from "axios"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

const Registration = ({ users, setUsers, onLogin }) => {
    const [input, setInput] = useState({ name: '', lastName: '' });
    const [alreadyRegistered, setAlreadyRegistered] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const cookieUser = Cookies.get("user");
    if (cookieUser) {
      setAlreadyRegistered(true);

        if (alreadyRegistered) {
        alert("Вы уже зарегистрированы!")    
        }
      // через 3 секунды редирект на главную
      
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer); // очищаем таймер при размонтировании
    }
  }, [navigate]);

    const saveRegistration = async (e) =>{
        e.preventDefault();
        try{
            const newUser = { name: input.name, lastName: input.lastName };

            setUsers([...users, newUser]);
            // const res = await axios.post("http://45.150.8.176:8080/api/chat", paylod)

            console.log(users)

            Cookies.set('user', JSON.stringify(newUser), { expires: 7 });
            
            if(onLogin) onLogin(newUser);

            setInput({
                name:'',
                lastName:''
            })
            navigate("/")

        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className="blockContractConteiner">
            <div className="blockContract">
                <div className="hContract">
                    <p>Регистрация</p>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Имя</label>
                    <input className='searchInput' placeholder="имя" value={input.name} onChange={e => setInput({ ...input, name: e.target.value })}/>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Фамилия</label>
                    <input className='searchInput' placeholder="фемели" value={input.lastName} onChange={e => setInput({ ...input, lastName: e.target.value })}/>
                </div>
                <div className="buttonBlock">
                    <button className="buttonCancel">Отмена</button>
                    <button className="buttonAccept" onClick={saveRegistration}>Создать</button>
                </div>
            </div>
            {alreadyRegistered}
        </div>
    )
}
export default Registration