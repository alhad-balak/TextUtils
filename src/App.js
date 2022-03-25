import './App.css';
import Navbar from './Navbar'
import TxtForm from './TxtForm'



function App() {
  return (
    <>
      <Navbar title="TextUtils" abtTxt="About Us" />
      <div className="container">
      <TxtForm heading="Text Utility" />
      </div>
    </>
  );
}

export default App;
