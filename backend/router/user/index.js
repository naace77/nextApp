var express = require("express");
var router = express.Router();
var globalValue = require("../../globalValue");
const passport = require("passport");

router.post("/login", (req, res, next) => {
  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      // console.log("info", info);
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
});

router.post("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("logOut 성공");
});
module.exports = router;
