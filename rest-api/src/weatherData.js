
import axios from 'axios';
import React,{useState, useEffect} from 'react';

 //const url="http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29"

const WeatherData=()=>{

    const [dataApi, setData]= useState([]);

    useEffect(()=>{
      const getData= async()=>{
              {/** const FetchResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
            const responseData= await response.json();
            setData(responseData);  */} 
            
            const axiosResponse = await axios("http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29");
        
            setData(axiosResponse.data);
        };
       
        getData(); 
        console.log(" diaplay data = ", getData() );
    }, [] );

    const displayData = dataApi.map((data) => {
     return(
            <div >
                <h4>{data.city.name}</h4>
               
                
            </div>
        )
    })

    return(
        <div>
         <h3> Weather Forcasting</h3>
         {dataApi && displayData}
        </div>
    )
}
export default WeatherData;