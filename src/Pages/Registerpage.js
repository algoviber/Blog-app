import {useState} from "react";

export default function Registerpage(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    async function register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        });
        if(response.status === 200){
            alert('Registration Successful!!');
        }
        else{
            alert('Registration Failed!');
        }
    }
    return (
        <main className="form-main">
        <div className="form-container">
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text"  value={username} onChange={ev => setUsername(ev.target.value)}/>
            </div>

            <div className="form-group">
            <label htmlFor="password">Enter your Password</label>
            <input type="password"  value={password} onChange={ev => setPassword(ev.target.value)}/>
            </div>
            <button className="form-submit-btn" type="submit">Register</button>
        </form>
        </div>
        </main>
    );
}


