const {register,googlelogin,login} = require("../Controllers/AuthControllers");
// const {checkUser} = require("../Middlewares/AuthMiddlewares");

const router = require("express").Router();

// router.post("/",checkUser);
router.post("/register",register);
router.post("/googlelogin",googlelogin);
router.post("/login",login);

module.exports = router;
