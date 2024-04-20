const express = require("express");
const router = express.Router();
const Payment = require("../modals/Payment");
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");

//Route 1 : Get all the notes using : Get (/api/payment/fetchallnotes). Login required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Payment.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});



//Route 2 : Add a new note : POST (/api/payment/addnote). Login require

router.post(
    "/addnote",
    fetchuser,
    async (req, res) => {
      try {
        const { Name,Email,Address,PhnNumber,Pincode,State,District,Image,Title,Total} = req.body;
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note = new Payment({
          Name,
          Email,
          Address,
          PhnNumber,
          Pincode,
          State,
          District,
          Image,
          Title,
          Total,
          user: req.user.id,
        });
        const savedNote = await note.save();
        res.json(savedNote);
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
      }
    }
);

module.exports = router;