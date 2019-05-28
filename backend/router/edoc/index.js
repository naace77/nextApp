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

router.post("/getEdoc/detail", async (req, res) => {
  // console.log("/getEdoc/detail", req.body);
  var eddatetime = req.body.edoc.EDDateTime;
  var edmillisecond = req.body.edoc.EDMilliSecond;
  var edstcode = req.body.edoc.EDSTCode;
  var result = {};
  var sql =
    "SELECT A.*, B.*, E.STNameKor AS EDSTNAME, E.STBCode AS EDSTBCODE, C.STNameKor AS EJBEFJOINSTNAME, C.STBCode AS EJBEFJOINSTBCODE, C.STJCode AS EJBEFJOINSTJCODE, D.STNameKor AS EJAFTJOINSTNAME, D.STBCode AS EJAFTJOINSTBCODE, D.STJCode AS EJAFTJOINSTJCODE FROM EDOCUMENT A \r\n" +
    "LEFT JOIN EJOINLINE B " +
    "ON A.EDDATETIME = B.EJEDDATETIME " +
    "AND A.EDMILLISECOND = B.EJEDMILLISECOND " +
    "AND A.EDSTCODE = B.EJEDSTCODE " +
    "LEFT JOIN STAFF C ON B.EJBEFJOINSTCODE = C.STCODE " +
    "LEFT JOIN STAFF D ON B.EJAFTJOINSTCODE = D.STCODE " +
    "LEFT JOIN STAFF E ON B.EJEDSTCODE = E.STCODE " +
    "  WHERE A.EDDATETIME = ? AND A.EDMILLISECOND =? AND A.EDSTCODE = ?";

  var parm = [eddatetime, edmillisecond, edstcode];
  var con = globalValue.connectDB(req.body.SCDBName);
  con.connect();
  await con.query(sql, parm, function(err, rows, fields) {
    if (!err) {
      // console.log(1);
      result = { ...result, edoc: rows };
    } else {
      con.rollback();
      res.send(err);
    }
  });

  sql =
    "SELECT A.*, B.* FROM EDOCUMENT A JOIN EFILE B " +
    "  ON A.EDDATETIME = B.EFEDDATETIME AND A.EDMILLISECOND = B.EFEDMILLISECOND AND A.EDSTCODE = B.EFEDSTCODE" +
    "  WHERE A.EDDATETIME = ? AND A.EDMILLISECOND =? AND A.EDSTCODE = ?";

  await con.query(sql, parm, function(err, rows, fields) {
    if (!err) {
      // console.log(2);
      result = { ...result, efile: rows };
    } else {
      con.rollback();
      res.send(err);
    }
  });
  sql =
    "SELECT A.*, B.STSUFCMToken,B.STNameKor,B.STBCode, B.STJCode FROM EREFERENCE A JOIN STAFF B ON A.ERSTCODE = B.STCODE" +
    "  WHERE EREDDATETIME = ? AND EREDMILLISECOND =? AND EREDSTCODE = ?";
  await con.query(sql, parm, function(err, rows, fields) {
    if (!err) {
      result = { ...result, erefs: rows };
      res.send(result);
    } else {
      con.rollback();
      res.send(err);
    }
  });
  con.end();
});
module.exports = router;
