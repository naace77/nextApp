var express = require("express");
var router = express.Router();
var globalValue = require("../../globalValue");

router.post("/getEdoc", (req, res) => {
  var edeg1code01 = req.body.edeg1code01;
  var edeg1code02 = req.body.edeg1code02;
  var stcode = req.body.stcode;
  var sql =
    "SELECT A.*,AA.STNAMEKOR AS EDSTNAME,AA.STJCODE AS EDSTJCODE, B.EJSEQ, B.EJSIGNGUBUN, B.EJBEFJOINSTCODE, B.EJAFTJOINSTCODE, C.STNAMEKOR AS EJBEFJOINSTNAME, C.STBCODE AS EJBEFJOINSTBCODE, C.STJCODE AS EJBEFJOINSTJCODE" +
    ", D.STNAMEKOR AS EJAFTJOINSTNAME, D.STBCODE AS EJAFTJOINSTBCODE, D.STJCODE AS EJAFTJOINSTJCODE, '' AS ERSTCODE,'' AS EROpenDateTime FROM EDOCUMENT A" +
    "  LEFT JOIN EJOINLINE B ON       A.EDDATETIME     = B.EJEDDATETIME" +
    "                            AND A.EDMILLISECOND = B.EJEDMILLISECOND" +
    "                            AND A.EDSTCODE        = B.EJEDSTCODE" +
    "  LEFT JOIN STAFF C ON B.EJBEFJOINSTCODE = C.STCODE" +
    "  LEFT JOIN STAFF D ON B.EJAFTJOINSTCODE = D.STCODE" +
    "  LEFT JOIN STAFF AA ON A.EDSTCODE = AA.STCODE" +
    "  WHERE (C.STCODE = ? OR D.STCODE =? OR B.EJEDSTCODE =?)" +
    "  UNION" +
    "  SELECT A.*,AA.STNAMEKOR AS EDSTNAME,AA.STJCODE AS EDSTJCODE,B.EJSEQ, B.EJSIGNGUBUN, B.EJBEFJOINSTCODE, B.EJAFTJOINSTCODE, C.STNAMEKOR AS EJBEFJOINSTNAME, C.STBCODE AS EJBEFJOINSTBCODE, C.STJCODE AS EJBEFJOINSTJCODE" +
    "	   		, D.STNAMEKOR AS EJAFTJOINSTNAME, D.STBCODE AS EJAFTJOINSTBCODE, D.STJCODE AS EJAFTJOINSTJCODE, E.STCODE AS ERSTCODE, BB.EROpenDateTime FROM EDOCUMENT A" +
    "	   		  LEFT JOIN EREFERENCE BB ON       A.EDDATETIME     = BB.EREDDATETIME" +
    "	   		                            AND A.EDMILLISECOND = BB.EREDMILLISECOND" +
    "	   		                            AND A.EDSTCODE        = BB.EREDSTCODE" +
    "	   		  LEFT JOIN EJOINLINE B ON       A.EDDATETIME     = B.EJEDDATETIME" +
    "	   		                            AND A.EDMILLISECOND = B.EJEDMILLISECOND" +
    "	   		                            AND A.EDSTCODE        = B.EJEDSTCODE" +
    "	   		  LEFT JOIN STAFF C ON B.EJBEFJOINSTCODE = C.STCODE" +
    "	   		  LEFT JOIN STAFF D ON B.EJAFTJOINSTCODE = D.STCODE " +
    "             LEFT JOIN STAFF AA ON A.EDSTCODE = AA.STCODE" +
    "	   		  LEFT JOIN STAFF E ON BB.ERSTCODE = E.STCODE" +
    "	   		  WHERE  E.STCODE= ?";
  var parm = [stcode, stcode, stcode, stcode];

  console.log("getEdoc", req.body);
  var con = globalValue.connectDB(req.body.scdbname);
  con.connect();
  con.query(sql, parm, function(err, rows, fields) {
    // console.log(rows);
    if (!err) {
      res.send(rows);
    }
  });
  con.end();
});

module.exports = router;
