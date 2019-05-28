const express = require("express");
const next = require("next");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const exporessSession = require("express-session");
const dotenv = require("dotenv");
// 개발 모드
const dev = process.env.NODE_ENV !== "production";
const prod = process.env.NODE_ENV === "production";

// express next 연결
const app = next({
  dev
});
const handle = app.getRequestHandler();
dotenv.config();
app.prepare().then(() => {
  // 여기서 익스프레스 코드 (서버쪽 코드와 동일하다. 다른점은 front server 는 next를 품어야 하기 때문에 이런식의 코드를 적는다.)
  const server = express();
  server.use(morgan("dev"));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    exporessSession({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: false
      }
    })
  );

  // 동적인 라우터를 위함
  // 여기선 공지사항에 관련된 것 작성할 예정
  server.get("*", (req, res) => {
    return handle(req, res); // 요청이 들어왔을때 next를 거치게 하기 위함
  });

  server.get("/edocument/:edoc", (req, res) => {
    return app.render(req, res, "/edocument", { tag: req.params.edoc });
  });
  server.listen(3060, () => {
    console.log("next - exporess running");
  });
});
