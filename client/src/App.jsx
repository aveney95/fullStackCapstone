import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./App.css"
import axios from 'axios'
// import { userProvider } from '../src/components/context/Context'

//this file is handling all of the login and registering of users


function App() {

  const [login, setLogin] = useState({
    username: '',
    password: ''
  })
  const [loggedIn, setLoggedIn] = useState({

  })
  const [register, setRegister] = useState({
    username: '',
    password: ''
  })

  const nav = useNavigate()
  
  const handleLogin = (e) => {
    console.log("login", e.target.value)
    setLogin(prev => {
      console.log("prev", prev)
      return {
        ...prev,
        [e.target.id]: e.target.value
      }
    })
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log("loginsubmit HIT" , login)
    axios({
      method: 'post',
      url: 'http://localhost:3000/login',
      data: login,
      withCredentials: true
    })
      .then(res => {
        console.log("res", res.data)
         
          if(res.data.msg === "good login"){
            console.log("good login hit")
            console.log(res.data)
            setLoggedIn(res.data.found) 
            nav("/home", {state: {loggedIn: res.data.found}})
            
          }else {
            
            alert("BAD LOGIN")
          }
      })
      .catch(error => console.log(error))
  }
  const handleRegister = (e) => {
    console.log("reg", register)
    setRegister(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }
  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    console.log("regSubmit HIT", register)
    axios({
      method: 'post',
      url: 'http://localhost:3000/register',
      data: register
    })
      .then(res => console.log(res.data))
      .catch(error => console.log(error))

  }

  

return (
  <>
    <div id='login'>
      {console.log("login", login)}
      {console.log("Reg", register)}
      <h1>Login</h1>
      <input id='username' onChange={(e) => handleLogin(e)} type='text' placeholder='Username' />
      <br />
      <br />
      <input id="password" onChange={(e) => handleLogin(e)} type='text' placeholder='Password' />
      <br />
      <br />
      <button onClick={(e) => handleLoginSubmit(e)}>Login</button>
    </div>
    <br />
    <br />
    <hr />
    <br />
    <br />
    <div id='register'>
      <h1>Register</h1>
      <input id='username' onChange={(e) => handleRegister(e)} type='text' placeholder='Username' />
      <br />
      <br />
      <input id='password' onChange={(e) => handleRegister(e)} type='text' placeholder='Password' />
      <br />
      <br />
      <button onClick={(e) => handleRegisterSubmit(e)}>Register</button>
      <br />
    </div>
  </>
)
}
export default App