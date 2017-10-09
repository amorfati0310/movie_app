import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';
// class Movie extends Component {
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string,
//       }
//     render(){
//         return (
          
//         )
//     }
// }

function Movie({title, poster,genres,synopsis,rating}){
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster = {poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title} </h1>
                <div className="Movie__Genres">
                    {genres.map((genre , index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Rating">
                   {rating}/10
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                        />   
                </div>
            </div>
           
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,    
}


function MoviePoster({poster,alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string,
    alt: PropTypes.string,
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

MovieGenre.propTypes = {
    genre: PropTypes.string
}

export default Movie