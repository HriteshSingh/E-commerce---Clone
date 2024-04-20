import React,{useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { useCart } from '../CartContext';

const Navbar = (props) => {
    const {clrBtn} = useCart();
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

      const handleAllClear=async()=>{
        try {
            const response = await fetch('http://localhost:5000/api/notes/deleteallnotes', {
            method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
              }
            });
            console.log(response.data);
            setNotes([]); // Clear notes state
          } catch (error) {
            console.log(error.message);
          }
      }

    const groupNumber = '-----';
    const message = encodeURIComponent("Hi, I need a customized product from hriteshCodesWear.com");
    const whatsappLink = `https://wa.me/${groupNumber}?text=${message}`;

    let navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/login');
    }
    const [cartVisible,setCartVisible]=useState(false);

    const handleOnClick=()=>{
        setCartVisible(true)
    }
    const handleOnClick1=()=>{
        setCartVisible(false)
    }
    const handleLinkClick=(props)=>{
            props.setProgress(40);
            setTimeout(()=>{
                props.setProgress(100);
            },300)
    }
  return (
    <>
    <div className='navbar-container' style={{backgroundColor: props.mode==='light'?'white':'#111827'}}>
        <div className="navbar-contain1">
            <div className="logo">
                <Link to="/" onClick={() => handleLinkClick(props)}><img src={require('../images/logo.png')}  alt="" /></Link>
            </div>
            <div className="search">
                <input type="search" placeholder='Search from our 1000+ designs' name="" id="" />
            </div>
            <div className="search-icon">
                <img src={require('../images/search-icon.png')} alt="" />
            </div>
        </div>
        <div className="navbar-contain2">
            <div className="dropdown">
                <button className='dropbtn' style={{backgroundColor: props.mode==='light'?'white':'#111827',color: props.mode==='light'?'black':'white' }}>Tshirts <div className='downarrow' style={{display: props.mode==='light'?'block':'none'}}><img src={require('../images/downarrow.png')} alt="" width={15}/></div></button>
                <div className="dropdown-content">
                    <Link to="/tshirt" onClick={() => handleLinkClick(props)}>Tshirts</Link>
                    <Link to="/polo" onClick={() => handleLinkClick(props)}>Polo Tshirts</Link>
                    <Link to="/oversized" onClick={() => handleLinkClick(props)}>Oversized Tshirts</Link>
                </div>
            </div>
            <div className="content" style={{color: props.mode==='light'?'black':'white'}}>
                <Link to="/hoodies" onClick={() => handleLinkClick(props)} style={{color: props.mode==='light'?'black':'white'}}><li>Hoodies</li></Link>
                <Link to="/sweat" onClick={() => handleLinkClick(props)} style={{color: props.mode==='light'?'black':'white'}}><li>Sweatshirts</li></Link>
                <Link to="/mugs" onClick={() => handleLinkClick(props)} style={{color: props.mode==='light'?'black':'white'}}><li>Mugs</li></Link>
                <Link to="/zipper" onClick={() => handleLinkClick(props)} style={{color: props.mode==='light'?'black':'white'}}><li>Zipper Hoodies</li></Link>
                <Link to="/mousepad" onClick={() => handleLinkClick(props)} style={{color: props.mode==='light'?'black':'white'}}><li>Mousepads</li></Link>
                <Link to="/caps" onClick={() => handleLinkClick(props)} style={{color: props.mode==='light'?'black':'white'}}><li>Caps</li></Link>
            </div>      
        </div>
        <div className="navbar-contain3" style={{marginLeft: props.mode==='light'?'10px':'23px'}}>
            <img src={require('../images/shopping-cart.gif')} alt="" width={35} onClick={handleOnClick}/>
            {!localStorage.getItem('token')?<div className="cart-value">0</div>:<div className="cart-value">{notes.length}</div>}
            {!localStorage.getItem('token')?<Link to="/login" onClick={() => handleLinkClick(props)}>
                <button className='login-btn'>Login</button>
            </Link>:<div className="logdown">
                <button className='logbtn' style={{backgroundColor: props.mode==='light'?'white':'#111827',color: props.mode==='light'?'black':'white' }}><img src={require('../images/myaccount.png')} alt="" width={40}/></button>
                <div className="logdown-content">
                    <Link to="/update" onClick={() => handleLinkClick(props)}>My Account</Link>
                    <Link to="/order" onClick={() => handleLinkClick(props)}>Orders</Link>
                    <a href="#" onClick={() => { handleLogout(); handleLinkClick(props); }} >Logout</a>
                </div>
            </div>/*<button onClick={handleLogout} className='logout-btn'>Logout</button>*/}
            <img className='night' onClick={props.toggleMode} src={require('../images/night mode.png')} alt="" width={60}/>
        </div>
    </div>

    <div className="navbar-container1">
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <div className="new">NEW</div></a>  
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button"><div className='container1-content'><p>Get custom designed products by sending us a text on Whatsapp <img src={require('../images/next.png')} alt="" width={6}/> </p></div></a>   
    </div>

    <div className="cart-container" style={{right: cartVisible?'0px':'-500px'}}>
        <div className="contain1">
        <h2>Shopping Cart</h2>
        <img src={require('../images/closebtn.png')} onClick={handleOnClick1} alt="" width={30}/>
        </div>
        {localStorage.getItem('token') ? (
        <div>
        {notes.length===0?(<p className='cart-para'>Your Cart is Empty!</p>):(
            <div>
                {notes.map((item)=>(
            <div className="cartitemContainer" key={item._id}>
                {/* <div className="itemscart-value">{itemQuantity}</div> */}
                <div className='cartitemcontain1'>
                <div className="imgCartContainer">
                    <img src={item.Image} alt="Cart Item" width={50}/>
                </div>
                <div className="paraCartContainer">{item.title}</div>
                {/* <div className="buttonCartContainer">
                    <div className="subcon" onClick={()=>handleDecrease(item.id)}>-</div>
                    <div className="valcon">{itemQuantity}</div>
                    <div className="pluscon" onClick={()=>handleIncrease(item.id)}>+</div>
                </div> */}
                </div>
              <div className='cartitemcontain2'>
                <p className='cart-para1'>Amount: &#8377;{item.Total}</p>
            </div>
            </div>
                ))}
            </div>
        )}
        
        <div className='btn-grp'>
            <Link to="/checkout"><button disabled={notes.length===0} className='cart-btn'>Checkout</button></Link> 
            <button disabled={notes.length===0} className='cart-btn' onClick={handleAllClear}>Clear</button>
        </div>
        </div>):(
            <p className='cart-para'>Login Please!!</p>
        )}
    </div>
    </>
  )
}

export default Navbar
