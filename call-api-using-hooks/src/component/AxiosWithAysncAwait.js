import React, { useState, useEffect } from 'react';
import axios from "axios";


const URL="http://localhost:8088/movies";

const AxiosWithAysncAwait = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const axiosDataCall = async () => {
            const response = await axios(URL);
            setApiData(response.data);
        };
        axiosDataCall();
    }, []);

    const displayData = apiData.map((data, id) =>{
        return(
        <div key={data.id} >
            <h5>{data.Title}</h5>
        </div>
     )
     })
    

    return (
        <div>
            <h3> Data Call using AXIOS </h3>
      {apiData && displayData}
        </div>
    )
}
export default AxiosWithAysncAwait;