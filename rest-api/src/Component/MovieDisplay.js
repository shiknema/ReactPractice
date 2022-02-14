import React from 'react';
import './Component.css'

const MovieDisplay = (movies) => {
    console.log(" Movies data from MovieDisplay=", movies);

    const movieData = ({ sendApiData }) => {
        if (sendApiData) {
            return sendApiData.map((item, index) => {
                return (
                    <div key={item.index}>
                        <div className="col">
                            <div className="card  card-img-top">
                                 <img src={item.Poster} alt="movie name" width="280px" height="400px" />
                                    <div className="card-body" >
                                    <h5 className="card-title">{item.Title}</h5>
                                    <h6> {item.Year}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        //  <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {movieData(movies)}
        </div>

    )
}
export default MovieDisplay;