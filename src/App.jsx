import { useState } from "react";
import "./tailwind.css";

function App() {
  const [count, setCount] = useState(0);

  console.log(
    "env",
    import.meta.env.VITE_CLIENT_ID,
    import.meta.env.VITE_CLIENT_SECRET
  );

  return (
    <main>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="w-20 h-20 bg-slate-500"></div>
        <div className="w-20 h-20 bg-red-500"></div>
      </div>
    </main>
  );
}
export default App;
