import logo from "./logo.svg";
import "./App.css";
import Login from "./Login/Login";
import { useSelector } from "react-redux";
import authReducer from "./Store/Reducer/Reducer";

function App() {
  const { userDetails, auth_token } = useSelector((state) => state);
  console.log(userDetails, auth_token);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <h1>USER EMAIL IS {userDetails}</h1>

      <Login />
    </>
  );
}

export default App;
