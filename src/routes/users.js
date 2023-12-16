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
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});
//follow a user
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      //find the user
      const user = await User.findById(req.params.id);
      //find the current user
      const currentUser = await User.findById(req.body.userId);
      //check if the user is not already followed
      if (!user.followers.includes(req.body.userId)) {
        //update the user
        await user.updateOne({ $push: { followers: req.body.userId } });
        //update the current user
        await currentUser.updateOne({ $push: { following: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you already follow this user");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't follow yourself");
  }
});
//unfollow a user
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      //find the user
      const user = await User.findById(req.params.id);
      //find the current user
      const currentUser = await User.findById(req.body.userId);
      //check if the user is not already unfollowed
      if (user.followers.includes(req.body.userId)) {
        //update the user
        await user.updateOne({ $pull: { followers: req.body.userId } });
        //update the current user
        await currentUser.updateOne({ $pull: { following: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you don't follow this user");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can't unfollow yourself");
  }
});

module.exports = router;
