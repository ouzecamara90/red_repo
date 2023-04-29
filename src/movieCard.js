import React from 'react';

function MovieCard({title, description, posterURL, rating}){
    return(
            <div className="movie-card">
                    <img 
                    
                    src="{posterURL}" alt="{photo}"/>
                        <h2>{title}</h2>
                            <p>{description}</p>
                                <p>{rating}</p>
            </div>
    );
}