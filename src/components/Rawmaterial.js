import React from 'react'
import {Link} from 'react-router-dom';
const Rawmaterial = (props) => {
  const groupNumber = '7464942128'; // Replace with your actual WhatsApp group number
  const message = encodeURIComponent("Hi, I need a customized product from hriteshCodesWear.com");
  const whatsappLink = `https://wa.me/${groupNumber}?text=${message}`;
  return (
    <>
    <div className='raw-container'>
        <h1 className='head1' style={{color: props.mode==='light'?'black':'white'}}>COLLECTIONS</h1>
        <div className='raw-contain1'>
            <div className="img1">
              <Link to="/caps"><img src={require('../images/caps.webp')} alt="" /></Link>
            </div>
            <div className="img1">
              <Link to="/hoodies"><img src={require('../images/hoodie.webp')} alt="" /></Link>
            </div>
            <div className="img1">
              <Link to="/mousepad"><img src={require('../images/mousepad.webp')} alt="" /></Link>
            </div>
        </div>
        <br /><br />
        <div className='raw-contain1'>
            <div className="img1">
              <Link to="/mugs"><img src={require('../images/mugs.webp')} alt="" /></Link>
            </div>
            <div className="img1">
              <Link to="/oversized"><img src={require('../images/oversizedtshirt.webp')} alt="" /></Link>
            </div>
            <div className="img1">
              <Link to="/polo"><img src={require('../images/polotshirts.webp')} alt="" /></Link>
            </div>
        </div>
        <br /><br />
        <div className='raw-contain2'>
            <div className="img1">
              <Link to="/sweat"><img src={require('../images/sweatshirt.webp')} alt="" /></Link>
            </div>
            <div className="img1">
              <Link to="/tshirt"><img src={require('../images/tshirt.webp')} alt="" /></Link>
            </div>
        </div>
        <br />


        <h1 className='head2' style={{color: props.mode==='light'?'black':'white'}}>Themes</h1>
        <div className='raw-contain1'>
            <div className="img1">
              <Link to="/tshirt"><img src={require('../images/anime.webp')} alt="" /></Link>
            </div>
            <div className="img1">
              <Link to="/hoodies"><img src={require('../images/combooffers.webp')} alt="" /></Link>
            </div>
            <div className="img1">
              <Link to="/sweat"><img src={require('../images/customized.webp')} alt="" /></Link>
            </div>
        </div>
        <br /><br />
        <div className='raw-contain1'>
            <div className="img1">
              <Link to="/zipper"><img src={require('../images/fitness.webp')} alt="" /></Link>
            </div>
            <div className="img1">
              <Link to="/polo"><img src={require('../images/gaming.webp')} alt="" /></Link>
            </div>
            <div className="img1">
              <Link to="/oversized"><img src={require('../images/lifestyle.webp')} alt="" /></Link>
            </div>
        </div>
        <br /><br />
         <div className='raw-contain2'>
            <div className="img1">
              <Link to="/tshirt"><img src={require('../images/programming.webp')} alt="" /></Link>
            </div>
            <div className="img1">
              <Link to="/polo"><img src={require('../images/trending.webp')} alt="" /></Link>
            </div>
        </div>
        <br /><br /><br />


        <p className='head3' style={{color: props.mode==='light'?'black':'white'}}>Bestselling Products <span className='underline'></span></p>
        <div className="bestselling-products">
          <Link to="/tshirt"><div className="products">
            <div className="product-contain1"></div>
            <div className="product-contain2">
              <span className='tshirt'><p className='head4'>TSHIRT</p></span>
              <p className='head5'>Marvel Tshirt</p>
              <p><strike className='head6'>&#8377;699</strike>&nbsp;&nbsp; &#8377;549</p>
            </div>
          </div></Link>

          <Link to="/polo"><div className="products">
            <div className="product-contain3"></div>
            <div className="product-contain4">
              <span className='tshirt'><p className='head4'>TSHIRT</p></span>
              <p className='head5'>Naruto Tshirt</p>
              <p><strike className='head6'>&#8377;699</strike>&nbsp;&nbsp; &#8377;549</p>
            </div>
          </div></Link>

          <Link to="/sweat"><div className="products">
            <div className="product-contain5"></div>
            <div className="product-contain6">
              <span className='tshirt'><p className='head4'>TSHIRT</p></span>
              <p className='head5'>Wings Of Freedom...</p>
              <p><strike className='head6'>&#8377;699</strike>&nbsp;&nbsp; &#8377;549</p>
            </div>
          </div></Link>

          <Link to="/hoodies"><div className="products">
            <div className="product-contain7"></div>
            <div className="product-contain8">
              <span className='tshirt'><p className='head4'>HOODIE</p></span>
              <p className='head5'>Pack Of Three Pl...</p>
              <p><strike className='head6'>&#8377;949</strike>&nbsp;&nbsp; &#8377;799</p>
            </div>
          </div></Link>

          <Link to="/oversized"><div className="products">
            <div className="product-contain9"></div>
            <div className="product-contain10">
              <span className='tshirt'><p className='head4'>TSHIRT</p></span>
              <p className='head5'>The Boys Tshirt</p>
              <p><strike className='head6'>&#8377;699</strike>&nbsp;&nbsp; &#8377;549</p>
            </div>
          </div></Link>
        </div>
        <br /><br /><br /><br /><br />

        <div className='raw-contain3'>
          <div className="hanger" style={{backgroundColor: props.mode==='light'?'white':'#334155'}}>
            <img src={require('../images/hanger.png')} alt="" width={40}/>
            <p className='head7' style={{color: props.mode==='light'?'black':'white'}}>Premium Tshirts</p>
            <p className='head8' style={{color: props.mode==='light'?'black':'white'}}>Our T-Shirts are 100% made of cotton.</p>
          </div>
          <div className="car" style={{backgroundColor: props.mode==='light'?'white':'#334155'}}><br /><br />
          <img src={require('../images/car.png')} alt="" width={40}/>
            <p className='head7' style={{color: props.mode==='light'?'black':'white'}}>Free Shipping</p>
            <p className='head8' style={{color: props.mode==='light'?'black':'white'}}>We ship all over India for FREE.</p>
          </div>
          <div className="rupee" style={{backgroundColor: props.mode==='light'?'white':'#334155'}}>
          <img src={require('../images/rupee.png')} alt="" width={40}/>
            <p className='head7' style={{color: props.mode==='light'?'black':'white'}}>Exciting Offers</p>
            <p className='head8' style={{color: props.mode==='light'?'black':'white'}}>We provide amazing offers & discounts on our products</p>
          </div>
        </div>

        <br /><br /><br />
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button"><img className='whatsapp' src={require('../images/whatsapp.png')} alt="" width={60}/></a>
    </div>
    </>
  )
}

export default Rawmaterial
