import logo from "./logo.svg";
import "./App.css";
import Form from "./components/1-forms/Form";
import FormObject from "./components/1-forms/FormObjects";
import KeyboardClipboard from "./components/2-keyboardClipbooardEvents/KeyboardClipboard";
import MouseEvent from "./components/3-mouseEvents/MouseEvent";

function App() {
  return (
    <div className="container mt-4 text-center" >
      {/* <Form /> */}
      {/* <FormObject/> */}
      {/* <KeyboardClipboard/> */}
      <MouseEvent/>
    </div>
  );
}

export default App;
