import React from "react";

class Data extends React.Component{
constructor(){
    super()
    this.state={
        title: "Component1"
    }
}

    render(){
        return(
            <div>
           
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}

export default Data;