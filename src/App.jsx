import { useState } from "react";
import "./App.css";

function App() {

  const [customPostion, setCustomPosition] = useState({})

  const [counter, setCounter] = useState(0)

  const [saidYes, setSaidYes] = useState(false)

  const hoverHandler = () => {
    setCounter((counter) => counter+1)
    const i = Math.floor(Math.random()*500) +1;
    const j = Math.floor(Math.random()*500) +1;

    setCustomPosition({left: i, top: j})
    console.log(customPostion)
  }

  const contentSetter = (counter) => {
    if(counter > 10) {
      return "src/assets/hurt3.gif"
    }
    else if(counter >= 5) {
      return "src/assets/please2.gif"
    }
    else {
      return "src/assets/please1.gif"
    }
  }
  return (
    <div className="App flex flex-col justify-center items-center m-6 gap-10">
      <div className="gif-container h-64">
        <img src={ saidYes ? "src/assets/thankyou.gif" : contentSetter(counter)} alt="gif" className="h-full"/>
      </div>
      <h1 className="text-5xl font-bold text-white text-center">
        {saidYes? "Yaayy !!! I LOVE YOU SO MUCH !!" : "Will you be my Valentine ?"}
      </h1>
      {!saidYes ? <div className="buttons flex gap-20 flex-col">
      <button className="text-3xl font-bold bg-gray px-6 py-3 text-light-pink rounded-sm absolute left-1/3" onClick={() => setSaidYes(true)}>
          {" "}
          YES !!!!
        </button>
        <button style={{
          left: `${customPostion.left}px`,
          top: `${customPostion.top}px`
        }} className="text-3xl font-bold px-6 py-3 outline outline-1 outline-gray text-gray rounded-sm absolute" onMouseEnter={() => hoverHandler()}>
          {" "}
          No
        </button>
      </div> : <></>}
      

    </div>
  );
}

export default App;
