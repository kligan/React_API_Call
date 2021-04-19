import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Person from './components/person'

function App() {
    // useState hook to manage the state of the component
    const [person, setPerson] = useState({});

    // Api Calls using useEffect hook on the initial render
    useEffect(() => {
        GetData(); // Initiates a Get request
        PostData(); // Initiates a Post request
    },[]);

    // Asynchronous Get request using axios
    const GetData = async ()=>{
        await axios.get(`https://ipapi.co/json/`)
            .then(res => {
                const persons = res.data;
                setPerson(persons);
            })
    }

    // Asynchronous Post request with error handling
    const PostData = async ()=>{
        // fake end point
        await axios.post('https://ipapi.co/json/login', {
            Car_type: 'BMW',
            Social_media: 'Facebook'
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
                console.log("Please note this error is due to the fake end point(Just for testing).Post request returns with a status of 404. Replacing the end point with an existing end point will return status 200");
            });
    }
  return (
    <div className="App">
        {/*Person component split into a separate file with props(ip and country) passed down to display User IP address and country */}
            <Person
                ip={person.ip}
                country={person.country}
            />
    </div>
  );
}

export default App;
