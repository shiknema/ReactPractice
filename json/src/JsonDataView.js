import React from "react";

const JasonDataView = (props) => {
    //console.log(props);
    //Now itrate Json data from one component to another using Map

    /**1st method=>
     *   const myJsonData= props.jsondataload.map((data)=>{
      return(
         <div key={data.id}>
             <h3>{data.name}</h3>
         </div>
     )
     })*/
    return (
        <div>
            {/** you can print json data usong above method{myJsonData} 
             OR
             2nd method bleow  */}

            JsonData= {props.jsondataload.map((data) => {
                return (
                    
                        <div key = {data.id}>
                            <h3>{data.name}</h3>
                            {/*<img src={data.img} className="img-responsive" alt=" " />*/}
                            <p>{data.description}</p>
                        </div>
                  
                )

            })}

        </div>
    )
}
export default JasonDataView;