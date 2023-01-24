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
    <Layout message={message}/>
  );
}

export default App;
