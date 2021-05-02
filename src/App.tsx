import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
} from "react-router-dom";
import AppRouter from "./router/AppRouter/AppRouter";
import FirebaseContext from "./context/FirebaseContext";


function App() {
    return (
        <FirebaseContext>
            <div className="App">
                <Router>
                    <AppRouter/>
                </Router>
            </div>
        </FirebaseContext>
  );
}

export default App;
