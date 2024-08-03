import React from 'react';
import { useState ,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../store/Context';


export default function Signup() {
  const history =useHistory()
  const[Username,setUserName] =useState('')
  const[email,setEmail] =useState('')
  const[phone,setPhone] =useState('')
  const[password,setPassword] =useState('')
 const {firebase}=useContext(FirebaseContext)
  

  const handleSubmit=(e)=>{
    e.preventDefault()
   firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:Username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        Username:Username,
        phone:phone,
      }).then(()=>{
        history.push("/login")
      })
    })
   })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="100px" height="250px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e)=>setUserName(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
