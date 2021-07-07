import { useEffect, useState } from "react";
import './App.css';

// class App extends Component {
//  constructor() {
//    this.state = {
//      loading: false
//    }
//
//    this.handleClick = this.handleClick.bind(this)
//  }
//
//handleClick () {
//  this.setState({loading: true})
//  }
//}

const App = () => {
  const [data,setData] = useState("");
  const [error, setError] = useState ({error: false, message:""});

  useEffect(() => {
    //whatever we want to happen on load and update 
    handleFetch();
  },[]);
  // [] = it will effect load behaviour

  useEffect(() => {
    console.log('data has changed');
  },[data, error]);  

  const handleFetch = async () => {
    //fetch("https://tronalddump.io/random/quote")
    //.then((res)=>res.json())
    //.then((data)=> console.log(data));
   try {
    const response = await fetch("https://tronalddump.io/random/quote");
    if (response.status !==200) {
      throw new Error("Opps!");
    }
   const data = await response.json();
   setData(data);
  } catch (error) {
    setError ({error: true, message: error.message});
  }
  };

  if (error.error) {
    return <h1>An error has occured</h1>;
  }
  return (
    <div>
      <h1>Tronald Dump Quote Machine </h1>
      <p>{data.value}</p>
      <button onClick = {handleFetch}>Click</button>
    </div>
  );
}

export default App;
