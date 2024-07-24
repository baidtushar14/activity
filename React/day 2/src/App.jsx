import { useEffect, useState } from "react"
import Counter from "./component/counter"
import Welcome from "./component/welcome"
import Fetch from "./component/fetch"
import Widthusecase from "./component/widthusecase"
import Post from "./activity/post"
import { BrowserRouter, Link, Routes, Route, NavLink, Navigate } from "react-router-dom"
import Dashboard from "./component/dashboard"
import Userlist from "./component/userlist"
import Details from "./component/details"
import Notfound from "./component/404"
import Axios from "./component/axios"

function ProtectedRoute({isAuthenticate,children}){
  return(isAuthenticate? children:<Navigate to='/login'/>)
}
function Login(){
  return(<h1>Login Page</h1>)
}
function Home() {
  return (<h1>Home </h1>)
}
function About() {
  return (<h1>About </h1>)
}
function Contact() {
  return (<h1>Contact </h1>)
}
function News() {
  return (<h1>News </h1>)
}

function App() {
  // const [flag,setFlag]=useState(false)
  // const [name,setName]=useState('')
  // useEffect(()=>{
  //   console.log('Use Effect triggered');
  // })
  const isAuthenticate=false

  return (
    <>
      {/* <div><h3>Hello world</h3></div> */}
      {/* <Counter/> */}
      {/* <input type="text" onChange={ */}
      {/* // (e)=>setName(e.target.value)}/> */}
      {/* <h3>Welcome {name}</h3> */}
      {/* <button onClick={()=>setFlag(!flag)}>{flag? 'Hide':'Show'}</button> */}
      {/* {flag && <Welcome/>} */}
      {/* <Fetch/> */}
      {/* <Widthusecase/> */}
      {/* <Post/> */}
      
      <BrowserRouter>
        <div>
        <Axios/>
          <Link to='home'>Home</Link> |
          <Link to='about'>About</Link> |
          <Link to='contact'>Contact</Link> |
          <Link to='news'>News</Link> |
          <Link to='dashboard'>Dashboard</Link> |
          <Link to='userlist'>Userlist</Link> |
        </div>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='news' element={<News />} />
          <Route path='dashboard/*' element={
            <ProtectedRoute isAuthenticate={isAuthenticate}>
            <Dashboard /> 
            </ProtectedRoute>}/>

          <Route path='userlist' element={<Userlist />} />
          <Route path='login' element={<Login />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
