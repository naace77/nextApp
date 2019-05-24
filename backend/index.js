const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSessoion = require("express-session");
const dotenv = require("dotenv");
const globalValue = require("./globalValue");
const passport = require("passport");
const passportConfig = require("./passport");
// ROUTER
const Notice = require("./router/notice/notice");
const User = require("./router/user");
const EDoc = require("./router/edoc");

const app = express();
dotenv.config();
passportConfig();

// CORS 설정
app.use(cors({ origin: true, credentials: true })); // 클라이언트와 쿠키 주고받기위해서
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSessoion({
    resave: false, // 매번 새션 강제 저장
    saveUninitialized: false, //빈 값도 저장
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true, //자바스크립트로 쿠키 탈취 못함.
      secure: false // https를 쓸 때 true로 변경 해야함
    },
    name: "lplck"
  })
);

app.use(passport.initialize());
app.use(passport.session()); // express session 아래 넣어줘야 한다. 미들웨어간의 서로 의존관계가 있어서

app.use((req, res, next) => {
  const mysql = require("mysql");
  var connection = mysql.createConnection({
    host: "14.63.172.72",
    post: 3306,
    user: "opener",
    password: process.env.DB_PASSWORD,
    database: "infradbmanager"
  });
  connection.connect();
  connection.query("select * from connusers", function(err, rows, fields) {
    // connection.end();
    if (!err) {
      // console.log(rows);
      // console.log(fields);
      var result =
        "rows : " +
        JSON.stringify(rows) +
        "<br><br>" +
        "fields : " +
        JSON.stringify(fields);
      globalValue.USER_LIST = rows;
      next();
    } else {
      // USER_LIST = err;
      console.log("query error : " + err);
      next();
    }
    connection.end();
  });
});

app.use("/notice", Notice);
app.use("/user", User);
app.use("/edoc", EDoc);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
