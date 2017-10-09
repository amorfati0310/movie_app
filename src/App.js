import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Movie from './Movie';



class App extends Component {
  state = {
  
  }
  
  componentDidMount(){
    this._getMovies()

    // setTimeout(()=>{
    //   this.setState({
    //       movies: [
    //         {
    //           title: 'Matrix',
    //           poster: '',
    //         },
    //         {
    //           title: '3idiots',
    //           poster: '',
    //         },
    //         {
    //           title: 'lala land',
    //           poster: '',
    //         },
    //         {
    //           title: 'kings man',
    //           poster: '',
    //         },
    //       {
    //         title: 'blue',
    //         poster: '',
    //       },
    //     ]
    //   })
    // },3000)
  }
   _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies,
    })
  }
  _callApi = () => {
    return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(error=>console.log(error))
  }
  _renderMovies = () => {
    const movies =  this.state.movies.map((movie) => {
      console.log(movie)
      return (<Movie 
      key={movie.id} title={movie.title} 
      poster={movie.medium_cover_image} 
      genres={movie.genres} 
      rating={movie.rating} 
      synopsis={movie.synopsis}
    />)
    })
    return movies
  }
  render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : '...Loading'}
      </div>
    );
  }
}

export default App;
