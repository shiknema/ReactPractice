import React from "react";
import Data from "./Data.js"

class Data2 extends React.Component{

    constructor(){
        super();
        this.state={
            title2 :"Component 2"
        }
    }

    render(){
        return(
            <div>
                <Data message ={this.state.title} />
                <h2>{this.state.title2}</h2>

            </div>
        )
    }
}

export default Data2;