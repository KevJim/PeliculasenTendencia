import React from 'react';
import ReactDOM from 'react-dom';

import './styles/MovieDescription.css';

class MovieDescription extends React.Component {
  render() {
    return (
      <div className='Movie-inner'>
        <article className='Movie-card'>
          <img
            className='MoviesListItem__Poster'
            src={`https://image.tmdb.org/t/p/w342${this.props.location.movie.poster_path}`}
            alt={this.props.location.movie.title}
          />
          <h2>{this.props.location.movie.title}</h2>
        </article>
        <article className='Movies-card'>
          <h3>Fecha de Lanzamiento: </h3>
          <span>{this.props.location.movie.release_date}</span>
          <h3>Calificación: </h3>
          <span>{this.props.location.movie.vote_average}</span>
          <h3>Sipnosis: </h3>
          <span>{this.props.location.movie.overview}</span>
        </article>
      </div>
    );
  }
}

export default MovieDescription;
