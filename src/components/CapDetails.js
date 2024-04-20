import React,{useState} from 'react'
import "./Cdetails.css"
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const CapDetails = (props) => {
  const {cartData,addToCart} = useCart();
  const [image,setImage] = useState(true);
  const [pincode, setPincode] = useState('');
  const [availability, setAvailability] = useState(null);
  const validPincodes = ['223007','282001','282002','282003','282004','282005','282006','282007','282008','282009','282010','283105','283125','283126'];
  const displayItems = [
    {
      id: 0,
      oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/git-cap-black/1.webp',
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/git-cap-black/0.webp',
      parahead: 'Git Cap',
      productdesc:'The Git Cap is a perfect accessory for any developer who loves Git. This stylish hat features the iconic Git logo on the front, making it a great conversation starter. Whether you\'re working on a project at home or out and about, this cap is sure to turn heads. Made from 100% cotton, the Git Cap is comfortable and breathable, making it perfect for all-day wear. The adjustable strap on the back ensures a perfect fit, no matter your head size. The cap is also machine-washable, making it easy to keep clean and fresh. The Git Cap is a must-have accessory for any Git enthusiast. Show off your love for Git while also looking stylish and fashionable. Order your Git Cap today and start turning heads wherever you go!',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 1,
      oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/c-cap-black/1.webp',
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/c-cap-black/0.webp',
      parahead: 'C Cap',
      productdesc:'The Git Cap is a perfect accessory for any developer who loves Git. This stylish hat features the iconic Git logo on the front, making it a great conversation starter. Whether you\'re working on a project at home or out and about, this cap is sure to turn heads. Made from 100% cotton, the Git Cap is comfortable and breathable, making it perfect for all-day wear. The adjustable strap on the back ensures a perfect fit, no matter your head size. The cap is also machine-washable, making it easy to keep clean and fresh. The Git Cap is a must-have accessory for any Git enthusiast. Show off your love for Git while also looking stylish and fashionable. Order your Git Cap today and start turning heads wherever you go!',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 2,
      oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/css-cap-black/1.webp',
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/css-cap-black/0.webp',
      parahead: 'Css Cap',
      productdesc:'The Git Cap is a perfect accessory for any developer who loves Git. This stylish hat features the iconic Git logo on the front, making it a great conversation starter. Whether you\'re working on a project at home or out and about, this cap is sure to turn heads. Made from 100% cotton, the Git Cap is comfortable and breathable, making it perfect for all-day wear. The adjustable strap on the back ensures a perfect fit, no matter your head size. The cap is also machine-washable, making it easy to keep clean and fresh. The Git Cap is a must-have accessory for any Git enthusiast. Show off your love for Git while also looking stylish and fashionable. Order your Git Cap today and start turning heads wherever you go!',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 3,
      oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/html-cap-black/1.webp',
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/html-cap-black/0.webp',
      parahead: 'Html Cap',
      productdesc:'The Git Cap is a perfect accessory for any developer who loves Git. This stylish hat features the iconic Git logo on the front, making it a great conversation starter. Whether you\'re working on a project at home or out and about, this cap is sure to turn heads. Made from 100% cotton, the Git Cap is comfortable and breathable, making it perfect for all-day wear. The adjustable strap on the back ensures a perfect fit, no matter your head size. The cap is also machine-washable, making it easy to keep clean and fresh. The Git Cap is a must-have accessory for any Git enthusiast. Show off your love for Git while also looking stylish and fashionable. Order your Git Cap today and start turning heads wherever you go!',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 4,
      oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/javascript-cap-black/1.webp',
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/javascript-cap-black/0.webp',
      parahead: 'Javascript Cap',
      productdesc:'The Git Cap is a perfect accessory for any developer who loves Git. This stylish hat features the iconic Git logo on the front, making it a great conversation starter. Whether you\'re working on a project at home or out and about, this cap is sure to turn heads. Made from 100% cotton, the Git Cap is comfortable and breathable, making it perfect for all-day wear. The adjustable strap on the back ensures a perfect fit, no matter your head size. The cap is also machine-washable, making it easy to keep clean and fresh. The Git Cap is a must-have accessory for any Git enthusiast. Show off your love for Git while also looking stylish and fashionable. Order your Git Cap today and start turning heads wherever you go!',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 5,
      oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/mongodb-cap-black/1.webp',
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/mongodb-cap-black/0.webp',
      parahead: 'Mongodb Cap',
      productdesc:'The Git Cap is a perfect accessory for any developer who loves Git. This stylish hat features the iconic Git logo on the front, making it a great conversation starter. Whether you\'re working on a project at home or out and about, this cap is sure to turn heads. Made from 100% cotton, the Git Cap is comfortable and breathable, making it perfect for all-day wear. The adjustable strap on the back ensures a perfect fit, no matter your head size. The cap is also machine-washable, making it easy to keep clean and fresh. The Git Cap is a must-have accessory for any Git enthusiast. Show off your love for Git while also looking stylish and fashionable. Order your Git Cap today and start turning heads wherever you go!',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 6,
      oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/nodejs-cap-black/1.webp',
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/nodejs-cap-black/0.webp',
      parahead: 'Nodejs Cap',
      productdesc:'The Git Cap is a perfect accessory for any developer who loves Git. This stylish hat features the iconic Git logo on the front, making it a great conversation starter. Whether you\'re working on a project at home or out and about, this cap is sure to turn heads. Made from 100% cotton, the Git Cap is comfortable and breathable, making it perfect for all-day wear. The adjustable strap on the back ensures a perfect fit, no matter your head size. The cap is also machine-washable, making it easy to keep clean and fresh. The Git Cap is a must-have accessory for any Git enthusiast. Show off your love for Git while also looking stylish and fashionable. Order your Git Cap today and start turning heads wherever you go!',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
    {
      id: 7,
      oriImage: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/react-cap-black/1.webp',
      image: 'https://codeswear.nyc3.cdn.digitaloceanspaces.com/caps/react-cap-black/0.webp',
      parahead: 'React Cap',
      productdesc:'The Git Cap is a perfect accessory for any developer who loves Git. This stylish hat features the iconic Git logo on the front, making it a great conversation starter. Whether you\'re working on a project at home or out and about, this cap is sure to turn heads. Made from 100% cotton, the Git Cap is comfortable and breathable, making it perfect for all-day wear. The adjustable strap on the back ensures a perfect fit, no matter your head size. The cap is also machine-washable, making it easy to keep clean and fresh. The Git Cap is a must-have accessory for any Git enthusiast. Show off your love for Git while also looking stylish and fashionable. Order your Git Cap today and start turning heads wherever you go!',
      strikeVal: '250',
      OrgVal: '200',
      Color: 'Black',
      Theme: 'Coding',
     Size: 'L'
    },
  ];
  const { id } = useParams();

  
  // Ensure the id is a valid number and within the array's index range
  const itemId = parseInt(id);
  if (isNaN(itemId) || itemId < 0 || itemId >= displayItems.length) {
    return <p>Invalid item ID.</p>;
  }

   // Get the selected item using the itemId
   const selectedItem = displayItems[itemId];

   const handleonclickimg=()=>{
    setImage(true);
   }
   const handleonclickimg1=()=>{
    setImage(false);
   }

   const handleCheckAvailability = () => {
    if (validPincodes.includes(pincode)) {
      setAvailability(true);
    } else {
      setAvailability(false);
    }
  };

  // setTimeout(() => {
  //   setAvailability(null);
  // }, 2000);

  const handlescrolltop=()=>{
    window.scrollTo(0,0);
  };

  const handleAddToCart = async (item) => {
    try {
      // Add a note to the database
      const response = await fetch('http://localhost:5000/api/notes/addnote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          Image: item.image,
          title: item.parahead,
          Total: item.OrgVal
        })
      });
  
      const data = await response.json();
      console.log('Note added:', data);
  
      // Add the item to the cart
      addToCart(item);
    } catch (error) {
      props.showAlert("Invalid Details","danger")
      console.error('Error adding note:', error.message);
    }
  };
  
  

  return (
    <>
    <div>
    <div className="cdetails">
        <div className="cdetails-contain1">
            <div className="small-img">
            <img src={selectedItem.image} alt="" onClick={handleonclickimg}/>
            </div>
            <div className="small-img">
            <img src={selectedItem.oriImage} alt="" onClick={handleonclickimg1}/>
            </div>
        </div>
        <div className="cdetails-contain2">
        {image ? (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'T-Shirt Image',
                    isFluidWidth: true,
                    src: selectedItem.image,
                  },
                  largeImage: {
                    src: selectedItem.image, // Use the same image for demonstration
                    width: 1200, // Adjust the width of the large image
                    height: 1800, // Adjust the height of the large image
                  },
                }}
              />
            ) : (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'T-Shirt OriImage',
                    isFluidWidth: true,
                    src: selectedItem.oriImage,
                  },
                  largeImage: {
                    src: selectedItem.oriImage, // Use the same image for demonstration
                    width: 1200, // Adjust the width of the large image
                    height: 1800, // Adjust the height of the large image
                  },
                }}
              />
            )}
        </div>
        <div className="cdetails-contain3" style={{color: props.mode==='light'?'black':'white'}}>
          <p className='brand'>hriteshCodesWear</p>
          <h1>{selectedItem.parahead}</h1>
          <br />
          <h3>Product Description :</h3>
          <p className='product-desc'>{selectedItem.productdesc}</p>
          <br />
          <h3>Exciting offers :</h3>

          <div className='product-desc'>
            <img src={require('../images/pricetag.png')} alt="" width={20}/> &nbsp; &nbsp;
            <div>Get Flat 10% off on all prepaid orders above ₹249 Use coupon <span className='coupon'>HRITESHCODESWEAR10</span></div>
          </div>
          <div className='product-desc'>
            <img src={require('../images/pricetag.png')} alt="" width={20}/> &nbsp; &nbsp;
            <div>Get Customized <span className='coupon'>T-Shirts</span> at only ₹549.</div>
          </div>
          <div className='product-desc'>
            <img src={require('../images/pricetag.png')} alt="" width={20}/> &nbsp; &nbsp;
            <div>Buy 2 get 1 Free and buy 3 get 2 Free on all <span className='coupon'>Caps</span> - Prepaid orders only.</div>
          </div>
          <div className='product-desc'>
            <img src={require('../images/pricetag.png')} alt="" width={20}/> &nbsp; &nbsp;
            <div>Buy 2 get 1 Free and buy 3 get 2 Free on all <span className='coupon'>Mousepads</span> - Prepaid orders only.</div>
          </div>
          <br /><br />
          <h3>Color :&nbsp;&nbsp;{selectedItem.Color}</h3>
          <div className="size-container">
                  <p>Size :</p>
                  <div className="s1">L</div>
          </div>
          <hr />
          <p className='amt-head'><strike className='head6'>&#8377;{selectedItem.strikeVal}</strike>&nbsp;&#8377;{selectedItem.OrgVal}<sup className='freeship'>(Free Shipping)</sup></p>
          
          <div className="capspincode-contain">
          <input type="text" className='pincode' placeholder='Enter Your Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>&nbsp;<button className='checkbtn' onClick={handleCheckAvailability}>Check</button>
          </div>
          {availability !== null && (
              <p className='capsavailability-msg'>
                {availability ? 'Yay! This pincode is serviceable' : 'Sorry! We do not deliver to this pincode yet'}
              </p>
            )}
          <div className="capsshopbtn">
          {!localStorage.getItem('token')?<Link to='/login'><button className='shopbtn-BUY' onClick={handlescrolltop}>Buy Now</button> &nbsp;</Link>:
          <Link to={`/buy?image=${encodeURIComponent(selectedItem.image)}&title=${encodeURIComponent(selectedItem.parahead)}&total=${encodeURIComponent(selectedItem.OrgVal)}`}><button className='shopbtn-BUY' onClick={handlescrolltop}>Buy Now</button> &nbsp;</Link>}
          {!localStorage.getItem('token')?<Link to='/login'><button className='shopbtn-CART' onClick={() => {handleAddToCart(selectedItem); handlescrolltop();}}>Add to Cart</button></Link>:<button className='shopbtn-CART' onClick={() => handleAddToCart(selectedItem)}>Add to Cart</button>}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CapDetails
