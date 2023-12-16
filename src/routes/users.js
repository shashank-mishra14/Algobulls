const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("../../models/bcrypt");

//update a user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.userIsAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("you can update only your account");
  }
});
//delete a user
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.userIsAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("you can delete only your account");
  }
});
//get a user
//follow a user
//unfollow a user

module.exports = router;
