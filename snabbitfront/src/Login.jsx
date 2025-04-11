import axios from 'axios';
import './Login.css';
import React, { useState,useEffect } from 'react';
function Login({setIsLogin,setUserEmail}) 
{   
    const [logins,setLogins]=useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        fetchLogin();
    }, []);
    const fetchLogin=async()=>
    {
        try{
            const response=await axios.get("http://localhost:8080/snabbitbackend/api/login",
                {
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                setLogins(response.data);
                console.log(response.data);
        } catch(error)
        {
            console.log('Error fetching login:',error);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = logins.find(
            (user) => user.email === email && user.password === password
        );
    
        if (user) {
            setUserEmail(user.email);
            setTimeout(setIsLogin(true),10000);
        } else {
            alert("Invalid email or password");
        }
    };    
    return (
    <>
        <div className="login text-center">
            <form className='border-1 rounded-3 border-dark border p-5' onSubmit={handleSubmit}>
                <img src="https://snabbit.com/assets/snabbit-icon.svg" className='mb-5'/>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email}
                        onChange={(e) => setEmail(e.target.value)} required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password}
                        onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1" required>Check me out</label>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    </>
    )
}
export default Login;