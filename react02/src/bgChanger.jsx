import React, { useState } from 'react'

function Buttons() {
  const [color, setColor] = useState("white");

  return (
 
      <div
        className="w-screen h-screen"
        style={{ backgroundColor: color }}
      >
         <div className="fixed flex flex wrap justify-center bottom-12 inset-x-0">
        <button onClick={() => setColor("white")} className="px-4 py-2 text-green bg-amber-50 rounded">White</button>
        <button onClick={() => setColor("red")} className="px-4 py-2 bg-red-900 text-black rounded">Red</button>
        <button onClick={() => setColor("blue")} className="px-4 py-2 bg-blue-500 text-black rounded">Blue</button>
        <button onClick={() => setColor("black")} className="px-4 py-2 bg-black text-white rounded">Black</button>
        <button onClick={() => setColor("yellow")} className="px-4 py-2 bg-yellow-500 text-black rounded">Yellow</button>
        <button onClick={() => setColor("green")} className="px-4 py-2 bg-green-500 text-black rounded">Green</button>
      </div>
    </div>
  );
}

export default Buttons;
