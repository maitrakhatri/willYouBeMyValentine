import { useEffect, useState } from "react";
import "./App.css";
import { useSearchParams } from "react-router-dom";

function App() {
  const [customPostion, setCustomPosition] = useState({});
  const [counter, setCounter] = useState(0);
  const [saidYes, setSaidYes] = useState(false);

  const hoverHandler = () => {
    setCounter((counter) => counter + 1);
    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;
    setCustomPosition({ left: i, top: j });
  };

  const contentSetter = (counter) => {
    if (counter >= 15) {
      return "/angryCat.gif";
    } else if (counter >= 10) {
      return "hurt3.gif";
    } else if (counter >= 5) {
      return "please2.gif";
    } else {
      return "please1.gif";
    }
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const to = searchParams.get("to") 
  const from = searchParams.get("from")

  return (
    <div className="App flex flex-col justify-center items-center m-6 gap-10">
      <div className="gif-container h-64">
        <img
          src={saidYes ? "/thankyou.gif" : contentSetter(counter)}
          alt="gif"
          className="h-full"
        />
      </div>
      {saidYes && counter <= 15 && (
        <img
          src="/heartExplosion.gif"
          alt="heart"
          className="-z-10 absolute top-28"
        />
      )}
      <h1 className="text-5xl font-bold text-white text-center z-10">
        {saidYes
          ? "Yaayy !!! I LOVE YOU SO MUCH !!"
          : counter >= 15
          ? "Now I don't want you !!"
          : `${to ? `${to}, w` : "W" }ill you be my Valentine ? ${from ? `~ ${from}` : "" }`}
      </h1>
      {!saidYes && counter < 15 ? (
        <div className="buttons flex gap-20 flex-col">
          <button
            className="text-3xl font-bold bg-gray px-6 py-3 text-light-pink rounded-sm absolute left-1/3"
            onClick={() => setSaidYes(true)}
          >
            YES !!!!
          </button>
          <button
            style={{
              left: `${customPostion.left}px`,
              top: `${customPostion.top}px`,
            }}
            className="text-3xl font-bold px-6 py-3 outline outline-1 outline-gray text-gray rounded-sm absolute"
            onMouseEnter={() => hoverHandler()}
          >
            No
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
