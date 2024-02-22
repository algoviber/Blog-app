import {useState,useContext} from "react";
import {Navigate} from "react-router-dom";
import { UserContext } from "../userContext";

export default function Loginpage(){

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [redirect,setRedirect]=useState(false);
    const {setUserInfo} = useContext(UserContext);

    async function login(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        });
        if(response.ok){
            response.json().then(userInfo=>{
                setUserInfo(userInfo);
                setRedirect(true);
            });
            
        }
        else{
            alert('Login Failed!');
        }
    }
    if(redirect){
        return <Navigate to={'/'} />
    }
    return (
        <main className="form-main">
        <div className="form-container">
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text"  value={username} onChange={ev => setUsername(ev.target.value)}/>
            </div>

            <div className="form-group">
            <label htmlFor="password">Enter your Password</label>
            <input type="password"  value={password} onChange={ev => setPassword(ev.target.value)}/>
            </div>
            <button className="form-submit-btn" type="submit">Login</button>
        </form>
        </div>
        </main>
    );
}