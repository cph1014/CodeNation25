import React, { useState } from "react";
import "./App.css";

const App = () => {
    //declare a new state variable, which we will call "count"
    //useState is the first "Hook"
const [count, setCount] = useState(0);
const [add2, setAdd2] = useState(false);

const handleClick = () => {
if (add2) {
setCount(count + 2);
} else {
setCount(count + 1);
}
};

return (
<div>
<h1>{count}</h1>
<button onClick={handleClick}>Add</button>
<button onClick={() => setAdd2(!add2)}>Toggle add 2</button>
{add2 && <p>You are currently adding 2 at a time</p>}
</div>
);
};
export default App;


//We access the useState hook that is imported from React.
//  const App = () => {
//    const[count, setCount] = useState(0);
//
//    let paragraph;
//
//    if (count > 10){
//        paragraph=<p>Hi there, the count is higher than 10</p>;
//        } else {
//        paragraph=<p>Still a small number</p>;
//    }
    

//  return (
//      <div>
//          <h1>{count}</h1>
//          <button onClick={() => setCount(count + 1)}>click me</button>
//  </div>
//  )
//  };

//export default App;



//      const helloWorld = () => {
//      setCount("hello world from the hello world function");
//  };

//  return (
//   <div>
//      <h1>{count}</h1>
//      <button onClick={()=> setCount("hello World")}>chick me</button>  
//      </div>
//  );
//};
// export default App;

//class App extends React.Component{
//    state= {
//        persons:[
//           {name:"Dan", age:34},
//             {name:"Ben", age:21}
//         ]
//     }

// render(){
//     return (
//        <div>
//             <h1> I am a class component</h1>
//             <Person/>
//             <Person/>
//         </div>
//     );
// }    
// }