import React from 'react';

function person(props) {
    // array Destructing of props
const {ip,country} = props;

    return (
        // Widget to display IP address and country
        <div className="PersonDiv">
                <h2>IP address:</h2>
                <p>{ip}</p>

                <h2>Country:</h2>
            {/*Element with a class flag to display user country flag using Pseudo element ::after*/}
                <p className="flag">{country}</p>
        </div>
    );
}

export default person;
