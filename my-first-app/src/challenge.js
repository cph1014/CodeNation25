import React, { useState } from "react";
import "./challenge.css";

const App = () => {
// Declare a new state variable, which we'll call "count"
const [count, setCount] = useState(0);    
return (
<div>
<h1><p>You clicked {count} times</p></h1>
<button onClick={()=> setCount(count + 1)}> + </button>
<button onClick={()=> setCount(count - 1)}> - </button>
</div>
);
};
export default App