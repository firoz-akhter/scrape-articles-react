import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="bg-red-500 text-white p-4">Hello from the otherside</h2>
    </>
  );
}

export default App;
