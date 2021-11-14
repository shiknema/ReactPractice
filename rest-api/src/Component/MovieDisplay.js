import React from 'react';
import './Component.css'

const MovieDisplay = (movies) => {
    console.log(" Movies data from MovieDisplay=", movies);

    const movieData = ({ sendApiData }) => {
        if (sendApiData) {
            return sendApiData.map((item, index) => {
                return (
                    <div key={item.index}>
                        <div className="card col-md-4">
                            <div className="card-img-top">
                                <img src={item.Poster} alt="movie name" width="280px" height="400px" />
                            </div>
                            <div className="card-body" >
                                <h4 className="card-title">{item.Title}</h4>
                                <h5> {item.Year}</h5>
                                <hr />
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div className="container-fluid">
            {movieData(movies)}
        </div>

    )
}
export default MovieDisplay;