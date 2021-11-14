import React from "react";
import Dbdata from './db.json'
import JsonDataView from "./JsonDataView";

const JSONdata = Dbdata.products;
class JsonCall extends React.Component{

    constructor(){
        super();
        this.state={
            data: JSONdata
        }
    }
    render(){ 
       // console.log(this.state.data)   
       console.log("the URL is:=" ,document.URL);
        return(
            <div>    
          <JsonDataView jsondataload= {this.state.data}/>
        </div>
        )
    }

}

export default JsonCall;