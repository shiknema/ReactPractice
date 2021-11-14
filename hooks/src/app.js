//useState and setState

import React, { useState } from 'react';

const App = () => {
    //simple useState define
    const [title] = useState('Simple Hook Call');
    const [data] = useState('Hook Data');

    //using setState changed the state
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1> HOOKS</h1>
            <h2>{title}</h2>  {/**call state */}
            <h2>{data}</h2>

            <div onClick={() => { setCount(count + 1) }}> {/**onClick={()=>{}} */}
                Increment
            </div>

            <button className=" btn success" onClick ={()=>{setCount (count-1)}}>Decerement </button>
            
            <h3>Count : {count}</h3>
           
        </div>
    )
}

export default App;
