import { useState } from 'react'
import Fuse from "fuse.js";
import './App.css'

function App() {

const suggestionsList = ["поиск", "найди", "поищи", "создай", "добавь", "сделай"];

const fuse = new Fuse(suggestionsList, {
  includeScore: true,
  threshold: 0.5, 
});
 const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const matches = fuse.search(value);
    setResults(matches.map((match) => match.item));
  };

  // При клике на подсказку → вставляем её в input
  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setResults([]); // очищаем подсказки
  };
  return (
    <>
      <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Напиши что-нибудь..."
        style={{ width: "100%", padding: "8px", fontSize: "16px" }}
      />

      {results.length > 0 && (
        <ul style={{ border: "1px solid #ccc", padding: "8px", marginTop: "5px", listStyle: "none" }}>
          {results.map((suggestion, idx) => (
            <li
              key={idx}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: "5px",
                cursor: "pointer",
                borderBottom: "1px solid #eee"
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}

export default App
