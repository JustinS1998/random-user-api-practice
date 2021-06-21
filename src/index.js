import { getByDisplayValue } from '@testing-library/dom';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(props) {
    const [userList, setUserList] = useState([
        {
            first:'',
            last:'',
            img:''
        }
    ])

    const handleClick = () => {
        fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json())
            .then(data => {
                // console.log(data.results[0]);
                const myUser = data.results[0];
                setUserList([
                    ...userList,
                    {
                        first:myUser.name.first,
                        last:myUser.name.last,
                        img:myUser.picture.thumbnail
                    }
                ]);
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <p>Hello</p>
            <button onClick={handleClick} style={{display:'block'}}>Get User</button>
            {userList.map((element, idx) => {
                return (
                    <div className='black-border' key={`${element.first}${element.last}`}>
                        <img src={element.img}></img>
                        <p>{`${element.first} ${element.last}`}</p>
                    </div>
                );
            })}
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));