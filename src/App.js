import React, { useState, useEffect } from 'react';
import './Style.css';

function App() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');
  useEffect(() => {
    const savedNames = JSON.parse(localStorage.getItem('namesList'));
    if (savedNames) {
      setNames(savedNames);
    }
  }, []);


   useEffect(() => {
    if (names.length > 0) {
      localStorage.setItem('namesList', JSON.stringify(names));
    }
  }, [names]); 

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAddName = () => {
    if (newName.trim() === '') return; 
    setNames((prevNames) => [...prevNames, newName]);
    setNewName(''); 
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={handleNameChange}
        
      />
      <button onClick={handleAddName}>Добавить</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
