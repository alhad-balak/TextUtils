import './App.css';
import Navbar from './Navbar'
import TxtForm from './TxtForm'
import react, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#08264a';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      type: type,
      msg: msg,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <Navbar title="TextUtils" abtTxt="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TxtForm heading="Text Utility" mode={mode} toggleMode={toggleMode}/>
        {
          /*Ex-1: Can add some more features- E mail extracter, text analyser and so on.  */
          // Add auto dismissed message in it.
          // Ex-2: add color pallete in NavBar to change the color of dark mode.
          //Deployment on GitHub and netlify

        }
      </div>
    </>
  );
}

export default App;
