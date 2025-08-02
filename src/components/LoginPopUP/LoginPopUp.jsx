import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin}) => {
    const [currState, setCurrState]= useState("Sign Up");

    
function handleSubmite(e){
e.preventDefault()
setShowLogin(false);
}

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={handleSubmite}>
        <div className="login-popup-tittle">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            
            {currState ==="Login"?<></>: <input type="text" placeholder='Your name' required />}
            <input type="text" placeholder='Your emial' required />
            <input type="text" placeholder='Password' required />

        </div>

        <button type="submit">{currState === "Sign Up"?"Create acount":"login"}</button>

        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to terms of uses & privacy policy</p>
        </div>

        {currState === "Login"
        ?
        <p>Create a new acount? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :
        <p>Already have an acount? <span onClick={()=>setCurrState("Login")}>Login here</span></p>

        }
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
