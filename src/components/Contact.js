import React from 'react'

const Contact = (props) => {
    const groupNumber = '-----';
    const message = encodeURIComponent("Hi, I need a customized product from hriteshCodesWear.com");
    const whatsappLink = `https://wa.me/${groupNumber}?text=${message}`;
  return (
    <>
        <div className="contact" style={{backgroundColor: props.mode==='light'?'#f3f4f6':'#374151',color: props.mode==='light'?'black':'white'}}>
        <p className='head14'>Lets talk about everything!</p>
        <img src={require('../images/hriteshcodeswear.com.png')} alt="" width={150}/>
        <h2>Feel free to ask us anything!</h2>
        <p>If you have any questions regarding your order, feel free to send email, call or Whatsapp us on our support number</p>

        <div className="contact-container" style={{color: props.mode==='light'?'black':'white'}}>
            <div className="contact-contain1">
            <h3>Corporate Address</h3>
            <p> 
                -------- <br />
                -------, <br />
               -------
            </p>
            </div>
            <div className="contact-contain2">
                <h3>Customer Support</h3>
            <p> 
                Call/Whatsapp: <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><span className='head15'>+91 -----</span></a><br />
                Email: -------- <br />
                Support Hours: -----
            </p>
            </div>
        </div>

        </div>
    </>
  )
}

export default Contact
