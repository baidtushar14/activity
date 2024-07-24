import logo from './logo.svg';
import './App.css';
import Header from './component/header'
// import Footer from './component/footer';
import Hello from './component/footer';
import Style from './component/stylecom';
import EventHandle from './eventhandle';
import Loops from './component/loop';
import Product from './component/act';
import { useState } from 'react';
import Counter from './component/counter';
import FormInput from './component/formInput';
import Register from './component/register';
import Todo from './component/todoapp';
import List from './component/props/list';


// function Greeting(){
//   const name="Unknown"
//   const logged=false
//   return(
//     <div>
//       <h1>Welcome {name}</h1>
//       <button>{logged?'Logout':'Login'}</button>
//     </div>
//   )
// }
// function Toggle(){
//   const[istoggle,SetToggle]=useState(false);
//   return(
//     <div>
//       <p>{istoggle?'On':'Off'}</p>
//       <button onClick={()=>SetToggle(!istoggle)}>Toggle</button>
//     </div>
//   )
// }

function App() {
  // const [name,setName]=useState('Unknown')
  // const changeName=()=>{
  //   setName("Known")
  // }
  return (
    <div>
      {/* <Header/> */}
       {/* <h1>Hii Welcome {name}</h1>
    //   <button onClick={changeName}>Change</button><br/> */}
       {/* <FormInput/> */}
       {/* <Greeting/> */}
    {/* //   <img src='logo192.png'></img> */}
       {/* <Style/> */}
       {/* <Hello/> */}
       {/* <EventHandle/> */}
       {/* <Loops/> */}
       {/* <Product/> */}
       {/* <Counter/> */}
       {/* <Toggle/> */}
       
       <h1 style={{textAlign:'center'}}>Register</h1>
       <hr/>
    <hr/>
       <Register/>
       <hr/>
    <hr/>
       <h1 style={{textAlign:'center'}}>To do List Project</h1>
       
    <Todo />
    <hr/>
    <hr/>
    <h1 style={{textAlign:'center'}}>Activity of Parent Child</h1>
    <List/>
    </div>
    
  );
}

export default App;
