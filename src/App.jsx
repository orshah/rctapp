import CustomForm from "./components/customForm/CustomForm";

import { useState } from "react";
import img from "./images/tansu-topuzoglu-XTaPzVInKBw-unsplash.jpg";
import "./App.css";

function App() {
  const [myNum, setMyNum] = useState(0);
  const onClickHandler = () => {
    setMyNum(myNum + 1);
  };
  return (
    <>
      <div className="container">
        <div className="flexx">
          <h1>Start your journey</h1>
          {/* <CustomForm className="formDiv" /> */}
        </div>
        <img src={img} alt="toutist" />
      </div>
      <h3>{myNum}</h3>
      <button onClick={onClickHandler}>Add +1</button>
    </>
  );
}

export default App;
