import { useState } from "react";

function App() {
  const [color, setColor] = useState("skyblue");

  return (
    <>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >
        <div className=" flex flex-wrap justify-center items-center h-screen inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-9 py-6 rounded-xl">

            <button onClick={() => setColor("red")} className="outline-none px-6 bg-[red] py-4 rounded-lg text-black font-bold shadow-3xl">Red</button>

            <button onClick={() => setColor("orange")} className="outline-none px-6 bg-[orange] py-4 rounded-lg text-black font-bold shadow-3xl">Orange</button>

            <button onClick={() => setColor("yellow")} className="outline-none px-6 bg-[yellow] py-4 rounded-lg text-black font-bold shadow-3xl">Yellow</button>

            <button onClick={() => setColor("green")} className="outline-none px-6 bg-[green] py-4 rounded-lg text-black font-bold shadow-3xl">Green</button>

            <button onClick={() => setColor("blue")} className="outline-none px-6 bg-[blue] py-4 rounded-lg text-black font-bold shadow-3xl">Blue</button>

            <button onClick={() => setColor("indigo ")} className="outline-none px-6 bg-[indigo] py-4 rounded-lg text-black font-bold shadow-3xl">Indigo </button>

            <button onClick={() => setColor("violet ")} className="outline-none px-6 bg-[violet] py-3 rounded-lg text-black font-bold shadow-3xl">Violet</button>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
