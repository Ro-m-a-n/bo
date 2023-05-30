import { useState, useEffect } from "react";

function App() {
  const [sec, setSec] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started) {
      return;
    }
    let timeoutId = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    console.log("a");
    return () => {
      console.log("b");
      clearInterval(timeoutId);
    };
  }, [started]);

  return (
    <>
      <p>{sec}</p>
      <button onClick={() => setStarted(true)}>start</button>
      <button onClick={() => setStarted(false)}>stop</button>
    </>
  );
}

export default App;
