// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';                         // dot slash ./ means current directory ke andar

import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';






// let name1 = "Harry";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#021533";
      showAlert("Dark mode has been enabled.", "success")

      // document.title = "Textutils - Dark mode";

      // setInterval(() => {
      // document.title = "Textutils is amazing";

      // }, 2000);

      // setInterval(() => {
      // document.title = "Install Textutils now";

      // }, 1500);

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");

      // document.title = "Textutils - Light mode";


    }
  }

  return (
    // /user -> component 1
    // /user/home -> component 2
    // <div className="blank">Lovely</div>
  
      



      <Router>
      <Navbar title="Textify" aboutText="About Textify" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>

          <Route exact path="/" element={<TextForm heading="Try Textify- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;


//  <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className="container my-3">
//         <TextForm heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />
//         {/* <About  mode= {mode}/> */}
//       </div> 