
import {FaGlobe} from "react-icons/fa"
import {FaBars} from "react-icons/fa"
import './App.css';

function App() {
  const handleClick=()=>{
    console.log("icon is clicked");
  }
  return (
<div>
    <header>
      <div className="container">
      <div className="bank-title yellow-color">WesternUnion\WU</div>
      <nav>
        <ul className="unordered-list">
          <li className="list-elements"><a className="white-color" href="https://www.google.com/">Send money</a></li>
          <li className="list-elements yellow-color"><button onClick={handleClick}><FaBars/></button></li>
          <li className="list-elements yellow-color"><FaGlobe/></li>
          <li className="list-elements"><a className="white-color" href="https://www.google.com/">Find Result</a></li>
          <li className="list-elements"><a className="yellow-color" href="https://www.google.com/">Register</a></li>
          <li className="list-elements"><a className="yellow-color" href="https://www.google.com/">To Log in</a></li>
        </ul>
      </nav>
      </div>
    </header>
    </div>
  );
}

export default App;
