import axios from "axios"
import { useState } from "react"

const Registration = ({users,setUsers}) => {
    const [input,setInput] = useState({login:'',password:''})
    
    const saveRegistration = async () =>{
        try{
            const paylod = {login:input.login,password:input.password}
            // const res = await axios.post("http://45.150.8.176:8080/api/chat", paylod)
            setUsers([...users, paylod]);
            
            console.log(users)
            setInput({
                login:'',
                password:''
            })

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
                    <label className="labelBlock">Логин</label>
                    <input className='searchInput' placeholder="логин" value={input.login} onChange={e => setInput({ ...input, login: e.target.value })}/>
                </div>
                <div className='searchInputBlock'>
                    <label className="labelBlock">Пароль</label>
                    <input className='searchInput' placeholder="password" type='password' value={input.password} onChange={e => setInput({ ...input, password: e.target.value })}/>
                </div>
                <div className="buttonBlock">
                    <button className="buttonCancel">Отмена</button>
                    <button className="buttonAccept" onClick={saveRegistration}>Создать</button>
                </div>
            </div>
        </div>
    )
}
export default Registration