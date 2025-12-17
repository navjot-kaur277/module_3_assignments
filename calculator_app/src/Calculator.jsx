import { useState } from 'react';
import './App.css'; 

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('select'); // Default to 'select'
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    // Validation: Ensure numbers are entered AND an operation is picked
    if (isNaN(n1) || isNaN(n2) || operation === 'select') {
      alert("Please enter numbers and select a valid action!");
      return;
    }

    let currentResult = 0;
    if (operation === 'Add') currentResult = n1 + n2;
    else if (operation === 'Subtract') currentResult = n1 - n2;
    else if (operation === 'Multiply') currentResult = n1 * n2;

    // Append new result to the top of the list
    setResults([currentResult, ...results]);
    
    // Reset inputs and dropdown for the next calculation
    setNum1('');
    setNum2('');
    setOperation('select');
  };

  return (
    <div className="calculator-container">
      <h2>Calculator</h2>
      
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="First Number"
      />
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Second Number"
      />

      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="select">Select Action</option>
        <option value="Add">Add (+)</option>
        <option value="Subtract">Subtract (-)</option>
        <option value="Multiply">Multiply (×)</option>
      </select>

      <button onClick={handleCalculate}>Perform Action</button>

      <div className="results-list">
        <h3>History</h3>
        <ul>
          {results.map((res, index) => (
            <li key={index} className="result-item">
               <span>Result:</span>
               <strong>{res}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;