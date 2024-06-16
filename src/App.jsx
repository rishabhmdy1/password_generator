import { useState, useCallback, useEffect } from "react"

import './App.css';
function App() {

  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);

  const passwordGenerator = useCallback(
    () => {
      let pass = '';
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      if (charAllowed) str += '!@#$%^&*(){}[]'
      if (numberAllowed) str += '1234567890'
      // console.log(str.length);
      // console.log(length);

      for (let i = 0; i < length; i++) {
        // console.log(i);
        let char = Math.floor(Math.random() * str.length)
        // console.log(char);
        pass += str.charAt(char)

      }

      setPassword(pass)

    },
    [length, charAllowed, numberAllowed, password])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, setPassword])


  return (
    <>
      <div className="main-wrapper">
        Password Generator
        <div className="input-div">

          <input
            type="text"
            value={password}
            placeholder="password"
          />
          <button>Copy</button>
        </div>
        <div className="controls-wraper">
          <div className="range-controls">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="checkbox-controls">
            <div className="num-checkbox">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                value={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label>Numbers</label>
            </div>
            <div className="char-checkbox">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                value={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App