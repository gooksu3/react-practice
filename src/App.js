// import Button from"./Button";
// import styles from "./App.module.css";
import { useState,useEffect } from "react";

// function App() {
//   return (
//     <div>
//       <h1 className={styles.App}>Welcome back!</h1>
//       <Button text={"continue"}/>
//     </div>
//   );
// };

// function App(){
//   const [counter,setValue]=useState(0);
//   const [keyword,setKeyword]=useState("");
//   const onClick=()=>setValue((prev)=>prev+1);
//   const onChange=(event)=>setKeyword(event.target.value);
//   console.log("call an api")
//   const iRunOnlyOnce=()=>{
//     console.log("i run only once.");
//   };
//   useEffect(iRunOnlyOnce,[])
//   useEffect(()=>{
//     if (keyword!=="" && keyword.length>6){
//       console.log("Search....",keyword);
//     }
//   },[keyword]);
//   return(
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here.."/>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   )
// };

// --------------------------------------------------------------------

// function Hello(){
//   useEffect(()=>{  
//     console.log("created :)");
//     return ()=> console.log("destroyed :(");
//   },[])
//   return <h1>Hello</h1>
// };

// ------------------------------------------------------------------------

// function App(){
//   const [showing,setShowing]=useState(false);
//   const onClick=()=>setShowing((prev)=>!prev);
//   return <div>
//     <button onClick={onClick}>{showing ? "Hide":"Show"}</button>
//     {showing ? <Hello/>:null}
//   </div>
// };

// function App(){
//   const [toDo,setToDo]=useState("");
//   const [toDos,setToDos]=useState([])
//   const onChange=(event)=>setToDo(event.target.value);
//   const onSubmit=(event)=>{
//     event.preventDefault();
//     if (toDo ===""){
//       return;
//     };
//     setToDo("");
//     setToDos(currentArray=>[toDo,...currentArray])
//   };
//   console.log(toDos)
//   return <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} type="text" placeholder="Wirte your to do..."/>
//         <button>Add To Do</button>
//       </form>
//     </div>

// };

// ---------------To Do List--------------------------------------

// function App(){
//   const [toDo,setToDo]=useState("");
//   const [toDos,setToDos]=useState([])
//   const onChange=(event)=>{
//     setToDo(event.target.value)
//   }
//   const onSubmit=(event)=>{
//     event.preventDefault()
//     if (toDo===""){
//       return;
//     };
//     setToDos((currentArray)=>[toDo,...toDos]);
//     setToDo("");
//   };
//   console.log(toDos);
//   return <div>
//     <form onSubmit={onSubmit}>
//       <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do...."/>
//       <button>Add To Do</button>
//     </form>
//     <hr/>
//     <ul>
//       {toDos.map((item,index)=><li key={index}>{item}</li>)}
//     </ul>
//   </div>
// };


// ----------------- List Of Coins-------------------------------------
// function App(){
//   const [loading,setLoading]=useState(true);
//   const [coins,setCoins]=useState([])
//   useEffect(()=>{
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((response)=>response.json())
//     .then((json)=>{
//       setCoins(json);
//       setLoading(false);
//     });
//   },[]);
//   const [money,setmoney]=useState(0)
//   const [numberOfCoin,setNumberOfCoin]=useState(0)
//   const [selectedCoin,setSelectedCoin]=useState("")
//   const onChange=(event)=>{
//     event.preventDefault()
//     setmoney(event.target.value)
//     setNumberOfCoin(money/parseFloat(selectedCoin.slice(selectedCoin.indexOf("$")+1)))
//   };
//   const onChangeSelect=(event)=>{
//     setSelectedCoin(event.target.value)
//     console.log(selectedCoin)
//   };
//   return (<div>
//     <h1>The Coins! {loading ? "":`(${coins.length})`}</h1>
//     {loading ? <strong>Loading...</strong>:(
//       <div>
//         <select value={selectedCoin} onChange={onChangeSelect}>
//           {coins.map((coin)=>(
//             <option key={coin.id}>
//               {coin.name}({coin.symbol}) = ${coin.quotes.USD.price}
//             </option>
//           ))};
//         </select>
//         <input onChange={onChange} value={money} type="number"/>
//         <span>{numberOfCoin} {(numberOfCoin<2)?"Coin":"Coins"}</span>
//       </div>
//   )}
//   </div>);
// }

import Home from "./routes/Home"
import Detail from "./routes/Detail"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App(){
  return (
  <Router>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}//movie/:id`} element={<Detail/>}></Route>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}></Route>
    </Routes>
  </Router>)
};

export default App;
