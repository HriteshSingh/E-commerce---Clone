import React from 'react'
import {Link} from 'react-router-dom';

const Footer = (props) => {
  const handleLinkClick=(props)=>{
    props.setProgress(40);
    setTimeout(()=>{
        props.setProgress(100);
    },300)
}
  return (
    <>
        <div className="raw-contain4" style={{backgroundColor: props.mode==='light'?'#f1f5f9':'#111827'}}>
          <div className="footer1">
            <Link to="/" onClick={() => handleLinkClick(props)}><img className='footer-logo' src={require('../images/logo.png')} alt="" width={220}/></Link>
            <p className='logo-para' style={{color: props.mode==='light'?'#626870':'#c5d5db'}}>Wear the <code>&lt;code/&gt;</code><br /> Premium coding tshirts, hoodies <br /> and apparals</p>
          </div>
          <div className="footer1">
            <p className='head9' style={{color: props.mode==='light'?'#4b5563':'#c5d5db'}}>SHOP</p>
              <Link to="/tshirt" onClick={() => handleLinkClick(props)}><li>T-Shirts</li></Link>
              <Link to="/sweat" onClick={() => handleLinkClick(props)}><li>Sweatshirts</li></Link>
              <Link to="/hoodies" onClick={() => handleLinkClick(props)}><li>Hoodies</li></Link>
              <Link to="/zipper" onClick={() => handleLinkClick(props)}><li>Zipper Hoodies</li></Link>
              <Link to="/mugs" onClick={() => handleLinkClick(props)}><li>Mugs</li></Link>
          </div>
          <div className="footer1">
          <p className='head10' style={{color: props.mode==='light'?'#4b5563':'#c5d5db'}}>CUSTOMER SERVICE</p>
              <Link to="/contact" onClick={() => handleLinkClick(props)}><li>Contact Us</li></Link>
              <Link to="/about" onClick={() => handleLinkClick(props)}><li>About Us</li></Link>
              <Link to="/return" onClick={() => handleLinkClick(props)}><li>Return Policy</li></Link>
          </div>
          <div className="footer1">
          <p className='head11' style={{color: props.mode==='light'?'#4b5563':'#c5d5db'}}>POLICY</p>
              <Link to="/privacy" onClick={() => handleLinkClick(props)}><li>Privacy Policy</li></Link>
              <Link to="/terms" onClick={() => handleLinkClick(props)}><li>Terms and Conditions</li></Link>
          </div>
          <div className="footer1">
            <img src={require('../images/weaccept.png')} alt="" width={250} />
          </div>
        </div>
    </>
  )
}

export default Footer
