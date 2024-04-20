import React from 'react'
import {Link} from 'react-router-dom';
const Return = (props) => {
  return (
    <>
        <div className="return" style={{color: props.mode==='light'?'black':'white'}}>
        <p className='head14'>Refund and Cancellation Policy</p>
            <h2>Refund Policy</h2>
            <p>At CodesWear.com, our primary focus is customer satisfaction, which is why we strive to provide the best products and services. Please note that product images on our website are for representational purposes only and may vary slightly due to lighting conditions or other factors.</p>
            <p>If you are unsatisfied with a product due to a major defect, we will review your case and provide a refund. The following conditions apply to our refund policy:</p>
            <p>
                <li>Items can only be returned within a 7-day window from the date of delivery.</li>
                <li>To initiate a return request, customers can visit <Link to='#'>-----</Link>.</li>
                <li>A valid reason is required for returning an item.</li>
                <li>Repeatedly returning items as an abuse of our return policy may result in declined return requests.</li>
                <li>Customers cannot apply for a full refund if the item is part of a "Deal of the Day" offer.</li>
                <li>In some cases where there is a slight mismatch between the product pictures and the actual product, return requests related to such mismatches may be rejected.</li>
                <li>In rare cases where return pickup is not available with our courier partner, the customer is responsible for sending the product back to us for refund or replacement.</li>
            </p>

            <h2>Cancellation Policy</h2>
            <p>To cancel your order, please contact us using the provided contact link. Orders can be canceled until they are shipped from our warehouse. Requests received more than 7 business days prior to the product delivery date will not be processed.</p>

            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at: <br /><br />
                Call/Whatsapp: ------- <br />
                ----- <br />
               -----
            </p>
        </div>
    </>
  )
}

export default Return
