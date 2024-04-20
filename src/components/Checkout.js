import React,{useState,useEffect} from 'react'

const Checkout = (props) => {

    const [notes, setNotes] = useState([]); // To store API data

    const getNotes = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            }
          });
          const json = await response.json();
          setNotes(json);
        } catch (error) {
          console.log(error.message);
        }
      };

      useEffect(() => {
        getNotes();
      }, []); // Fetch data from API when component mounts
  return (
    <>
    <div>
      <div className="checkout" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Checkout</h1>
        <div className="checkout-form">
            <form>
                <p>1. Delivery Details</p>
                <div className="col1">
                    <div className="col1-1">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name'/>
                    </div>
                    <div className="col1-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email'/>
                    </div>
                </div>
                <div className="col2">
                <label htmlFor="Address">Address</label>
                <textarea name="Address" id="Address" cols="10" rows="3"></textarea>
                </div>
                <div className="col3">
                    <div className="col1-1">
                    <label htmlFor="Phn">Phone Number</label>
                    <input type="tel" placeholder='Your 10 Digit Phone Number' id='Phn' name='Phn'/>
                    </div>
                    <div className="col1-2">
                    <label htmlFor="pincode">PinCode(India)</label>
                    <input type="tel" id='pincode' name='pincode'/>
                    </div>
                </div>
                <div className="col4">
                    <div className="col1-1">
                    <label htmlFor="state">State</label>
                    <input type="text" id='state' name='state'/>
                    </div>
                    <div className="col1-2">
                    <label htmlFor="district">District</label>
                    <input type="text" id='district' name='district'/>
                    </div>
                </div>

                <p>2. Review Cart Items & Pay</p>
                <div className='review-cart' style={{backgroundColor: props.mode==='light'?'#fce7f3':'rgba(51, 65, 85, 1)'}}>
                {notes.length===0?(<p className='cart-para'>Your Cart is Empty!</p>):(
            <div>
                {notes.map((item)=>(
            <div className="reviewitemContainer" key={item.id}>
                <div className='reviewitemcontain1'>
                <div className="imgreviewContainer">
                    <img src={item.Image} alt="Cart Item"/>
                </div>
                <div className="paraReviewContainer">{item.title}</div>
                </div>
              <div className='reviewitemcontain2'>
                <p className='cart-para1'>Amount: &#8377;{item.Total}</p>
            </div>
            </div>
                ))}
            </div>
        )}
            </div>
            <br />
            {/* <button className='paybtn'>Pay</button> */}
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Checkout
