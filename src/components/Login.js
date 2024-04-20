import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
    let navigate = useNavigate();
    const [credentials,setCredentials] = useState({email: '' , password: ''})
    const handleOnSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})  
        });
        const json = await response.json();
        console.log(json); 
        if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token',json.authtoken);
            props.showAlert("Logged in Successfully" ,"success");
            navigate('/');
        }
        else{
            props.showAlert("Invalid Details","danger")
        }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value })
    }
    
  return (
    <>
    <div className='login-container'>
        <img src={require('../images/hriteshcodeswear.com.png')} alt="" />
        <h2 style={{color: props.mode==='light'?'black':'white'}}>Login to continue to <span className='head12'>hriteshCodesWear.com</span></h2>
        <form onSubmit={handleOnSubmit}>
            <div className="margin">
                <label htmlFor="email" className="form-label" style={{color: props.mode==='light'?'black':'white'}}>Email address</label>
                <input type="email" className="form-control" id='email' name='email' placeholder='Enter Your Email Id'  value={credentials.email} onChange={onChange}/>
                <div id="emailHelp" className="form-text" style={{color: props.mode==='light'?'black':'white'}}>We'll never share your email with anyone else.</div>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="password" className="form-label" style={{color: props.mode==='light'?'black':'white'}}>Password</label>
                <input type="password" className="form-control" placeholder='Enter Your Password' id='password' name='password'  value={credentials.password} onChange={onChange}/>
            </div>
            <br />
          <button type="submit" className="login-btn" >Login</button>
        </form>
        <br />
        <p style={{color: props.mode==='light'?'black':'white'}}>Don't have an account ? <Link to="/signup" className='signup'>Sign up</Link></p>
    </div>
    </>
  )
}

export default Login
