import { useState } from 'react';
import './MainPage.css';
import axios from 'axios';
import Fuse from "fuse.js";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Scripts } from "react-router-dom";

export function MainPage() {
    const suggestions = [
        "поиск",
        "найди",
        "поищи",
        "создай профиль компании",
        "создай новую закупку",
        "создай КС",
        "добавь",
        "сделай",
        "найди пользователя ивана и поменяй почту на (вставить на любую почту)",
        "создай профиль сотруднику ивану",
        "удали профиль сотруднику ивану",
        "найди профиль компании озон и телефоном +71111111111",
    ];

    const fuse = new Fuse(suggestions, {
        threshold: 0.4,
        distance: 50,
    });
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
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

        try {
            const res = await axios.post("http://45.150.8.176:8080/api/chat", {
                user_id: 1,
                message: input,
            });
            console.log(res)
            const intention = res.data.response.toLowerCase();

            if (intention.includes("создать")) {
                navigate("/create");
            } else if (intention.includes("сделай")) {
                navigate("/company");
            } else {
                alert("Намерение не распознано: " + intention);
            }

        } catch (err) {
            console.error(err);
            alert("Ошибка при отправке запроса");
        }
    };

    return (
        <>
            <div className='mainPage'>
                <div className='hearderMainPage'>
                    <header className='hManePage'>Привет</header>
                    <p className='pManePage'>Чем помочь сегодня?</p>
                </div>
                <div className='searchInputBlock'>
                    <input
                        type="text"
                        value={input}
                        onChange={handleChange}
                        placeholder="Введите запрос..."
                        className='searchInput'
                    />

                    {results.length > 0 && (
                        <ul
                            style={{
                                border: "1px solid #ccc",
                                padding: "5px",
                                marginTop: "0",
                                listStyle: "none",
                            }}
                        >
                            {results.map((r, i) => (
                                <li
                                    key={i}
                                    onClick={() => handleSuggestionClick(r)}
                                    style={{ cursor: "pointer", padding: "5px" }}
                                >
                                    {r}
                                </li>
                            ))}
                        </ul>
                    )}
                    <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
                        Отправить
                    </button>
                </div>
            </div>
        </>
    )
}
export default MainPage;