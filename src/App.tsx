import { useState } from "react";
import Button from "./components/utilities/Button";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="from-cyan-500 to-blue-500 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:text-7xl">
        Vite + React
      </h1>
      <div className="card">
        <Button
          method={() => setCount((count) => count + 1)}
          text={`count is ${count}`}
        />
        <p className="text-hm-red-50">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
