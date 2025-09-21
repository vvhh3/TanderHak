
import { useState, useEffect } from 'react';
import './MainPage.css';
import axios from 'axios';
import Fuse from "fuse.js";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Scripts } from "react-router-dom";
import { ReactTyped } from "react-typed";
import Cookies from "js-cookie";
export function MainPage() {
    const suggestions = [
        "поиск", "найди", "поищи", "ищи", "найти", "покажи", "отыщи", "отыскать", "как", "где",// Поиск
        "поиск контракты компании", "найди контракты компании ", "поищи контракты компании", "ищи контракты компании", "найти контракты компании", "покажи контракты компании", "отыщи контракт компании", "отыскать контракты компании",// Поиск по контрактам (наименнованию поставщика)
        "создай профиль компании", "создать компанию", "зарегистрируй компанию", "зарегистрировать фирму", "оформи компанию", "добавь компанию", "заведи новую компанию", "создать профиль компании",//Компания
        "создай новую закупку", "создать закупку", "оформи закупку", "добавь закупку", "начни закупку", "сделай закупку", "зарегистрируй закупку", "создать новую закупку",//Закупки
        "создай новую прямую закупку", "создать прямую закупку", "оформи прямую закупку", "добавь прямую закупку", "начни прямую закупку", "сделай прямую закупку", "зарегистрируй прямую закупку", "создать новую прямую закупку",//Прямая закупка
        "создай новую закупку по потребностям", "создать закупку по потребностям", "оформи закупку по потребностям", "добавь закупку по потребностям", "начни закупку по потребностям", "сделай закупку по потребностям", "зарегистрируй закупку по потребностям", "создать новую закупку по потребностям",//Закупка по потребностям   
        "создай новую закупку у единственного поставщика", "создать закупку у единственного поставщика", "оформи закупку у единственного поставщика", "добавь закупку у единственного поставщика", "начни закупку у единственного поставщика", "сделай закупку у единственного поставщика", "зарегистрируй новую закупку у единственного поставщика", "создать новую закупку у единственного поставщика",//Закупка по потребностям   
        "создать КС", "создай КС", "оформи КС", "добавь КС", "заведи КС", "зарегистрируй КС", "сделай КС",//KC
        "купить", "хочу купить", "приобрести", "купи", "заказать", "закажи", "возьми", "хочу заказать", "сделай заказ", "хочу купить", "оформить покупку", "приобрести", "прибрети", "приобретение",//Покупки
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
    const [loading, setLoading] = useState(false);
    // const [estimation, setEstimation] = useState(null)
    // const [like, setLike] = useState();
    const navigate = useNavigate();


function handleQuery(userInput) {
  // варианты первого слова
  const firstWordVariants = ["найди", "поиск", "ищи", "найти"];

  // эталонная структура
  const pattern = ["контракты", "компании"];

  // разбиваем строку на слова
  const words = userInput.trim().split(/\s+/);
  const lowerWords = words.map(w => w.toLowerCase());

  // проверяем первое слово на совпадение с любым вариантом
  const firstWordOk = firstWordVariants.includes(lowerWords[0]);

  // проверяем второе и третье слово
  const restOk = pattern.every((word, i) => lowerWords[i + 1] === word);

  if (firstWordOk && restOk) {
    // название компании = всё, что идёт после первых 3 слов
    const companyName = words.slice(3).join(" ");
    const message = "найди  контракты компании"+" "+String(companyName)
    setInput(message);
    console.log(message)
    
  }
  
  
}



    
    useEffect(() => {
        const savedChat = Cookies.get("chatHistory");
        if (savedChat) {
            setMessages(JSON.parse(savedChat));
        }
    }, []);
    useEffect(() => {
        if (messages.length > 0) {
            Cookies.set("chatHistory", JSON.stringify(messages), { expires: 7 });
        }
    }, [messages]);
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



    const routesMap = {
        "create:ks": "/create",                // создать КС
        "create:company": "/company",          // создать компанию
        "create:contract": "/AddContract",     // создать контракт
        "create:product": "/AddProduct",       // добавить продукт
        "create:b2b": "/CreateB2B",            // создать B2B
        "create:procedure": "/AddProcedurs",   // конкурентные процедуры
        "create:pay": "/Pay",                  // закупка по потребностям

        "search:order": "/ContractTable",    // показать компанию
        "search:ks": "/QuotationSessiTable",   // показать КС
        "search:product": "/ProductCard",      // показать продукт
    };

    function handleIntention(action, objectType, navigate) {
        const key = `${action}:${objectType}`; // напр. "create:company"

        if (routesMap[key]) {
            navigate(routesMap[key]);
        } else {
            alert("Намерение не распознано: " + key);
        }
    }


//
    const handleSubmit = async () => {
        if (!input.trim()) return;
        handleQuery(input)
        
        setMessages(prev => [...prev, { role: "user", text: input }]);
        setLoading(true);
        try {
            const res = await axios.post("http://45.150.8.176:8080/api/chat", {
                user_id: 1,
                message: input,
            });

            console.log("Ответ бэка:", res.data);

            const action = res.data.action?.toLowerCase() || "";
            const objectType = res.data.objectType?.toLowerCase() || "";

            if (action && objectType) {
                handleIntention(action, objectType, navigate);
            }

            // Добавляем сообщение бота
            setMessages(prev => [
                ...prev,
                { role: "bot", text: res.data.response || "Готово", rating: null },
            ]);
        } catch (err) {
            console.error(err);
            setMessages(prev => [...prev, { role: "bot", text: "Ошибка при запросе" }]);
        } finally {
            setLoading(false); 
        }

        setInput("");
        setResults([]);
    };

    const handleRateMessage = (index, rating) => {
        setMessages(prev =>
            prev.map((msg, i) => {
                if (i !== index) return msg;
                if (msg.rating !== null) return msg;
                return { ...msg, rating };
            })
        );

        // Здесь можно отправлять на бэк только для этого сообщения
        // axios.post("/api/rate", { messageId: index, rating });
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
                        <p>{msg.text}</p>

                        {msg.role === "bot" && (
                            <div className="rating-buttons">
                                <button
                                    className={msg.rating === true ? "active" : ""}
                                    onClick={() => handleRateMessage(i, true)}
                                    disabled={msg.rating !== null}
                                >
                                    👍
                                </button>
                                <button
                                    className={msg.rating === false ? "active" : ""}
                                    onClick={() => handleRateMessage(i, false)}
                                    disabled={msg.rating !== null}
                                >
                                    👎
                                </button>
                            </div>
                        )}
                    </div>
                ))}
                {loading && (
                    <div className="message bot">
                        <p>🤔 Думаю…</p>
                    </div>
                )}
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
                <div className='dev'>
                    <input
                        type="text"
                        value={input}
                        onChange={handleChange}
                        placeholder="Введите запрос..."
                        className="searchInput"
                    />

                    <button onClick={handleSubmit} className="sendButton">
                        Отправить
                    </button>

                </div>
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
            </div>
        </div>
    );
}
export default MainPage;