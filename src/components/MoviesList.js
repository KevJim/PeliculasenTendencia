import React from 'react';
import { Link } from 'react-router-dom';

import './styles/MoviesList.css';

class MovieListItem extends React.Component {
  render() {
    return (
      <Link
        to={{
          pathname: '/MovieDescription',
          movie: this.props.movie,
        }}>
        <img
          className='MoviesListItem__Poster'
          src={`https://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`}
          alt={this.props.movie.title}
        />
        <h2>{this.props.movie.title}</h2>
      </Link>
    );
  }
}

class MoviesList extends React.Component {
  render() {
    return (
      <>
        {this.props.movies.map((movie) => {
          return (
            <article key={movie.id} className='Movie-item'>
              <MovieListItem movie={movie} />
            </article>
          );
        })}
      </>
    );
  }
}

export default MoviesList;
