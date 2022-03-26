import './App.css';
import Navbar from './Navbar'
import TxtForm from './TxtForm'
import react, { useState } from 'react'
import Alert from './Alert';



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#08264a';
      showAlert("Dark Mode has been enabled.", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
    }
  }


  const [alert, setAlert] = useState({
    types: null,
    msg: null
  });

  const showAlert = (message, type) => {
    setAlert({
      types: type,
      msg: message
    })
    setTimeout(() => {
      setAlert({
        types: null,
        msg: null
      });
    }, 3000);
  }
  return (
    <>
      <Navbar title="TextUtils" abtTxt="About Us" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert} />
      <div className="container">
        <TxtForm heading="Text Utility" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
        {
          /*Ex-1: Can add some more features- E mail extracter, text analyser and so on.  */
          // Ex-2: add color pallete in NavBar to change the color of dark mode.
          //Deployment on GitHub and netlify

        }
      </div>
    </>
  );
}

export default App;
