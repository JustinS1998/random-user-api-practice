import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App(props) {
    const [user, setUser] = useState('');

    const handleClick = () => {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data.results[0]));
                setUser(JSON.stringify(data.results[0]));
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <p>Hello</p>
            <button onClick={handleClick}>Get User</button>
            <p>{user}</p>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));