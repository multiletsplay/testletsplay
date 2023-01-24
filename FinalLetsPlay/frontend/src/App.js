import React, {useState, useEffect} from 'react';
import "./App.css";

import Layout from "./components/Layout/Layout";

function App() {
    const [message, setMessage] = useState("");
 
    useEffect(() => {
        fetch('/home')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{message}</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    )
  return (
    <Layout message={message}/>
  );
>>>>>>> branch 'main' of https://github.com/multiletsplay/testletsplay.git
}

export default App;
