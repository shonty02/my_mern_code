import { useState } from "react";
import "./event.css";

const EventHandling = () => {
  const eventCSS = {
    btnStyle: {
      backgroundColor: "blue",
      color: "white",
      padding: "1rem",
      border: "1px solid black",
    },
  };

  let c = 1;

  const [count, setCount] = useState(1);

  const doTask = () => {
    c++;

    console.log("button was clicked!!");
    console.log("another line");
    console.log(c);
  };

  const updateState = () => {
    console.log(count);
    setCount(count + 2);
  };

  const handleChange = () => {
    console.log("input box value was changed!!");
  };

  return (
    <div className="container mt-5">
      <h1
        className="heading"
        style={{ color: "red", backgroundColor: "violet" }}
      >
        Event Handling
      </h1>

      <button style={eventCSS.btnStyle} onClick={doTask}>
        Click It!!
      </button>

      <button onClick={updateState}>Change State</button>
      <h1 className="display-4">{c}</h1>
      <h1 className="display-1">{count}</h1>

      <input className="form-control mt-5" onChange={handleChange} />
    </div>
  );
};

export default EventHandling;