import React,{useState} from 'react'
import { useCart } from '../CartContext';
import { Link,useLocation,useNavigate } from 'react-router-dom';
const Buy = (props) => {
  const navigate = useNavigate();
  const {cartData} = useCart();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [credentials,setCredentials] = useState({name: '' , email: '', Address: '', Phn: '', pincode: '', state: '', district: ''})
  const handleOnSubmit = async (e) => {
    try{
    e.preventDefault();
    console.log("Credentials:", credentials); 
    const response = await fetch("http://localhost:5000/api/payment/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({
        Name: credentials.name,
        Email: credentials.email,
        Address: credentials.Address,
        PhnNumber: credentials.Phn,
        Pincode: credentials.pincode,
        State: credentials.state,
        District: credentials.district,
        Image: queryParams.get('image'),
        Title: queryParams.get('title'),
        Total: queryParams.get('total')
      })  
    });
  
    const json = await response.json();
    console.log(json);
    props.showAlert("Happy Shopping","success")

    setTimeout(() => {
      navigate('/order'); // Redirect to the order page after the delay
    }, 1000);

      // Generate a random order ID (you can customize this logic)
      const orderID = Math.floor(Math.random() * 100000);

      // Send an SMS using Twilio API
      try{
        const response1 = await fetch('http://localhost:5000/api/sms/send-sms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          },
          body: JSON.stringify({
            phoneNumber: credentials.Phn,
            orderID: orderID,
            title: queryParams.get('title'),
            amount: queryParams.get('total'),
          })
        });
      }catch(error){
        props.showAlert("Number not verified","danger")
        console.log(error.message);
      }
    
  }catch (error) {
    props.showAlert("Invalid Details","danger")
    console.log(error.message);
  } 
}
  
const onChange=(e)=>{
  setCredentials({...credentials,[e.target.name]: e.target.value })
}
  return (
    <>
    <div>
    <div className="checkout" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Buying Product</h1>
        <div className="checkout-form">
            <form onSubmit={handleOnSubmit}>
                <p>1. Delivery Details</p>
                <div className="col1">
                    <div className="col1-1">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' value={credentials.name} onChange={onChange}/>
                    </div>
                    <div className="col1-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' value={credentials.email} onChange={onChange}/>
                    </div>
                </div>
                <div className="col2">
                <label htmlFor="Address">Address</label>
                <textarea name="Address" id="Address" cols="10" rows="3" value={credentials.Address} onChange={onChange}></textarea>
                </div>
                <div className="col3">
                    <div className="col1-1">
                    <label htmlFor="Phn">Phone Number with (+91)</label>
                    <input type="tel" placeholder='Your 10 Digit Phone Number with +91' id='Phn' name='Phn' value={credentials.Phn} onChange={onChange}/>
                    </div>
                    <div className="col1-2">
                    <label htmlFor="pincode">PinCode(India)</label>
                    <input type="tel" id='pincode' name='pincode' value={credentials.pincode} onChange={onChange}/>
                    </div>
                </div>
                <div className="col4">
                    <div className="col1-1">
                    <label htmlFor="state">State</label>
                    <input type="text" id='state' name='state' value={credentials.state} onChange={onChange}/>
                    </div>
                    <div className="col1-2">
                    <label htmlFor="district">District</label>
                    <input type="text" id='district' name='district' value={credentials.district} onChange={onChange}/>
                    </div>
                </div>
            {/* <br /> */}
            <button className='paybtn' type="submit">Pay</button>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Buy
