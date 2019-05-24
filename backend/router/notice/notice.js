var express = require("express");
var router = express.Router();
var globalValue = require("../../globalValue");
var fs = require("fs");

router.post("/getRefUser", function(req, res) {
  var con = globalValue.connectDB("InfraPortal");
  con.connect();
  con.query(
    "SELECT * FROM SYSUSER WHERE SUSTAFFAPPUSEYN = 'Y' AND SULEVEL IN (1000, 2000, 300, 301, 302, 400, 401, 402) AND SUSTCODE <> ''",
    function(err, rows, fields) {
      if (!err) {
        //   console.log(rows);
        let result = { data: rows, code: "00", jsonType: "O" };
        res.send(JSON.stringify(result));
      } else {
        console.log("query error : " + err);
      }
    }
  );
  con.end();
  //   res.send("Hello /p1/r2");
});
router.post("/getSysCompany", function(req, res) {
  var con = globalValue.connectDB("InfraPortal");
  con.connect();
  con.query("SELECT * FROM SYSCOMPANY ", function(err, rows, fields) {
    if (!err) {
      let result = { data: rows, code: "00", jsonType: "O" };
      res.send(JSON.stringify(result));
    } else {
      console.log("query error : " + err);
    }
  });
  con.end();
});

//메인 화면
router.post("/getNoticeList", (req, res) => {
  // 내가 등록한글, 내가 볼수 있는 글 확인 가능하도록 UNION
  let sql = `SELECT A.EDDATETIME, A.EDMILLISECOND, A.EDSTCODE, A.EDTITLE, A.EDTEXT
             FROM EDOCUMENT A JOIN EJOINLINE B ON A.EDDATETIME = B.EJEDDATETIME
                                                 AND A.EDMILLISECOND = B.EJEDMILLISECOND
             WHERE A.EDSTCODE = ?
             GROUP BY A.EDDATETIME, A.EDMILLISECOND, A.EDSTCODE, A.EDTITLE, A.EDTEXT
             UNION
             SELECT A.EDDATETIME, A.EDMILLISECOND, A.EDSTCODE, A.EDTITLE, A.EDTEXT
             FROM EDOCUMENT A JOIN EJOINLINE B ON A.EDDATETIME = B.EJEDDATETIME
                                                 AND A.EDMILLISECOND = B.EJEDMILLISECOND
             WHERE B.EJSTCODE = ?
             GROUP BY A.EDDATETIME, A.EDMILLISECOND, A.EDSTCODE, A.EDTITLE, A.EDTEXT
             ORDER BY EDDATETIME DESC, EDMILLISECOND DESC
             `;
  let stcode = req.body.stcode;
  let parm = [stcode, stcode];
  var con = globalValue.connectDB("InfraPortal");
  con.connect();
  con.query(sql, parm, (err, rows, fields) => {
    if (err !== null) {
      res.status(403).send("SEVER ERROR");
      con.rollback();
    } else {
      // console.log(rows);
      res.send({ data: rows });
    }
  });
  con.end();
});
//세부 항목
router.post("/getNoticeDetail", (req, res) => {
  const reqPram = req.body;
  // console.log(req.body);
  // console.log(req.body.eddatetime);
  // console.log("reqPram", reqPram, reqPram.ejstcode);

  // 내가 등록한글, 내가 볼수 있는 글 확인 가능하도록 UNION
  let sql = `SELECT A.*, B.SUNAME FROM EJOINLINE A JOIN SYSUSER B ON A.EJSTCODE = B.SUSTCODE AND A.EJSTCODE <> "" WHERE EJEDDATETIME = ? AND EJEDMILLISECOND = ? AND EJEDSTCODE = ?`;

  let eddatetime = reqPram.eddatetime;
  let edmillisecond = reqPram.edmillisecond;
  let ejstcode = reqPram.ejstcode;

  let parm = [eddatetime, edmillisecond, ejstcode];

  var refs = [];
  var files = [];
  // console.log("sql", sql);
  // console.log("sql", parm);
  var con = globalValue.connectDB("InfraPortal");
  con.connect();
  // console.log(sql, parm);
  try {
    con.query(sql, parm, (err, rows, fields) => {
      if (err !== null) {
        res.status(403).send("SEVER ERROR");
        con.rollback();
      } else {
        refs = rows;
      }
    });
  } catch {}

  sql = `SELECT * FROM EFILE WHERE EFEDDATETIME = ? AND EFEDMILLISECOND = ? AND EFEDSTCODE = ?`;
  con.query(sql, parm, (err, rows, fields) => {
    // console.log("file", sql, parm);
    if (err !== null) {
      res.status(403).send("SEVER ERROR");
      con.rollback();
    } else {
      files = rows;
      // console.log({ refs: refs, files: files });
      res.send({ data: { refs: refs, files: files } });
    }
  });
  con.end();
});

//삽입

const multer = require("multer");
const path = require("path");
const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "upload/paylollNotice");
    },
    filename: function(req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
  })
});

router.post(
  "/insertNotice",
  upload.fields([
    { name: "imagelist", maxCount: 10 },
    { name: "filelist", maxCount: 10 }
  ]),
  (req, res) => {
    // console.log("ejoline", req.body.ejoinline[0]);
    // console.log(req.files);
    // let insertDate = new Date();
    var moment = require("moment");
    require("moment-timezone");

    moment.tz.setDefault("Asia/Seoul");

    let insertDate = moment().format("YYYY-MM-DD HH:mm:ss");
    let mils = moment()
      .milliseconds()
      .toString()
      .substr(0, 3);
    // console.log("insertDate", mils, insertDate);

    let sql = `INSERT INTO EDOCUMENT (EDDateTime, EDMilliSecond, EDSTCode, EDTitle, EDText, EDLastDateTime, EDLastDateTimeMilliSecond)
               Values (?,?,?,?,?,CURRENT_TIMESTAMP, round(UNIX_TIMESTAMP(CurTime(4)) * 1000) mod 1000)`;
    let title = req.body.title;
    let text = req.body.memo;
    let edstcode = req.body.edstcode;
    let parm = [insertDate, mils, edstcode, title, text];
    var con = globalValue.connectDB("InfraPortal");
    con.connect();
    con.query(sql, parm, (err, rows, fields) => {
      if (err !== null) {
        res.status(403).send("SEVER ERROR");
        con.rollback();
      }
    });
    let imgFiles = req.files["imagelist"];
    let files = req.files["filelist"];
    let refs = JSON.parse(req.body.ejoinline);

    if (imgFiles !== undefined) {
      for (var i = 0; i < imgFiles.length; i++) {
        sql = `INSERT INTO EFILE (EFEDDateTime, EFEDMilliSecond, EFEDSTCode, EFSeq, EFPath,EFGubun, EFLastDateTime, EFLastDateTimeMilliSecond)
             VALUES (?,?,?,?,?,?,CURRENT_TIMESTAMP, round(UNIX_TIMESTAMP(CurTime(4)) * 1000) mod 1000)`;
        let filePath = "/upload/paylollNotice/" + imgFiles[i].filename;
        parm = [insertDate, mils, edstcode, i, filePath, 0];
        con.query(sql, parm, (err, rows, fields) => {
          if (err !== null) {
            res.status(403).send("SEVER ERROR");
            con.rollback();
          }
        });
      }
    }

    if (files !== undefined) {
      for (var i = 0; i < files.length; i++) {
        sql = `INSERT INTO EFILE (EFEDDateTime, EFEDMilliSecond, EFEDSTCode, EFSeq, EFPath,EFGubun, EFLastDateTime, EFLastDateTimeMilliSecond)
             VALUES (?,?,?,?,?,?,CURRENT_TIMESTAMP, round(UNIX_TIMESTAMP(CurTime(4)) * 1000) mod 1000)`;
        let filePath = "/upload/paylollNotice/" + files[i].filename;
        parm = [insertDate, mils, edstcode, 100 + i, filePath, 1];
        con.query(sql, parm, (err, rows, fields) => {
          if (err !== null) {
            console.log(err);
            res.status(403).send("SEVER ERROR");
            con.rollback();
          } else {
          }
        });
      }
    }
    // console.log("refs", refs);
    for (var i = 0; i < refs.length; i++) {
      sql = `INSERT INTO EJOINLINE (EJEDDateTime, EJEDMilliSecond, EJEDSTCode, EJSeq, EJSTCode)
             VALUES (?,?,?,?,?)`;
      parm = [insertDate, mils, edstcode, i, refs[i].SUSTCODE];
      con.query(sql, parm, (err, rows, fields) => {
        console.log("refERR", err);
        if (err !== null) {
          res.status(403).send("SEVER ERROR");
          con.rollback();
        }
      });
    }

    res.status(200).send("OK");
    con.end();
    //
  }
);

router.post(
  "/updateNotice",
  upload.fields([
    { name: "imagelist", maxCount: 10 },
    { name: "filelist", maxCount: 10 }
  ]),
  (req, res) => {
    var noticeInit = JSON.parse(req.body.noticeInit);
    var title = req.body.title;
    var memo = req.body.memo;
    var updateEJoinLine = req.body.ejoinupdate;

    var moment = require("moment");
    require("moment-timezone");
    moment.tz.setDefault("Asia/Seoul");
    let insertDate = moment().format("YYYY-MM-DD HH:mm:ss");
    let mils = moment()
      .milliseconds()
      .toString()
      .substr(0, 3);

    console.log(req.body);
    console.log(noticeInit.EDDateTime);
    // EDOCUMENT UPDATE
    var sql = `UPDATE EDOCUMENT SET EDTITLE = ?, EDTEXT = ?, EDLASTDATETIME = ?, EDLASTDATETIMEMILLISECOND = ? WHERE EDDATETIME = ? AND EDMILLISECOND = ? AND EDSTCODE = ?`;
    var parm = [
      title,
      memo,
      insertDate,
      mils,
      noticeInit.EDDateTime,
      noticeInit.EDMilliSecond,
      noticeInit.EDSTCode
    ];
    var con = globalValue.connectDB("InfraPortal");
    con.connect();
    con.query(sql, parm, (err, rows, fields) => {
      // console.log("refERR", err);
      if (err !== null) {
        res.status(200).send("서버에러 입니다. 관리자에게 문의하세요");
        con.rollback();
      }
    });

    // EFILE INSERT
    let imgFiles = req.files["imagelist"];
    let files = req.files["filelist"];
    console.log("req.files", req);
    console.log("imgFile", imgFiles);
    if (imgFiles !== undefined) {
      for (var i = 0; i < imgFiles.length; i++) {
        sql = `INSERT INTO EFILE (EFEDDateTime, EFEDMilliSecond, EFEDSTCode, EFSeq, EFPath,EFGubun, EFLastDateTime, EFLastDateTimeMilliSecond)
             VALUES (?,?,?,?,?,?,CURRENT_TIMESTAMP, round(UNIX_TIMESTAMP(CurTime(4)) * 1000) mod 1000)`;
        let filePath = "/upload/paylollNotice/" + imgFiles[i].filename;
        parm = [
          noticeInit.EDDateTime,
          noticeInit.EDMilliSecond,
          noticeInit.EDSTCode,
          i,
          filePath,
          0
        ];
        con.query(sql, parm, (err, rows, fields) => {
          if (err !== null) {
            res.status(200).send("기존과 중복되는 파일이 존재합니다.");
            con.rollback();
          }
        });
      }
    }

    if (files !== undefined) {
      for (var i = 0; i < files.length; i++) {
        sql = `INSERT INTO EFILE (EFEDDateTime, EFEDMilliSecond, EFEDSTCode, EFSeq, EFPath,EFGubun, EFLastDateTime, EFLastDateTimeMilliSecond)
             VALUES (?,?,?,?,?,?,CURRENT_TIMESTAMP, round(UNIX_TIMESTAMP(CurTime(4)) * 1000) mod 1000)`;
        let filePath = "/upload/paylollNotice/" + files[i].filename;
        parm = [
          noticeInit.EDDateTime,
          noticeInit.EDMilliSecond,
          noticeInit.EDSTCode,
          100 + i,
          filePath,
          1
        ];
        con.query(sql, parm, (err, rows, fields) => {
          if (err !== null) {
            console.log(err);
            res.status(200).send("기존과 중복되는 파일이 존재합니다.");
            con.rollback();
          } else {
          }
        });
      }
    }
    // EJOINLINE INSERT
    console.log("updateEJoinLine", updateEJoinLine, updateEJoinLine.length);
    if (updateEJoinLine !== "undefined") {
      let refs = JSON.parse(updateEJoinLine);
      for (var i = 0; i < refs.length; i++) {
        sql = `INSERT INTO EJOINLINE (EJEDDateTime, EJEDMilliSecond, EJEDSTCode, EJSeq, EJSTCode)
               VALUES (?,?,?,?,?)`;
        parm = [
          noticeInit.EDDateTime,
          noticeInit.EDMilliSecond,
          noticeInit.EDSTCode,
          10000 + i,
          refs[i].SUSTCODE
        ];
        con.query(sql, parm, (err, rows, fields) => {
          if (err !== null) {
            console.log("!!!!", err);
            con.rollback();
            res.status(200).send("받는 사람이 중복되었습니다.");
            return;
          } else {
          }
        });
      }
    } else {
      res.status(200).send("OK");
    }

    con.end();
  }
);

router.post("/deleteFile", (req, res) => {
  fs.unlink(`.${req.body.EFPath}`, function(err) {
    console.log("err", err);
    if (err) res.send("err");
    var sql = `DELETE FROM EFILE WHERE EFEDDATETIME=? AND EFEDMILLISECOND=? AND EFEDSTCODE = ? AND EFPATH = ?`;
    var parm = [
      req.body.EFEDDateTime,
      req.body.EFEDMilliSecond,
      req.body.EFEDSTCode,
      req.body.EFPath
    ];
    var con = globalValue.connectDB("InfraPortal");
    con.connect();
    con.query(sql, parm, (err, rows, fields) => {
      console.log("refERR", err);
      if (err !== null) {
        res.status(403).send("SEVER ERROR");
        con.rollback();
      }
    });
    res.send("remove");
    con.end();
  });
  // fs.unlinkSync(`./upload/paylollNotice/1557821809845.jpg`);
  console.log(req.body);
});
module.exports = router;
