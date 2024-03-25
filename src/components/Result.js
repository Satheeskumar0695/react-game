import React from 'react';

function Result({ term, system }) {
    let result;
    if (term) {
        if (term > system) {
            result = "Higher";
        } else if (term < system) {
            result = "Lower";
        } else if (term === system) {
            result = "Correct...!";
        }
        else{
            result="enter valid number";
        }
    }

    return (
        <div>
            <h3>Your answer is: {result}</h3>
        </div>
    );
}

export default Result;