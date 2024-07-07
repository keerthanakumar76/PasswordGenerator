import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allChars = '';
    if (includeUppercase) allChars += upperCaseChars;
    if (includeLowercase) allChars += lowerCaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <input type="text" value={password} readOnly />
      <button onClick={copyPassword}>Copy</button>
      <div>
        <label htmlFor="length">Select Password length (8-50 characters): </label>
        <input
          type="number"
          id="length"
          min="8"
          max="50"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="uppercase"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        <label htmlFor="uppercase"> Include upper case</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="lowercase"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        <label htmlFor="lowercase"> Include lower case</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="numbers"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <label htmlFor="numbers"> Include numbers</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="symbols"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        <label htmlFor="symbols"> Include symbols</label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
}

export default App;
