const express = require('express');
const router = express.Router();
const twilio = require('twilio');

// Your Twilio credentials
const accountSid = '';
const authToken = '';
const client = new twilio(accountSid, authToken);

// POST route to send SMS
router.post('/send-sms', async (req, res) => {
  try {
    const { phoneNumber, orderID , title, amount} = req.body;

    // Send SMS using Twilio
    const message = await client.messages.create({
      body: `Your order with Order ID ${orderID} from hriteshCodesWear has been placed and the details of the product is here : Product : ${title}, Amount : ${amount}. Thanks for supporting and shopping with a homegrown hriteshCodesWear brand`,
      from: '',
      to: phoneNumber
    });

    console.log(message.sid);
    res.json({ message: 'SMS sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send SMS' });
  }
});

module.exports = router;
