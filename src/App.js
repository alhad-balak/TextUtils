import './App.css';
import Navbar from './Navbar'
import TxtForm from './TxtForm'



function App() {
  return (
    <>
      <Navbar title="TextUtils" abtTxt="About Us" />
      <div className="container">
        <TxtForm heading="Text Utility" />
        {
        /* Can add features- E mail extracter, text analyser and so on.  */
          // Add Dark Mode option in it
        }
      </div>
    </>
  );
}

export default App;
