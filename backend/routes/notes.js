const express = require("express");
const router = express.Router();
const Note = require("../modals/Note");
const { body, validationResult } = require("express-validator");
var fetchuser = require("../middleware/fetchuser");

//Route 1 : Get all the notes using : Get (/api/notes/fetchallnotes). Login required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try {
      const notes = await Note.find({ user: req.user.id });
      res.json(notes);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  });



//Route 2 : Add a new note : POST (/api/notes/addnote). Login require

router.post(
    "/addnote",
    fetchuser,
    [
      body("Image", "Save a valid image"),
      body("title", "title atleast of 5 characters").isLength({
        min: 5,
      }),
      body("Total", "total have greater than 300"),
    ],
    async (req, res) => {
      try {
        const { Image, title, Total } = req.body;
        // if there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
          Image,
          title,
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

  // Route to delete all notes for a user
router.delete("/deleteallnotes", fetchuser, async (req, res) => {
  try {
    // Delete all notes associated with the user
    await Note.deleteMany({ user: req.user.id });
    res.json({ Success: "All notes have been deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;