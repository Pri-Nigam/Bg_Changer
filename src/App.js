import { useState } from 'react';

function App() {
  const [color,setColor] = useState('Olive');
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "red"}}
          onClick={() => setColor('red')}
          >Red
          </button>

          <button 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('green')}
          style={{background: "green"}}
          >Green
          </button>

          <button 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('blue')}
          style={{background: "blue"}}
          >Blue
          </button>

          <button 
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          onClick={() => setColor('orange')}
          style={{background: "orange"}}
          >Orange
          </button>

          <button 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('brown')}
          style={{background: "brown"}}
          >Brown
          </button>

          <button 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('grey')}
          style={{background: "grey"}}
          >Grey
          </button>

          <button 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('black')}
          style={{background: "black"}}
          >Black
          </button>

          <button 
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          onClick={() => setColor('yellow')}
          style={{background: "yellow"}}
          >Yellow
          </button>

          <button 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={() => setColor('purple')}
          style={{background: "purple"}}
          >Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
