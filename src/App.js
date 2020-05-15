import React, { useState, useEffect } from "react";
import posts from "./posts";

// Modifica el componente App para implmentar la funcionalidad requerida

function App() {
  const [searchList, setSearchlist] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchlist(event.target.value);
  };

  useEffect(() => {
    const results = posts.title.filter((postes) =>
      postes.toLowerCase().includes(searchList)
    );
    setSearchResults(results);
  }, [searchList]);

  return (
    <div>
      <div className="filter">
        <input
          type="text"
          placeholder="Ingresa el término de búsqueda"
          value={searchList}
          onChange={handleChange}
        />
      </div>
      <ul>
        <li>
          {searchResults.map((item) => (
            <li>{item}</li>
          ))}
          <a href={posts[0].url}>
            <img src={posts[0].image} />
          </a>
          <p>{posts[0].title}</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
