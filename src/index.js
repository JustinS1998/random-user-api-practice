import { getByDisplayValue } from '@testing-library/dom';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App(props) {
    const [user, setUser] = useState({
        first: '',
        last: '',
        img: ''
    });

    const handleClick = () => {
        fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0]);
                const myUser = data.results[0];
                setUser({first:myUser.name.first, last:myUser.name.last, img:myUser.picture.thumbnail});
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <p>Hello</p>
            <button onClick={handleClick} style={{display:'block'}}>Get User</button>
            <img src={user.img}></img>
            <p>{`${user.first} ${user.last}`}</p>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));