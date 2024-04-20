import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Sign = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({name:'', email:'', password:'', cpassword:''})
    const handleOnSubmit =async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})  
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
            localStorage.setItem('token',json.authtoken);
            navigate('/');
            props.showAlert("Account Created Successfully" ,"success");
        }
        else{
            props.showAlert("Invalid Credentials" ,"danger");
        }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }
  return (
    <>
        <div className="sign-header">
        <h2 style={{color: props.mode==='light'?'black':'white'}}>Create new account to continue to <span className='head12'>hriteshCodesWear.com</span></h2></div>
        <div className='sign-container'>
        <div className="sign-contain1">
        <img src={require('../images/hriteshcodeswear.com.png')} alt="" />
        </div>
        <div className="sign-contain2">
        <form onSubmit={handleOnSubmit}>
            <div className="margin">
                <label htmlFor="name" className="form-label" style={{color: props.mode==='light'?'black':'white'}}>Name</label>
                <input type="text" placeholder='Enter Your Name' className="form-control" id='name' name='name' value={credentials.name} onChange={onChange}/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="email" className="form-label" style={{color: props.mode==='light'?'black':'white'}}>Email address</label>
                <input type="email" placeholder='Enter Your Email Id' className="form-control" id='email' name='email' value={credentials.email} onChange={onChange}/>
                <div id="emailHelp" className="form-text" style={{color: props.mode==='light'?'black':'white'}}>We'll never share your email with anyone else.</div>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="password" className="form-label" style={{color: props.mode==='light'?'black':'white'}}>Password</label>
                <input type="password" placeholder='Enter Your Password' className="form-control" id='password' name='password' value={credentials.password} minLength={5} required onChange={onChange}/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="cpassword" className="form-label" style={{color: props.mode==='light'?'black':'white'}}>Confirm Password</label>
                <input type="password" placeholder='Confirm Password' className="form-control" id='cpassword' name='cpassword' value={credentials.cpassword} minLength={5} required onChange={onChange}/>
            </div>
            <br />
          <button type="submit" className="sign-btn" >Sign Up</button>
        </form>
        <p className='head13' style={{color: props.mode==='light'?'black':'white'}}>Already have an account ? <Link to="/login" className='login'>Login</Link></p>
        </div>
    </div>
    </>
  )
}

export default Sign
