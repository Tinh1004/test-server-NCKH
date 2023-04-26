const router = require("express").Router();
const auth = require("../middleware/auth");
const userCtrl = require("../controllers/userCtrl");

router.get("/search", auth, userCtrl.searchUser);

router.get("/user/:id", auth, userCtrl.getUser);

router.patch("/user", auth, userCtrl.updateUser);

router.get("/suggestionsUser", auth, userCtrl.suggestionsUser);

router.delete("/users/delete", userCtrl.delete);

module.exports = router;
