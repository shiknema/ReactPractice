import React, {Component} from "react";
import {connect} from 'react-redux';
import {movieList} from '../action/actionFile'

import Displaycomponent from '../component/Display'

class Home extends Component{

    // call action

    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1> My Movie List1 </h1>
              <h2>LIst</h2> 
             <Displaycomponent datalist={this.props.mydata}/> 
            </div>
        )
    }
}

function mapStoreToProp(state){
    console.log(state);
    return{
        mydata:state.films
    }
}

export default connect(mapStoreToProp)(Home)
