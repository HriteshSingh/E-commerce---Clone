import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
const AboutUs = (props) => {
    useEffect(() => {
        // DOM element where the typing will happen
        const element = document.querySelector('#typed');
    
        // Typed configuration options
        const options = {
          strings: [
            "Tshirts",
            "Hoodies",
            "Sweatshirts",
            "Mugs",
            "Zippper Hoodies",
            "Mousepads",
            "&amp; Caps.",
          ],
          typeSpeed: 80,
        };
    
        // Initialize Typed
        const typed = new Typed(element, options);
    
        // Clean up the Typed instance when the component unmounts
        return () => {
          typed.destroy();
        };
      }, []);
      const handleLinkClick=(props)=>{
        props.setProgress(40);
        setTimeout(()=>{
            props.setProgress(100);
        },300)
}
  return (
    <>
    <div>
        <div className="About" style={{color: props.mode==='light'?'black':'white'}}>
            <img src={require('../images/hriteshcodeswear.com.png')} alt="" width={150}/>  
            <p className='head14' >Welcome to <span className='head16'>hriteshCodeswear.com</span></p>
            <p className='head17'>Buy <span id="typed"></span></p>
            <div className="about-para">
            <p>Introducing hriteshCodesWear, a revolutionary e-commerce platform that delivers amazing products at unbeatable prices. Built on a foundation of ReactJs and MongoDB, our website offers a seamless shopping experience powered by server-side rendering. Whether you're a tech enthusiast or simply looking for a stylish geek T-shirt, CodesWear has something for everyone. And for those curious about the development process. Shop now at hriteshCodesWear and experience the future of online shopping.</p>

            <Link to="/" onClick={() => handleLinkClick(props)}><button className='about-btn'>Start Shopping</button></Link>
            </div>
        </div>  
        <hr  className='about-hr' style={{border: props.mode==='light'?'1px solid rgba(51,50,50,0.2)':'1px solid rgba(225,225,225)'}}/>
        <div className="aboutNext" style={{color: props.mode==='light'?'black':'white'}}>
            <div className="contain1">
                <p className='head14'>About hriteshCodesWear</p>
                <p>hriteshCodeswear.com is revolutionizing the way India shops for unique, geeky apparel. From our one-of-a-kind hoodie designs to our wide selection of stickers, mugs and other accessories, we have everything you need to express your individuality and stand out from the crowd. Say goodbye to the hassle of hopping from store to store in search of your perfect geeky look. With just a single click on our website, you can find it all!
                <br /><br />
                But what sets hriteshCodeswear apart from the competition? The answer is simple: our unique designs and commitment to providing the highest quality products. We understand the importance of style and durability, which is why we put so much effort into creating unique designs and using only the best materials. Don't settle for mediocre clothing and accessories - choose hriteshCodeswear and make a statement with your wardrobe.
                <br /><br />
                At hriteshCodeswear, we strive to be more than just an online store - we want to be a community where like-minded individuals can come together and express themselves through fashion. Whether you're a gamer, a programmer, or simply someone who loves all things geeky, we have something for you. Our collection is curated with the latest trends and fan favorites in mind, ensuring that you'll always find something new and exciting.
                <br /><br />
                We also understand the importance of affordability and convenience. That's why we offer competitive prices and fast shipping, so you can get your hands on your new geeky apparel as soon as possible. Plus, with our easy-to-use website and secure checkout process, shopping with us is a breeze.
                <br /><br />
                So why wait? Visit hriteshCodeswear.com today and discover the latest in geeky fashion. With our unique designs and high-quality products, we're sure you'll find something you'll love. Join our community and express your individuality through fashion.</p>
            </div>
            <div className="contain2">
                <img src={require('../images/aboutcodeswear.jpg')} alt="" width={450}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutUs
