var express = require("express");
var router = express.Router();
var globalValue = require("../../globalValue");
const passport = require("passport");

router.get("/", (req, res) => {
  //get/user
  if (!req.user) {
    return res.status(401).send("로그인이 필요합니다.");
  }
  return res.json(req.user);
});
router.post("/login", (req, res, next) => {
  console.log("info", "login");
  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      console.log("info", info);
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, loginErr => {
        if (loginErr) {
          return next(loginErr);
        }
        const filteredUser = Object.assign({}, user);
        delete filteredUser.password;
        return res.json(filteredUser);
      });
    })(req, res, next);
  } catch (e) {
    console.error(e);
  }
  // res.send("OK");
});

router.post("/logout", (req, res) => {
  console.log("info", "logout");
  req.logout();
  req.session.destroy();
  res.send("logOut 성공");
});
module.exports = router;
