const passport = require("passport");
var globalValue = require("../globalValue");
const local = require("./local");
module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user.SUID);
  });
  passport.deserializeUser((SUID, done) => {
    // 서버족에 [{id:3, cookie :"asdfgh"}] 서버에서 이러한 정보를 쿠키를 보냄
    console.log("passport");
    try {
      var con = globalValue.connectDB("InfraPortal");
      con.connect();
      var sql = `SELECT A.SUCODE, A.SUNAME, A.SUSCCODE, A.SUID, A.SULEVEL,A.SUSTCODE, B.SCDBNAME, B.SCHOSTIP FROM SYSUSER A 
      JOIN SYSCOMPANY B ON A.SUSCCODE = B.SCCODE WHERE SUID = ?`;
      var parm = [SUID];
      con.query(sql, parm, function(err, rows, fields) {
        if (!err) {
          const user = rows;
          return done(null, user); //req.user에 저장됨
        } else {
          return done(err);
        }
      });
      con.end();
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });
  local();
};
// 회원정보(로그인정보)를 저장하는 방법 서버쪽 메모리를 최소화 하는 기능
// 프론트에서 서버로 쿠키만 보낸다. (asdfgh)
// 서버는 cookie-parser, express-sestion 쿠키 검사 후 SUID 발견
// deseraluser 실행 시켜서
// 그리고 확인함. - 대부분 웹사이트가 채택하고잇는 쿠키와 세션으로 인한 로그인 구현 방법
// 요청 보낼때 마다 매번 실행 됨.
// 문제는 디비요청을 매번해야함. 다만 안전함
// 실무에서는 결과물을 캐싱한다.
