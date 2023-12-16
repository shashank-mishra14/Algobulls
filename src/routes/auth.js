const router = require("express").Router();
const User= require("../../models/User");

//register
router.post("/register", async (req, res) => {
    const user = await new User({
        username: "John",
        email: "whateevr@gmail.com",
        password: "password"
    });
    user.save();
});

module.exports = router;
