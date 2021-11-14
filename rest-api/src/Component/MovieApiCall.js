import React from 'react';
import MovieDisplay from './MovieDisplay';

const url="http://localhost:8088/movies";
//"https://www.omdbapi.com/?s=star%20wars&apikey=b8ffce95" ; 
//  first do to the part directory where json file save 
//PATH- rest-api/src/APIs-----> 
//json-server --watch Movies.json --port 8088
class MovieApiCall extends React.Component {

    constructor() {
        super();
        this.state = {
            apiData: ""
        }
    }

    componentDidMount() {
        console.log("hello");
        fetch(url, { method: 'GET' })
        .then((response) => response.json())
        .then((data)=>{
            console.log("data= ", data);
         this.setState({apiData: data})
        })
    }


    render() {
        return (
            <div>
                <h1>
                    Movies Collection
                </h1>
              <MovieDisplay sendApiData={this.state.apiData}/>
            </div>
        )
    }
}

export default MovieApiCall;