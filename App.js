import React, { useState } from 'react';
import Auth from './components/Auth';
import './App.css';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="App">
            {!loggedIn ? (
                <Auth setLoggedIn={setLoggedIn} />
            ) : (
                <div>
                    <h2>Welcome to Hiute Lab</h2>
                    {/* Add more components and logic for music collaboration */}
                </div>
            )}
        </div>
    );
}

export default App;