import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './Login.css'
import login from './service/login.service';

const Login = () =>{
    const history = useHistory();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const validateLogin = async () => {
        const token = await login(user,password);
        if(token){
            localStorage.setItem('token', token.token);
                history.push('/home');
        }
    }


    return (
        <div className='login-background'>
            <div className='login'>
                <h2>LogIn</h2>
                <form>
                    
                <label>Email</label>
                <input type='text' name='email' onChange={e => setUser(e.target.value)} placeholder='Email'/>
                
                <br/><br/>

                <label>Password</label>
                <input type='password' name='password' onChange={e => setPassword(e.target.value)} placeholder='Password'/>
                
                <br/><br/>
                </form>
                <button onClick={() => validateLogin()}>Login</button>
            </div>
        </div>
    )
}
export default Login;