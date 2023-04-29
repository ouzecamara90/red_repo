import movieCard from './movieCard';
import movieList from './movieList';
import filtre from './filtre';
import React, {useState} from "react";
import './App.css';


function AddMovieForm({onSubmit}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({title, description, posterURL, rating});
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

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <label htmlFor="posterURL">Poster URL:</label>
      <input
        id="posterURL"
        type="text"
        value={posterURL}
        onChange={(event) => setPosterURL(event.target.value)}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        id="rating"
        type="number"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
     />
     </form>
);
 
 }

function filterMovie(movie, titleFilter, ratingFilter) {
  return movie.filter((movie) => {
    if (titleFilter && !movie.title.toLowerCase().include(titleFilter.toLowerCase())){
        return false;
    }
    if (ratingFilter && !movie.rating < ratingFilter){
      return false;
  }
  return true;
});

}




