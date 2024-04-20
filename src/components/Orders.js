import React,{useState,useEffect} from 'react'
const Orders = (props) => {
  const [notes, setNotes] = useState([]); // To store API data

  const getNotes = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/payment/fetchallnotes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
        console.log(notes)
      } catch (error) {
          props.showAlert("Failed to Fetch","danger")
        console.log(error.message);
      }
    };

    useEffect(() => {
       // Fetch notes immediately after login
      if (localStorage.getItem('token')) {
          getNotes();
      }
    }, []); // Fetch data from API when component mounts
  return (
    <>
    <div>
    {localStorage.getItem('token') ? (
      <div>
         {notes.length===0?(<div className="orders" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>My Orders</h1>

            <p>You have not yet placed any order with hriteshCodesWear!</p>
        </div>):(
          <div className='dataitemcontainer' style={{color: props.mode==='light'?'black':'white'}}>
          <h1 className='orderhead'>My Orders</h1>
          <br /><br />
          {notes.map((item)=>(
            <div className="OrderContainer" key={item._id} style={{backgroundColor: props.mode==='light'?'#fce7f3':'rgba(51, 65, 85, 1)'}}>
              <div className='ordercontain1' style={{backgroundColor: props.mode==='light'?'#fce7f3':'rgba(51, 65, 85, 1)'}}>
                <div className="orderimgContainer">
                    <img src={item.Image} alt="Cart Item" width={80}/>
                </div>
                <div className="orderparaContainer">{item.Title}</div>
                <div className='Total'>Amount: &#8377;{item.Total}</div>
                <div className='Total'>Payment Mode: COD</div>
              </div>
            </div>  
            ))}
          </div>
        )}
      </div>
    ):(
      <p className='orderLogin'>Login Please!!</p>
    )}
    </div>
    </>
  )
}

export default Orders
