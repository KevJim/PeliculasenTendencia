import React from 'react';
import ReactDOM from 'react-dom';

import MoviesList from '../components/MoviesList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {
        results: [],
      },
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b89fc45c2067cbd33560270639722eae&language=es-MX'
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  render() {
    return (
      <>
        <div className='movies-container'>
          <MoviesList movies={this.state.data.results} />
        </div>
      </>
    );
  }
}

export default Home;
