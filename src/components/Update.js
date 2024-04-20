import React,{useState} from 'react'

const Update = (props) => {
  const [credentials, setCredentials] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // Make an API call to update the password
    try {
      const response = await fetch('http://localhost:5000/api/auth/updatepassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({
          password: credentials.newPassword
        })
      });

      const data = await response.json();
      console.log(data.message); // Password updated successfully
      props.showAlert("Password updated successfully" ,"success");

      // Clear the input fields after successful update
      setCredentials({
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      props.showAlert("Invalid Details","danger")
      console.error('Error updating password:', error.message);
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
    <div className='clickupdate'>
        <h1 style={{color: props.mode==='light'?'black':'white'}}>Update your Account</h1>
      <div className="updateAccount" style={{color: props.mode==='light'?'black':'white',backgroundColor: props.mode==='light'?'#fce7f3':'rgba(51, 65, 85, 1)'}}>
        <div>
          <img src={require('../images/hriteshcodeswear.com.png')} alt="" width={350}/>
        </div>
        <form onSubmit={handleOnSubmit}>
          <div className="row1">
          {/* <div className="col1-1">
            <label htmlFor="currentPassword">Current Password</label>
            <input type="password" id='currentPassword' name='currentPassword' value={credentials.currentPassword} onChange={onChange}/>
          </div> */}
          {/* <br /> */}
          <div className="col1-1">
            <label htmlFor="newPassword">New Password</label>
            <input type="password" id='newPassword' name='newPassword' value={credentials.newPassword} onChange={onChange}/>
          </div>
          <br />
          <div className="col1-1">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input type="password" id='confirmPassword' name='confirmPassword' value={credentials.confirmPassword} onChange={onChange}/>
          </div>
          </div>
          <br />
          <button className='updatesubmit' type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Update
