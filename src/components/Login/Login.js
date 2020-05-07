import React from 'react'
import './Login.css'

const Login = () =>{
    return (
        <div className='login-background'>
            <div className='login'>
                <h2>LogIn</h2>
                <form>
                    
                <label>Email</label>
                <input type='text' name='email' placeholder='Email'/>
                
                <br/><br/>

                <label>Password</label>
                <input type='password' name='password' placeholder='Password'/>
                
                <br/><br/>
                </form>
                <button type='submit'>Login</button>
            </div>
        </div>
    )
}
export default Login;