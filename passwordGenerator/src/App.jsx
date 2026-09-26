import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "#$%*@";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  // this copypasswordclipboard can be done without - useCallback
  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  });

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto my-8 p-6 bg-gray-700 rounded-2xl shadow-lg">
        {/* Heading */}
        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Password Generator
        </h1>

        {/* Password Input Section */}
        <div className="flex w-full overflow-hidden rounded-xl shadow-lg mb-6">
          <input
            type="text"
            value={password}
            className="flex-1 min-w-0 px-4 py-3
                     bg-slate-800
                     text-white
                     placeholder:text-slate-400
                     border border-slate-600
                     outline-none
                     focus:border-blue-500
                     focus:ring-2 focus:ring-blue-500/20
                     transition"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordClipboard}
            className="shrink-0 bg-blue-500 px-4 py-2
                     text-white font-medium
                     hover:bg-blue-600
                     transition"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-white">
          {/* Length */}
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={2}
              max={10}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label>Length: {length}</label>
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />

            <label htmlFor="numberInput" className="cursor-pointer">
              Numbers
            </label>
          </div>

          {/* Characters */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />

            <label htmlFor="characterInput" className="cursor-pointer">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
