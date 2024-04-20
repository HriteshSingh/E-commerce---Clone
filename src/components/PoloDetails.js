import React,{useState} from 'react'
import "./Pdetails.css"
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const PoloDetails = (props) => {
    const {cartData,addToCart} = useCart();
    const [image,setImage] = useState(true);
    const [pincode, setPincode] = useState('');
    const [availability, setAvailability] = useState(null);
    const validPincodes = ['223007','282001','282002','282003','282004','282005','282006','282007','282008','282009','282010','283105','283125','283126'];
    const displayItems = [
      {
        id: 0,
        image: 't5.webp',
        oriImage: 't5-ori.webp',
        parahead: 'Work Hard Dream Big..',
        productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
        strikeVal: '699',
        OrgVal: '549',
        Color: 'Black',
        Theme: 'Coding',
        Size: 'XL'
      },
      {
        id: 1,
        image: 't8.webp',
        oriImage: 't8-ori.webp',
        parahead: 'Sunnies Today Dog Ch..',
        productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
        strikeVal: '599',
        OrgVal: '449',
        Color: 'Black',
        Theme: 'Lifestyle',
        Size: 'S'
      },
      {
        id: 2,
        image: 't9.webp',
        oriImage: 't9-ori.webp',
        parahead: 'Simpsons Designs Tsh..',
        productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
        strikeVal: '599',
        OrgVal: '449',
        Color: 'Black',
        Theme: 'Gaming',
        Size: 'XXL'
      },
      {
        id: 3,
        image: 't10.webp',
        oriImage: 't10-ori.webp',
        parahead: 'Ryomen Sukuna Anime',
        productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
        strikeVal: '649',
        OrgVal: '499',
        Color: 'Black',
        Theme: 'Plain',
        Size: 'L'
      },
      {
        id: 4,
      image: 't11.webp',
      oriImage: 't11-ori.webp',
      parahead: 'Knock Out Sarcasm De..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'XXL'
    },
    {
        id: 5,
      image: 't12.webp',
      oriImage: 't12-ori.webp',
      parahead: 'Donald Duck Premium..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '649',
      OrgVal: '499',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'S'
    },
    {
        id: 6,
      image: 't13.webp',
      oriImage: 't13-ori.webp',
      parahead: 'Courage The Cowardly..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'L'
    },
    {
        id: 7,
      image: 't14.webp',
      oriImage: 't14-ori.webp',
      parahead: 'Anime Design Regular..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'S'
    },
    {
        id: 8,
      image: 't15.webp',
      oriImage: 't15-ori.webp',
      parahead: 'Wakanda Forever Grap..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '749',
      OrgVal: '599',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'L' 
    },
    {
        id: 9,
      image: 't27.webp',
      oriImage: 't27-ori.webp',
      parahead: 'Valorant Chest Logo..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '549',
      OrgVal: '399',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
        id: 10,
      image: 't29.webp',
      oriImage: 't29-ori.webp',
      parahead: 'Hung Over Graphic Pr..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XL'
    },
    {
        id: 11,
      image: 't38.webp',
      oriImage: 't38-ori.webp',
      parahead: 'Social Media Like Co...',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
        id: 12,
      image: 't39.webp',
      oriImage: 't39-ori.webp',
      parahead: 'Dragonballz Graphic...',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '779',
      OrgVal: '629',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'XL'
    },
    {
        id: 13,
      image: 't44.webp',
      oriImage: 't44-ori.webp',
      parahead: 'Rose Tshirt',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'XL'
    },
    {
        id: 14,
      image: 't45.webp',
      oriImage: 't45-ori.webp',
      parahead: 'Yes Iam Different Ts..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'XXL'
    },
    {
        id: 15,
      image: 't47.webp',
      oriImage: 't47-ori.webp',
      parahead: 'We Are All Mad Here..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'S'
    },
    {
        id: 16,
      image: 't48.webp',
      oriImage: 't48-ori.webp',
      parahead: 'Raw Real Unfiltered..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'M'
    },
    {
        id: 17,
      image: 't51.webp',
      oriImage: 't51-ori.webp',
      parahead: 'Plain Tshirt',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '549',
      OrgVal: '399',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'XXL'
    },
    {
        id: 18,
      image: 't53.webp',
      oriImage: 't53-ori.webp',
      parahead: 'Gamer Tshirt',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'XL'
    },
    {
        id: 19,
      image: 't60.webp',
      oriImage: 't60-ori.webp',
      parahead: 'The Boys Tshirt',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
        id: 20,
      image: 't66.webp',
      oriImage: 't66-ori.webp',
      parahead: 'How About No Tshirt',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'XL'
    },
    {
        id: 21,
      image: 't68.webp',
      oriImage: 't68-ori.webp',
      parahead: 'Where Words Fail Mus..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'M'
    },
    {
        id: 22,
      image: 't73.webp',
      oriImage: 't73-ori.webp',
      parahead: 'Hacked Anonymous',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XXL'
    },
    {
        id: 23,
      image: 't76.webp',
      oriImage: 't76-ori.webp',
      parahead: 'Jujutsu Kaisen Tshir..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '799',
      OrgVal: '649',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'L'
    },
    {
        id: 24,
      image: 't84.webp',
      oriImage: 't84-ori.webp',
      parahead: 'Meta Tshirt',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
        id: 25,
      image: 't89.webp',
      oriImage: 't89-ori.webp',
      parahead: 'Friends Tshirt',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '539',
      OrgVal: '389',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'XXL'
    },
    {
        id: 26,
      image: 't95.webp',
      oriImage: 't95-ori.webp',
      parahead: 'No Pain No Gain..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'XL'
    },
    {
        id: 27,
      image: 't96.webp',
      oriImage: 't96-ori.webp',
      parahead: 'Instagram Tshirt',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Plain',
      Size: 'XXL'
    },
    {
        id: 28,
      image: 't98.webp',
      oriImage: 't98-ori.webp',
      parahead: 'Light Yagami Death N..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'S'
    },
    {
        id: 29,
      image: 't100.webp',
      oriImage: 't100-ori.webp',
      parahead: 'Maang Tshirt',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Lifestyle',
      Size: 'M'
    },
    {
        id: 30,
      image: 't102.webp',
      oriImage: 't102-ori.webp',
      parahead: 'Uchiha Itachi Crows..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '539',
      OrgVal: '389',
      Color: 'Black',
      Theme: 'Gaming',
      Size: 'S'
    },
    {
        id: 31,
      image: 't110.webp',
      oriImage: 't110-ori.webp',
      parahead: 'Theres No Place Like..',
      productdesc:'Achieve greatness and inspire others with the "Work Hard, Dream Big" Design T-shirt in black. This motivational t-shirt is designed to uplift and encourage you to reach for your dreams and never give up. The visually appealing print features a dynamic "Work Hard, Dream Big" slogan, making it a perfect statement piece to express your positive attitude and determination.',
      strikeVal: '699',
      OrgVal: '549',
      Color: 'Black',
      Theme: 'Coding',
      Size: 'M'
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
  
    // setTimeout(() => {
    //   setAvailability(null);
    // }, 2000);
  return (
    <>
    <div>
    <div className="pdetails">
        <div className="pdetails-contain1">
            <div className="small-img">
            <img src={require(`../images1/tshirt/${selectedItem.image}`)} alt="" onClick={handleonclickimg}/>
            </div>
            <div className="small-img">
            <img src={require(`../images1/tshirt/${selectedItem.oriImage}`)} alt="" onClick={handleonclickimg1}/>
            </div>
        </div>
        <div className="pdetails-contain2">
        {image ? (
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'T-Shirt Image',
                    isFluidWidth: true,
                    src: require(`../images1/tshirt/${selectedItem.image}`),
                  },
                  largeImage: {
                    src: require(`../images1/tshirt/${selectedItem.image}`), // Use the same image for demonstration
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
                    src: require(`../images1/tshirt/${selectedItem.oriImage}`),
                  },
                  largeImage: {
                    src: require(`../images1/tshirt/${selectedItem.oriImage}`), // Use the same image for demonstration
                    width: 1200, // Adjust the width of the large image
                    height: 1800, // Adjust the height of the large image
                  },
                }}
              />
            )}
        </div>
        <div className="pdetails-contain3" style={{color: props.mode==='light'?'black':'white'}}>
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
          <br /> <br />
          <h3>Color :&nbsp;&nbsp;{selectedItem.Color}</h3>
          <div className="size-container">
                  <p>Size :</p>
                  <div className="s1">S</div>
                  <div className="s1">M</div>
                  <div className="s1">L</div>
                  <div className="s1">XL</div>
                  <div className="s1">XXL</div>
          </div>
          <hr />
          <p className='amt-head'><strike className='head6'>&#8377;{selectedItem.strikeVal}</strike>&nbsp;&#8377;{selectedItem.OrgVal}<sup className='freeship'>(Free Shipping)</sup></p>
          
          <div className="polopincode-contain">
          <input type="text" className='pincode' placeholder='Enter Your Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>&nbsp;<button className='checkbtn' onClick={handleCheckAvailability}>Check</button>
          </div>
          {availability !== null && (
              <p className='poloavailability-msg'>
                {availability ? 'Yay! This pincode is serviceable' : 'Sorry! We do not deliver to this pincode yet'}
              </p>
            )}
          <div className="poloshopbtn">
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

export default PoloDetails
