import { useState } from 'react';
import './MainPage.css';
import Fuse from "fuse.js";
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
    ];

    const fuse = new Fuse(suggestions, {
        threshold: 0.4, // чувствительность (0 - точное совпадение, 1 - много вариантов)
        distance: 50,   // максимальная "дистанция" ошибки
    });

    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    // Обработка ввода текста
    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        // Берём последнее слово
        const words = value.trim().split(/\s+/);
        const lastWord = words[words.length - 1] || "";

        if (!lastWord) {
            setResults([]);
            return;
        }

        // Ищем все совпадения для последнего слова
        const matches = fuse.search(lastWord);
        setResults(matches.map((match) => match.item));
    };

    // При клике на подсказку → заменяем последнее слово
    const handleSuggestionClick = (suggestion) => {
        const words = input.trim().split(/\s+/);
        words[words.length - 1] = suggestion;
        const newValue = words.join(" ");

        setInput(newValue + " "); // добавляем пробел для следующего слова
        setResults([]); // очищаем подсказки
    };
    return (
        <>
            <div className='mainPage'>
                <div className='hearderMainPage'>
                    <header className='hManePage'>Привет</header>
                    <p className='pManePage'>Чем помочь сегодня?</p>
                </div>
                <div className='searchInputBlock'>
                    <input className='searchInput'
                        type="text"
                        value={input}
                        onChange={handleChange}
                        placeholder="Введите запрос..." />
                    {results.length > 0 && (
                        <div>
                            {results.map((r, i) => (
                                <p
                                    key={i}
                                    onClick={() => handleSuggestionClick(r)}
                                    style={{ cursor: "pointer", padding: "5px" }}
                                >
                                    {r}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default MainPage;
{/* <div style={{ width: "300px", margin: "20px auto" }}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Введите запрос..."
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        />
        {results.length > 0 && (
          <ul style={{ border: "1px solid #ccc", padding: "5px", marginTop: "0" }}>
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
      </div> */}