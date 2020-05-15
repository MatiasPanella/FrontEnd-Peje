import React from 'react'
import {Link} from 'react-router-dom'
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
                <Link to='/home'><button type='submit'>Login</button></Link>
            </div>
        </div>
    )
}
export default Login;