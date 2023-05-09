import CustomForm from "./components/customForm/CustomForm";
import img from "./images/tansu-topuzoglu-XTaPzVInKBw-unsplash.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="flexx">
          <h1>Start your journey</h1>
          <CustomForm className="formDiv" />
        </div>
        <img src={img} alt="toutist" />
      </div>
    </>
  );
}

export default App;
