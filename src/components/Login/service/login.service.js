import { url } from '../../../environments/environment';
 
const login = async (email,password) =>{
    const data = {
        email,
        password
    }

    const resp = await fetch(`${url}/login`,{
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(!resp.ok) console.log('error al loguear');
    else {
        const token = await resp.json();
        return token;
    };
}


export default login;