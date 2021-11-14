import React, { useState, useEffect } from 'react';
import axios from 'axios';

URL="https://jsonplaceholder.typicode.com/posts";

function AxiosCall() {
    const [apiData, setApiData] = useState([]);

    
    useEffect(() => {
        axios.get(`${URL}/1`)
            .then((response) => { setApiData(response.data); });
    }, []);

    function createPost() {
        axios.post (URL, {
            title :"First Post",
            body: "My first inserted data"
        })
        .then ((response) =>{setApiData (response.data);
        });  
    }

    function updatePost() {
    axios.put(`${URL}/1`,{
        title: "Update Post",
        body : "Modified Data"
    })
    .then((response) => {setApiData(response.data)});

    }

    function deletePost(){
        axios.delete (`${URL}/1`)
        .then(() =>{
            alert("Post deleted")
            setApiData(null)});
    }

    if (!apiData) return null;
    
        console.log("api data =", apiData)
        return (
            <div>
                <h4>{apiData.title}</h4>
                <p>{apiData.body}</p>

                <div className ="btn-toolbar pull-left" >
                    <button className= "btn btn-success btn mr-3" onClick= {createPost}> ADD POST</button>
                    <button className= "btn  btn-warning btn mr-3" onClick ={updatePost}>Update Post</button>
                    <button className ="btn btn-danger"  onClick={deletePost}> Delete Post </button>
                </div>
            </div>
        )
    
}
export default AxiosCall;