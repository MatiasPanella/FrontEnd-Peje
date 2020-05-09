import { url } from '../../environments/environment';
 
const validateToken = async () =>{
    const token = localStorage.getItem('token');
    if(token == 'undefined') return false;
    const resp = await fetch(`${url}/validateToken`,{
        headers: {
            'token': token
        }
    });
    if(!resp.ok) return false;
    return true;
}


export default validateToken;