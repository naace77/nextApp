var express = require("express");
var router = express.Router();
var globalValue = require("../globalValue");
router.get("/r1", function(req, res) {
  res.send(globalValue.USER_LIST);
});

router.get("/r2", function(req, res) {
  res.send("Hello /p1/r2");
});
router.post("/login", function(req, res) {
  var con = globalValue.connectDB("DP00001");
  con.connect();
  con.query("select * from buseo", function(err, rows, fields) {
    if (!err) {
      console.log(rows);
      res.send(JSON.stringify(rows));
    } else {
      console.log("query error : " + err);
    }
  });
  // res.send("Hello /p1/r2");
});
module.exports = router;
