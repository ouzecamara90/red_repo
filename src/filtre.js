import React from "react";
import React, {useState     } from "react";

function filfer({submit}) {
    const[title, setTitle] = useState('');
    const[rating, setRating] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onsubmit({title, rating});

    };
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
            <input 
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
/>
                     <label htmlFor="rating">Rating:</label>
                        <input 
                        id="title"
                        type="text"
                        value={rating}
                        onChange={(event) => setRating(event.target.value)}
/>
            <button type="submit">Filter</button>
            </form>    
    );
}