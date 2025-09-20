
import { useState } from 'react';
import './MainPage.css';
import axios from 'axios';
import Fuse from "fuse.js";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Scripts } from "react-router-dom";
import {ReactTyped} from "react-typed";
export function MainPage() {
    const suggestions = [
       "поиск","найди","поищи","ищи","найти","покажи","отыщи","отыскать","как","где",// Поиск
        "создай профиль компании","создать компанию","зарегистрируй компанию","зарегистрировать фирму","оформи компанию","добавь компанию","заведи компанию","создать профиль компании",//Компания
        "создай новую закупку","создать закупку","оформи закупку","добавь закупку","начни закупку","сделай закупку","зарегистрируй закупку","создать новую закупку",//Закупки
        "создать КС","создай КС","оформи КС","добавь КС","заведи КС","зарегистрируй КС","сделай КС",//KC
        "купить","хочу купить","приобресть","купи","заказать","закажи","возьми","хочу заказать","сделай заказ","хочу купить","оформить покупку","приобрести","прибрети","приобретение",//Покупки
        "добавь",
        "сделай",
        "найди пользователя ивана и поменяй почту на (вставить на любую почту)",
        "создай профиль сотруднику ивану",
        "удали профиль сотруднику ивану",
        ,
    ];

    const fuse = new Fuse(suggestions, { threshold: 0.4, distance: 50 });
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [messages, setMessages] = useState([]); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        if (!value.trim()) {
            setResults([]);
            return;
        }

        const words = value.trim().split(/\s+/);
        const lastWord = words[words.length - 1] || "";
        const matches = fuse.search(lastWord);
        setResults(matches.map((m) => m.item));
    };

    const handleSuggestionClick = (suggestion) => {
        const words = input.trim().split(/\s+/);
        words[words.length - 1] = suggestion;
        const newValue = words.join(" ");
        setInput(newValue + " ");
        setResults([]);
    };

    const handleSubmit = async () => {
        if (!input.trim()) return;

        setMessages(prev => [...prev, { role: "user", text: input }]);

        try {
            const res = await axios.post("http://45.150.8.176:8080/api/chat", {
                user_id: 1,
                message: input,
            });

            const botResponse = res.data.response;
            setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
        } catch (err) {
            console.error(err);
            setMessages(prev => [...prev, { role: "bot", text: "Ошибка при запросе" }]);
        }

        setInput("");
        setResults([]);
    };

    return (
        
        <div className="mainPage">
            <div className='hManePage'>
                <ReactTyped
                        strings={[
                        "Добро пожаловать ",
                        "Чем помочь сегодня?"
                        ]}
                        typeSpeed={50}   // скорость печати
                        backSpeed={30}   // скорость удаления (если есть цикл)
                        loop={false}     // повторять или нет
                    />

            </div>
            <div className="chatWindow">
                {messages.map((msg, i) => (
                    <div key={i} className={`message ${msg.role}`}>
                        <span className="bubble">{msg.text}</span>
                    </div>
                ))}
            </div>
                
            <div className="searchInputBlock">
                <div className='typed'>
                     <ReactTyped
                        strings={suggestions}
                        typeSpeed={50}   // скорость печати
                        backSpeed={30}   // скорость удаления (если есть цикл)
                        loop={true}     // повторять или нет
                    />
                </div>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Введите запрос..."
                    className="searchInput"
                />

                {results.length > 0 && (
                    <ul className="suggestionsList">
                        {results.map((r, i) => (
                            <li
                                key={i}
                                onClick={() => handleSuggestionClick(r)}
                                className="suggestionItem"
                            >
                                {r}
                            </li>
                        ))}
                    </ul>
                )}


<button onClick={handleSubmit} className="sendButton">
                    Отправить
                </button>
            </div>
        </div>
    );
}
export default MainPage;