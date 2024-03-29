import { Link } from "react-router-dom";
import { useContext, useEffect,useState } from "react";
import { UserContext } from "./userContext";
export default function Header(){
  
  const {setUserInfo,userInfo}= useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile',{
      credentials: 'include',

    }).then(response=>{
      response.json().then(userInfo=> {
          setUserInfo(userInfo);
      });
    });
  },[]);

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
    return (
        <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
        {username && (
          <>
          
            <Link to="/create" className="post-logo">Create new post</Link>
            <a onClick={logout} className="logout-logo">Logout</a>
          </>
        )}
        {!username && (
          <>
          <Link to="/login" className="login-logo">Login</Link>
          <Link to="/register" className="register-logo">Register</Link>
          </>
        )}
          
        </nav>

      </header>
    );
}