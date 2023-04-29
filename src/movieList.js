import React from "react";

function movieList ({movie}){
    return (
        <div className="movie-list">
            {movie.map((movie) =>(
                <movieCard 
                key={movie.title}
                title={movie.title}
                description={movie.description}
                posterURL={movie.posterURL}
                rating={movie.rating}

                />
            ))}
        </div>
    );
}